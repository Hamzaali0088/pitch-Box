"use client";
import React, { useState } from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import { ArrowDown } from "lucide-react";

const pricingPlans = [
  {
    title: "Pro",
    price: "$165",
    period: "/mo",
    color: "#1AB394",
    subtitle: "For link builders with a single website",
    features: [
      { title: "2 Users" },
      {
        title: "2 Email Accounts",
      },
      {
        title: "2,000 Outreach Emails",
        hasDesc: true,
        desc: "Cold outreach emails and follow-ups per month. Communication emails are free and are not counted towards this limit.",
      },
      { title: "1 Workspace" },
      {
        title: "25 Campaigns /mo",
        hasDesc: true,
        desc: "Build Targeted Lists: Create lists of opportunities and contacts.\nReach Out Effectively: Contact the right people with personalized outreach. \nOrganize Campaigns: Segment targets by strategy, category, or type.",
      },
      { title: "1,000 Prospecting Searches /mo" },
      { title: "50,000 Contacts" },
      {
        title: "600,000 Data Credits per year",
        hasDesc: true,
        desc: "Data credits are used for discovering prospects, emails and email verification. \nProspects: 1 credit/ website \nContacts: 2 credits/ verified email",
      },
    ],
    coreFeatures: [
      { title: "Prospecting & Contact Discovery" },
      { title: "Outreach & Auto Follow-up" },
      { title: "CRM" },
      { title: "Inbox" },
      { title: "Basic Reports" },
      {
        title: "AI Personalization",
        hasDesc: true,
        desc: "Leverage advanced AI to generate personalized outreach emails and qualify link opportunities. This dual-action feature ensures your messaging resonates with prospects and targets the most promising sites.",
      },
      {
        title: "AI Reply",
        hasDesc: true,
        desc: "Automatically generate effective responses directly in your Inbox. This AI is optimized for link building and negotiation to help secure links faster and at a lower cost.",
      },
      { title: "Link Building Workflow" },
      { title: "Link Monitoring" },
    ],
    button: {
      text: "TRY FOR FREE",
      btnColor: "bg-[#1AB394]",
    },
  },
  {
    title: "Advanced",
    price: "$420",
    period: "/mo",
    color: "#159AEB",
    subtitle: "For growing agencies with few clients",
    features: [
      {
        title: "Unlimited Users",
      },
      {
        title: "6 Email Accounts",
      },
      {
        title: "5,000 Outreach Emails",
        hasDesc: true,
        desc: "Cold outreach emails and follow-ups per month. Communication emails are free and are not counted towards this limit.",
      },
      { title: "25 Workspaces" },
      {
        title: "1,000 New Campaigns /mo",
        hasDesc: true,
        desc: "Build Targeted Lists: Create lists of opportunities and contacts.\nReach Out Effectively: Contact the right people with personalized outreach. \nOrganize Campaigns: Segment targets by strategy, category, or type.",
      },
      { title: "5,000 Prospecting Searches /mo" },
      { title: "200,000 Contacts" },
      {
        title: "Unlimited Data Credits",
        hasDesc: true,
        desc: "Data credits are used for discovering prospects, emails and email verification. \nProspects: 1 credit/ website \nContacts: 2 credits/ verified email",
      },
    ],
    coreFeatures: [
      {
        title: "Advanced Contact Discovery Tuning",
        hasDesc: true,
        desc: "Automatically refine your contact lists by filtering out personal emails (e.g. @gmail.com, @hotmail.com) and including only those that match your opportunity domain. Get more targeted contacts and boost your outreach success.",
      },
      {
        title: "Email Rotation",
        hasDesc: true,
        desc: "Automatically cycle through your email accounts to evenly distribute sending volume, lower spam risks, and improve overall deliverability in your outreach campaigns.",
      },
      {
        title: "Bulk AI Personalization",
        hasDesc: true,
        desc: "Leverage advanced AI to automatically generate personalized outreach emails at scale while also qualifying link opportunities. This dual-action feature ensures your messaging resonates with prospects and targets the most promising sites.",
      },
      { title: "Deliverability Monitoring" },
      { title: "Slack Integration" },
      { title: "White-Label Reports" },
      { title: "Pro Reports" },
      { title: "API" },
    ],
    button: {
      text: "TRY FOR FREE",
      btnColor: "bg-[#159AEB]",
    },
  },
  {
    title: "Scale",
    price: "$675",
    period: "/mo",
    color: "#9B51E0",
    subtitle: "For teams scaling up link outreach",
    features: [
      {
        title: "Unlimited Users",
      },
      {
        title: "15 Email Accounts",
      },
      {
        title: "15,000 Outreach Emails",
        hasDesc: true,
        desc: "Cold outreach emails and follow-ups per month. Communication emails are free and are not counted towards this limit.",
      },
      { title: "Unlimited Workspaces" },
      {
        title: "Unlimited Campaigns",
        hasDesc: true,
        desc: "Build Targeted Lists: Create lists of opportunities and contacts.\nReach Out Effectively: Contact the right people with personalized outreach. \nOrganize Campaigns: Segment targets by strategy, category, or type.",
      },
      { title: "Unlimited Prospecting Searches" },
      { title: "Unlimited Contacts" },
      {
        title: "Unlimited Data Credits",
        hasDesc: true,
        desc: "Data credits are used for discovering prospects, emails and email verification. This plan has no limits on prospecting and email discovery.",
      },
    ],
    coreFeatures: [
      { title: "Advanced Automations" },
      { title: "Pro Reports + Looker" },
      { title: "Approval Workflow" },
      { title: "Hybrid oAuth/SMTP Sending" },
      { title: "Multi-Region Sending*" },
    ],
    button: {
      text: "TRY FOR FREE",
      btnColor: "bg-[#9B51E0]",
    },
  },
];
export default function SubscriptionSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <FullContainer className="bg-white py-12 px-4 text-center mt-30">
      <Container>
        <div className="mb-16">
          <h1 className="text-5xl font-medium leading-relaxed mb-2">
            Pitchbox Pricing & Plans
          </h1>
          <p className="mb-6 text-[20px] tracking-wide leading-relaxed text-gray-600">
            Everything you need to discover prospects and turn them into
            backlinks.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 mb-10">
          <div className="flex justify-center items-center gap-2">
            <div>
              <div
                className={`flex flex-col pt-4 text-[16px] leading-5 font-bold tracking-wide  ${
                  isMonthly ? "text-black" : "text-gray-500"
                }`}
              >
                Pay Monthly
              </div>
              <div className="italic text-[12px] text-gray-800">
                no commitment
              </div>
            </div>

            <div
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
                isMonthly ? "bg-gray-300" : "bg-green-500"
              }`}
              onClick={handleToggle}
              role="switch"
              aria-checked={!isMonthly}
              tabIndex={0}
              style={{ outline: "none" }}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  isMonthly ? "translate-x-0" : "translate-x-6"
                }`}
              />
            </div>

            <button
              className={`text-[16px] leading-5 font-bold tracking-wide ${
                isMonthly ? "text-gray-500" : "text-black"
              }`}
            >
              Pay Upfront{" "}
              <span className="text-xs px-1 py-1 font-bold bg-green-100 text-green-500">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-lg text-left`}
            style={{ borderTop: `6px solid ${plan.color}` }}
          >
            <div className="py-6 border-b border-gray-200">
              <div className="px-10">
                <h2 className="text-[28px] font-semibold leading-relaxed">
                  {plan.title}
                </h2>
                <p className=" text-sm text-gray-500 mb-3 leading-relaxed">
                  {plan.subtitle}
                </p>
                <span className="text-3xl font-bold mr-2">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
            </div>
            <div className="border-b border-gray-200">
              <div className="p-10">
                <ul className="mb-4 space-y-2 text-[14px] text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start relative group">
                      <span className="text-green-600 font-bold bg-green-100 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-[14px]">
                        ✓
                      </span>

                      <span
                        className={`${
                          typeof feature === "object" && feature.hasDesc
                            ? "border-b border-dashed border-gray-400 cursor-pointer"
                            : ""
                        }`}
                      >
                        {typeof feature === "object" ? feature.title : feature}
                      </span>

                      {typeof feature === "object" && feature.desc && (
                        <div className="absolute left-6 bottom-full mb-4 z-10 hidden group-hover:block bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] text-gray-700 text-sm p-3 w-64">
                          <div className="absolute bottom-[-10px] left-4 w-0 h-0 drop-shadow-neutral-800 drop-shadow-2xl border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-white"></div>

                          {feature.desc.split("\n").map((line, idx) => (
                            <p key={idx} className="mb-1">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  className={`text-[12px] mt-10 cursor-pointer font-semibold leading-relaxed text-white w-full px-2 py-4 transition-all duration-300`}
                  style={{
                    backgroundColor: plan.button.btnColor
                      .replace("bg-[", "")
                      .replace("]", ""),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = plan.color;
                    e.currentTarget.style.border = `1px solid ${plan.color}`;
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.backgroundColor = plan.button.btnColor
                      .replace("bg-[", "")
                      .replace("]", "");
                    e.currentTarget.style.border = "none";
                  }}
                >
                  {plan.button.text}
                </button>
                <div className="text-center mt-4">
                  <a
                    href="/signup"
                    className="relative group inline-block cursor-pointer"
                  >
                    <span className="relative inline-flex items-center gap-2 text-[12px] text-blue-500 font-semibold text-sm leading-relaxed after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                      or Subscribe
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-10">
                <div className="mb-2 text-[14px] leading-relaxed font-semibold text-gray-800">
                  {plan.title === "Pro" && "Core features:"}
                  {plan.title === "Advanced" && "Pro features, plus:"}
                  {plan.title === "Scale" && "Advanced features, plus:"}
                </div>

                <ul className="mb-4 space-y-2 text-[14px] text-gray-600">
                  {plan.coreFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start relative group">
                      <span className="text-black font-bold flex items-center justify-center mr-2 text-[14px]">
                        ✓
                      </span>

                      <span
                        className={`${
                          typeof feature === "object" && feature.hasDesc
                            ? "border-b border-dashed border-gray-400 cursor-pointer"
                            : ""
                        }`}
                      >
                        {typeof feature === "object" ? feature.title : feature}
                      </span>

                      {typeof feature === "object" && feature.desc && (
                        <div className="absolute left-6 bottom-full mb-4 z-10 hidden group-hover:block bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] text-gray-700 text-sm p-3 w-64 rounded-md">
                          {/* Tooltip Arrow */}
                          <div className="absolute bottom-[-10px] left-4 w-0 h-0  drop-shadow-neutral-800 drop-shadow-2xl border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-white "></div>

                          {feature.desc.split("\n").map((line, idx) => (
                            <p key={idx} className="mb-1">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Container>
        <div className="mt-10 group text-[14px] font-medium flex items-center justify-center gap-x-2 text-[#1198EB] cursor-pointer">
          SEE ALL FEATURES
          <ArrowDown
            className="h-5 w-5 text-[#1198EB] transition-transform duration-300 ease-in-out group-hover:translate-y-1"
            strokeWidth={1.5}
          />
        </div>

        <div className="bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] mt-16 py-6 px-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-0 md:gap-8">
            {/* Left Side */}
            <div className="md:w-1/2 text-left px-8 py-4">
              <h3 className="text-[30px] font-semibold mb-2">
                Enterprise Platform
              </h3>
              <p className="text-[16px] text-gray-600 mb-4">
                Our most powerful solution designed for corporations and public
                companies with stability, security and compliance in mind.
              </p>
              <button className="mt-4 text-[14px] px-8 py-3 bg-blue-500 text-white cursor-pointer hover:border hover:text-blue-500 hover:border-blue-500 hover:bg-white ">
                GET IN TOUCH
              </button>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 flex items-center px-8 py-4">
              <ul className="space-y-2 text-sm">
                {[
                  "Single sign-on (SSO)",
                  "Service Level Agreement (SLA)",
                  "Custom Service Agreement",
                  "Vendor Security Review",
                  "Private Training & Dedicated Support",
                  "Data Retention Policy",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black font-bold mr-2 text-[14px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
