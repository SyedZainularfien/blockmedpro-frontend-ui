import React from "react";

const StyledH3Heading = ({ children, fontColor }) => {
  return (
    <h3 className={`text-h3 !font-bold leading-[110%] ${fontColor}`}>
      {children}
    </h3>
  );
};

export default StyledH3Heading;
