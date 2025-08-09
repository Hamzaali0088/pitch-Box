import Footer from "../../../components/common/Footer";
import HeroSectionWithBtn from "../../../components/common/heroSectionWithBtn";
import Navbar from "../../../components/common/Navbar";
import FooterBlock from "../../../components/container/case-studies/footerBlock";
import DisplayCards from "../../../components/container/reports/displayCards";

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
      <DisplayCards />

      <FooterBlock
        bgColor="bg-[#1198EB]"
        btnStyle="border bg-white border-[#1198EB] text-[#1198EB] hover:border-white hover:text-white hover:bg-[#1198EB]"
        secondBtnStyle="border bg-[#1198EB] border-white text-white hover:border-[#1198EB] hover:text-[#1198EB] hover:bg-white"
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
