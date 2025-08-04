import Image from "next/image";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import PodcastPlayer from "./podcastPlayer";

const HeroSection = () => {
  return (
    <FullContainer className="bg-gray-950 py-20 pt-32 md:pt-40">
      <Container className="px-5 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="uppercase text-[12px] lg:text-[14px] text-white font-medium leading-relaxed tracking-widest  ">
                WELCOME TO THE
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight sm:leading-snug">
                Link Masters Podcast
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Link Masters features interviews with top SEO experts who have a
              proven track record of success in link building.
            </p>

            <div>
              <p className="uppercase text-[12px] lg:text-[14px] text-gray-500 font-medium leading-relaxed tracking-widest mb-4 ">
                subscribe
              </p>
              <div className="flex flex-row justify-start gap-14">
                <Image
                  width={100}
                  height={24}
                  src="/st-images/ic_outline-apple.svg"
                  alt="apple"
                  className="h-10 w-10 object-contain"
                />
                <Image
                  width={100}
                  height={24}
                  src="/st-images/mdi_spotify.svg"
                  alt="mdi_spotify"
                  className="h-10 w-10 object-contain"
                />

                <Image
                  width={100}
                  height={24}
                  src="/st-images/bi_youtube.svg"
                  alt="bi_youtube"
                  className="h-10 w-10 object-contain"
                />
                <Image
                  width={100}
                  height={24}
                  src="/st-images/amazon-music-logo2.svg"
                  alt="music"
                  className="h-12 w-12 object-contain"
                />
                <Image
                  width={100}
                  height={24}
                  src="/st-images/pocketcasts-wc.svg"
                  alt="pocketcasts"
                  className="h-10 w-10 object-contain"
                />
                <Image
                  width={100}
                  height={24}
                  src="/st-images/akar-icons_rss.svg"
                  alt="wifi"
                  className="h-9 w-9 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Responsive Image */}
          <div className="relative">
            <Image
              width={1000}
              height={1000}
              src="/st-images/Frame-282.webp"
              alt="Dashboard Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <PodcastPlayer/>
      </Container>
    </FullContainer>
  );
};
export default HeroSection;
