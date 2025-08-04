import Image from "next/image";
import React from "react";
import Container from "../../common/Container";

export default function DataSecuritySection() {
  const featuresList = [
    {
      title: "Granular Permission Management",
      desc: "Complete control over what users can and can not do (reply to emails, run management reports, export data, etc).",
      imgSrc: "/st-images/icon-red-14.svg",
    },
    {
      title: "Skill-based User Roles",
      desc: "Built-in user roles so you can easily manage VAs (virtual assistants), link builders, outreach managers, and admins.",
      imgSrc: "/st-images/icon-red-15.svg",
    },
    {
      title: "Email Persona Security",
      desc: "Map email personas to one or more outreach projects. Share email accounts without sacrificing privacy.",
      imgSrc: "/st-images/icon-red-16.svg",
    },
    {
      title: "Stay Organized (at scale)",
      desc: "Keep your sanity no matter the size of your Inbox. Schedule, snooze, and collaborate with your teammates at ease.",
      imgSrc: "/st-images/icon-red-17.svg",
    },
    {
      title: "Project level access",
      desc: "Restrict access and protect sensitive client data by granting access to only those who need it.",
      imgSrc: "/st-images/icon-red-18.svg",
    },
  ];

  return (
    <div className="bg-slate-800 text-white py-24 sm:px-3">
      <Container className="">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image
              src="/st-images/icon-red-19.svg"
              width={48}
              height={48}
              alt=""
              className="h-12 w-12"
            />
          </div>
          <p className="text-sm text-white font-medium uppercase tracking-wider mb-2">
            USER ACCESS CONTROL
          </p>
          <h2 className="text-4xl md:text-[40px] font-medium leading-relaxed mb-4">
            Keep Your Data Safe and Secure
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
          {/* Left Side – Feature List */}
          <div className="space-y-4">
            {featuresList.map((feature, index) => (
              <div key={index} className="space-y-2 px-0 lg:px-1">
                {/* Row 1: Icon + Title */}
                <div className="flex items-center gap-4">
                  <Image
                    src={feature.imgSrc}
                    width={64}
                    height={64}
                    alt={feature.title}
                    className="h-16 w-16"
                  />
                  <h3 className="text-xl leading-relaxed font-semibold">{feature.title}</h3>
                </div>
                {/* Row 2: Description */}
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side – Image */}
          <div className="flex justify-center items-center px-4">
            <Image
              src="/st-images/img-red-11.png"
              width={500}
              height={500}
              alt="Security Illustration"
              className="w-full h-auto object-contain max-w-md md:max-w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
