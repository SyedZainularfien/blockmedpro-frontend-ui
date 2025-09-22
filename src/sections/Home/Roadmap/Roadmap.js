import React, { useLayoutEffect, useRef, useState } from "react";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Files Import
import { content } from "../../../data";
// import RoadmapMob from "../../../components/RoadmapMob/RoadmapMob";
// import StyledMdText from "../../../common/components/styledMdText/StyledMdText";
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";
// import StyledH6Heading from "../../../common/components/styledH6Heading/StyledH6Heading";

// const styles = {
//   backgroundImage: "url('/assets/Images/shadow.png')",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "contain",
// };

//GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  // const [hoverBox1, setHoverBox1] = useState(true);
  // const [hoverBox2, setHoverBox2] = useState(false);
  // const [hoverBox3, setHoverBox3] = useState(false);
  // const [hoverBox4, setHoverBox4] = useState(false);

  const container = useRef();
  const headingsSection = useRef();
  const roadmapLists = useRef();

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

      //Animation No.2
      gsap.from(roadmapLists.current, {
        duration: 4,
        opacity: 0,
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

  // const handleHoverBox1 = () => {
  //   setHoverBox1(true);
  //   setHoverBox2(false);
  //   setHoverBox3(false);
  //   setHoverBox4(false);
  // };

  // const handleHoverBox2 = () => {
  //   setHoverBox1(false);
  //   setHoverBox2(true);
  //   setHoverBox3(false);
  //   setHoverBox4(false);
  // };

  // const handleHoverBox3 = () => {
  //   setHoverBox1(false);
  //   setHoverBox2(false);
  //   setHoverBox3(true);
  //   setHoverBox4(false);
  // };

  // const handleHoverBox4 = () => {
  //   setHoverBox1(false);
  //   setHoverBox2(false);
  //   setHoverBox3(false);
  //   setHoverBox4(true);
  // };

  // const handleMouseLeave = () => {
  //   setHoverBox1(false);
  //   setHoverBox2(false);
  //   setHoverBox3(false);
  //   setHoverBox4(false);
  // };


  // New RoadMap 
  const [activeTab, setActiveTab] = useState("Phase 1");

  return (
    <div id="roadmap" ref={container} className="max-w-site"
    // style={styles}
    >
      <div className="w-[85%] mx-auto flex flex-col gap-16 py-20">
        {/* Heading */}
        <div
          ref={headingsSection}
          className="flex flex-col items-center justify-center gap-3 text-center"
        >
          {/* <hr className="w-56 h-px border-0 rounded-md hr-gradient3 opacity-70" /> */}
          <div>
            <StyledH3Heading fontColor={"text-river-blue uppercase"}>
              Our Visionary <span className="text-sky-blue">Roadmap</span>
            </StyledH3Heading>
          </div>
          {/* <div className="lg:w-1/2 xl:w-1/3">
            <StyledH5Heading
              fontColor={"text-light-gray text-xl !font-semibold"}
              children={
                "Your journey unveiled - explore our roadmap to success!"
              }
            />
          </div> */}
        </div>
        {/* RoadMap */}
        {/* <div
          ref={roadmapLists}
          className="hidden lg:flex flex-col lg:flex-row lg:w-full self-center lg:min-h-[650px] xl:min-h-[600px] relative justify-between items-center"
        > */}
        {/* Left Side Lists  */}
        {/* <div className="lg:w-[50%] flex flex-col gap-10 relative"> */}
        {/* Left top */}
        {/* <div className="absolute flex -top-10">
              <div
                className={`w-full bg-white bg-opacity-10 rounded-xl backdrop-blur-[45px] space-y-4 border border-transparent h-fit ${hoverBox2 && "!border-sky-blue"
                  }`}
              >
                <ul className="py-6 pl-8 pr-[1.2rem] sm:px-7">
                  {content.roadmapContent[1].box.map((subject, index) => (
                    <li key={index} className="flex gap-3 text-light-gray">
                      <span className="text-white">•</span>
                      <StyledMdText children={subject.list} />
                    </li>
                  ))}
                </ul>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                className={`mt-9 text-white ${hoverBox2 && "!text-sky-blue"}`}
              >
                <path
                  d="M28.5 1C28.7761 1 29 0.776142 29 0.5C29 0.223858 28.7761 0 28.5 0V1ZM0.833333 17.5C0.833333 18.9728 2.02724 20.1667 3.5 20.1667C4.97276 20.1667 6.16667 18.9728 6.16667 17.5C6.16667 16.0272 4.97276 14.8333 3.5 14.8333C2.02724 14.8333 0.833333 16.0272 0.833333 17.5ZM28.5 0C24.2855 0 21.8473 1.08921 20.285 2.82137C18.7626 4.50923 18.1343 6.76287 17.4035 8.83359C16.6585 10.9445 15.7912 12.9485 13.8505 14.4481C11.9093 15.9482 8.81621 17 3.5 17V18C8.93379 18 12.2782 16.9268 14.462 15.2394C16.6463 13.5515 17.5915 11.3055 18.3465 9.16641C19.1157 6.98713 19.6749 4.99077 21.0275 3.49113C22.3402 2.03579 24.4645 1 28.5 1V0Z"
                  fill="currentColor"
                />
              </svg>
            </div> */}
        {/* left last  */}
        {/* <div className="flex w-full absolute top-[10rem]">
              <div
                className={`w-full h-fit bg-white bg-opacity-10 rounded-xl backdrop-blur-[45px] space-y-4 border border-transparent  ${hoverBox4 && "!border-sky-blue"
                  }`}
              >
                <ul className="py-6 pl-8 pr-[1.2rem] sm:px-7">
                  {content.roadmapContent[3]?.box?.map((subject, index) => (
                    <li key={index} className="flex gap-3 text-light-gray">
                      <span className="text-white">•</span>
                      <StyledMdText children={subject.list} />
                    </li>
                  ))}
                </ul>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                className={`mt-5 text-white ${hoverBox4 && "!text-sky-blue"}`}
              >
                <path
                  d="M28.5 1C28.7761 1 29 0.776142 29 0.5C29 0.223858 28.7761 0 28.5 0V1ZM0.833333 17.5C0.833333 18.9728 2.02724 20.1667 3.5 20.1667C4.97276 20.1667 6.16667 18.9728 6.16667 17.5C6.16667 16.0272 4.97276 14.8333 3.5 14.8333C2.02724 14.8333 0.833333 16.0272 0.833333 17.5ZM28.5 0C24.2855 0 21.8473 1.08921 20.285 2.82137C18.7626 4.50923 18.1343 6.76287 17.4035 8.83359C16.6585 10.9445 15.7912 12.9485 13.8505 14.4481C11.9093 15.9482 8.81621 17 3.5 17V18C8.93379 18 12.2782 16.9268 14.462 15.2394C16.6463 13.5515 17.5915 11.3055 18.3465 9.16641C19.1157 6.98713 19.6749 4.99077 21.0275 3.49113C22.3402 2.03579 24.4645 1 28.5 1V0Z"
                  fill="currentColor"
                />
              </svg>
            </div> */}
        {/* </div> */}

        {/* All Phases  */}
        {/* <div className="flex w-full lg:w-[40%] px-0 flex-col gap-4 !items-stretch">
            {content.roadmap.map((item, index) => (
              <div
                onMouseEnter={
                  index === 0
                    ? () => handleHoverBox1()
                    : index === 1
                      ? () => handleHoverBox2()
                      : index === 2
                        ? () => handleHoverBox3()
                        : index === 3
                          ? () => handleHoverBox4()
                          : ""
                }
                onMouseLeave={() => handleMouseLeave()}
                key={index}
                className={`flex`}
              >
                <div
                  className={`flex items-center justify-between w-full h-24 gap-4 px-4 border border-transparent bg-medium-gray bg-opacity-80 rounded-xl ${index === 0
                    ? hoverBox1 && "!border-sky-blue"
                    : index === 1
                      ? hoverBox2 && "!border-sky-blue"
                      : index === 2
                        ? hoverBox3 && "!border-sky-blue"
                        : index === 3
                          ? hoverBox4 && "!border-sky-blue"
                          : ""
                    }`}
                >
                  <div className="w-[20%]">
                    <img
                      src={item.imgURL}
                      alt="Phase 1"
                      className="min-w-[50px]"
                    />
                  </div>
                  <div className="w-[70%]">
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
              </div>
            ))}
          </div> */}

        {/* Right Side Lists  */}
        {/* <div className="flex relative lg:w-[50%] flex-col justify-between items-center"> */}
        {/* top box */}
        {/* <div className="flex w-full lg:absolute -top-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="46"
                viewBox="0 0 31 46"
                fill="none"
                className={`text-white mt-10 ${hoverBox1 && "!text-sky-blue"}`}
              >
                <path
                  d="M1 45.5C0.723858 45.5 0.5 45.2761 0.5 45C0.5 44.7239 0.723858 44.5 1 44.5V45.5ZM25.3333 3C25.3333 1.52724 26.5272 0.333332 28 0.333332C29.4728 0.333332 30.6667 1.52724 30.6667 3C30.6667 4.47276 29.4728 5.66667 28 5.66667C26.5272 5.66667 25.3333 4.47276 25.3333 3ZM1 44.5C3.14379 44.5 4.83914 43.8778 6.22097 42.8009C7.61184 41.717 8.7121 40.1509 9.61784 38.2247C11.437 34.3561 12.4108 29.178 13.4469 23.9036C14.4747 18.6711 15.5638 13.3456 17.6419 9.33257C18.6854 7.31758 19.9915 5.6054 21.6896 4.39727C23.3944 3.18447 25.466 2.5 28 2.5V3.5C25.659 3.5 23.7931 4.12803 22.2693 5.2121C20.739 6.30085 19.5255 7.86992 18.5299 9.79243C16.53 13.6544 15.4628 18.8289 14.4281 24.0964C13.4017 29.322 12.4067 34.6439 10.5228 38.6503C9.57696 40.6616 8.39207 42.3768 6.83567 43.5897C5.27024 44.8097 3.35621 45.5 1 45.5V44.5Z"
                  fill="currentColor"
                />
              </svg>
              <div
                className={`w-full h-fit bg-white bg-opacity-10 rounded-xl backdrop-blur-[45px] space-y-4 border border-transparent ${hoverBox1 && "!border-sky-blue"
                  }`}
              >
                <ul className="py-6 pl-8 pr-[1.2rem] xl:px-7">
                  {content.roadmapContent[0].box.map((subject, index) => (
                    <li key={index} className="flex gap-3 text-light-gray">
                      <span className="text-white">•</span>
                      <StyledMdText children={subject.list} />
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
        {/* bottom box */}
        {/* <div className="flex w-full lg:absolute -bottom-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="105"
                viewBox="0 0 31 105"
                fill="none"
                className={`text-white ${hoverBox3 && "!text-sky-blue"}`}
              >
                <path
                  d="M1 0.5C0.723859 0.499999 0.500001 0.723856 0.5 0.999999C0.499999 1.27614 0.723856 1.5 0.999999 1.5L1 0.5ZM25.3333 28C25.3333 29.4728 26.5272 30.6667 28 30.6667C29.4728 30.6667 30.6667 29.4728 30.6667 28C30.6667 26.5272 29.4728 25.3333 28 25.3333C26.5272 25.3333 25.3333 26.5272 25.3333 28ZM0.999999 1.5C8.5815 1.50002 12.1803 3.18275 13.8855 5.51398C15.6132 7.87587 15.5344 11.0596 15.3135 14.4677C15.2051 16.1406 15.0654 17.8624 15.1342 19.4783C15.2032 21.0984 15.4824 22.6632 16.2432 24.0251C17.7928 26.7991 21.1927 28.5 28 28.5V27.5C21.3073 27.5 18.3947 25.8259 17.1162 23.5374C16.4629 22.368 16.1991 20.9798 16.1333 19.4358C16.0674 17.8877 16.2011 16.2344 16.3115 14.5324C16.5281 11.1904 16.6681 7.6242 14.6926 4.92359C12.6947 2.19231 8.6685 0.50002 1 0.5L0.999999 1.5Z"
                  fill="currentColor"
                />
              </svg>
              <div
                className={`w-full bg-white bg-opacity-10 rounded-xl backdrop-blur-[45px] space-y-4  border border-transparent h-fit ${hoverBox3 && "!border-sky-blue"
                  }`}
              >
                <ul className="py-6 pl-8 pr-[1.2rem] xl:px-7">
                  {content.roadmapContent[2].box.map((subject, index) => (
                    <li key={index} className="flex gap-3 text-light-gray">
                      <span className="text-white">•</span>
                      <StyledMdText children={subject.list} />
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="flex justify-center lg:hidden">
          <RoadmapMob />
        </div> */}

        <div
          ref={roadmapLists}
          className="flex flex-col items-center gap-10 self-center lg:min-h-[550px] relative">
          <div className="border border-light-gray rounded-[10px] p-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
            {
              content.newRoadMap.allTabs?.map((tab, index) => (
                <button onClick={() => setActiveTab(tab)} key={index} className={`px-6 lg:px-7 py-2 rounded-lg border text-river-blue ${tab === activeTab ? "text-white button-gradient" : "border-transparent"}`}>
                  <StyledLgText fontColor="!!font-semibold">
                    {tab}
                  </StyledLgText>
                </button>
              ))
            }
          </div>
          <div className="flex flex-col justify-center gap-4">
            {
              content.newRoadMap.allTabsContent[activeTab]?.map((card, index) => (
                <div key={index} className="flex flex-col gap-2 border border-light-gray rounded-2xl md:rounded-[22px] text-river-blue p-4 sm:p-6 md:p-8 max-w-md sm:w-[28rem] w-full">
                  <StyledH5Heading fontColor="!font-semibold">
                    {card.title}
                  </StyledH5Heading>
                  <hr className="pt-3 border-light-gray" />
                  <ul>
                    {
                      card.content.map((item, index) => (
                        <li key={index} className="flex gap-3 text-river-blue !font-medium">
                          <span>•</span>
                          <StyledLgText fontColor="!!font-medium" children={item} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
