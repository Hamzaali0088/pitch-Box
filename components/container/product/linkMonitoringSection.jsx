"use client";

import Image from "next/image";
import React, { useRef } from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

export default function LinkMonitoringSection() {
  const links = [
    {
      title: "Link Health",
      desc: "Monitor the health of new and existing links to make sure you don't lose your rankings.",
      imgSrc: "/st-images/icon-red-11.svg",
    },
    {
      title: "Link Errors",
      desc: "Reduce link rot by catching 301s, 404s and DNS errors early, and recover valuable links.",
      imgSrc: "/st-images/icon-red-12.svg",
    },
    {
      title: "Link Equity",
      desc: "Track changes to anchor text, follow/no-follow status, and identify link drops.",
      imgSrc: "/st-images/icon-red-13.svg",
    },
  ];

  const cardRefs = useRef([]);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FullContainer className="bg-[#f2f3f5] pt-22 px-4">
      <Container className="">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[40px] leading-relaxed font-medium text-gray-800 mb-4">
            Bi-lateral Link Monitoring
          </h2>
          <p className="text-[20px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Automatically track your backlinks over time and get notified about
            critical changes. Don't lose valuable link equity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 px-1">
          {links.map((link, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white group cursor-pointer p-8 text-center shadow-xl transform transition duration-300 hover:-translate-y-2"
              onClick={() => handleScroll()}
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src={link.imgSrc}
                  width={64}
                  height={64}
                  alt={link.title}
                />
              </div>
              <h3 className="text-xl font-sans font-medium text-gray-700 mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{link.desc}</p>
            </div>
          ))}
        </div>
        <div className=" mt-12 max-w-4xl mx-auto">
          <Image
            width={800}
            height={400}
            src="/st-images/img-red-10.jpg"
            alt="link monitoring"
            className="w-full h-auto object-cover"
          />
        </div>
      </Container>
    </FullContainer>
  );
}
