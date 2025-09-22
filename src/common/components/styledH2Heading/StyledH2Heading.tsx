import React from "react";

interface StyledH2HeadingProps {
  children: React.ReactNode;
  fontColor?: string;
}

const StyledH2Heading: React.FC<StyledH2HeadingProps> = ({
  children,
  fontColor = "",
}) => {
  return (
    <h2 className={`text-h2 !font-bold leading-[110%] ${fontColor}`}>
      {children}
    </h2>
  );
};

export default StyledH2Heading;
