"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Files Import
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
// import StyledXlText from "../../../common/components/styledXlText/StyledXlText";
import AccordionBox from "../../../components/AccordionBox/AccordionBox";
import { content } from "../../../data";
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";

const styles = {
  animation: "spin 6s infinite linear",
};

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
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
          start: "top-=25% bottom-=40%", // Adjust the start position as needed
          // markers: true,
        },
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <div ref={container} className="max-w-site">
      <div className="w-[85%] mx-auto flex flex-col gap-5 pt-10 pb-14 lg:py-10">
        {/* Heading */}
        <div ref={headingsSection} className="flex flex-col gap-3">
          {/* <hr className="h-px border-0 rounded-md w-44 hr-gradient opacity-70" /> */}
          <div className="uppercase">
            <StyledH3Heading fontColor={"text-river-blue"}>
              What Is <span className="text-sky-blue">BlockMed Pro</span>?
            </StyledH3Heading>
          </div>
          <div className="md:w-11/12 lg:w-2/3">
            <StyledLgText
              fontColor={"text-river-blue"}
              children={
                "BlockMed Pro operates on a software as a subscription-based model (SAAS). It is set to transform the healthcare industry by leveraging AI & blockchain technology to offer a secure, transparent, and patient-centred electronic health records platform that allows patients to monetise their health data."
              }
            />
          </div>
        </div>
        {/* Details */}
        <div className="relative flex flex-col-reverse items-center justify-between lg:items-start lg:flex-row">
          {/* AccordionBox */}
          <div className="w-full md:w-[90%] lg:w-1/2 mt-8">
            <AccordionBox custom={true} accordionData={content.accordionData} />
          </div>
          <div className="relative flex items-center justify-center md:w-1/2 lg:w-2/5">
            {loading && (
              <div className="flex justify-center items-center bg-white w-[390px] h-[450px] xl:w-[440px] xl:h-[500px]">
                <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full bg-white">
                  <div className="animate-plus rounded-md flex justify-center items-center w-[390px] h-[450px] xl:w-[440px] xl:h-[500px] object-cover object-center">
                    <div className="size-[90%] rounded-[2rem] bg-light-gray animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}
            <div
              className={`${
                loading ? "opacity-0" : "opacity-100"
              } flex justify-center items-center border-2 border-purple-blue rounded-full h-[75.5%] w-[85%] absolute top-[13.5%] left-[8.5%]`}
              style={styles}
            >
              <div className="button-gradient rounded-full h-[22px] w-[22px] absolute top-[-11px]"></div>
            </div>
            <div>
              <Image
                src="/assets/Images/block-med.png"
                alt="BlockMed"
                height={500}
                width={500}
                className={`${loading ? "opacity-0" : "opacity-100"}`}
                onLoad={() => setLoading(false)}
              />
            </div>
            {/* Shining Stars */}
            <div className={`${loading ? "opacity-0" : "opacity-100"}`}>
              <Image
                src="/assets/Images/plus.png"
                alt="Plus Icon"
                width={32}
                height={32}
                className="absolute top-2 right-1 w-8 sm:top-4 sm:right-20 md:top-5 md:right-2 lg:w-fit animate-ping !delay-1000"
              />

              <Image
                src="/assets/Images/small-plus.png"
                alt="Plus Icon"
                width={20}
                height={20}
                className="absolute w-5 bottom-5 left-12 sm:bottom-7 sm:left-20 md:bottom-5 md:left-12 lg:w-fit animate-ping"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
