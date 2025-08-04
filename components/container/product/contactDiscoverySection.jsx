"use client";
import Image from "next/image";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

const ContactDiscoverySection = () => {
  return (
    <FullContainer>
      <section className="relative bg-[#35adc0] py-20 overflow-hidden z-1">
      {/* Diagonal Background */}
      <div className="absolute inset-0 -z-1">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="rgba(43, 168, 190)" points="0,0 100,100 0,100" />
        </svg>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center text-white mb-10 px-4 md:px-8">
        <h2 className="text-3xl md:text-[40px] font-medium leading-relaxed mb-2">
          Contact Discovery
        </h2>
        <p className="text-base md:text-xl leading-relaxed">
          Automatically discover contact details for bloggers,
          <br className="hidden md:block" /> webmasters, and influencers in
          seconds.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center mb-12 px-4 md:px-8 z-10">
        <Container className="w-full">
          <Image
            width={1200}
            height={600}
            src="/st-images/img-red-3.webp"
            alt="Contact Card Middle"
            className="w-full h-auto object-contain"
          />
        </Container>
      </div>

      {/* Info Blocks */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto px-4 md:px-8 z-10">
        {/* Block 1 */}
        <div className="bg-[#35adc0] text-white px-6 py-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] flex items-start gap-4 w-full md:w-1/2">
          <Image
            width={80}
            height={80}
            src="/st-images/icon-red-1.svg"
            alt="Email Icon"
            className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0"
          />
          <div>
            <h4 className="text-lg font-semibold mb-2 leading-relaxed">
              Email Data
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              Our advanced proprietary scoring algorithm analyzes over 100 data
              points to rank your discovered contacts by OEP™ (Outreach
              Engagement Probability).
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="bg-[#35adc0] text-white px-6 py-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] flex items-start gap-4 w-full md:w-1/2">
          <Image
            width={64}
            height={64}
            src="/st-images/icon-red-2.svg"
            alt="Profile Icon"
            className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
          />
          <div>
            <h4 className="text-lg font-semibold mb-2 leading-relaxed">
              Enhanced Contact Footprint
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              Names, social profiles, demographic details, and associated
              publications to learn about the people behind the domains.
            </p>
          </div>
        </div>
      </div>
    </section>
    </FullContainer>
  );
};

export default ContactDiscoverySection;
