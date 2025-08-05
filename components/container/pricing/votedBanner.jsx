import React, { useState } from "react";
import {
  Play,
  ChevronDown,
  Target,
  Waypoints,
  CirclePlus,
  CircleMinus,
} from "lucide-react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Image from "next/image";

const VotedBanner = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      ques: "Do I need to sign a contract or make a long-term commitment?",
      ans: "No, there is no contract or long-term commitment required! Our plans are flexible and available on a monthly or yearly basis. You can change your plan or cancel your subscription at any time.",
    },
    {
      ques: "Do you offer a free trial?",
      ans: "Yes, we offer a free trial that includes expert team training led by our seasoned account managers. You can choose a hands-on experience with guided setup and training or opt for a do-it-yourself trial to explore Pitchbox at your own pace.\nYou will quickly discover how Pitchbox can help you find link opportunities, get verified prospects, send outreach emails, and build backlinks.",
    },
    {
      ques: "What type of businesses can benefit from using Pitchbox?",
      ans: "Pitchbox is used by link builders and outreach teams of all sizes. From big brand and publishers to boutique SEO and PR agencies, and even solo affiliate site owners. Pitchbox can help streamline your outreach process, automate tedious tasks, and save you loads of time.",
    },
    {
      ques: "Can I import data from another outreach tool?",
      ans: "Yes, Pitchbox allows you to easily import your contacts from a variety of sources, such as CSV files, Excel spreadsheets, and popular CRM platforms, making it easy to migrate from another system and organize your outreach campaigns.",
    },
    {
      ques: "Do you offer any special programs for nonprofits?",
      ans: "We believe in giving back. Please contact us to learn more about our special program for nonprofits.",
    },
    {
      ques: "Is there a limit to how many campaigns I can store?",
      ans: "There is no limit to the number of contacts or link opportunities you can store in your account. Unlimited contacts and opportunities are included on all plans.",
    },
  ];

  return (
    <FullContainer className="bg-[#F2F3F5]">
      {/* Awards Section */}
      <Container className="py-28">
        <div className="px-4">
          <div className="text-center mb-4">
            <h2 className="text-[40px] font-medium text-gray-800 mb-2">
              VOTED #1 SOFTWARE 5 YEARS IN A ROW
            </h2>
          </div>
          <div className="w-[700px]  h-[200px] mx-auto ">
            <Image
              width={200}
              height={200}
              src="/st-images/g2-2023-banner.webp"
              alt="award banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <div className="bg-[#1E2939] py-24">
        <Container className="px-5">
          <div className="grid md:grid-cols-2">
            {/* Pitchbox for Agencies */}
            <div className="text-white border-gray-700 border-r px-16 py-8">
              <h3 className="text-left text-[30px] font-bold mb-6">
                Pitchbox for Agencies
              </h3>

              <ul className="space-y-3 text-white">
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Organize data for a multi-client environment
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Leverage persona management
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Promote team collaboration
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Connect favorite SEO tools
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Generate white-label client reports
                </li>
              </ul>
            </div>

            {/* Pitchbox for In-house Teams */}
            <div className="text-white  px-16 py-8  ">
              <h3 className="text-[30px] font-bold mb-6">
                Pitchbox for In-House Teams
              </h3>
              <ul className="space-y-3 text-white">
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Consolidate all link building activities
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Utilize integrations for visibility and insights
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Effectively manage outreach pipeline
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Boost team collaboration & foster productivity
                </li>
                <li>
                  <span className="text-blue-500 mr-4">✓</span>
                  Track user behavior and guarantee data security
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Video Testimonial Section */}
      <div className="bg-gray-100 py-24">
        <Container className="px-5 ">
          <div className="flex flex-col lg:flex-row items-center relative">
            {/* Video Player */}
            <div className="lg:w-1/2 w-full z-10 relative">
              <iframe
                src="https://fast.wistia.net/embed/iframe/zrn2tkqo7z?dnt=1"
                allowfullscreen
                frameborder="0"
                width="580"
                height="360"
              ></iframe>
            </div>

            <div className="lg:w-1/2 lg:-ml-10 lg:mt-0 mt-8 w-full">
              <div className="">
                <TestimonialSection />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24">
        <Container className="px-5">
          <div className="mb-12">
            <h2 className="text-[40px] font-medium leading-relaxed text-center text-gray-800 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[24px] text-center leading-relaxed text-gray-700">
              Answers to common questions about features and pricing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="group w-full text-left py-6 flex justify-between items-center duration-300  transition-colors cursor-pointer"
                >
                  <span className="text-[18px] font-semibold text-gray-900">
                    {faq.ques}
                  </span>
                  {openFaq === index ? (
                    <CircleMinus className="w-6 h-6 text-gray-500 transition-transform duration-300 group-hover:text-black rotate-180" />
                  ) : (
                    <CirclePlus className="w-6 h-6 text-gray-500 transition-transform duration-300 rotate-180 group-hover:text-black" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 text-[18px] leading-relaxed text-gray-700">
                    <p>{faq.ans}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </FullContainer>
  );
};

function QuoteIcon({ className = "" }) {
  return (
    <svg
      className={`quote-icon ${className}`}
      fill="none"
      height="57"
      viewBox="0 0 58 57"
      width="58"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="quote-top-icon-a"
          gradientUnits="userSpaceOnUse"
          x1="21.5"
          x2="44"
          y1="0.73633"
          y2="56.7363"
        >
          <stop offset="0" stopColor="#0069b5" />
          <stop offset="1" stopColor="#0069b5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M14.419 31.0272h10.6245v25.7091H0l.00000225-25.7091L10.6245.736329l9.3597.000001zm32.9565 0h10.6245v25.7091H32.9565V31.0272l10.6245-30.290871 9.3597.000001z"
        fill="url(#quote-top-icon-a)"
      />
    </svg>
  );
}

function TestimonialSection() {
  return (
    <section className="relative bg-[#1598E9] z-0 text-white px-24 py-24 shadow-2xl">
      {/* Top Quote Icon */}
      <div className="absolute top-16 left-16">
        <QuoteIcon className="w-12 h-12" />
      </div>

      <blockquote className="italic text-[24px] leading-relaxed">
        Pitchbox is the most insane CRM you could ever want for outreach and
        link building. Pitchbox is incredible for any outreach communication.
      </blockquote>
      <div className="text-white mt-4">
        <div className="font-bold text-lg mb-1">Stewart Dunlop</div>
        <div className="text-blue-200 uppercase tracking-wider text-sm">
          LINKBUILDER.IO
        </div>
      </div>

      {/* Bottom Quote Icon */}
      <div className="absolute bottom-0 right-0 transform rotate-180">
        <QuoteIcon className="w-24 h-24" />
      </div>
    </section>
  );
}

export default VotedBanner;
