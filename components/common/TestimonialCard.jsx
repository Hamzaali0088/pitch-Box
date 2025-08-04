import Image from "next/image";
import Container from "./Container";

const TestimonialCard = ({ name, role, quote, imgSrc }) => {
  return (
    <Container className="flex flex-col md:flex-row items-center md:items-start gap-y-2 md:gap-x-4 lg:gap-x-8 text-center md:text-left max-[425px]:text-center mb-4 md:mb-20">
      {/* Left Section: Avatar + Info */}
      <div className="flex flex-col md:flex-row items-center max-[425px]:items-center md:items-start gap-4 min-w-[180px] sm:min-w-[200px]">
        <Image
          src={imgSrc}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col space-y-1 mt-1">
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            {name}
          </p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Right Section: Quote with SVG icon */}
      <div className="flex flex-col md:flex-row items-center max-[425px]:items-center md:items-start gap-3 sm:gap-4 ">
        <div className="">
          <svg
            height="18"
            width="26"
            viewBox="0 0 26 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6692015 18V7.55L26 0v18zM0 18V7.55L10.3307985 0v18z"
              fill="#1198eb"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <p className="italic md:ml-2 text-gray-700 font-medium text-base sm:text-lg md:text-xl lg:text-[26px] leading-snug max-w-3xl">
          {quote}
        </p>
      </div>
    </Container>
  );
};
export default TestimonialCard;
