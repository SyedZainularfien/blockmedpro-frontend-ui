import React from "react";
import Image from "next/image";

// Files Import
import Button from "../../components/Button/Button";
import StyledXlText from "../../common/components/styledXlText/StyledXlText";
import StyledLgText from "../../common/components/styledLgText/StyledLgText";

// const styles = {
//   backgroundImage: "url('/assets/Images/404-bg.png')",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100vh",
// };

const NotFoundPage = () => {
  return (
    <div className="max-w-site">
      <div
        className="w-full flex justify-center items-center h-[87vh]"
        // style={styles}
      >
        <div className="w-[90%] sm:w-full flex flex-col gap-6 justify-center items-center">
          <div>
            <Image
              src="/assets/Images/404.svg"
              alt="404"
              width={300}
              height={200}
            />
          </div>
          <div className="text-center space-y-2">
            <StyledXlText
              fontColor={"text-river-blue"}
              children={"Page you are looking for is currently unavailable"}
            />
            <StyledLgText
              fontColor={"text-vavid-gray"}
              children={
                "But don’t worry, you can go back to home by clicking the button below"
              }
            />
          </div>
          <div>
            <Button href={"/"} content={"Home"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
