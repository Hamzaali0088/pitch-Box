import Image from "next/image";
import SectionCard from "../../common/cardComponent";
import Container from "../../common/Container";
import UniversalConnectivitySection from "./universalConnectivitySection";
import TestimonialCard from "../../common/TestimonialCard";
import FullContainerCard from "./caseStudyCard";

export default function DisplaySectionCards() {
  return (
    <>
      <Container className="py-8 sm:py-10 bg-white lg:py-12">
        <SectionCard
          tagImgSrc="/st-images/icon-red-20.svg"
          tag="PROCESS & PRIORITIZE"
          title="SEO Inbox"
          desc="Your favorite SEO metrics built right into the Inbox. Make quick decisions based on DR, DA and Traffic data."
          imgSrc="/st-images/img-red-8.webp"
          reverse={true}
          learnMore={false}
        />

        <SectionCard
          tagImgSrc="/st-images/icon-red-21.svg"
          tag="VERSATILE FILTERS"
          title="Multi-Persona Management"
          desc="Manage communications across multiple clients, email accounts, projects, and campaigns."
          imgSrc="/st-images/persona-management.webp"
          reverse={false}
          learnMore={false}
        />

        <SectionCard
          tag="ORGANIZATION"
          tagImgSrc="/st-images/icon-red-22.svg"
          title="Declutter Your Inbox"
          desc="The email engine automatically removes unrelated messages and unnecessary email clutter. Spend more time on ready-to-close opportunities and win more links."
          imgSrc="/st-images/img-red-16-768x665.png"
          reverse={true}
          learnMore={false}
        />

        <SectionCard
          tag="ADVANCED FEATURES"
          tagImgSrc="/st-images/icon-red-23.svg"
          title="Work & Collaborate Seamlessly"
          desc="Keep your sanity no matter the size of your Inbox. Snooze, schedule, reassign, and easily collaborate with your teammates."
          imgSrc="/st-images/collaborate.png"
          learnMoreUrl="#"
          reverse={false}
          learnMore={false}
        />
        <SectionCard
          tag="INBOX ZERO METHODOLOGY"
          tagImgSrc="/st-images/icon-red-24.svg"
          title="Stay Focused on Actionable Conversations"
          desc="Prioritize and focus on important conversations so you can build more links."
          imgSrc="/st-images/img-red-18-768x544.png"
          learnMoreUrl="#"
          reverse={true}
          learnMore={false}
        />
      </Container>
      <UniversalConnectivitySection />
      <Container className="bg-white pt-30 pb-10 justify-center items-center ">
        <TestimonialCard
          name="Gareth Simpson"
          role="SEEKER Digital"
          quote="Scaled outreach is not manageable through a traditional inbox. With Pitchbox we can easily manage our inbox across many different campaigns and stay organized with our communications."
          imgSrc="/st-images/gareth-simpson.jpg"
        />
      </Container>
      <FullContainerCard
        title="Case Study"
        desc="Managing email and communications for professional outreach teams comes with its own unique set of challenges. See how Seeker Digital was able to take on more clients and scale outreach communications with Pitchbox."
        imgSrc="/st-images/img-red-12-1000x539.jpg"
      />
    </>
  );
}
