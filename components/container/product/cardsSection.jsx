import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionCard from "../../common/cardComponent";
import Container from "../../common/Container";
import TestimonialCard from "../../common/TestimonialCard";


export default function CardsSection() {
  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <SectionCard
        tagImgSrc="/st-images/icon-red-3.svg"
        tag="skyrocket productivity"
        title="Skill-Based Workflow"
        desc="Pitchbox’s workflow is built on GTD methodology and process-oriented principles. This streamlines your team’s operations and keeps them super efficient by design."
        imgSrc="/st-images/img-red-4.webp"
        learnMoreUrl="/skill-based-workflow"
        reverse={false}
        learnMore={true}
      />
      <TestimonialCard
        name="Michael King"
        role="Founder, iPullRank"
        quote="Pitchbox is better for scale for the simple fact that you can separate roles and really take the assembly line approach to outreach."
        imgSrc="/st-images/Michael-King-sm.jpg"
      />
      <div className="px-1 ">
        <Container className="relative rounded-lg text-white overflow-hidden  my-12">
          {/* Background Image - Heart Shape */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/st-images/cta-blue-bg.jpg"
            alt="bg-image"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content + Button Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 text-center md:text-left">
          {/* Left Content */}
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] leading-snug font-semibold mb-2">
              Ready to Scale Link Building?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px]">
              See Pitchbox in action and get ready to be blown away!
            </p>
          </div>

          {/* Right Button */}
          <a
            className="border uppercase px-6 sm:px-7 md:px-9 py-3 sm:py-4 font-semibold leading-relaxed tracking-widest transition-colors ease-in-out duration-200 text-blue-400 hover:bg-[#0A5ED0] bg-white text-[12px] sm:text-[13px] md:text-[14px] hover:text-white"
            href="/signup"
          >
            try for free
          </a>
        </div>
        </Container>
      </div>

      <SectionCard
        tagImgSrc="/st-images/icon-red-8.svg"
        tag="LINK OUTREACH"
        title="Outreach & Follow-up"
        desc="Our platform combines the power of SmartTemplates™, email sequencing, NSP (Natural Sending Patterns™), and personalization to ensure your outreach campaigns produce superior deliverability and response rates."
        imgSrc="/st-images/img-red-6.webp"
        learnMoreUrl="#"
        reverse={true}
        learnMore={true}
      />
      <TestimonialCard
        name="Bill Sebald"
        role="Founder, Greenlane Search Marketing"
        quote="Pitchbox is a beast of a machine! The automated follow-ups work better than anything I’ve ever seen."
        imgSrc="/st-images/Bill-Sebald.jpg"
      />

      <SectionCard
        tag="STAY ORGANIZED AT SCALE"
        tagImgSrc="/st-images/icon-red-9.svg"
        title="SEO Email Client"
        desc="Manage communications across multiple clients, campaigns, and projects. Easily collaborate with your team and never miss a beat with the first SEO email client built into the tool."
        imgSrc="/st-images/img-red-7.webp"
        learnMoreUrl="#"
        reverse={false}
        learnMore={true}
      />
      <TestimonialCard
        name="Gareth Simpson"
        role="SEEKER Digital"
        quote="Scaled outreach is not manageable through a traditional inbox. With Pitchbox we can easily manage our inbox across many different campaigns and stay organized with our communications."
        imgSrc="/st-images/gareth-simpson.jpg"
      />
      <SectionCard
        tag="Close the Gap"
        tagImgSrc="/st-images/Tasks.svg"
        title="Chasebox™"
        desc="A proactive take on lead management. Set chase-ups to keep your priority communications front and center so your team can chase hot leads and close the deal."
        imgSrc="/st-images/csv-campaign-done.png"
        learnMoreUrl="#"
        reverse={true}
        learnMore={false}
      />
    </Container>
  );
}
