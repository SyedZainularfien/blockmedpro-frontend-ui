"use client";

import React, { useLayoutEffect, useRef } from "react";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Files Import
import StyledMdText from "../../../common/components/styledMdText/StyledMdText";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const MotiveSection = () => {
  const bgBanner = useRef();
  const heading = useRef();
  const text = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //Animation No.1
      gsap.from(bgBanner.current, {
        duration: 1,
        opacity: 1,
        x: "-100%", // move from left to right
        ease: "power2.out",
        scrollTrigger: {
          trigger: bgBanner.current,
          toggleActions: "play none none reverse",
          start: "top bottom-=20%", // Adjust the start position as needed
          // markers: true,
        },
      });

      //Animation No.2
      gsap.from(heading.current, {
        duration: 1,
        delay: 1,
        opacity: 0,
        x: -50, // move from left to right
        ease: "power2.out",
        scrollTrigger: {
          trigger: bgBanner.current,
          toggleActions: "play none none reverse",
          start: "top bottom-=20%", // Adjust the start position as needed
          // markers: true,
        },
      });

      //Animation No.3
      const textLines = text.current?.querySelectorAll(".line span");
      gsap.from(textLines, {
        duration: 1,
        delay: 2,
        opacity: 0,
        y: -200,
        ease: "power2.out",
        skewY: 10,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: bgBanner.current,
          toggleActions: "play none none reverse",
          start: "top bottom-=20%", // Adjust the start position as needed
          // markers: true,
        },
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="relative w-full h-full md:min-h-[500px]">
      <div
        ref={bgBanner}
        className="motive-bg-gradient md:w-1/2 z-10 flex items-center justify-center px-5 min-h-[394px]
        md:absolute top-0 left-0 right-0 bottom-0"
      >
        {/* Heading */}
        <div className="flex flex-col gap-3 py-10 lg:w-3/4">
          <div className="flex flex-col gap-3" ref={heading}>
            <div className="flex items-center gap-3">
              <hr className="h-px bg-white border-0 rounded-md hr-gradient2 w-44 opacity-70" />
            </div>
            <div>
              <StyledH3Heading
                fontColor={"text-white "}
                children={"Our Vision"}
              />
            </div>
          </div>
          <div ref={text} className="flex flex-col gap-4">
            <StyledMdText fontColor={"text-white line"}>
              <span>
                BlockMed Pro envisions a healthcare system where patients have
                full control over their{" "}
              </span>
              <span>
                {" "}
                medical data, empowering them to make informed decisions and
                even monetise their
              </span>
              <span>
                {" "}
                records if they choose. Our user-focused platform ensures a
                seamless, intuitive{" "}
              </span>
              <span>
                {" "}
                records through the robust, transparent, and secure
                infrastructure provided{" "}
              </span>
              <span>
                {" "}
                experience for both patients and healthcare providers, making
                electronic health record{" "}
              </span>
              <span> management simple and accessible.</span>
            </StyledMdText>

            <StyledMdText fontColor={"text-white line"}>
              <span>
                With trust and integrity at our core, we utilise blockchain
                technology to provide the{" "}
              </span>
              <span>
                {" "}
                highest level of security and privacy, ensuring patient autonomy
                while maintaining strict{" "}
              </span>
              <span>
                {" "}
                compliance with regulatory standards. Our dedication to
                innovation drives us to{" "}
              </span>
              <span>
                {" "}
                continuously enhance healthcare delivery, bridging the gap
                between providers and{" "}
              </span>
              <span>
                {" "}
                patients through a secure, transparent, and efficient ecosystem.{" "}
              </span>
            </StyledMdText>
          </div>
        </div>
      </div>
      {/* Video */}
      <video
        className="w-full min-h-[394px] md:h-[499px] object-cover"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/assets/Videos/blockchain-video.mp4"
        onLoadedMetadata={(e) => {
          e.target.muted = true;
          e.target.play();
        }}
      >
        <source src="/assets/Videos/blockchain-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MotiveSection;
