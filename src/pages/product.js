import Block from "../../components/common/Block";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import CardsSection from "../../components/container/product/cardsSection";
import ContactDiscoverySection from "../../components/container/product/contactDiscoverySection";
import CRMLinkBuildersLayout from "../../components/container/product/crmLinkBuilder";
import DataSecuritySection from "../../components/container/product/dataSecuritySection";
import FullStackProspectingSection from "../../components/container/product/fullStackProspectingSection";
import LinkBuildersTestimonial from "../../components/container/product/linkBuildersTestimonial";
import LinkBuildingSection from "../../components/container/product/linkBuildingSection";
import LinkMonitoringSection from "../../components/container/product/linkMonitoringSection";
import PowerfulReportsLayout from "../../components/container/product/powerfulReportsSection";

const Product = () => {
  return (
    <>
      <Navbar />
      <LinkBuildingSection />
      <FullStackProspectingSection />
      <ContactDiscoverySection />
      <CardsSection />
      <CRMLinkBuildersLayout />
      <PowerfulReportsLayout />
      <LinkMonitoringSection />
      <DataSecuritySection />
      <LinkBuildersTestimonial />
      <Block
        title="Tired of feeling like you’re trying to fit a square peg in a round hole with your current link building tools?"
        desc=" Get a demo of Pitchbox and see how it can skyrocket your link building efforts."
        btn={true}
        btnText="try for free"
        bgColor="bg-[#1198EB]"
        link="/signup"
      />
      <Footer />
    </>
  );
};
export default Product;
