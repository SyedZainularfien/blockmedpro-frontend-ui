import React from "react";
import Link from "next/link";
import StyledSmText from "../../common/components/styledSmText/StyledSmText";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Link href="/privacy-policy">
        <StyledSmText className="py-2 text-xs !font-normal text-center">
          Privacy Policy
        </StyledSmText>
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
