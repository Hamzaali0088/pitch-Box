import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import FooterBlock from "../../components/container/case-studies/footerBlock";
import IntegrationSection from "../../components/container/integrations/integrationSection";

const Integrations = () => {
  return (
    <>
      <Navbar />
      <IntegrationSection />
      <FooterBlock
        title="Supercharge your business to work smarter, better, faster."
        desc="See how Pitchbox can save you hundreds of hours building and managing link building."
        btnText="book a demo"
        secondBtnText="talk to sales"
        btnTextLink="/demo"
        secondBtnTextLink="/contact-us"
        bgColor="bg-[#1198EB]"
        btnStyle="border bg-white text-[#1198EB] hover:text-white hover:bg-[#1198EB] hover:border-white"
        secondBtnStyle="border bg-[#1198EB] text-white hover:text-[#1198EB] hover:bg-white border-white"
      />
      <Footer />
    </>
  );
};
export default Integrations;
