import Image from "next/image";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import { ArrowRight } from "lucide-react";

const FullContainerCard = ({imgSrc, title, desc}) => {
  return (
    <FullContainer className="bg-gray-100">
      <Container className="py-28 px-5">
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Text Section */}
          <div className="flex-1 space-y-4 ">
            <h1 className="text-[40px] font-medium text-gray-900 leading-relaxed">{title}</h1>
            <p className="text-[20px] text-gray-700 leading-relaxed">
              {desc}
            </p>
            <div className="relative group inline-block cursor-pointer">
              <span
                className="relative inline-flex items-center gap-2 text-blue-500 uppercase font-medium text-sm leading-relaxed
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300
            group-hover:after:w-full"
              >
                Learn more
                <ArrowRight className="h-4 w-4 text-blue-500" />
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              width={400}
              height={400}
              src={imgSrc}
              alt="case study"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};
export default FullContainerCard;
