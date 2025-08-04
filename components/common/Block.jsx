import Container from "./Container";

const Block = ({ title, desc, bgColor, btn, btnText,link }) => {
  return (
    <div
      className={`py-16 md:py-24 px-6 md:px-10 ${bgColor} border border-gray-50`}
    >
      <Container className="">
        <div className="px-0 md:px-20">
          <div className="flex flex-col space-y-4 md:space-y-6 items-center justify-center text-center">
            <p className="text-white text-2xl sm:text-3xl md:text-[40px] max-w-3xl font-medium leading-snug">
              {title}
            </p>

            <p className="text-white text-base sm:text-lg md:text-[20px] max-w-2xl">
              {desc}
            </p>

            {btn ? (
              <a
                className="border uppercase px-8 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 font-bold tracking-widest transition-colors duration-300 text-sm md:text-[14px] bg-white border-[#1198EB] text-[#1198EB] hover:border-white hover:text-white hover:bg-[#1198EB]"
                href={link}
              >
                {btnText}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Block;
