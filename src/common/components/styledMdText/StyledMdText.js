import React from "react";

const StyledMdText = ({ children, fontColor }) => {
  return (
    <p className={`text-md !font-normal leading-[151.99%] ${fontColor}`}>
      {children}
    </p>
  );
};

export default StyledMdText;
