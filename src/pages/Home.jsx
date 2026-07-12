import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import AboutSection from "../components/AboutSection";
import AccommodationPreview from "../components/AccommodationPreview";
import GalleryPreview from "../components/GalleryPreview";
import ExplorePreview from "../components/ExplorePreview";
import BlogPreview from "../components/BlogPreview";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <div>
      <Hero />
      <QuickInfo />
      <AboutSection />
      <AccommodationPreview />
      <GalleryPreview />
      <ExplorePreview />
      <BlogPreview />
      <ContactCTA />
    </div>
  );
}

export default Home;
