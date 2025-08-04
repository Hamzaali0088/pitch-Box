import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import FooterBlock from "../../components/container/case-studies/footerBlock";
import HeroSection from "../../components/container/case-studies/heroSection";
import DisplayCards from "../../components/container/case-studies/DisplayCards";
import CaseStudyCard from "../../components/common/CaseStudyCard";

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
        secondBtnText=" talk to sales"
      />
      <Footer />
    </>
  );
};
export default CaseStudies;
