import React from "react";
import Link from "next/link";

interface ButtonProps {
  content: string;
  width?: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ content, width = "", href }) => {
  return (
    <Link href={href}>
      <button
        className={`button-gradient px-[40px] py-[18px] md:px-[47px] md:py-[21px] rounded-[10px] justify-center items-center gap-2.5 inline-flex text-white text-base !font-bold leading-[14.40px] ${width}`}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
