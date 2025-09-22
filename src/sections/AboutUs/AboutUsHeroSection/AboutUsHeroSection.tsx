import React from "react";

// Files Import
import StyledH1Heading from "../../../common/components/styledH1Heading/StyledH1Heading";
import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";

const AboutUsHeroSection = () => {
  return (
    <div className="relative w-full h-full">
      <video
        className="w-full h-[70vh] md:h-full object-cover opacity-50"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/assets/Videos/form.mp4"
        onLoadedMetadata={(e) => {
          e.target.muted = true;
          e.target.play();
        }}
      >
        <source src="/assets/Videos/form.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="w-[95%] mx-auto absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <StyledH1Heading fontColor="text-white" children="About Us" />
        </div>
        <div className="mt-4 text-center">
          <StyledH5Heading
            fontColor="text-white"
            children="Learn everything about this platform and our mission"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
