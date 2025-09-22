import React, { useLayoutEffect, useRef } from "react";

// Files Import
import TeamCarousel from "../../../components/TeamCarousel/TeamCarousel";
// import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StyledH2Heading from "../../../common/components/styledH2Heading/StyledH2Heading";

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const TeamSection = ({ headingText }) => {

  const container = useRef()
  const headingsSection = useRef()
  const carousels = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      //Animation No.1
      gsap.from(headingsSection.current, {
        duration: 1,
        opacity: 0,
        x: -50, // move from left to right
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play none none reverse",
          start: "top bottom-=40%", // Adjust the start position as needed
          // markers: true,
        },
      });

      //Animation No.2
      gsap.from(carousels.current, {
        duration: 3,
        delay: 0,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play none none reverse",
          start: "top bottom-=40%", // Adjust the start position as needed
          // markers: true,
        },
      });

    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={container} className="w-full">
      <div className="w-[85%] mx-auto flex flex-col gap-12 md:gap-16 pt-16">
        {/* Heading */}
        <div ref={headingsSection} className="flex flex-col items-center justify-center gap-2 text-center pt-20">
          {!headingText && (
            <hr className="w-56 h-px mb-4 border-0 rounded-md hr-gradient3 opacity-70" />
          )}
          <div>
            <StyledH2Heading fontColor={"text-river-blue"}>
              Meet the <span className="text-sky-blue">Team</span>
            </StyledH2Heading>
          </div>
          {/* <div className="md:w-3/5">
            <StyledH5Heading
              fontColor={"text-river-blue text-xl !font-semibold"}
              children={"A group of experts who lead this idea"}
            />
          </div> */}
        </div>
        {/* Carousel */}
        <div ref={carousels}>
          <TeamCarousel />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
