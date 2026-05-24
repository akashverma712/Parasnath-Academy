import Navbar       from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import Ticker       from "./Ticker";
import NewsEvents   from "./NewsEvents";
import CampusTabs   from "./CampusTabs";
import Visionaries  from "./Visionaries";
import LifeTiles    from "./LifeTiles";
import Placement    from "./Placement";
import Affiliation  from "./Affiliation";
import VideoSection from "./VideoSection";
// import Reportcallback from "./Reportcallback";
import Footer       from "./Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", fontFamily: "sans-serif" }}>
      {/* 1. Sticky top bar + Navbar */}
      <Navbar />

      {/* 2. Full-width hero image carousel */}
      <HeroCarousel />

      {/* 3. JOIN QUICK ENROLL ticker */}
      <Ticker />

      {/* 4. News & Events — 4-col image grid */}
      <NewsEvents />

      {/* 5. Campus / Infrastructure / Careers — vertical tabs, blue bg */}
      <CampusTabs />

      {/* 6. Our Visionaries — 3 photo cards */}
      <Visionaries />

      {/* 7. Life At ALLEN — black bg, 2×4 icon grid */}
      <LifeTiles />

      {/* 8. Placement — horizontal carousel */}
      <Placement />

      {/* 9. Our Affiliation — blue bg, logo cards */}
      <Affiliation />

      {/* 10. At ALLEN — video / image cards */}
      <VideoSection />
      {/* <Reportcallback /> */}

      {/* 11. Footer — 5-column */}
      <Footer />
    </div>
  );
}