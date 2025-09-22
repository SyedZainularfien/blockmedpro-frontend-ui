import React from "react";

const StyledSmText = ({ children, fontColor }) => {
  return (
    <p className={`text-sm !font-normal leading-normal ${fontColor}`}>
      {children}
    </p>
  );
};

export default StyledSmText;
