import Footer from "../../../components/common/Footer";
import HeroSectionWithBtn from "../../../components/common/heroSectionWithBtn";
import Navbar from "../../../components/common/Navbar";
import FooterBlock from "../../../components/container/case-studies/footerBlock";
import DisplayCards from "../../../components/container/reports/displayCards";
import DisplaySectionCards from "../../../components/container/seo-email-client/displaySectionCards";
import UniversalConnectivitySection from "../../../components/container/seo-email-client/universalConnectivitySection";

const Reports = () => {
  return (
    <>
      <Navbar />
      <HeroSectionWithBtn
        bgImage="/st-images/img-red-33.jpg"
        title="Reports and Analytics"
        desc="Reports and Analytics for ROI-focused Link Builders"
        btnText="book a demo"
        btnStyle="bg-blue-400 hover:bg-[#403A84] text-white hover:border hover:border-blue-400 "
        imgSrc="/st-images/reports-and-analytics.webp"
        btnLink="/demo"
        secondBtnDisplay={true}
        secondBtnLink="/contact-us"
        secondBtnText="talk to sales"
        secondBtnStyle="border border-blue-400 text-white bg-[#403A84] hover:bg-blue-400"
      />
      <DisplayCards/>

      <FooterBlock
        title="Outsmart your competition and build more links with Pitchbox"
        desc="See how Pitchbox can save you hundreds of hours building and managing link building."
        btnText="book a demo"
        btnTextLink="/demo"
        secondBtnTextLink="/contact-us"
        secondBtnText=" talk to sales"
      />
      <Footer />
    </>
  );
};
export default Reports;
