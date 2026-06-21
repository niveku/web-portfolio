/* Procedural topographic contours via value-noise heightfield + marching squares.
   Produces dense, organic, closed contour curves (real iso-lines) instead of hand-drawn paths. */

// Seeded PRNG so the map is consistent between refreshes
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Value-noise heightfield on a grid, smooth-interpolated, with multiple octaves
function buildHeightfield(W, H, seed = 7) {
  const rand = mulberry32(seed);
  const octaves = [
    { scale: 3, amp: 1.0 },
    { scale: 7, amp: 0.55 },
    { scale: 14, amp: 0.28 },
    { scale: 28, amp: 0.14 },
  ];
  // precompute random lattice for each octave
  const lattices = octaves.map(({ scale }) => {
    const s1 = scale + 1;
    const arr = new Float32Array(s1 * s1);
    for (let i = 0; i < arr.length; i++) arr[i] = rand();
    return { scale, s1, arr };
  });
  const smooth = (t) => t * t * (3 - 2 * t);
  const field = new Float32Array(W * H);
  let min = Infinity, max = -Infinity;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let v = 0;
      for (let o = 0; o < octaves.length; o++) {
        const { scale, s1, arr } = lattices[o];
        const { amp } = octaves[o];
        const fx = (x / (W - 1)) * scale;
        const fy = (y / (H - 1)) * scale;
        const x0 = Math.floor(fx), y0 = Math.floor(fy);
        const tx = smooth(fx - x0), ty = smooth(fy - y0);
        const x1 = Math.min(s1 - 1, x0 + 1), y1 = Math.min(s1 - 1, y0 + 1);
        const a = arr[y0 * s1 + x0];
        const b = arr[y0 * s1 + x1];
        const c = arr[y1 * s1 + x0];
        const d = arr[y1 * s1 + x1];
        const ab = a + (b - a) * tx;
        const cd = c + (d - c) * tx;
        v += (ab + (cd - ab) * ty) * amp;
      }
      field[y * W + x] = v;
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }
  // normalize 0..1
  const range = max - min || 1;
  for (let i = 0; i < field.length; i++) field[i] = (field[i] - min) / range;
  return field;
}

// Marching-squares contour extraction for one iso level, producing SVG path "d" strings
function contourPaths(field, W, H, iso) {
  const segs = [];
  // For each cell, get the four corner values, determine case, emit segments
  for (let y = 0; y < H - 1; y++) {
    for (let x = 0; x < W - 1; x++) {
      const tl = field[y * W + x];
      const tr = field[y * W + x + 1];
      const br = field[(y + 1) * W + x + 1];
      const bl = field[(y + 1) * W + x];
      const code =
        (tl > iso ? 1 : 0) |
        (tr > iso ? 2 : 0) |
        (br > iso ? 4 : 0) |
        (bl > iso ? 8 : 0);
      if (code === 0 || code === 15) continue;
      // interpolate where the iso line crosses each edge
      const t = (a, b) => (iso - a) / (b - a);
      const E_TOP = [x + t(tl, tr), y];
      const E_RIGHT = [x + 1, y + t(tr, br)];
      const E_BOTTOM = [x + t(bl, br), y + 1];
      const E_LEFT = [x, y + t(tl, bl)];
      const push = (a, b) => segs.push(a[0], a[1], b[0], b[1]);
      switch (code) {
        case 1: case 14: push(E_LEFT, E_TOP); break;
        case 2: case 13: push(E_TOP, E_RIGHT); break;
        case 3: case 12: push(E_LEFT, E_RIGHT); break;
        case 4: case 11: push(E_RIGHT, E_BOTTOM); break;
        case 6: case 9:  push(E_TOP, E_BOTTOM); break;
        case 7: case 8:  push(E_LEFT, E_BOTTOM); break;
        case 5: push(E_LEFT, E_TOP); push(E_RIGHT, E_BOTTOM); break;
        case 10: push(E_TOP, E_RIGHT); push(E_LEFT, E_BOTTOM); break;
      }
    }
  }
  return segs;
}

// Build an SVG `<path>` d string from raw segment list (just as M/L pairs — good enough for rendering)
function segsToPathD(segs, scaleX, scaleY) {
  let d = "";
  for (let i = 0; i < segs.length; i += 4) {
    d += `M${(segs[i] * scaleX).toFixed(2)} ${(segs[i+1] * scaleY).toFixed(2)} L${(segs[i+2] * scaleX).toFixed(2)} ${(segs[i+3] * scaleY).toFixed(2)}`;
  }
  return d;
}

// Produce one path d per iso level
export function buildContours({ width = 200, height = 150, levels = 14, seed = 7 } = {}) {
  const field = buildHeightfield(width, height, seed);
  const out = [];
  for (let i = 1; i <= levels; i++) {
    const iso = i / (levels + 1);
    const segs = contourPaths(field, width, height, iso);
    const d = segsToPathD(segs, 100 / (width - 1), 100 / (height - 1));
    out.push({ iso, d });
  }
  return out;
}
