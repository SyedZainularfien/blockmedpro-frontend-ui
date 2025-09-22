import React from "react";

const StyledLgText = ({ children, fontColor }) => {
  return (
    <p className={`text-lg !font-normal leading-[148%] ${fontColor}`}>
      {children}
    </p>
  );
};

export default StyledLgText;
