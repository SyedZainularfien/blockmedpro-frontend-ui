import React, { useLayoutEffect, useRef } from "react";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Files Import
import { content } from "../../../data";
import AccordionBox from "../../../components/AccordionBox/AccordionBox";
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const FaqSection = () => {
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

      //Animation No.2
      const accordionBoxes = document.querySelectorAll(".accordion-box");
      accordionBoxes.forEach((box, index) => {
        gsap.from(box, {
          duration: 1,
          opacity: 0,
          x: -50,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            toggleActions: "play none none reverse",
            start: "top bottom-=20%",
            // markers: true
          },
          stagger: {
            amount: 0.25,
          },
          delay: index * 0.25,
        });
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={container} className="w-full relative">
      <div className="w-fit absolute -top-10 -left-10 md:top-0 md:left-0">
        <img src="/assets/Images/fap-shadow.svg" alt="" />
      </div>
      <div className="w-[85%] mx-auto flex flex-col items-center lg:items-start gap-10 lg:flex-row lg:pt-16">
        {/* Heading */}
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:w-1/2 pt-20 lg:py-[12rem] xl:py-[10rem]  ">
          <div className="-mt-[25px] min-w-10">
            <img src="/assets/Images/faq-start.png" alt="Shining Start" />
          </div>
          <div ref={headingsSection} className="flex flex-col gap-3 lg:w-2/3">
            <div>
              <hr className="h-px mb-3 border-0 rounded-md w-44 hr-gradient opacity-70" />
            </div>
            <div>
              <StyledH3Heading fontColor={"text-white"}>
                <span className="text-sky-blue">Frequently</span> Asked
                Questions
              </StyledH3Heading>
            </div>
            <div>
              <StyledLgText
                fontColor={"text-light-gray lg:w-4/5"}
                children={
                  "Learn the most important questions and their answers."
                }
              />
            </div>
          </div>
        </div>
        {/* Accordion Box */}
        <div className="md:w-[90%] lg:w-1/2 lg:py-16">
          <AccordionBox
            custom={true}
            accordionData={content.faqAccordionData}
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
