import SectionCard from "../../common/cardComponent";
import Container from "../../common/Container";
import ContentBtnWrapper from "../../common/ContentBtnWrapper";
import FullContainerCard from "../seo-email-client/caseStudyCard";
import CenteredTestimonial from "./centeredTestimonial";
import PitchboxLookerPage from "./pitchboxLooker";

export default function DisplayCards() {
  return (
    <>
      <Container className="py-8 sm:py-10 bg-white lg:py-12">
        <SectionCard
          tagImgSrc="/st-images/icon-red-32.svg"
          tag="TRACK YOUR PROGRESS"
          title="Campaign Performance"
          desc="Get deep insights into outreach campaign performance and progression. Identify what worked and which campaigns still need your attention."
          imgSrc="/st-images/campaign-performance.webp"
          reverse={true}
          learnMore={false}
        />

        <SectionCard
          tagImgSrc="/st-images/icon-red-33.svg"
          tag="ACTIVITY OVERVIEW"
          title="Management Report"
          desc="Monitor your team’s activity and trends over time. Compare Month-over-Month (MoM), QoQ, and YoY stats. Make sure your goals are met."
          imgSrc="/st-images/management-report.webp"
          reverse={false}
          learnMore={false}
        />
        <div className="px-1">
          <ContentBtnWrapper
            title="Ready to Scale Link Building?"
            desc="See Pitchbox in action and get ready to be blown away!"
            btnText="book a demo"
            link="/demo"
          />
        </div>

        <SectionCard
          tag="SHOW OFF"
          tagImgSrc="/st-images/data-icon-5.svg"
          title="White-label Client Reports"
          desc="Impress your clients with customizable white-label reports. Link building is hard, so show how much work goes into it."
          imgSrc="/st-images/clilent-report.png"
          reverse={true}
          learnMore={false}
        />
        <SectionCard
          tag="MONITOR TEAM STATS"
          tagImgSrc="/st-images/icon-red-34.svg"
          title="Team Performance"
          desc="Analyze user performance to identify the strengths and weaknesses of your team members and avoid resource allocation mistakes."
          imgSrc="/st-images/team-performance-report.png"
          reverse={false}
          learnMore={false}
        />

      </Container>
      <CenteredTestimonial/>
      <Container className="bg-white">
         <SectionCard
          tagImgSrc="/st-images/data-icon-3.svg"
          tag="TRACK TAG DISTRIBUTION"
          title="Segments & Multivariate Testing"
          desc="Segment your target audiences, campaign types, content and link building strategies, and compare your KPIs between segments."
          imgSrc="/st-images/segments-report.png"
          reverse={true}
          learnMore={false}
        />
         <SectionCard
          tagImgSrc="/st-images/icon-red-35.svg"
          tag="TAKE A DEEP DIVE INTO DATA"
          title="Custom Data Analytics"
          desc="Aggregate and visualize business-critical data (costs, placement types, link categories, etc.) and derive actionable insights."
          imgSrc="/st-images/custom-data-analytics.png"
          reverse={false}
          learnMore={false}
        />
      </Container>

     <PitchboxLookerPage/>
    </>
  );
}
