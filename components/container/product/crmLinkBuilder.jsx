"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

export default function CRMLinkBuildersLayout() {
  const logos = [
    { title: "Pipeline Management", imgSrc: "/st-images/pb-icon-2-66.svg" },
    { title: "Relationship Building", imgSrc: "/st-images/pb-icon-3-66.svg" },
    { title: "CRM + Email Client", imgSrc: "/st-images/pb-icon-4-66.svg" },
    { title: "SEO Centric", imgSrc: "/st-images/pb-icon-1-66.svg" },
  ];
  return (
    <FullContainer className=" bg-[#4d4292] text-white">
      {/* Main Content Section */}
      <Container className="px-5 py-22">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-[12px] md:text-[14px]  mb-6">SEO CRM</h3>
          <h1 className="text-[32px] md:text-[40px]  mb-6">
            Specialty CRM for Link Builders
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Pitchbox’s SEO CRM is built from the ground up to manage link
            outreach campaigns. Keep your eyes on the prize (links 👀) with SEO
            metrics and link data deeply embedded into the user interface.
          </p>
        </div>
        {/* Centered Banner Image */}
        <div className="mb-12">
          <Image
            src="/st-images/img-red-5.jpg"
            alt="CRM Interface"
            width={800}
            height={400}
            className="h-auto w-full object-contain"
          />
        </div>
        {/* Bottom Description */}
        <div className="text-center mb-16">
          <p className="text-white leading-relaxed text-[18px] max-w-4xl mx-auto">
            All Opportunity Data (Contact Details, Hub Profile, Communications,
            Social Media, Prospect Details, and More) comes via rich
            cross-referenced opportunities and fragmented data.
          </p>
        </div>
        {/* Features Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto py-6 px-4 rounded-lg">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-lg overflow-hidden mx-auto mb-8">
                <Image
                  src={logo.imgSrc}
                  alt={logo.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[20px] text-white">
                {logo.title}
              </h3>
            </div>
          ))}
        </div>
        {/* Learn More Button */}
        <div className="text-center mt-12">
          <div className="relative group inline-block cursor-pointer">
            <span
              className="relative inline-flex items-center gap-2 text-white uppercase font-medium text-sm leading-relaxed
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300
      group-hover:after:w-full"
            >
              Learn more
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
