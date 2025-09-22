import React, { useState } from "react";

// Files Import
import StyledXlText from "../../common/components/styledXlText/StyledXlText";
import StyledH1Heading from "../../common/components/styledH1Heading/StyledH1Heading";

// const styles = {
//   backgroundImage: "url('assets/Images/contact-shadow.png')",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "contain",
// };

const ContactUsSection = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full"
    // style={styles}
    >
      <div className="w-[85%] mx-auto flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center pt-36 md:pt-24">
        {/* Heading */}
        <div className="flex flex-col gap-3 text-center md:text-start">
          <div>
            <StyledH1Heading
              fontColor={"text-sky-blue"}
              children={"Contact Us"}
            />
          </div>
          <div>
            <StyledXlText
              fontColor={"text-vavid-gray"}
              children={<>
                Fill in your details below to gain access to our platform <br />
                If you are interested in partnership working please fill out for the form as well and provide your location and company/business details
              </>}
            />
          </div>
        </div>
        {/* Telephone Image */}
        <div className="w-fit md:w-1/2 md:min-w-[40%] lg:min-w-max lg:w-fit relative ">
          <img className={` ${loading ? "opacity-0" : "opacity-100"}`} onLoad={() => setLoading(false)} loading="lazy" src="/assets/Images/BigPlus-image.png" alt="BigPlus" />
          {loading && (
            <div className="w-[301px] h-[301px] xl:w-[413px] xl:h-[413px]">

              <div className="bg-white z-10 absolute inset-0">
                <div className="animate-plus rounded-md flex justify-center items-center w-[301px] h-[301px] xl:w-[413px] xl:h-[413px] object-cover object-center">
                  <div className="size-[80%] rounded-[2rem] bg-light-gray animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
