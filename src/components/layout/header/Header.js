import React from "react";

// Files Import
import { content } from "../../../data";
import MobileHeader from "./MobileHeader";
import { Link, NavLink, useLocation } from "react-router-dom";
import StyledH6Heading from "../../../common/components/styledH6Heading/StyledH6Heading";

const Header = () => {
  const location = useLocation();

  return (
    <div className="fixed inset-x-0 max-w-site top-0 z-50 flex justify-center">
      <div className="w-[85%] flex h-[60px] bg-white bg-opacity-20 rounded-lg border border-neutral-400 backdrop-blur-md mt-4">
        <div className="flex items-center justify-between w-full px-5">
          <div className="w-[60%]">
            <Link to="/" className="text-white">
              <img src="/assets/Images/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="justify-center hidden gap-6 text-purple-blue list-disc lg:flex w-fit xl:w-1/3">
            {content.header.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={`${location.pathname === item.link
                  ? "text-sky-blue"
                  : "text-purple-blue"
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
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
