import React from "react";
import StyledH3Heading from "../../common/components/styledH3Heading/StyledH3Heading";
import StyledH4Heading from "../../common/components/styledH4Heading/StyledH4Heading";

import StyledMdText from "../../common/components/styledMdText/StyledMdText";

const NonDescriminationLanguagePage = () => {
  return (
    <div className="max-w-site">
      <div className="relative w-full px-4 py-24 text-river-blue">
        <div className="flex items-center justify-center">
          <div className="py-10">
            <StyledH3Heading fontColor="text-river-blue">
              Notice of Non-Discrimination & Language Assistance
            </StyledH3Heading>
          </div>
        </div>
        <div className="max-w-4xl px-8 py-6 mx-auto space-y-5 border rounded-lg border-button-light-blue">
          <StyledH4Heading fontColor="text-river-blue">
            Commitment to Non-Discrimination
          </StyledH4Heading>

          <StyledMdText fontColor="text-river-blue">
            BlockMed Pro&reg; is committed to ensuring that all patients, users,
            and stakeholders have equal access to our services without
            discrimination. We do not discriminate based on:
          </StyledMdText>

          <ul className="ml-4 space-y-2 list-disc list-inside">
            <li className="text-river-blue">
              Race, color, ethnicity, or national origin
            </li>
            <li className="text-river-blue">
              Gender, gender identity, or gender expression
            </li>
            <li className="text-river-blue">Age</li>
            <li className="text-river-blue">Religion or creed</li>
            <li className="text-river-blue">
              Disability, physical or mental health conditions
            </li>
            <li className="text-river-blue">Sexual orientation</li>
            <li className="text-river-blue">Marital status</li>
            <li className="text-river-blue">Socioeconomic status</li>
          </ul>

          <StyledMdText fontColor="text-river-blue">
            We provide a fair, inclusive, and welcoming environment for all
            users. If you believe you have experienced discrimination while
            using BlockMed Pro&reg;, please contact our{" "}
            <strong> Compliance Team </strong> at{" "}
            <a
              href="mailto:info@blockmedpro.com"
              className="underline underline-offset-2"
              rel="noopener noreferrer"
            >
              info@blockmedpro.com
            </a>
          </StyledMdText>

          {/* Account Registration */}
          <StyledH4Heading fontColor="text-river-blue">
            Language Assistance Services
          </StyledH4Heading>
          <StyledMdText fontColor="text-river-blue">
            We recognise the importance of language accessibility and offer free
            language assistance services to users with limited English
            proficiency or other communication needs.
          </StyledMdText>

          <StyledMdText fontColor="text-river-blue">
            Our services include:
          </StyledMdText>

          <ul className="ml-4 space-y-2 list-disc list-inside">
            <li className="text-river-blue">
              <strong>Multilingual Support: </strong> Translation of website
              into multiple languages.
            </li>
            <li className="text-river-blue">
              <strong>Accessible Communication: </strong> Support for users with
              disabilities, including screen reader-compatible services and
              alternative formats upon request.
            </li>
          </ul>

          {/* Privacy Policy */}
          <StyledH4Heading fontColor="text-river-blue">
            Accessibility & Accommodations
          </StyledH4Heading>
          <StyledMdText fontColor="text-river-blue">
            BlockMed Pro&reg; is committed to ensuring that individuals with
            disabilities have full access to our platform. We comply with
            accessibility standards and offer:
          </StyledMdText>

          <ul className="ml-4 space-y-2 list-disc list-inside">
            <li className="text-river-blue">
              Screen reader-friendly navigation
            </li>
            <li className="text-river-blue">
              Alternative text for images and graphics
            </li>
            <li className="text-river-blue">Keyboard navigation support</li>
            <li className="text-river-blue">
              Assistance for users with vision, hearing, or cognitive
              impairments
            </li>
          </ul>

          {/* Intellectual Property Rights */}
          <StyledH4Heading fontColor="text-river-blue">
            Filing a Complaint
          </StyledH4Heading>
          <StyledMdText fontColor="text-river-blue">
            If you feel you have been discriminated against or have concerns
            regarding accessibility, you have the right to file a complaint. You
            can do so by contacting our <strong> Compliance Team </strong> at{" "}
            <a
              href="mailto:info@blockmedpro.com"
              className="underline underline-offset-2"
              rel="noopener noreferrer"
            >
              info@blockmedpro.com
            </a>
          </StyledMdText>
          <StyledMdText fontColor="text-river-blue">
            We take all concerns seriously and will work to resolve them
            promptly.
          </StyledMdText>
        </div>
      </div>
    </div>
  );
};

export default NonDescriminationLanguagePage;
