"use client";

import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Image from "next/image";
import LogoGrid from "../home/LogoGrid";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Scroll to specific testimonial
  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = currentIndex * 320; // Approximate width of each testimonial
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="bg-white py-16">
      <Container className="px-5">
        {/* Testimonials Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-none w-[400px] border border-gray-400 space-y-8 px-8 py-8 rounded-xl`}
            >
              {/* Quote */}
              <div className="flex justify-start">
                <p className="text-gray-600 italic text-[30px] leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={testimonial.avatar}
                    width={60}
                    height={60}
                    alt={testimonial.name}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.slice(0, -1).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />

        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </Container>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

const testimonials = [
  {
    name: "Bill Sebald",
    title: "Greenlane Search Marketing",
    quote:
      "Pitchbox is a beast of a machine! The follow-ups work better than anything for your team.",
    avatar: "/st-images/alex-gopshtein-100x100.png",
  },
  {
    name: "Alexia Solis",
    title: "Marketing Professional",
    quote:
      "Pitchbox Outreach automations & prospecting will save you TONS of time!",
    avatar: "/st-images/alexandra-tachalova-100x100.png",
  },
  {
    name: "Russ Jones",
    title: "SEO Expert",
    quote: "It is really hard to express how good Pitchbox is.",
    avatar: "/st-images/aleyda-solis-sm.jpg",
  },
  {
    name: "Bill Sebald",
    title: "SEO Expert",
    quote: "It is really hard to express how good Pitchbox is.",
    avatar: "/st-images/Bill-Sebald.jpg",
  },
  {
    name: "Brian Dean",
    title: "SEO Expert",
    quote: "It is really hard to express how good Pitchbox is.",
    avatar: "/st-images/Brian-Dean.jpg",
  },
];

export default function DemoSection() {
  const [demoForm, setDemoForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleDemoFormChange = (e) => {
    const { name, value } = e.target;
    setDemoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = () => {
    console.log("Demo form submitted:", demoForm);
  };

  const logos = [
    { name: "Skyscanner", color: "text-cyan-500" },
    { name: "Dow", color: "text-red-500" },
    { name: "Moz", color: "text-orange-500" },
    { name: "Pingdom", color: "text-green-600" },
    { name: "Cision", color: "text-red-600" },
    { name: "Offers.com", color: "text-orange-400" },
    { name: "Outspoken", color: "text-red-500" },
    { name: "move", color: "text-blue-500" },
    { name: "WEBRIS", color: "text-blue-600" },
    { name: "convERGE", color: "text-blue-400" },
    { name: "SUVI", color: "text-gray-600" },
    { name: "PartVisible", color: "text-gray-700" },
  ];

  const features = [
    {
      icon: "/st-images/link-building.webp",
      title: "Link Building",
      description:
        "Identify strong link building opportunities, build relationships with influencers and secure high-quality backlinks with outreach.",
    },
    {
      icon: "/st-images/influencer-outreach.webp",
      title: "Blogger Outreach",
      description:
        "Find bloggers and influencers in seconds who can amplify your brand through their audience and content.",
    },
    {
      icon: "/st-images/personalization.webp",
      title: "AI Powered Personalization",
      description:
        "Create personalized and unique messages with AI-powered outreach. Customize and scale your outreach campaigns.",
    },
    {
      icon: "/st-images/team-managment.webp",
      title: "Team Management",
      description:
        "Streamline your outreach campaigns with collaborative workflow and management tools.",
    },
    {
      icon: "/st-images/seo-integrations.webp",
      title: "SEO Integrations",
      description:
        "Leverage advanced SEO integrations from industry leaders: Ahrefs, SEMrush, Moz, and others.",
    },
    {
      icon: "/st-images/reporting-analytics.webp",
      title: "Reports and Link Monitoring",
      description:
        "Get comprehensive reports and link tracking to measure the effectiveness of your outreach campaigns.",
    },
  ];

  return (
    <FullContainer className=" bg-white mt-20">
      {/* Hero Section with Video and Demo Form */}
      <div className="bg-white py-36 px-4 border-b border-gray-200">
        <Container className=" px-5">
          <div className="relative flex flex-col lg:flex-row items-center gap-6 justify-center">
            {/* Video Section */}
            <div className="bg-gray-100 p-6 max-w-md">
              <div className="w-full relative">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/vungv4sfjk?dnt=1#?secret=AcPekANZxx"
                  allowfullscreen
                  frameborder="0"
                  className="w-full h-[290px] aspect-video rounded"
                ></iframe>
              </div>
              <div className="mt-4 text-sm sm:text-[18px] text-gray-600 leading-relaxed">
                <p>
                  Get a private walkthrough, take a deeper look at the platform,
                  and learn if your business and Pitchbox make a perfect match.
                </p>
              </div>
            </div>

            {/* Demo Form */}
            <div className="bg-[#1198EB] p-6 rounded-lg max-w-md">
              <h2 className="text-2xl font-bold mb-6">
                Schedule Your Pitchbox Demo
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First & Last Name"
                  value={demoForm.firstName}
                  onChange={handleDemoFormChange}
                  className="w-full px-4 bg-white py-3 rounded border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={demoForm.email}
                  onChange={handleDemoFormChange}
                  className="w-full px-4 bg-white py-3 rounded border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={demoForm.company}
                  onChange={handleDemoFormChange}
                  className="w-full px-4 bg-white py-3 rounded border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="string"
                  name="phone"
                  placeholder="Phone"
                  value={demoForm.website}
                  onChange={handleDemoFormChange}
                  className="w-full px-4 bg-white py-3 rounded border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  onClick={handleDemoSubmit}
                  className="w-full uppercase bg-[#53C3FF] text-white font-semibold py-3 px-6 rounded hover:text-[#53C3FF] hover:bg-white transition-colors ease-in-out duration-300 cursor-pointer"
                >
                  Send
                </button>
              </div>
              <p className="text-[16px] text-blue-100 mt-4 text-center">
                Don't need a demo?{" "}
                <Link href="/signup" className="font-bold text-white underline">
                  Sign Up Now
                </Link>
              </p>
            </div>
            <div className="absolute hidden lg:block left-1/2 -bottom-[15%] transform -translate-x-1/2">
              <Image
                src="/st-images/italic-arrow.svg"
                alt="arrow"
                width={150}
                height={150}
                className="w-[200px] object-contain"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Trust Indicators */}
      <div className="py-12">
        <div className="my-12 ">
          <h3 className="text-gray-800 font-bold leading-relaxed text-[24px] text-center ">
            We work with the best
          </h3>
        </div>
        <LogoGrid />
      </div>
      {/* Testimonials */}
      <div className="">
        <TestimonialsSection />
      </div>

      {/* Features Section */}
      <div className="bg-[#F0F3F7] py-24">
        <Container className="">
          <div className="text-center mb-12">
            <h2 className="text-[24px] leading-relaxed font-bold text-gray-800">
              Link Building Outreach Platform For SEO Teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon on the left */}
                  <div className="text-blue-500 flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Text content on the right */}
                  <div className="flex flex-col">
                    <h3 className="text-[16px] leading-relaxed font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </FullContainer>
  );
}
