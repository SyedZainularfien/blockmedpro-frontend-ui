import React from "react";

interface StyledH1HeadingProps {
  children: React.ReactNode;
  fontColor?: string;
}

const StyledH1Heading: React.FC<StyledH1HeadingProps> = ({
  children,
  fontColor = "",
}) => {
  return (
    <h1 className={`text-h1 !font-extrabold leading-[110%] ${fontColor}`}>
      {children}
    </h1>
  );
};

export default StyledH1Heading;
