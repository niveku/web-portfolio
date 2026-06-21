/* Niveku — app entry & layout (React island root) */

import { Nav, FeaturedProjects, AboutStrip, BlogStrip, Contact, Footer } from './Sections.jsx';
import HeroGrid from './HeroGrid.jsx';
import StrataSection from './Strata.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <HeroGrid />
        <StrataSection />
        <FeaturedProjects />
        <AboutStrip />
        <BlogStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
