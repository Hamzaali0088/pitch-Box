import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../../components/container/home/hero";
import Companies from "../../components/container/home/Companies";
import FiveStar from "../../components/container/home/FiveStar";
import Testimonial from "../../components/container/home/Testimonial";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

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
      <Footer/>
    </div>
  );
}
