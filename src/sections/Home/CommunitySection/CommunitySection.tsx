import React from "react";
import Link from "next/link";
import Image from "next/image";

// Files Import
import { content } from "../../../data";
import JoinCommunity from "../../../components/JoinCommunity/JoinCommunity";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";

const CommunitySection: React.FC = () => {
  return (
    <div className="max-w-site">
      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="w-full">
          <JoinCommunity headingText={false} padding={"py-10 pt-5"} />
        </div>
        <div className="w-[85%] lg:w-9/12 gap-4 bg-light-blue flex flex-col justify-center text-center items-center mb-5 rounded-lg h-[171px]">
          <div>
            <StyledH3Heading
              fontColor={"text-river-blue uppercase"}
              children={"Follow Us On"}
            />
          </div>
          {/* Social Icons */}
          <div className="flex gap-1 text-white">
            {content.socialLinks.map((item, index) => (
              <Link
                className="hover:border-blue border border-transparent rounded-full scale-90 hover:scale-[0.97] transform transition duration-300"
                key={index}
                href={item.link}
                target="_blank"
              >
                <Image
                  className="size-[40px]"
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  width={40}
                  height={40}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
