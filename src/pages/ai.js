import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import HeroSectionWithBtn from "../../components/common/heroSectionWithBtn";
import DisplayAICards from "../../components/container/ai/displayAiCards";
import FooterBlock from "../../components/container/case-studies/footerBlock";

const AI = () => {
  return (
    <>
      <Navbar />
      <HeroSectionWithBtn
        bgColor="bg-[#2A1954]"
        title="AI Tools for Link Building"
        desc="Speed up your link building process with AI Personalization, AI Template Assistant, AI Reply and more."
        btnText="try for free"
        btnStyle="bg-blue-400 hover:bg-[#2A1954] text-white hover:border hover:border-blue-400 "
        imgSrc="/st-images/reports-and-analytics.webp"
        btnLink="/signup"
        secondBtnDisplay={true}
        secondBtnLink="/demo"
        secondBtnText="book a demo"
        secondBtnStyle="border border-blue-400 text-white bg-[#2A1954] hover:bg-blue-400"
      />
      <DisplayAICards />
      <FooterBlock
        bgColor="bg-[#2A1954]"
        title="Ready to learn more? Schedule a private demo to see Pitchbox in action."
        desc="Your link building team will thank you 👇🏻"
        btnText="try for free"
        btnStyle="bg-white text-[#2A1954] hover:bg-[#2A1954] hover:text-white border hover:border-white"
        secondBtnStyle="bg-[#2A1954] text-white hover:bg-white hover:text-[#2A1954] border border-white"
        secondBtnText="book a demo"
        btnTextLink="/signup"
        secondBtnTextLink="/demo"
      />
      <Footer />
    </>
  );
};
export default AI;
