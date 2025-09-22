"use client";

import React, { useLayoutEffect, useRef } from "react";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Files Import
import Button from "../../../components/Button/Button";
import StyledH2Heading from "../../../common/components/styledH2Heading/StyledH2Heading";
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const PolygonSection = () => {
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
      <div className="w-[85%] mx-auto py-8 lg:py-20 flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Heading */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row lg:w-1/2">
          <div className="-mt-2 min-w-10 hidden md:block">
            <img src="/assets/Images/faq-start.png" alt="Shining Start" />
          </div>
          <div
            ref={headingsSection}
            className="flex flex-col lg:items-start items-center gap-3 xl:w-[51%]"
          >
            <div>
              <StyledH2Heading fontColor={"text-river-blue"}>
                Secured By <span className="text-sky-blue">Polygon</span>
              </StyledH2Heading>
            </div>
            <div>
              <StyledLgText
                fontColor={"text-vavid-gray text-center lg:text-left"}
                children={
                  "BlockMed Pro is a decentralised platform powered by Polygon and Web3"
                }
              />
            </div>
            <div className="mt-4">
              <Button href="/contact-us" content={"Contact Us"} />
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            className="animate-pulse"
            src="/assets/Images/polygon.png"
            alt="Animated Polygon"
          />
        </div>
      </div>
    </div>
  );
};

export default PolygonSection;
