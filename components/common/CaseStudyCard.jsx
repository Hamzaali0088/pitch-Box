import Container from "./Container";
import Image from "next/image";

const CaseStudyCard = ({
  backgroundImage,
  agencyLabel,
  companyLogo,
  title,
  desc,
  buttonHref,
  bgColor,
}) => {
  return (
    <Container className="group relative overflow-hidden cursor-pointer px-2 ">
      <a className={`flex ${bgColor}`} href={buttonHref}>
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left side - Image */}
          <div className="relative w-full lg:w-1/2">
            <Image
              src={backgroundImage}
              alt="Case Study"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 p-16 flex flex-col justify-center text-white relative">
            <div className="absolute top-4 right-4 text-white bg-[rgba(0,0,0,0.1)] px-4 py-1 text-[15px] font-semibold rounded">
              {agencyLabel}
            </div>

            <div className="w-38 h-auto mb-4">
              <Image
                src={companyLogo}
                alt="Company Logo"
                width={128}
                height={64}
                className="object-contain w-full h-auto"
              />
            </div>

            <div className="flex-grow">
              <h3 className="text-[20px] font-medium mb-4 leading-relaxed">
                {title}
              </h3>
              <p className="text-white text-[16px] leading-relaxed mb-8">
                {desc}
              </p>

              <div className="inline-block border group-hover:border-white px-6 py-3 text-sm font-medium leading-relaxed tracking-wider uppercase group-hover:text-gray-900 group-hover:bg-white transition-all duration-300 ease-in-out">
                view case study
              </div>
            </div>
          </div>
        </div>
      </a>
    </Container>
  );
};
export default CaseStudyCard;
