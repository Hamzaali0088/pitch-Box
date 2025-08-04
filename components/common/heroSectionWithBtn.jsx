import Image from "next/image";
import Container from "./Container";

const HeroSectionWithBtn = ({
  bgColor,
  bgImage,
  title,
  desc,
  btnText,
  btnStyle,
  btnLink,
  imgSrc,
  secondBtnDisplay,
  secondBtnText,
  secondBtnStyle,
  secondBtnLink,
}) => {
  return (
    <div
      className={`pt-32 md:pt-40 ${
        !bgImage ? bgColor : ""
      } bg-cover bg-center bg-no-repeat`}
      style={
        bgImage
          ? {
              backgroundImage: `url('${bgImage}')`,
            }
          : {}
      }
    >
      <Container className="px-5 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="p-0 md:pr-16 space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight sm:leading-snug">
                {title}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                {desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={btnLink}
                className={` ${btnStyle} uppercase cursor-pointer text-[14px] px-8 py-3 font-medium transition-all duration-300 ease-in-out`}
              >
                {btnText}
              </a>
              {secondBtnDisplay ? (
                <a
                  href={secondBtnLink}
                  className={`${secondBtnStyle} uppercase cursor-pointer text-[14px] px-8 py-3 font-medium transition-all duration-300 ease-in-out`}
                >
                  {secondBtnText}
                </a>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Right Content - Responsive Image */}
          <div className="relative">
            <Image
              width={1000}
              height={1000}
              src={imgSrc}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-30 text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-8 uppercase tracking-wider">
            LOVED BY THE LEADING SEO TEAMS IN OVER 60 COUNTRIES
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {/* Logos */}
            <Image
              width={100}
              height={24}
              src="/st-images/adobe.webp"
              alt="Adobe"
              className="h-6"
            />
            <Image
              width={100}
              height={24}
              src="/st-images/rover.webp"
              alt="Rover"
              className="h-6"
            />
            <Image
              width={100}
              height={24}
              src="/st-images/red-ventures-150x20.png"
              alt="Red Ventures"
              className="h-6"
            />
            <Image
              width={100}
              height={24}
              src="/st-images/radisson.webp"
              alt="Radisson"
              className="h-6"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSectionWithBtn;
