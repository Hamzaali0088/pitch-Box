import Footer from "../../../components/common/Footer";
import HeroSectionWithBtn from "../../../components/common/heroSectionWithBtn";
import Navbar from "../../../components/common/Navbar";
import FooterBlock from "../../../components/container/case-studies/footerBlock";
import DisplaySectionCards from "../../../components/container/seo-email-client/displaySectionCards";
import UniversalConnectivitySection from "../../../components/container/seo-email-client/universalConnectivitySection";

const SeoEmailClient = () => {
  return (
    <>
      <Navbar />
      <HeroSectionWithBtn
        bgColor="bg-[#2a254a]"
        title="SEO Email Client"
        desc="Supercharged Email Management made specifically for link builders."
        btnText="get a demo"
        btnStyle="bg-blue-400 hover:bg-[#2a254a] text-white hover:text-blue-400 hover:border hover:border-blue-400 "
        imgSrc="/st-images/email-client.webp"
        btnLink="/demo"
        secondBtnDisplay={false}
      />
      <DisplaySectionCards />

      <FooterBlock
        title="Simply email management with Pitchbox"
        desc="See how Pitchbox can save you hundreds of hours managing your outreach & communications."
        btnText="book a demo"
        btnTextLink="/demo"
        secondBtnTextLink="/contact-us"
        secondBtnText=" talk to sales"
       bgColor="bg-[#1198EB]"
        btnStyle="border text-[#1198EB] bg-white hover:text-white hover:bg-[#1198EB] "
        secondBtnStyle="border text-white bg-[#1198EB] hover:text-[#1198EB] hover:bg-white border-white"
      />
      <Footer />
    </>
  );
};
export default SeoEmailClient;
