import React from "react";

// Files Import
import { content } from "../../data";
import Button from "../../components/Button/Button";
import AccordionBox from "../../components/AccordionBox/AccordionBox";
import StyledLgText from "../../common/components/styledLgText/StyledLgText";
// import StyledXlText from "../../common/components/styledXlText/StyledXlText";
import StyledH2Heading from "../../common/components/styledH2Heading/StyledH2Heading";

// FAQ Polygon-Image
const styles = {
  backgroundImage:
    "url('/assets/Images/faq-polygon.png')",
  // , url('/assets/Images/faq-shadow.png')
  // ",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
};

const FaqSection = () => {
  return (
    <div className="w-full faq" style={styles}>
      <div className="w-[85%] mx-auto flex flex-col gap-16 justify-center items-center pt-36 py-16">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <StyledH2Heading fontColor={"text-river-blue text-center"}>
              <span className="text-sky-blue">Frequently</span> Asked Questions
            </StyledH2Heading>
          </div>
          {/* <div>
            <StyledXlText
              fontColor={"text-light-gray text-center !!font-normal"}
              children={"Commonly asked questions and answers to them"}
            />
          </div> */}
        </div>
        {/* FAQ Accordion */}
        <div className="flex flex-col w-full gap-5">
          <div className="mx-auto lg:w-8/12">
            <AccordionBox
              custom={false}
              accordionData={content.faqPageAccordion}
            />
          </div>
          <div>
            <hr className="h-[2px] w-11/12 lg:w-1/2 mx-auto my-3.5 bg-white border-light-gray" />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <StyledLgText
                fontColor={"text-vavid-gray text-center"}
                children={
                  "Please contact us if you still have further questions about BlockMed Pro"
                }
              />
            </div>
            <div className="flex justify-center">
              <Button href="/contact-us" content={"Contact Us"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
