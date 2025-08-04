import Image from "next/image";
import React from "react";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";

export default function CenteredTestimonialWithLogo() {
  return (
    <FullContainer className="bg-gray-100">
      <Container className="py-28">
        <div className="text-center">
          <div className="flex justify-center gap-6 items-center mb-8">
            <div className="text-right ">
              <p className="font-semibold text-gray-800 text-lg">
                Gareth Simpson
              </p>
              <p className="text-gray-500 text-sm">SEEKER Digital</p>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                width={200}
                height={200}
                src="/st-images/gareth-simpson.jpg"
                alt="gareth-simpson"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="">
              <Image
                width={200}
                height={200}
                src="/st-images/seeker-logo.webp"
                alt="Seeker logo"
                className="w-30 h-20 object-contain"
              />
            </div>
          </div>
          {/* Quote text */}
          <div className=" relative max-w-3xl px-6  mx-auto">
            <blockquote className="italic text-gray-700 font-medium text-[28px] leading-relaxed text-center">
              Scaled outreach is not manageable through a traditional inbox.
              With Pitchbox we can easily manage our inbox across many different
              campaigns and stay organized with our communications.
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
        </div>
      </Container>
    </FullContainer>
  );
}
