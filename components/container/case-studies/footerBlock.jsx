import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";

const FooterBlock = ({title, desc,btnText,secondBtnText,btnTextLink,secondBtnTextLink}) => {
  return (
    <FullContainer className="py-30 border bg-[#1198EB] border-gray-50">
      <Container className="px-2">
        
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12">
            <div className=" w-full lg:w-1/2 lg:text-left text-center">
              <p className="text-white text-2xl sm:text-3xl md:text-[40px] font-medium leading-snug">
                {title}
              </p>
            </div>
            <div className="flex flex-col space-y-4 w-full lg:w-1/2 lg:text-left text-center">
              <p className="text-white text-base sm:text-lg md:text-[20px] leading-relaxed max-w-3xl">
                {desc}
              </p>
              <div className="flex flex-row gap-6 lg:justify-start justify-center">
                <a
                className="border uppercase px-5 sm:px-6 md:px-8 py-2 sm:py-2 md:py-3 font-bold tracking-widest transition-colors duration-300 text-[12px] bg-white border-[#1198EB] text-[#1198EB] hover:border-white hover:text-white hover:bg-[#1198EB]"
                href={btnTextLink}
              >
                {btnText}
              </a>
              <a
                className="border uppercase px-5 sm:px-6 md:px-8 py-2 sm:py-2 md:py-3 font-bold tracking-widest transition-colors duration-300 text-[12px] bg-[#1198EB] border-white text-white hover:border-[#1198EB] hover:text-[#1198EB] hover:bg-white"
                href={secondBtnTextLink}
              >
               {secondBtnText}
              </a>
              </div>

              
            </div>
          </div>
        
      </Container>
    </FullContainer>
  );
};
export default FooterBlock;
