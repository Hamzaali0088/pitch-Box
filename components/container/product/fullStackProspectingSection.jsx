import Image from "next/image";
import React from "react";
import Container from "../../common/Container";

export default function FullStackProspectingSection() {
  return (
    <div className="bg-white py-24 ">
      <Container className="text-center">
        {/* Header */}
        <p className="text-sm text-gray-600 uppercase leading-relaxed tracking-wider mb-4">
          NEVER RUN OUT OF PROSPECTS AGAIN
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-relaxed text-gray-900 mb-4">
          Full-Stack Prospecting
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Next level prospecting for popular link building strategies and tactics. Over 20 different prospecting options ranging from SERP-based to imports to native integration campaigns featuring the top SEO tools in the industry.
        </p>

        {/* Prospecting Options Grid */}
        <div className="mb-16 mx-auto w-full sm:w-[500px] md:w-[600px] lg:w-[750px] h-auto">
          <Image
            className="w-full h-auto object-contain"
            src="/st-images/img-red-2.jpg"
            alt="Prospecting Screenshot"
            width={750}
            height={550}
          />
        </div>

        {/* Learn More Button */}
        <div className="relative group inline-block cursor-pointer">
          <div
            className="relative text-center after:content-[''] after:absolute after:left-0 after:-bottom-1 
               after:h-[1px] after:w-0 after:bg-[#1198EB] after:transition-all after:duration-300 group-hover:after:w-full "
          >
            <p className="text-[#1198EB] uppercase font-medium text-sm leading-relaxed">
              learn more
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
