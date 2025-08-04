"use client";
import React, { useState } from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";

const pricingPlans = [
  {
    title: "Pro",
    price: "$165",
    period: "/mo",
    color: "#1AB394",

    subtitle: "For link builders with a single website",
    features: [
      "2 Users",
      "2 Email Accounts",
      "25,000 Outreach Emails",
      "1 Workspace",
      "10,000 Prospecting Searches /mo",
      "200,000 Contacts",
      "Link Monitoring",
      "Basic Reports",
      "Link Building Workflow",
      "CRM",
      "Prospecting & Contact Discovery",
      "Outreach & Auto Follow-up",
      "All Reports",
      "Alternatives detection",
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
      "Unlimited Users",
      "5 Email Accounts",
      "50,000 Outreach Emails",
      "2 Workspaces",
      "15,000 Prospecting Searches /mo",
      "300,000 Contacts",
      "Pro Reports",
      "Advanced Content Discovery Testing",
      "Bulk & Personalization",
      "Slack Integration",
      "White-label Reports",
      "Deliverability Monitoring",
      "API",
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
      "Unlimited Users",
      "15 Email Accounts",
      "150,000 Outreach Emails",
      "Unlimited Workspaces",
      "Unlimited Prospecting Searches",
      "500,000 Contacts",
      "Advanced Automations",
      "Pro Reports + Locator",
      "Approval Workflow",
      "Hybrid (Gmail/SMTP) Sending",
      "Multi-Region Sending",
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

      <Container className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-lg text-left`}
            style={{ borderTop: `6px solid ${plan.color}` }}
          >
            <div className="py-4 border-b border-gray-200">
              <div className="px-8">
                <h2 className="text-[24px] font-semibold mb-1">{plan.title}</h2>
                <p className=" text-sm text-gray-500 mb-3">{plan.subtitle}</p>
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
            </div>
            <ul className="mb-4 space-y-1 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`${plan.button.btnColor} text-white w-full py-2 rounded-lg`}
            >
              {plan.button.text}
            </button>
            <p className="text-center mt-2 text-blue-500 cursor-pointer">
              or Subscribe
            </p>
          </div>
        ))}
      </Container>

      <div className="mt-10 text-sm text-blue-500 cursor-pointer">
        SEE ALL FEATURES ↓
      </div>

      <div className="bg-gray-100 mt-16 py-10 px-6 rounded-lg max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">Enterprise Platform</h3>
        <p className="text-sm text-gray-600 mb-4">
          Our most powerful solution designed for corporations and public
          companies with stability, security and compliance in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="list-disc list-inside">
            <li>Single sign-on (SSO)</li>
            <li>Service Level Agreement (SLA)</li>
            <li>Custom Service Agreement</li>
            <li>Vendor Security Review</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Private Training & Dedicated Support</li>
            <li>Data Retention Policy</li>
          </ul>
        </div>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
          GET IN TOUCH
        </button>
      </div>
    </FullContainer>
  );
}
