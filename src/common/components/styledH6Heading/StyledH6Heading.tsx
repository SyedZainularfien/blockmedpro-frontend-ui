import React from "react";

interface StyledH6HeadingProps {
  children: React.ReactNode;
  fontColor?: string;
}

const StyledH6Heading: React.FC<StyledH6HeadingProps> = ({
  children,
  fontColor = "",
}) => {
  return <h6 className={`text-h6 !font-medium ${fontColor}`}>{children}</h6>;
};

export default StyledH6Heading;
