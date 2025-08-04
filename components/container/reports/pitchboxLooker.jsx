import React from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PitchboxLookerPage() {
  return (
    <FullContainer className=" bg-gray-100 flex flex-col items-center justify-center px-4 py-24">
      <Container className="text-center">
        {/* Header */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
            THE BEST OF BOTH WORLDS
          </p>

          {/* Main Title */}
          <h1 className="text-3xl md:text-[40px] font-light text-gray-800 mb-4">
            Pitchbox{" "}
            <span className="text-red-500 text-3xl md:text-4xl">❤️</span> Looker
          </h1>
        </div>

        {/* Description */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Limitless possibilities to visualize and segment your data, your
            way. Blend Pitchbox data with Google Analytics, Search Console, and
            other connectors and build your own custom dashboards.
          </p>
        </div>

        {/* Logo Section */}
        <div className="mb-12">
          <div className="w-70 h-30 mx-auto">
            <Image
              width={100}
              height={100}
              src="/st-images/google-looker-seeklogo.svg"
              alt="Google Looker Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative group inline-block cursor-pointer">
          <span
            className="relative inline-flex items-center gap-2 text-blue-500 uppercase font-medium text-sm leading-relaxed
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300
          group-hover:after:w-full"
          >
            Connect looker with pitchbox
          </span>
        </div>
      </Container>
    </FullContainer>
  );
}
