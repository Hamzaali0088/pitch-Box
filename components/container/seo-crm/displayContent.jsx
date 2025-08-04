import SectionCard from "../../common/cardComponent";
import Container from "../../common/Container";
import TestimonialCard from "../../common/TestimonialCard";
import FullContainerCard from "../seo-email-client/caseStudyCard";

export default function DisplayContent() {
  return (
    <>
      <Container className="py-8 sm:py-10 bg-white lg:py-12">
        <SectionCard
          tagImgSrc="/st-images/icon-red-36 (1).svg"
          tag="THE METRICS YOU TRUST"
          title="SEO Centric"
          desc="Pitchbox’s link building CRM is built from the ground up with a website-based data structure. Keep your eyes on the prize (links) with SEO Metrics and Link data deeply embedded into the user interface."
          imgSrc="/st-images/seo-centric (1).png"
          reverse={false}
          learnMore={false}
        />
        <div className="py-6">
          <TestimonialCard
            name="Michael Geneles"
            role="Co-founder, Pitchbox "
            quote="This is not your dad’s Rolodex type CRM. Traditional CRMs are just cumbersome address books."
            imgSrc="/st-images/testimonials-author-photo-100988990 (1).jpg"
          />
        </div>

        <SectionCard
          tagImgSrc="/st-images/icon-red-37.svg"
          tag="FULL FEATURED CRM"
          title="Relationship Building Made Simple"
          desc="All Opportunity Data in one centralized data hub: Emails, Communications, Tasks, Notes, Prospect Details, and Team Actions are all connected with one common denominator. No more scattered spreadsheets and fragmented data."
          imgSrc="/st-images/relationship-building-made-simple (1).webp"
          reverse={true}
          learnMore={false}
        />
        <div className="py-6">
          <TestimonialCard
            name="Alex Gopshtein"
            role="Co-founder, Pitchbox "
            quote="Other CRMs are made for salespeople. Our CRM is built for SEOs. With the right tools, link builders win more deals and build more links."
            imgSrc="/st-images/alex-gopshtein-100x100.png"
          />
        </div>
        <SectionCard
          tagImgSrc="/st-images/icon-red-38.svg"
          tag="ACTIONABLE INSIGHTS"
          title="CRM + Email = Efficiency"
          desc="CRM and Email go together like peanut butter and jelly, like tea and biscuits, like bacon and eggs…You get the gist."
          imgSrc="/st-images/crm-email-efficiency.webp"
          reverse={false}
          learnMore={false}
        />
        <div className="py-6">
          <TestimonialCard
            name="Alexandra Tachalova"
            role="Founder, Digital Olympus "
            quote="Direct email integration facilitates higher levels of personalization and better-informed conversations, producing higher response and conversion rates."
            imgSrc="/st-images/alexandra-tachalova-100x100.png"
          />
        </div>
        <SectionCard
          tagImgSrc="/st-images/icon-red-39.svg"
          tag="TOP-DOWN OVERVIEW"
          title="Pipeline"
          desc="Get full visibility into your outreach pipeline in real-time and find opportunities that need your immediate attention. Group leads by stage, age, relationship status, and SEO metrics. Then take the necessary steps to turn them into wins."
          imgSrc="/st-images/pipeline.webp"
          reverse={true}
          learnMore={false}
        />
        <div className="py-6">
          <TestimonialCard
            name="Stephan Spencer"
            role="Co-Author of the Best Seller, The Art of SEO "
            quote="With high-level and granular views, you can take a holistic perspective while making sure that your hot leads never go cold."
            imgSrc="/st-images/stephan-spencer-100x100.png"
          />
        </div>
      </Container>
      <FullContainerCard
        title="Case Study"
        desc="To manage outreach campaigns for 60+ clients, you need to use the right tools. Learn how Visiture was able to bring their full end-to-end outreach management under one roof and how they efficiently increased campaign volume with Pitchbox."
        imgSrc="/st-images/visiture-case-study-with-logo-1000x539.png"
      />
    </>
  );
}
