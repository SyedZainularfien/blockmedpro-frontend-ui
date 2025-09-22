import React from "react";
import { Link } from "react-router-dom";

const Button = ({ content, width, href }) => {
  return (
    <Link to={href}>
      <button
        className={`button-gradient px-[40px] py-[18px] md:px-[47px] md:py-[21px] rounded-[10px] justify-center items-center gap-2.5 inline-flex text-white text-base !font-bold leading-[14.40px] ${width}`}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
