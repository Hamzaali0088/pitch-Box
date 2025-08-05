import React from "react";
import SectionCard from "../../common/cardComponent";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import Image from "next/image";
import VideoCard from "./videoCard";

const DisplayAICards = () => {
  return (
    <>
      <Container className="space-y-10 my-16 px-1">
        <SectionCard
          tagImgSrc="/st-images/icon-red-3.svg"
          tag="Write Better Link Building Emails"
          title="AI Template Assistant"
          desc="Leverage a custom-tuned AI model powered by a dataset of tens of millions of outreach emails and their actual results. Imagine saving hours on crafting engaging email templates that not only capture attention but also drive tangible results – more links, more engagement, and ultimately, more revenue."
          imgSrc="/st-images/img-red-4.webp"
          reverse={true}
        />
        <SectionCard
          tagImgSrc="/st-images/icon-red-8.svg"
          tag="Hyper-personalized emails"
          title="AI Personalization"
          desc="Automatically analyze hundreds of websites, perform data research, qualify based on relevance, and personalize outreach based on your custom criteria. Send hyper-relevant emails at scale, saving time and boosting response rates. Build meaningful connections effortlessly with intelligent, context-aware AI personalization."
          imgSrc="/st-images/img-red-6.webp"
          reverse={false}
        />

        <SectionCard
          tag="Respond Faster"
          tagImgSrc="/st-images/icon-red-9.svg"
          title="AI Reply"
          desc="Tired of spending countless hours crafting the perfect email responses for your prospects? AI Reply is here to streamline your inbox experience. Trained on millions of link building emails, our AI knows exactly what to say to propel conversations forward. Generate contextually accurate responses that address your prospects’ queries, creating meaningful interactions that bring you closer to landing links."
          imgSrc="/st-images/img-red-7.webp"
          reverse={true}
        />

        <SectionCard
          tag="Find Relevant Websites"
          tagImgSrc="/st-images/Tasks.svg"
          title="AI Keyword Assistant"
          desc="Uncover the most relevant websites for outreach with just a few clicks. Our AI Keyword Assistant goes beyond simple keyword discovery. It strategically selects highly relevant keywords, optimizing your prospecting efforts. The result? Precise suggestions that ensure your campaigns connect with the right prospects, boosting efficiency and success in your outreach."
          imgSrc="/st-images/csv-campaign-done.png"
          reverse={false}
        />
      </Container>
      <FullContainer className="bg-[#F9F7FF]">
        <Container className="py-24">
          <div className="text-center mb-16">
            <div className="space-y-4 flex flex-col justify-center items-center mb-12">
              <p className="text-gray-700 text-sm leading-relaxed tracking-wide uppercase ">
                Results
              </p>
              <h2 className="text-4xl md:text-[40px] max-w-4xl leading-snug font-medium text-gray-800">
                AI-Powered Link Building: Maximize Efficiency, Minimize Costs
              </h2>
              <p className="text-[20px] text-gray-600 max-w-4xl leading-relaxed">
                Leverage AI Personalization and AI Qualification to slash
                man-hours, supercharge productivity, and significantly reduce
                link building costs while achieving higher-quality outreach
                outcomes.
              </p>
            </div>
          </div>
          <div className=" relative max-w-3xl px-6 mb-12 mx-auto">
            <blockquote className="italic text-gray-700 font-medium text-[28px] leading-relaxed text-center">
              Pitchbox has really helped us accelerate our link building.
            </blockquote>
            <div className="absolute -top-4 -left-4 text-6xl text-blue-400 font-serif">
              <svg
                height="18"
                width="26"
                viewBox="0 0 26 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6692015 18V7.55L26 0v18zM0 18V7.55L10.3307985 0v18z"
                  fill="#1198eb"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-blue-400 font-serif">
              <svg
                height="18"
                width="26"
                viewBox="0 0 26 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6692015 18V7.55L26 0v18zM0 18V7.55L10.3307985 0v18z"
                  fill="#1198eb"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                width={200}
                height={200}
                src="/st-images/gareth-simpson.jpg"
                alt="gareth-simpson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center ">
              <p className="font-semibold text-gray-800 text-lg">
                Gareth Simpson
              </p>
              <p className="text-gray-500 text-sm">SEEKER Digital</p>
            </div>
          </div>
        </Container>
        <Container className="py-24 space-y-30">
          <VideoCard
            link="https://fast.wistia.net/embed/iframe/ffbsllgzrn?dnt=1#?secret=eWk1aWKW5S"
            quote="The way that you can use AI to create outreach mails is just awesome!"
            author="Jason Morris"
            role="CEO / Profit Engine"
          />
          <VideoCard
            link="https://fast.wistia.net/embed/iframe/vungv4sfjk?dnt=1#?secret=AcPekANZxx"
            quote="The team are really enjoying the new AI Assistant. We’ve built up a thousand new contacts last month in France for bloggers."
            author="Karl Hudson"
            role="Founder / Searcharoo"
            reverse
          />
        </Container>
      </FullContainer>
    </>
  );
};

export default DisplayAICards;
