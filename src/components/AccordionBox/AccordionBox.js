import React, { useState } from "react";

// Files Import
// import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import StyledLgText from "../../common/components/styledLgText/StyledLgText";
import StyledH5Heading from "../../common/components/styledH5Heading/StyledH5Heading";
// import StyledH6Heading from "../../common/components/styledH6Heading/StyledH6Heading";

export default function AccordionBox({ custom, accordionData }) {
  const [activeElement, setActiveElement] = useState(null);

  const handleClick = (index) => {
    setActiveElement(activeElement === index ? null : index);
  };

  return (
    <div className="w-full text-white">
      {accordionData?.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`flex accordion-box cursor-pointer flex-col mb-2 last:mb-0 border ${custom
            ? "rounded-lg py-6 md:py-8"
            : activeElement === index
              ? "py-8 rounded-2xl gap-2"
              : "rounded-xl py-4"
            } ${activeElement === index
              ? `border-sky-blue gap-2 ${custom && 'button-gradient'}`
              : custom
                ? "border-light-gray text-river-blue"
                : "border-light-gray "
            } ${custom ? "bg-transparent" : "accordion-bg-gradient"}`}
        >
          <div>
            <button className="w-full pl-6 pr-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none">
              {/* {!custom && (
                <StyledMdText fontColor={"text-gray !!font-bold"}>
                  {item.count}
                </StyledMdText>
              )} */}
              <div className={`flex justify-between items-center`}>
                {!custom ? (
                  <StyledLgText fontColor={"text-river-blue !!font-medium"}>{item.title}</StyledLgText>
                ) : (
                  <StyledH5Heading>{item.title}</StyledH5Heading>
                )}
                {/* Arrow  icon */}
                {/* {custom && ( */}
                <svg
                  className={`min-w-[30px] ${activeElement === index
                    ? "transform duration-1000"
                    : "duration-1000 rotate-180"
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    transform="rotate(180 12 12)"
                    fill={activeElement === index ? `${custom ? "white" : "#0D2A52"}` : "#0D2A52"}
                  />
                  <path
                    d="M16.1 13L12.05 9.348L8 13"
                    stroke={activeElement === index ? `${custom ? "#0D2A52" : "white"}` : "white"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* )} */}
              </div>
            </button>
          </div>
          <div
            style={{
              maxHeight: activeElement === index ? "1000px" : "0",
              height: activeElement === index ? "max-content" : "100px ",
              overflow: "hidden",
              transition: "max-height 0.7s ease-in-out",
            }}
          >
            {custom ? (
              <StyledLgText fontColor={"px-6"} children={item.content} />
            ) : (
              <StyledLgText
                fontColor={"px-6 text-vavid-gray"}
                children={item.content}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
