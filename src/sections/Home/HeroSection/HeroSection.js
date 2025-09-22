import React, { useLayoutEffect, useRef } from "react";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Files Import */
import Button from "../../../components/Button/Button";
import StyledXlText from "../../../common/components/styledXlText/StyledXlText";
import StyledH1Heading from "../../../common/components/styledH1Heading/StyledH1Heading";
import { useLocation } from "react-router-dom";
// import StyledH6Heading from "../../../common/components/styledH6Heading/StyledH6Heading";

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // const leftContentTag = useRef();
  const leftContentHeading = useRef();
  const leftContentText = useRef();
  const leftContentSocials = useRef();

  const location = useLocation();

  const fullUrl = window.location.origin + location.pathname + location.search;
  console.log(fullUrl);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //Animation No.1
      // gsap.from(leftContentTag.current, {
      //   duration: 2,
      //   opacity: 0,
      //   ease: "ease-in-out",
      // });

      //Animation No.2
      gsap.from(leftContentHeading.current, {
        duration: 2,
        delay: 0.25,
        opacity: 0,
        ease: "ease-in-out",
      });

      //Animation No.3
      gsap.from(leftContentText.current, {
        delay: 0.5,
        duration: 2,
        opacity: 0,
        ease: "ease-in-out",
      });

      //Animation No.4
      gsap.from(leftContentSocials.current, {
        delay: 0.75,
        duration: 2,
        opacity: 0,
        ease: "ease-in-out",
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const offset = viewportHeight * 0.1; // 20% of viewport height
      const targetPosition = sectionTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative z-20 w-full h-[90vh] overflow-hidden">
      {/* Video background for this section only */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/Videos/home1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content container */}
      <div className="w-full h-full max-w-site">
        <div className="w-[85%] mx-auto h-full">
          {/* Heading */}
          <div className="flex flex-col items-start justify-center h-full gap-5 md:w-4/5 lg:w-4/6 xl:w-4/6">
            {/* <div ref={leftContentTag} className="flex px-4 py-2 text-white rounded-lg bg-river-blue bg-opacity-60 glassEffect">
              <StyledH6Heading children={"Web3-Powered Platform"} />
            </div> */}

            <div className="flex flex-col gap-2">
              <div ref={leftContentHeading}>
                <StyledH1Heading fontColor="text-river-blue leading-[110%]">
                  Secure, {/* <br /> */}
                  <span className="text-sky-blue flex-nowrap">Empower</span>,
                  Thrive
                </StyledH1Heading>
              </div>
              <div className="md:w-4/6" ref={leftContentText}>
                <StyledXlText
                  fontColor={"text-vavid-gray"}
                  children={
                    "With BlockMed Pro, experience unparalleled safety, unlock your health potential, and flourish in a connected healthcare ecosystem!"
                  }
                />
              </div>
            </div>
            <div
              ref={leftContentSocials}
              onClick={(e) => scrollToSection(e, "#launching-soon")}
            >
              <Button href={fullUrl} content={"Join Waiting List"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;