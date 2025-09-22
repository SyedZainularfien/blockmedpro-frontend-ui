import React from "react";

const StyledXlText = ({ children, fontColor }) => {
  return (
    <p className={`text-xl !font-semibold leading-[135%] ${fontColor}`}>
      {children}
    </p>
  );
};

export default StyledXlText;
