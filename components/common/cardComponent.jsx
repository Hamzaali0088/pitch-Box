import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const SectionCard = ({
  tag,
  title,
  desc,
  imgSrc,
  learnMoreUrl,
  reverse = false,
  tagImgSrc,
  learnMore = false,
}) => {
  return (
    <Container
      className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-x-20 py-10 md:py-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 md:text-left px-4 sm:px-6 md:px-0">
        <div className="flex items-center justify-start gap-3 text-sm font-semibold tracking-widest text-gray-700 uppercase leading-relaxed">
          <Image
            src={tagImgSrc}
            alt="Tag Icon"
            width={20}
            height={20}
            className="w-12 h-12 object-contain"
          />
          <span>{tag}</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-[32px] text-gray-800 leading-snug">
          {title}
        </h2>
        <p className="text-gray-600 text-[16px] sm:text-[18px]">{desc}</p>

        {learnMore && (
          <div className="relative group inline-block cursor-pointer">
            <span
              className="relative inline-flex items-center gap-2 text-[#1198EB] uppercase font-medium text-sm leading-relaxed
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[1px] after:w-0 after:bg-[#1198EB] after:transition-all after:duration-300
          group-hover:after:w-full"
            >
              Learn more
              <ArrowRight className="h-4 w-4 text-[#1198EB]" />
            </span>
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0 mt-6 md:mt-0">
        <Image
          src={imgSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
    </Container>
  );
};
export default SectionCard;
