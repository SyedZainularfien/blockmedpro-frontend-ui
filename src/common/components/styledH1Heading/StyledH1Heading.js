import React from "react";

const StyledH1Heading = ({ children, fontColor }) => {
  return (
    <h1 className={`text-h1 !font-extrabold leading-[110%] ${fontColor}`}>
      {children}
    </h1>
  );
};

export default StyledH1Heading;
