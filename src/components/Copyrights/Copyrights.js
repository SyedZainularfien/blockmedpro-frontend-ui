import React from "react";

// Files Import
import StyledSmText from "../../common/components/styledSmText/StyledSmText";

const Copyrights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <StyledSmText className="py-2 text-xs !font-normal text-center">
        &#169; {currentYear} BlockMed Pro&trade;. All Rights Reserved.
      </StyledSmText>
    </div>
  );
};

export default Copyrights;
