import React from "react";
import Link from "next/link";
import StyledSmText from "../../common/components/styledSmText/StyledSmText";

const TermsAndConditions: React.FC = () => {
  return (
    <div>
      <Link href="/terms-and-conditions">
        <StyledSmText className="py-2 text-xs !font-normal text-center">
          Terms and Conditions
        </StyledSmText>
      </Link>
    </div>
  );
};

export default TermsAndConditions;
