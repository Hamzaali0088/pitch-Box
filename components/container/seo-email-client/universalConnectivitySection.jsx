import Image from "next/image";
import SectionCard from "../../common/cardComponent";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

export default function UniversalConnectivitySection() {
  return (
    <FullContainer className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/st-images/call-out-mask.svg"
          alt="background"
          layout="fill"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Foreground Content */}
      <Container className="relative z-10 flex flex-col justify-center items-center text-center py-24 space-y-4">
        <h1 className="text-3xl md:text-[40px] leading-relaxed font-medium text-white">
          Universal Connectivity
        </h1>
        <h3 className="text-[20px] font-medium text-white max-w-2xl">
          Connect to Gmail, G Suite, Microsoft 365, Outlook, MS Exchange,
          IMAP/SMTP.
        </h3>
        <div className="flex space-x-4">
          <Image
            width={600}
            height={50}
            src="/st-images/img-red-13 (1).webp"
            alt="icon"
            className="object-contain"
          />
        </div>
      </Container>
    </FullContainer>
  );
}
