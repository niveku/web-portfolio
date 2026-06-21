/**
 * JSON-LD structured-data builders for SEO + GEO (AI search citability).
 * All data traces to src/data/career.ts. Entity @ids are stable so the graph
 * links together across pages (Person ← WebSite ← ProfilePage/Article).
 */
import { career } from '../data/career';

/** Normalize an Astro.site URL to a string without trailing slash. */
function origin(site: URL | undefined): string {
  const s = (site ?? new URL('https://niveku.vercel.app')).toString();
  return s.replace(/\/$/, '');
}

const SITE_NAME = 'Niveku — Kevin Henao';

export function personSchema(site: URL | undefined) {
  const o = origin(site);
  const { identity, education, certifications, keywords } = career;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${o}/#person`,
    name: identity.fullName,
    alternateName: identity.displayName,
    jobTitle: identity.positioning.lead,
    description: identity.tagline,
    url: `${o}/`,
    image: `${o}/og.png`,
    email: `mailto:${identity.email}`,
    sameAs: identity.socials.map((s) => s.url),
    knowsLanguage: identity.languages.map((l) => l.language),
    knowsAbout: keywords.entities,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressCountry: 'CO',
    },
    worksFor: { '@type': 'Organization', name: 'Imaged Reality' },
    alumniOf: education.map((e) => ({
      '@type': 'CollegeOrUniversity',
      name: e.institution,
    })),
    hasCredential: certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
    })),
  };
}

export function websiteSchema(site: URL | undefined) {
  const o = origin(site);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${o}/#website`,
    url: `${o}/`,
    name: SITE_NAME,
    inLanguage: 'en',
    publisher: { '@id': `${o}/#person` },
  };
}

/** ProfilePage for home/about, with speakable hints for voice/AI assistants. */
export function profilePageSchema(
  site: URL | undefined,
  pageUrl: URL,
  speakableSelectors: string[] = ['h1', '.hero-para', '.about-para'],
) {
  const o = origin(site);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${pageUrl.href}#profilepage`,
    url: pageUrl.href,
    name: `${career.identity.displayName} — ${career.identity.positioning.lead}`,
    isPartOf: { '@id': `${o}/#website` },
    about: { '@id': `${o}/#person` },
    mainEntity: { '@id': `${o}/#person` },
    inLanguage: 'en',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: URL | string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.toString(),
    })),
  };
}

export function articleSchema(
  site: URL | undefined,
  pageUrl: URL,
  post: { title: string; description: string; date: Date | string; tags?: string[] },
) {
  const o = origin(site);
  const published =
    post.date instanceof Date ? post.date.toISOString() : new Date(post.date).toISOString();
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'BlogPosting'],
    headline: post.title,
    description: post.description,
    datePublished: published,
    dateModified: published,
    inLanguage: 'en',
    keywords: (post.tags ?? []).join(', '),
    author: { '@id': `${o}/#person` },
    publisher: { '@id': `${o}/#person` },
    mainEntityOfPage: pageUrl.href,
    url: pageUrl.href,
  };
}

export function projectSchema(
  site: URL | undefined,
  pageUrl: URL,
  project: {
    title: string;
    description: string;
    date: Date | string;
    stack?: string[];
    repo?: string;
  },
) {
  const o = origin(site);
  const created =
    project.date instanceof Date
      ? project.date.toISOString()
      : new Date(project.date).toISOString();
  return {
    '@context': 'https://schema.org',
    '@type': project.repo ? 'SoftwareSourceCode' : 'CreativeWork',
    name: project.title,
    description: project.description,
    dateCreated: created,
    inLanguage: 'en',
    keywords: (project.stack ?? []).join(', '),
    author: { '@id': `${o}/#person` },
    url: pageUrl.href,
    ...(project.repo ? { codeRepository: project.repo, programmingLanguage: 'Python' } : {}),
  };
}
