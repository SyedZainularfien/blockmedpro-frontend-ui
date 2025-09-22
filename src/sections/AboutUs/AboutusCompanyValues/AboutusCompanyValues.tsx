"use client";

import React, { useLayoutEffect, useRef } from "react";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Files Import
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";
import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
import { content } from "../../../data";

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const AboutusCompanyValues = () => {
  const container = useRef();
  const headingsSection = useRef();

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
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={container} className="max-w-site">
      <div className="w-[85%] mx-auto py-8 lg:py-20 pt-24 flex flex-col gap-4 items-center justify-between">
        <div ref={headingsSection} className="w-full text-center">
          <StyledH3Heading fontColor={"text-river-blue uppercase"}>
            Company <span className="text-sky-blue">Values</span>
          </StyledH3Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-10">
          {content?.valuesData?.map((v) => {
            return (
              <div className="values_card min-h-72 border border-light-gray rounded-2xl px-4 py-6 text-center flex flex-col gap-2.5 text-river-blue cursor-pointer">
                <StyledH5Heading>{v?.heading}</StyledH5Heading>
                <StyledLgText>{v?.paragraph}</StyledLgText>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutusCompanyValues;
