"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Files Import
import { content } from "../../../data";
import Copyrights from "../../Copyrights/Copyrights";
import StyledH6Heading from "../../../common/components/styledH6Heading/StyledH6Heading";
import TermsAndConditions from "../../TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../../PrivacyPolicy/PrivacyPolicy";

const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={`max-w-site w-full flex flex-col items-center justify-center ${
        pathname === "/" || pathname === "/about-us"
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="w-[85%]">
        <div className="w-full px-5 py-10 md:h-[60px] bg-medium-gray rounded-lg flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Footer Logo */}
          <div>
            <Link href="/" className="text-white">
              <Image
                src="/assets/Images/logo-white.svg"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* Footer NavLinks */}
          <div className="flex flex-col items-center justify-center gap-3 text-white md:flex-row md:gap-6 w-fit">
            {content.Footer.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${
                  pathname === item.link ? "text-sky-blue" : "text-white"
                }  hover:scale-x-110 transform transition`}
              >
                <StyledH6Heading fontColor={"!!font-bold hover:text-sky-blue"}>
                  {item.title}
                </StyledH6Heading>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex -space-x-1 text-white md:hidden lg:flex">
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
        </div>

        {/* ©copyright Text */}
        <div className="text-river-blue py-2.5 flex text-center md:text-left justify-center md:flex-row flex-col gap-3 md:gap-8">
          <Copyrights />
          <TermsAndConditions />
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default Footer;
