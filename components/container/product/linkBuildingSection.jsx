import Image from "next/image";
import Container from "../../common/Container";
import Link from "next/link";

const LinkBuildingSection = () => {
  return (
    <div className="bg-neutral-800 pt-32 md:pt-40">
      <Container className="px-5 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight sm:leading-snug">
              Link Building Software
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Pitchbox gives you everything you need to stay organized, build
              backlinks, and reach your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="border border-[#1198EB] bg-[#1198EB] hover:bg-gray-900 cursor-pointer hover:border-[#1198EB] text-[14px] text-white px-8 py-3 font-medium transition-all duration-300 ease-in-out">
                TRY FOR FREE
              </Link>
              <Link href="/demo" className="border bg-gray-900 hover:border-[#1198EB] hover:bg-[#1198EB] cursor-pointer text-[14px] border-[#1198EB] text-white px-8 py-3 font-medium transition-all duration-300 ease-in-out">
                BOOK A DEMO
              </Link>
            </div>
          </div>

          {/* Right Content - Responsive Image */}
          <div className="relative">
            <Image
              width={1000}
              height={1000}
              src="/st-images/pitchbox-dashboard.webp"
              alt="Dashboard Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-8 uppercase tracking-wider">
            LEARN WHY 1000S OF TEAMS CHOOSE PITCHBOX AS THEIR LINK BUILDING
            SOFTWARE
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-80">
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

export default LinkBuildingSection;
