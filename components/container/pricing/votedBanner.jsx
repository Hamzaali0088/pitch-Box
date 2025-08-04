import React, { useState } from "react";
import { Play, ChevronDown, Target, Waypoints } from "lucide-react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Image from "next/image";

const VotedBanner = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Do I need to sign a contract or make a long-term commitment?",
    "Do you offer a free trial?",
    "What type of businesses can benefit from using Pitchbox?",
    "Can I import data from another outreach tool?",
    "Do you offer specialized pricing for nonprofits?",
    "Is there a limit to how many campaigns I can setup?",
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
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Video Player */}
            <div className="lg:w-1/2">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <div className="text-white text-sm">
                      <div className="font-semibold">
                        Building Layer of Scale
                      </div>
                      <div className="text-gray-300">
                        How to Build Your System
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:w-1/2">
              <div className="bg-blue-500 text-white p-8 rounded-lg">
                <blockquote className="text-lg mb-4">
                  "Pitchbox is the most mature CRM you could ever want for
                  outreach and link building - Pitchbox is essential for any
                  outreach communication."
                </blockquote>
                <div className="text-blue-100">
                  <div className="font-semibold">- Customer Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((question, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      This is where the answer content would go. Each FAQ item
                      can be expanded to show detailed information about the
                      question asked.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FullContainer>
  );
};

export default VotedBanner;
