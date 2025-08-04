import Block from "../../../components/common/Block";
import Footer from "../../../components/common/Footer";
import HeroSectionWithBtn from "../../../components/common/heroSectionWithBtn";
import Navbar from "../../../components/common/Navbar";
import DisplayContent from "../../../components/container/seo-crm/displayContent";

const SeoCRM = () => {
  return (
    <>
      <Navbar />
      <HeroSectionWithBtn
        bgColor="bg-[#203B79]"
        title="SEO CRM"
        desc="Specialty CRM built for Link Builders, PR, and Outreach Professionals"
        btnText="get a demo"
        btnStyle="bg-[#1203B79] hover:bg-white border border-white text-white hover:text-gray-900 "
        imgSrc="/st-images/seo-crm.webp"
        btnLink="/demo"
        secondBtnDisplay={false}
      />
      <DisplayContent />
      <Block
        title="Outsmart your competition and find better prospects with Pitchbox."
        desc=" See how Pitchbox can save you hundreds of hours prospecting for link opportunities."
        btn={true}
        btnText="book a demo"
        bgColor="bg-[#1198EB]"
        link="/demo"
      />
      <Footer />
    </>
  );
};
export default SeoCRM;
