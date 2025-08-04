import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionCard from "../../common/cardComponent";
import Container from "../../common/Container";
import ContentBtnWrapper from "../../common/ContentBtnWrapper";

export default function PowerfulReportsLayout() {
  const reportFeatures = [
    { title: "Campaign Performance" },
    { title: "Management Report" },
    { title: "White-label Client Reports" },
    { title: "Team Performance" },
    { title: "Segments & Multivariate Testing" },
    { title: "Pipeline History" },
    { title: "Custom Data Analytics" },
    { title: "Google Data Studio" },
  ];

  return (
    <div className="bg-white py-16">
      <Container className="">
        {/* section card  */}
        <SectionCard
          tag="METRICS, BACKLINKS, & TRAFFIC"
          title="SEO Integrations"
          desc="Link builders rely on SEO data to make informed decisions, create campaigns and prioritize their work. Pitchbox integrates with all the major SEO tools you already love and trust: Ahrefs, SEMRush, Majestic, Moz, and LinkResearchTools."
          imgSrc="/st-images/img-red-8.webp"
          learnMore={true}
          tagImgSrc="/st-images/icon-red-10.svg"
          reverse={false}
        />

        <div className="px-1">
          <ContentBtnWrapper
            title=" Ready to Scale Link Building?"
            desc="See Pitchbox in action and get ready to be blown away!"
            btnText=" try for free"
            link="/signup"
          />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-gray-700 text-sm leading-relaxed tracking-wide uppercase mb-4">
            MEASURE ROI
          </div>
          <h2 className="text-4xl md:text-5xl leading-snug font-medium text-gray-800 mb-4">
            Powerful Reports
          </h2>
          <p className="text-[20px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get deep insights into your outreach campaign performance, segment
            your data, monitor your team's activity, track goals, and measure
            KPIs. White-label reporting for agencies makes it easy to show
            clients just how much work goes into link building.
          </p>
        </div>

        {/* Dashboard Mockups */}
        <div className="mb-14">
          <Image
            src="/st-images/img-red-9.png"
            className="object-contain w-full h-auto"
            width={500}
            height={400}
            alt="reports"
          />
        </div>

        {/* Features Grid */}
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-6 justify-center px-4 mb-12">
          {/* Left Column */}
          <div className=" bg-white p-8 space-y-6 shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] w-full md:w-1/2">
            {reportFeatures.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <div className="">
                  <span className="text-gray-900 text-[20px] font-medium">
                    {feature.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-white p-8 space-y-6 shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] w-full md:w-1/2">
            {reportFeatures.slice(4, 8).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <div>
                  <span className="text-gray-900 text-[20px] font-medium">
                    {feature.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-14">
          <div className="relative group inline-block cursor-pointer">
            <span
              className="relative inline-flex items-center gap-2 text-[#1198EB] uppercase font-medium text-sm leading-relaxed
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[1px] after:w-0 after:bg-[#1198EB] after:transition-all after:duration-300
             group-hover:after:w-full"
            >
              Learn more
              <ArrowRight className="h-4 w-4 text-[#1198EB]" />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
