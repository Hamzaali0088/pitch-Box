"use client";
import { useState, useEffect } from "react";
import Container from "../../../components/common/Container";
import Image from "next/image";
import FullContainer from "../../common/FullContainer";

const Hero = () => {
  const words = [
    "Businesses",
    "Freelancers",
    "Teams",
    "Developers",
    "Agencies",
    "Busy Professionals",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const isWordComplete = !isDeleting && displayedText === currentWord;
    const isWordEmpty = isDeleting && displayedText === "";

    // choose delay dynamically (pause 1s when word completes)
    const delay = isWordComplete ? 1000 : isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordEmpty) {
        setIsDeleting(false);
        setCurrentWordIndex((i) => (i + 1) % words.length);
        return;
      }

      const next = isDeleting
        ? currentWord.slice(0, displayedText.length - 1)
        : currentWord.slice(0, displayedText.length + 1);

      setDisplayedText(next);
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <FullContainer className="bg-black relative pt-32">
      <Image
        src="/st-images/background-image.jpg"
        alt="link binding"
        width={2000}
        height={2000}
        className="w-full h-full object-cover absolute top-0 left-0   "
      />
      <Container className="relative z-10">
        <div className="">
          <div className="flex flex-col items-center justify-between gap-10 pt-20">
            {/* Text Section */}
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl tracking-wide text-white text-center">
                  Automate Your Tasks Anywhere, Anytime for{" "}
                <br />
                <span className="">
                  {displayedText}
                  <span>|</span>
                </span>
              </h1>
            </div>
            {/* Image Section */}
            <div className="w-full ">
              <Image
                src="/st-images/dashboard-image.png"
                alt="link binding"
                width={2000}
                height={2000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default Hero;
