import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import FooterBlock from "../../components/container/case-studies/footerBlock";
import HeroSection from "../../components/container/case-studies/heroSection";
import DisplayCards from "../../components/container/case-studies/DisplayCards";
import CaseStudyCard from "../../components/common/CaseStudyCard";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DisplayCards />
      <FooterBlock
        title="Outsmart your competition and build more links with Pitchbox"
        desc="See how Pitchbox can save you hundreds of hours building and managing link building."
        btnText="book a demo"
        btnTextLink="/demo"
        secondBtnTextLink="/contact-us"
        secondBtnText="talk to sales"
        bgColor="bg-[#1198EB]"
        btnStyle="border text-[#1198EB] bg-white hover:text-white hover:bg-[#1198EB] "
        secondBtnStyle="border text-white bg-[#1198EB] hover:text-[#1198EB] hover:bg-white border-white"
      />
      <Footer />
    </>
  );
};
export default CaseStudies;
