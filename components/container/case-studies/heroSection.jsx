import Block from "../../common/Block";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";

const HeroSection = () => {
  return (
    <FullContainer className="mt-24 py-16 md:py-28 px-6 md:px-10 border bg-[linear-gradient(#eff4ff,_#eff4ff)] border-gray-50 ">
      <Container>
        <div className="px-0 md:px-20 bg[#eff4ff]">
          <div className="flex flex-col space-y-6 md:space-y-8 items-center justify-center text-center">
            <p className="text-black text-2xl sm:text-3xl md:text-[46px] font-medium leading-snug">
              Link Building Case Studies
            </p>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-[22px] max-w-3xl">
              Find out why Pitchbox is widely recognized as <span className="italic">The Most
              Comprehensive Platform for Link Building.</span>  Explore our case studies
              and success stories to see how you can also excel in link building
              outreach and achieve outstanding results.
            </p>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};
export default HeroSection;
