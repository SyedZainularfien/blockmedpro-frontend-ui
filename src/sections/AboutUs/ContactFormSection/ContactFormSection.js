import React from "react";

// Files Import
import { Link } from "react-router-dom";
import ContactForm from "../../../components/ContactForm/ContactForm";
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
import { content } from "../../../data";

const ContactFormSection = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] mx-auto py-10 flex flex-col md:flex-row justify-between gap-7">
        {/* Left Side Content */}
        {/* <div className="flex flex-col gap-5 w-2/3 md:w-[30%] lg:w-[20%]">
          <div>
            <StyledH3Heading fontColor="text-white">
              <span className="text-sky-blue">Let's Meet</span> In person.
            </StyledH3Heading>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Link to={"mailto:info@businessname.com"}>
                <StyledLgText
                  fontColor={"text-white"}
                  children={"info@businessname.com"}
                />
              </Link>
            </div>
            <div>
              <StyledLgText
                fontColor={"text-white"}
                children={
                  "2413 Nashville Road, B13 Bowling Green KY 42101 United States"
                }
              />
            </div>
            <div>
              <Link to={"tel:+123 4567 789"}>
                <StyledLgText
                  fontColor={"text-sky-blue"}
                  children={"+123 4567 789"}
                />
              </Link>
            </div>
          </div>
        </div> */}
        {/* <div>
          <hr className="hidden md:flex w-[0.1px] h-64 bg-[#515151]" />
        </div> */}
        {/* Contact Form */}
        <div className="flex flex-col gap-5 w-full sm:w-[80%] lg:w-[60%]">
          <div className="space-y-2">
            <div>
              <StyledH3Heading
                fontColor={"text-river-blue uppercase"}
                children={"Fill In The Form"}
              />
            </div>
            {/* <div>
              <StyledLgText
                fontColor={"text-light-gray"}
                children={"You can ask any question here. We are here to help."}
              />
            </div> */}
          </div>
          <div>
            <hr className="h-[0.5px] text-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="pt-4">
            <hr className="h-[0.5px] text-[#D9D9D9]" />
          </div>
          <div className="text-left">
            <StyledLgText
              fontColor={"text-vavid-gray"}
              children={
                <>
                  BlockMed Pro Global Ltd <br />
                  Hub71, Al-Khatem Tower, Abu Dhabi Global Market, Abu Dhabi, UAE <br />
                  <a href='mailto:info@blockmedpro.com' className='underline underline-offset-2' rel='noopener noreferrer'>
                    info@blockmedpro.com
                  </a>
                </>

              }
            />
          </div>
          {/* Social Icons */}
          <div className="flex gap-1 text-white">
            {content.socialLinks.map((item, index) => (
              <Link
                className="hover:border-blue border border-transparent rounded-full scale-90 hover:scale-[0.97] transform transition duration-300"
                key={index}
                to={item.link}
                target="_blank"
              >
                {item?.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
