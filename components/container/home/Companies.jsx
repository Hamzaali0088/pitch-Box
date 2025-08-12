"use client";

import { ArrowRight } from "lucide-react";
import Container from "../../common/Container";
import Image from "next/image";
import LogoGrid from "./LogoGrid";

const features = [
  {
    title: "Mobile-Friendly Automation",
    description:
      "This is a big one. Most tools require you to sit at your desktop. With Robo Anywhere, you can monitor, tweak, or even launch automations straight from your phone or tablet. It’s like having your own personal assistant in your pocket.",
    testimonial:
      "Unlike many outreach platforms that are clunky and confusing, Pitchbox is a breeze to use.",
    author: "Brian Dean, @Backlinko",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-1.jpg",
    imagePosition: "right",
    authSrc: "/st-images/Brian-Dean.jpg",
  },
  {
    title: "No-Code Interface",
    description:
      "Automation Anywhere offers an intuitive interface that allows business users to design automation workflows without extensive programming knowledge. Its drag-and-drop functionality simplifies automation design.",
    testimonial:
      "Pitchbox is a beast of a machine! The automated follow-ups work better than anything I've ever seen.",
    author: "Bill Sebald, Greenlane",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-2.jpg",
    authSrc: "/st-images/Bill-Sebald.jpg",
    imagePosition: "left",
  },
  {
    title: "Adaptive Task Learning",
    description:
      "One thing I love is how it doesn’t just blindly repeat tasks. It starts to understand patterns and can actually adjust over time. That’s not just automation—that’s smart automation.",
    testimonial:
      "If you do outreach and haven't checked out Pitchbox, you're doing yourself a disservice. Smart product!",
    author: "Eppie Vojt, Red Ventures",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-3.jpg",
    authSrc: "/st-images/Eppie-Vojt.jpg",
    imagePosition: "right",
  },
  {
    title: "Cloud-Based Platform",
    description:
      "Built with a cloud-first approach, Automation Anywhere is highly scalable, supporting deployment in cloud and hybrid environments. This ensures that organizations can grow their automation initiatives without infrastructure limitations.",
    testimonial:
      "If you do outreach and haven't checked out Pitchbox, you're doing yourself a disservice. Smart product!",
    author: "Eppie Vojt, Red Ventures",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-3.jpg",
    authSrc: "/st-images/Eppie-Vojt.jpg",
    imagePosition: "left",
  },
  {
    title: "Robust Security Measures",
    description:
      "The platform provides security features like user authentication, role-based access control, and secure bot management to ensure compliance with industry standards and regulations.",
    testimonial:
      "If you do outreach and haven't checked out Pitchbox, you're doing yourself a disservice. Smart product!",
    author: "Eppie Vojt, Red Ventures",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-3.jpg",
    authSrc: "/st-images/Eppie-Vojt.jpg",
    imagePosition: "right",
  },
];

const FeatureSection = () => {
  return (
    <Container className="pt-24 lg:pt-32 ">
      <div className="">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  feature.imagePosition === "left" ? "md:order-2" : ""
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h2>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <a href="#" className="group inline-block relative">
                  <div
                    className="flex gap-2 items-center after:content-[''] after:absolute after:left-0 after:-bottom-0 
                    after:h-[1px] after:w-0 after:bg-[#1198EB] after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    <p className="text-[#1198EB] font-semibold text-sm sm:text-base">
                      {feature.learnMore}
                    </p>
                    <ArrowRight className="h-4 w-4 text-[#1198EB]" />
                  </div>
                </a>

                {/* Testimonial */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                      <Image
                        className="h-full w-full object-cover rounded-full"
                        src={feature.authSrc}
                        alt={feature.author}
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-sm sm:text-base text-gray-700">
                        "{feature.testimonial}"
                      </blockquote>
                      <cite className="text-sm sm:text-base text-gray-700 italic">
                        — {feature.author}
                      </cite>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div
                className={`${
                  feature.imagePosition === "left" ? "md:order-1" : ""
                }`}
              >
                <div className="w-full max-w-md lg:max-w-full h-auto">
                  <Image
                    className="w-full h-auto object-contain"
                    src={feature.imgSrc}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Companies = () => {
  return (
    <>
      <div>
        <div className="my-12 ">
          <h3 className="text-gray-800 text-[24px] text-center ">
            Helping the very best brands, publishers, and agencies promote their
            content.
          </h3>
        </div>
        <LogoGrid />
      </div>

      <FeatureSection />
    </>
  );
};
export default Companies;
