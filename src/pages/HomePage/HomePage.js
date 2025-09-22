import React from "react";

/* Sections Import */
import Roadmap from "../../sections/Home/Roadmap/Roadmap";
// import FaqSection from "../../sections/Home/FaqSection/FaqSection";
// import TeamSection from "../../sections/Home/TeamSection/TeamSection";
import HeroSection from "../../sections/Home/HeroSection/HeroSection";
import MotiveSection from "../../sections/Home/MotiveSection/MotiveSection";
import AboutUsSection from "../../sections/Home/AboutUsSection/AboutUsSection";
import PolygonSection from "../../sections/Home/PolygonSection/PolygonSection";
import CommunitySection from "../../sections/Home/CommunitySection/CommunitySection";
import LaunchingSoon from "../../sections/Home/LaunchingSoon/LaunchingSoon";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <HeroSection />
        <LaunchingSoon />
      </div>
      <AboutUsSection />
      <Roadmap />
      <MotiveSection />
      {/* <FaqSection /> */}
      {/* <TeamSection headingText={false} /> */}
      <PolygonSection />
      <CommunitySection />
    </div>
  );
};

export default Homepage;
