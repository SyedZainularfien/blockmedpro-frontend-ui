import React from "react";

const StyledH6Heading = ({ children, fontColor }) => {
  return <h6 className={`text-h6 !font-medium ${fontColor}`}>{children}</h6>;
};

export default StyledH6Heading;
