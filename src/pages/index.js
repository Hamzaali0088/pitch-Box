import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../../components/container/home/hero";
import Companies from "../../components/container/home/Companies";
import FiveStar from "../../components/container/home/FiveStar";
import Testimonial from "../../components/container/home/Testimonial";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import BlueBlock from "../../components/common/Block";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <FiveStar />
      <Testimonial />
      <BlueBlock
        bgColor="bg-[#1198EB]"
        btn={true}
        btnText="try for free"
        link="/signup"
        title="Outsmart Your Competition, Find Better Prospects, and Build More Links With Pitchbox"
        desc="See how Pitchbox can save you hundreds of
hours building and managing link building."
      />
      <Footer />
    </div>
  );
}
