"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Files Import
import { content } from "../../../data";
import MobileHeader from "./MobileHeader";
import StyledH6Heading from "../../../common/components/styledH6Heading/StyledH6Heading";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 max-w-site top-0 z-50 flex justify-center">
      <div className="w-[85%] flex h-[60px] bg-white bg-opacity-20 rounded-lg border border-neutral-400 backdrop-blur-md mt-4">
        <div className="flex items-center justify-between w-full px-5">
          <div className="w-[60%]">
            <Link href="/" className="text-white">
              <Image
                src="/assets/Images/logo.svg"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="justify-center hidden gap-6 text-purple-blue list-disc lg:flex w-fit xl:w-1/3">
            {content.header.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${
                  pathname === item.link ? "text-sky-blue" : "text-purple-blue"
                } hover:scale-x-110 transform transition`}
              >
                <div className="flex items-center gap-3 group hover:text-sky-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="currentColor"
                  >
                    <circle cx="4" cy="4" r="4" fill="currentColor" />
                  </svg>
                  <StyledH6Heading>{item.title}</StyledH6Heading>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
