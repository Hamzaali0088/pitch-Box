import Image from "next/image";
import React from "react";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";

export default function LinkBuildersTestimonial() {
  return (
    <FullContainer className="bg-white">
      {/* Top Testimonial Section */}
      <Container className="py-28">
        <div className="text-center">
          {/* Header */}
          <p className="text-gray-700 text-sm font-medium uppercase tracking-wider mb-6">
            THE RIGHT TOOL FOR THE JOB
          </p>

          <h2 className="text-4xl md:text-[40px] font-medium text-gray-800 mb-8">
            Designed for Link Builders by Link Builders
          </h2>

          <p className="text-gray-600 text-[20px] leading-relaxed mb-12 max-w-5xl mx-auto px-2">
            We know your pain. We were link builders ourselves with our own SEO
            agencies, and built Pitchbox to solve the problems that our teams
            faced every day. Link building is time consuming, so we made every
            effort to automate, streamline, and{" "}
            <span className="font-semibold">
              reduce the time and costs of link building.
            </span>
          </p>

          {/* Quote text */}
          <div className=" relative max-w-3xl px-6  mx-auto">
            <blockquote className="italic text-gray-700 font-medium text-[28px] leading-relaxed text-center">
              Incredibly powerful. I strongly advise you look into Pitchbox...
              If you want to do this thing at true scale, I highly, highly
              recommend it"
            </blockquote>
            <div className="absolute -top-4 -left-4 text-6xl text-blue-400 font-serif">
              <svg
                height="18"
                width="26"
                viewBox="0 0 26 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6692015 18V7.55L26 0v18zM0 18V7.55L10.3307985 0v18z"
                  fill="#1198eb"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-blue-400 font-serif">
              <svg
                height="18"
                width="26"
                viewBox="0 0 26 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6692015 18V7.55L26 0v18zM0 18V7.55L10.3307985 0v18z"
                  fill="#1198eb"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Testimonial Author */}
          <div className="flex flex-col items-center mt-8">
            <div className="w-16 h-16 rounded-full bg-gray-300 mb-4 overflow-hidden">
              <Image
                width={200}
                height={200}
                src="/st-images/Ryan-Stewart-sm.jpg"
                alt="Ryan Stewart"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-lg">
                Ryan Stewart
              </p>
              <p className="text-gray-500 text-sm">Founder, WEBRIS</p>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
