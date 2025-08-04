import Block from "../../components/common/Block";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import FooterBlock from "../../components/container/case-studies/footerBlock";
import CenteredTestimonialWithLogo from "../../components/container/pricing/centeredTestimonialWithLogo";
import SubscriptionSection from "../../components/container/pricing/subscriptionSection";
import VotedBanner from "../../components/container/pricing/votedBanner";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <SubscriptionSection />
      <VotedBanner/>
      <CenteredTestimonialWithLogo/>
      <Block
        title="Are you ready to put the best link building practices to the test with Pitchbox?"
        desc=" Get a Free Trial of Pitchbox and see how it can improve your link building."
        btn={true}
        btnText="try for free"
        bgColor="bg-[#1198EB]"
        link="/signup"
      />
      <Footer />
    </>
  );
};
export default Pricing;
