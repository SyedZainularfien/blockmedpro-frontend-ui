"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StyledLgText from "../../common/components/styledLgText/StyledLgText";
import StyledH3Heading from "../../common/components/styledH3Heading/StyledH3Heading";

// const styles = {
//   backgroundImage: "url('/assets/Images/community-shadow.png')",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "contain",
// };

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const JoinCommunity = ({ padding, headingText }) => {
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

  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeEmailError, setSubscribeEmailError] = useState(false);
  const handleInputChange = (
    e,
    setState,
    setErrorState,
    validationFunc = null
  ) => {
    const value = e.target.value;
    setState(value);
    setErrorState(
      value.length < 6 || (validationFunc && !validationFunc(value))
    );
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const validEmail = (email) => {
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("This feature is coming soon!");
  };

  return (
    <div
      ref={container}
      className="relative w-full"
      // style={styles}
    >
      <div
        ref={headingsSection}
        className={`w-[85%] mx-auto flex flex-col gap-5 ${padding} 
        `}
        // pt-32 sm:pt-52 lg:pt-[20rem]
      >
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3 text-center ">
          {/* {!headingText && (
            <hr className="w-56 h-px border-0 rounded-md hr-gradient3 opacity-70" />
          )} */}

          <div>
            <StyledH3Heading fontColor={"text-river-blue uppercase"}>
              Join The Community.
            </StyledH3Heading>
          </div>
          <div className="md:w-1/2 lg:w-1/3">
            <StyledLgText
              fontColor={"text-vavid-gray"}
              children={
                "Receive updates and news from BlockMed Pro and stay up to date."
              }
            />
          </div>
          <div>
            <Image
              src="/assets/Images/mail-cards.png"
              alt="Mail Cards"
              width={200}
              height={150}
              className="hidden lg:flex absolute right-0 bottom-[35%] xl:bottom-[65%]"
            />
          </div>
        </div>
        {/* Input */}
        <div className="relative flex flex-col items-center justify-center gap-1">
          <form className="relative w-full md:w-[70%] lg:w-1/2 xl:w-2/5 flex flex-col sm:flex-row items-center gap-2">
            <input
              id="subscribeEmail"
              name="subscribeEmail"
              type="email"
              placeholder="Your email here"
              maxLength={35}
              required
              value={subscribeEmail}
              onChange={(e) =>
                handleInputChange(
                  e,
                  setSubscribeEmail,
                  setSubscribeEmailError,
                  validEmail
                )
              }
              className="relative text-river-blue sm:pr-[145px] bg-light-blue outline-0.5 w-full h-[60px] px-4 sm:px-6 rounded-lg
              focus:outline-0 border border-light-blue focus:border-white"
            />

            <div className="sm:absolute top-[7px] right-2 w-full sm:w-fit">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                disabled={!validEmail(subscribeEmail)}
                className={`button-gradient disabled:!cursor-not-allowed md:px-[47px] md:py-[21px] justify-center items-center gap-2.5 inline-flex text-white text-base !font-bold leading-[14.40px] py-[22px] !px-3 sm:!px-[20px] sm:!py-4 text-lg rounded-[7px] w-full sm:w-fit`}
              >
                Subscribe
              </button>
            </div>
          </form>
          {/* <div className="md:w-[70%] lg:w-1/2 xl:w-2/5 w-full pl-1 pt-1">
            {subscribeEmailError && (
              <p className="text-sm text-red-500">Invalid email address</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
