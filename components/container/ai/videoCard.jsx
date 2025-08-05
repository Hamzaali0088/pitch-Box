import Image from "next/image";
import Container from "../../common/Container";

function QuoteIcon({ className = "" }) {
  return (
    <svg
      className={`quote-icon ${className}`}
      fill="none"
      height="57"
      viewBox="0 0 58 57"
      width="58"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="quote-top-icon-a"
          gradientUnits="userSpaceOnUse"
          x1="21.5"
          x2="44"
          y1="0.73633"
          y2="56.7363"
        >
          <stop offset="0" stopColor="#0069b5" />
          <stop offset="1" stopColor="#0069b5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M14.419 31.0272h10.6245v25.7091H0l.00000225-25.7091L10.6245.736329l9.3597.000001zm32.9565 0h10.6245v25.7091H32.9565V31.0272l10.6245-30.290871 9.3597.000001z"
        fill="url(#quote-top-icon-a)"
      />
    </svg>
  );
}

const VideoCard = ({ link, reverse = false, quote, author, role }) => {
  return (

    <Container className="px-5 ">
      <div
        className={`flex flex-col items-center relative ${
          reverse ? "lg:flex-row-reverse " : "lg:flex-row"
        }`}
      >
        <div className={`lg:w-1/2 w-full relative ${reverse ? "z-30 mr-8":"z-[30]"} `}>
          <iframe
            src={link}
            allowfullscreen
            frameborder="0"
            width="580"
            height="360"
          ></iframe>
        </div>

        <div
          className={`lg:w-1/2 lg:mt-0 bg-black  mt-8 w-full relative ${reverse ? "z-10 py-26 px-20":"p-30 z-10"}`}
        >
          {/* Top Quote Icon */}
          <div className="absolute top-16 left-16">
            <QuoteIcon className="w-12 h-12" />
          </div>

          <div className="text-white">
            <blockquote className="italic text-white text-[24px] leading-relaxed mb-4">
              {quote}
            </blockquote>
            <div className="font-bold text-lg mb-1">{author}</div>
            <div className="text-blue-200 uppercase tracking-wider text-sm">
              {role}
            </div>
          </div>

          {/* Bottom Quote Icon */}
          <div className="absolute bottom-0 right-0 transform rotate-180">
            <QuoteIcon className="w-24 h-24" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default VideoCard;
