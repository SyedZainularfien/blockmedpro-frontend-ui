import React from "react";

// Files Import
import { content } from "../../data";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import StyledH5Heading from "../../common/components/styledH5Heading/StyledH5Heading";
import StyledH6Heading from "../../common/components/styledH6Heading/StyledH6Heading";

const RoadmapMob = () => {
  return (
    <div className="flex justify-center w-full md:w-[90%]">
      {/* all phases  */}
      <div className="flex flex-col w-full gap-6 px-0 ">
        {content.roadmap.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            {/* Phases */}
            <div className="flex h-24 w-full md:w-[85%] lg:w-full px-4 gap-4 justify-around items-center bg-medium-gray bg-opacity-80 rounded-xl border border-sky-blue">
              <div className="w-[25%] sm:w-[20%]">
                <img src={item.imgURL} alt="Phase 1" className="min-w-[50px]" />
              </div>
              <div className="w-1/2 sm:w-[40%]">
                <StyledH5Heading
                  fontColor={"text-white"}
                  children={item.phase}
                />
              </div>
              <div>
                <StyledH6Heading
                  fontColor={"text-white text-nowrap"}
                  children={item.timePeriod}
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full md:w-[85%] lg:w-full bg-white bg-opacity-10 rounded-xl border border-sky-blue backdrop-blur-[45px] space-y-4">
              <ul className="py-6 pl-8 pr-[1.2rem] sm:px-7">
                {content.roadmapContent[index].box.map((subject, index) => (
                  <li key={index} className="flex gap-3 text-light-gray">
                    <span className="text-white">•</span>
                    <StyledMdText children={subject.list} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapMob;
