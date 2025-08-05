import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";

const FooterBlock = ({
  title,
  desc,
  btnText,
  secondBtnText,
  btnTextLink,
  secondBtnTextLink,
  bgColor,
  btnStyle,
  secondBtnStyle,
}) => {
  return (
    <FullContainer className={`py-30 ${bgColor} `}>
      <Container className="px-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12">
          <div className=" w-full lg:w-1/2 lg:text-left text-center">
            <p className="text-white text-2xl sm:text-3xl md:text-[40px] font-medium leading-snug">
              {title}
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-full lg:w-1/2 lg:text-left text-center">
            <p className="text-white text-base sm:text-lg md:text-[22px] leading-relaxed max-w-3xl">
              {desc}
            </p>
            <div className="flex flex-row gap-6 lg:justify-start justify-center">
              <a
                className={` uppercase ${btnStyle} px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 font-bold tracking-widest transition-colors duration-300 text-[12px]`}
                href={btnTextLink}
              >
                {btnText}
              </a>
              <a
                className={` uppercase ${secondBtnStyle} px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 font-bold tracking-widest transition-colors duration-300 text-[12px] `}
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
