import React from "react";

/* Files Import */
import TeamSection from "../../sections/Home/TeamSection/TeamSection";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import AboutusCompanyValues from "../../sections/AboutUs/AboutusCompanyValues/AboutusCompanyValues";
// import PolygonSection from "../../sections/Home/PolygonSection/PolygonSection";
// import AboutUsHeroSection from "../../sections/AboutUs/AboutUsHeroSection/AboutUsHeroSection";

const AboutUsPage = () => {
  return (
    <div className="max-w-site">
      {/* <AboutUsHeroSection /> */}
      <TeamSection headingText={true} />
      {/* <PolygonSection /> */}
      <AboutusCompanyValues />
      <JoinCommunity headingText={true} padding={"pt-5 pb-14"} />
    </div>
  );
};

export default AboutUsPage;
