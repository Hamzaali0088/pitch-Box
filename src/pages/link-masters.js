import Block from "../../components/common/Block";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/container/link-masters/heroSection";
import PodcastGrid from "../../components/container/link-masters/podcastGrid";

const LinkMasters = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PodcastGrid />
      <Block
        title="This podcast is produced by Pitchbox"
        desc=" Want to learn more about our End-to-End Link Building Software?"
        btn={true}
        btnText="Start here"
        bgColor="bg-[#1198EB]"
        link="/signup"
      />
      <Footer />
    </>
  );
};
export default LinkMasters;
