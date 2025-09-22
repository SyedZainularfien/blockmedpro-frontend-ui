"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = (): void => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  const handleScroll = (): void => {
    setIsVisible(window.scrollY > 700);
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed !z-[49] p-2 md:p-3 bg-river-blue hover:opacity-90 rounded-full shadow-md bottom-[3%] right-[3%] lg:right-[2%] hover:scale-x-105 hover:scale-y-110 transform transition duration-300"
          onClick={scrollToTop}
        >
          <Image
            className="w-[21px]"
            src="/assets/Images/arrow-top.png"
            alt="Scroll to Top"
            width={21}
            height={21}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
