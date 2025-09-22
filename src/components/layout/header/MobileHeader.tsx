"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Files Import
import { content } from "../../../data";
import Copyrights from "../../Copyrights/Copyrights";
import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";

const MobileHeader: React.FC = () => {
  const pathname = usePathname();
  const [navShow, setNavShow] = useState(false);

  const toggleNav = () => {
    setNavShow(!navShow);
    document.body.style.overflowY = navShow ? "auto" : "hidden";
  };

  const closeNav = () => {
    setNavShow(false);
    document.body.style.overflowY = "auto";
  };
  return (
    <div className="block lg:hidden !z-50">
      {/* Hamburger Button */}
      <button
        type="button"
        className="flex items-center justify-center absolute bottom-[23%] right-[12%] sm:right-[10%] md:right-[10%]"
        aria-label="Toggle Menu"
        onClick={toggleNav}
      >
        {/* <img
          src="/assets/Images/hamburger.svg"
          alt="Menu"
          className="w-6 h-6"
        /> */}
        <svg
          className="text-vavid-gray size-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div
        className={`!z-50 bg-white text-river-blue w-screen h-full fixed top-0 left-0 flex py-4 ${
          navShow ? "translate-x-[0%]" : "-translate-x-[110%]"
        }`}
        style={{ transition: "all 0.5s  cubic-bezier(.68,-0.55,.27,1.55)" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-between w-11/12 mx-auto">
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="text-river-blue">
                <Image
                  className="w-[80%]"
                  src="/assets/Images/logo.svg"
                  alt="Logo"
                  width={120}
                  height={40}
                />
              </Link>

              <button
                type="button"
                className="z-10 w-fit "
                aria-label="Toggle Menu"
                onClick={toggleNav}
              >
                {/* <img
                  src="/assets/Images/cross.svg"
                  alt="Cross Icon"
                  className="w-30 h-30"
                /> */}
                <svg
                  className="text-river-blue size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              </button>
            </div>
            <hr className="h-[2px] bg-light-gray w-full" />
          </div>

          {/* NavLinks */}
          <div>
            <div className="flex flex-col items-center justify-center gap-3 text-river-blue md:gap-6 w-fit">
              {content.Footer.map((item, index) => (
                <Link
                  href={item.link}
                  className={`${
                    pathname === item.link ? "text-sky-blue" : "text-river-blue"
                  }  hover:scale-x-110 transform transition`}
                  key={index}
                  onClick={closeNav}
                >
                  <StyledH5Heading
                    fontColor={"!!font-bold hover:text-sky-blue"}
                  >
                    {item.title}
                  </StyledH5Heading>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div>
            <div className="flex flex-col items-center justify-center gap-2 text-river-blue">
              {/* Social Links */}
              <div className="flex -space-x-1 text-river-blue lg:flex">
                {content.socialLinks.map((item, index) => (
                  <Link
                    className="hover:border-blue border border-transparent rounded-full scale-75 hover:scale-[0.8] transform transition duration-300"
                    key={index}
                    href={item.link}
                    target="_blank"
                  >
                    <Image
                      className="size-[40px]"
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={40}
                      height={40}
                    />
                  </Link>
                ))}
              </div>
              <div>
                <Copyrights />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
