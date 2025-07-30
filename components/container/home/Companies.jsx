"use client";

import { ArrowRight } from "lucide-react";
import Container from "../../common/Container";
import Image from "next/image";

const logos = [
  { id: 1, title: "skyscanner", imgSrc: "/st-images/skyscanner.webp" },
  { id: 2, title: "dow", imgSrc: "/st-images/dow.webp" },
  { id: 3, title: "offers", imgSrc: "/st-images/offers.webp" },
  { id: 4, title: "freshbooks", imgSrc: "/st-images/freshbooks.webp" },
  { id: 5, title: "aboutcom", imgSrc: "/st-images/aboutcom.webp" },
  { id: 6, title: "db", imgSrc: "/st-images/db.webp" },
  { id: 7, title: "copypress", imgSrc: "/st-images/copypress.webp" },
  { id: 8, title: "ipullrank", imgSrc: "/st-images/ipullrank.webp" },
  { id: 9, title: "outspoken", imgSrc: "/st-images/outspoken.webp" },
  { id: 10, title: "pointvisible", imgSrc: "/st-images/pointvisible.webp" },
  { id: 11, title: "hoth", imgSrc: "/st-images/hoth.webp" },
  { id: 12, title: "movedigital", imgSrc: "/st-images/movedigital.webp" },
  { id: 13, title: "webris", imgSrc: "/st-images/webris.webp" },
  { id: 14, title: "maxcdn", imgSrc: "/st-images/maxcdn.webp" },
  { id: 15, title: "imi", imgSrc: "/st-images/imi.webp" },
];
const features = [
  {
    title: "Find bloggers, publishers, and influencers in record time",
    description:
      "With multiple prospecting profiles and intuitive keyword search, Pitchbox allows you to find influencers in your niche in a matter of seconds. Integration with top SEO providers ensures that you only pull back the most authoritative publishers.",
    testimonial:
      "Unlike many outreach platforms that are clunky and confusing, Pitchbox is a breeze to use.",
    author: "Brian Dean, @Backlinko",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-1.jpg",
    imagePosition: "right",
    authSrc: "/st-images/Brian-Dean.jpg",
  },
  {
    title: "Customizable, personalized outreach and follow up",
    description:
      "Save hundreds of hours each month while being in total control of your messaging. Customize each outreach email to your target opportunities, without manual input, and automatically follow up with prospects who haven't responded, boosting response rates 62% on average.",
    testimonial:
      "Pitchbox is a beast of a machine! The automated follow-ups work better than anything I've ever seen.",
    author: "Bill Sebald, Greenlane",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-2.jpg",
    authSrc: "/st-images/Bill-Sebald.jpg",
    imagePosition: "left",
  },
  {
    title: "Make data-driven decisions",
    description:
      "Track each step of the outreach process, from broad strategy down to campaign and user specifics. Using Pitchbox's detailed Management, Client, and Team reports, managers and team members alike can refine their outreach strategy to optimize efficiency and maximize results.",
    testimonial:
      "If you do outreach and haven't checked out Pitchbox, you're doing yourself a disservice. Smart product!",
    author: "Eppie Vojt, Red Ventures",
    learnMore: "LEARN MORE",
    imgSrc: "/st-images/feature-3.jpg",
    authSrc: "/st-images/Eppie-Vojt.jpg",
    imagePosition: "right",
  },
];

const LogoGrid = () => {
  return (
    <Container className="">
      <div className="">
        <div className="my-12 ">
          <h3 className="text-gray-800 text-[24px] text-center ">
            Helping the very best brands, publishers, and agencies promote their
            content.
          </h3>
        </div>
        
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-2">
            {logos.map((logo) => (
              <div key={logo.id} className="h-25">
                <Image
                  className="h-full w-full object-contain"
                  src={logo.imgSrc}
                  alt={logo.title}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
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
                className={`space-y-6 ${feature.imagePosition === "left" ? "md:order-2" : ""
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
                className={`${feature.imagePosition === "left" ? "md:order-1" : ""
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
      <LogoGrid />
      <FeatureSection />
    </>
  );
};
export default Companies;
