"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Files Import
import { content } from "../../data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import StyledH5Heading from "../../common/components/styledH5Heading/StyledH5Heading";

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};

const isMobile = window.innerWidth <= 1280;

const styles = {
  backgroundImage: 'url("/assets/Images/plus-symbol.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: isMobile ? "260px" : "282px",
  width: isMobile ? "260px" : "282px",
};

const renderPrevButton = ({ isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className={`flex absolute items-center justify-center bottom-[5%] left-[20%] sm:left-[30%] w-[30px] h-[30px] rounded-full ${
        isDisabled ? "bg-[#808080]" : "bg-river-blue"
      }`}
    >
      {/* <img
        src="/assets/Images/next-icon.png"
        alt="Next Button"
        width={8}
        height={8}
        className="rotate-180"
      /> */}
      <svg
        className="w-2 text-white rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    </button>
  );
};

const renderNextButton = ({ isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className={`flex absolute items-center justify-center bottom-[5%] right-[20%] sm:right-[30%] w-[30px] h-[30px] rounded-full ${
        isDisabled ? "bg-[#808080]" : "bg-river-blue"
      }`}
    >
      {/* <img
        src="/assets/Images/next-icon.png"
        alt="Next Button"
        width={8}
        height={8}
      /> */}
      <svg
        className="w-2 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    </button>
  );
};

const TeamCarouselCard = ({ index, item }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      key={index}
      className={`w-full mx-auto space-y-5 text-white item xl:w-11/12 relative h-[460px] lg:h-[550px] xl:h-[450px] flex items-end`}
      data-value="1"
    >
      {loading && (
        <div className="h-full w-full absolute inset-0 px-4 xl:px-0 bg-white rounded-[10px] overflow-hidden z-50">
          <div className="h-full w-full shadow-sm rounded-[10px] z-50">
            <div className="flex items-end h-full overflow-hidden">
              <div className="flex items-center justify-center mx-auto absolute w-[80%] top-[7%] left-0 right-0 z-[-1]">
                <div className="rounded-full w-[240px] h-[240px] xl:w-[260px] xl:h-[260px] bg-light-gray object-cover object-center"></div>
              </div>
              <div className="h-[100px] w-full animate-pulse bg-light-gray flex justify-between items-center gap-5 px-4  rounded-lg">
                <div className="space-y-2 w-full">
                  <p className="animate-pulse bg-gray w-full h-6 rounded-md"></p>
                  <p className="animate-pulse bg-gray w-full h-2 rounded-md"></p>
                </div>
                <div className="space-y-2">
                  <p className="animate-pulse bg-gray size-9 rounded-md"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="flex items-center justify-center mx-auto absolute w-[80%] top-[2%] left-0 right-0 z-[-1]"
        style={styles}
      >
        <Image
          src={item.imgURL}
          alt="BlockMed Plus Sign"
          width={255}
          height={255}
          className={`rounded-full w-[240px] h-[240px] xl:w-[255px] xl:h-[255px] object-cover ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="bg-purple-blue rounded-[10px] px-7 sm:w-[70%] md:w-[95%] xl:w-full mx-auto cursor-pointer transition-all duration-300 h-[100px] hover:h-full group">
        <div className="h-[100px] group-hover:h-[90px] flex justify-between items-center">
          <div>
            <StyledH5Heading fontColor={"text-white"} children={item.name} />
            <StyledMdText children={item.profession} />
          </div>
          <div>
            <Link
              href={item.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/Images/linkedin.svg"
                alt="linkedin"
                width={20}
                height={20}
                className="transition duration-300 transform hover:scale-105"
              />
            </Link>
          </div>
        </div>
        <div>
          <StyledMdText fontColor="!leading-[152%]" children={item.details} />
        </div>
      </div>
    </div>
  );
};

const TeamCarousel = () => {
  return (
    <div>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        items={content.Team.map((item, index) => (
          <TeamCarouselCard index={index} item={item} />
        ))}
        controlsStrategy="alternate"
      />
      <style>
        {`
    @media (max-width: 1024px) {
      .alice-carousel__prev-btn,
      .alice-carousel__next-btn,
      .alice-carousel__dots {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: fit-content;
        margin: 40px auto;
        margin-bottom: 0;
        // display: none;
  
      }
      .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
        width: 30px;
        height: 10px;
        border-radius: 43px;
        margin: 0px;
        background: var(--sky-blue);
        transition: all 0.2s ease;
        
    }
      .alice-carousel__dots-item:not(.__custom):not(:last-child) {
        margin-right: 10px;
  }
         .alice-carousel{
      height: 550px !important;
     }
    }

    @media (max-width: 640px){
    .alice-carousel{
      height: 550px !important;
     }
    }
  
    @media (min-width: 1024px) {
      .alice-carousel__prev-btn,
      .alice-carousel__next-btn,
      .alice-carousel__dots {
        // display: block !important;
        // padding-top:2.75rem;
        display: none;
      }
    }
  `}
      </style>
    </div>
  );
};

export default TeamCarousel;
