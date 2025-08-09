"use client";
import React, { useEffect, useRef, useState } from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import { ArrowDown, Check, X } from "lucide-react";
import Image from "next/image";
import ContentBtnWrapper from "../../common/ContentBtnWrapper";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Pro",
    price: "$ 195",
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
    price: "$ 495",
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
    price: "$ 795",
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
const plans = [
  {
    name: "Pro",
    price: "$ 195",
    btnColor: "#1AB394",
    buttonText: "TRY FOR FREE",
  },
  {
    name: "Advanced",
    price: "$ 495",
    btnColor: "#159AEB",
    buttonText: "TRY FOR FREE",
  },
  {
    name: "Scale",
    price: "$ 795",
    btnColor: "#9B51E0",
    buttonText: "TRY FOR FREE",
  },
];

const tableData = [
  {
    category: { title: "Basics", icon: "/st-images/pb-plans-pricing-4.svg" },
    items: [
      { name: "Users", pro: "2", advanced: "Unlimited", scale: "Unlimited" },
      { name: "Email Accounts", pro: "2", advanced: "6", scale: "15" },
      {
        name: "Outreach Emails",
        pro: "2500",
        advanced: "5,000",
        scale: "15,000",
      },
      {
        name: "Workspaces",
        hasDesc: true,
        desc: "Workspaces (or Projects) are a way to organize and track your outreach campaigns. For agencies, it’s a way to group clients.",
        pro: "1",
        advanced: "3",
        scale: "Unlimited",
      },
      { name: "Campaigns", pro: "5", advanced: "25", scale: "Unlimited" },
      {
        name: "Campaigns",
        hasDesc: true,
        desc: "Build Targeted Lists: Create lists of opportunities and contacts.\nReach Out Effectively: Contact the right people with personalized outreach.\nOrganize Campaigns: Segment targets by strategy, category, or type.",
        pro: "1",
        advanced: "25",
        scale: "Unlimited",
      },
      { name: "Contacts", pro: "500", advanced: "2500", scale: "Unlimited" },
      {
        name: "Prospecting Searches",
        hasDesc: true,
        pro: "500",
        advanced: "2500",
        scale: "Unlimited",
        desc: "Prospecting Searches help you discover the right prospects. You can customize these searches to target specific audiences. The goal is to generate leads and build lists.",
      },
      {
        name: "Contacts",
        pro: "50k",
        advanced: "200k",
        scale: "Unlimited",
        hasDesc: true,
        desc: "A contact is a website, person, or email address in Pitchbox’s CRM.",
      },
    ],
  },
  {
    category: { title: "Prospecting", icon: "/st-images/campaign-1.svg" },
    items: [
      {
        name: "Advanced Operator Search",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "Ahrefs, Semrush, Moz, Majestic",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "Social Enhancement",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "SERP", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "SEO Metrics Filter", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Blocklist Management", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Auto Reduplication", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "CSV Campaigns", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "Recurring Campaigns ",
        hasDesc: true,
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        desc: "Recurring campaigns run on a regular schedule and replenish your campaigns with fresh leads, allowing you to keep your outreach going.",
      },
      {
        name: "Keyword Suggestion Tool",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "Recurring Campaigns", pro: "—", advanced: "✓", scale: "✓" },
    ],
  },
  {
    category: { title: "Link Building Types", icon: "/st-images/link.svg" },
    items: [
      { name: "Blogger Outreach", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Digital PR", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Roundups", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Skyscraper", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Resource Pages", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Guest Posting", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Hot of the Press", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Broken Backlink", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "SaaS Link Building", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Link Reclamation", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Link Removal", pro: "✓", advanced: "✓", scale: "✓" },
    ],
  },
  {
    category: {
      title: "GTD Workflow",
      icon: "/st-images/code-pull-request-1.svg",
    },
    items: [
      { name: "Prospect Curation", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "AI Personalization",
        pro: "✓",
        advanced: "Bulk",
        scale: "Bulk",
      },
      {
        name: "Interactive Site Preview",
        pro: "400/mo",
        advanced: "4k/mo",
        scale: "10k/mo",
      },
      { name: "Role-Based Workflow", pro: "-", advanced: "✓", scale: "✓" },
      { name: "Actions", pro: "400/mo", advanced: "4k/mo", scale: "10k/mo" },
      {
        name: "Personalizer/Inspector Approval",
        pro: "-",
        advanced: "✓",
        scale: "✓",
      },
    ],
  },
  {
    category: {
      title: "Email & CRM",
      icon: "/st-images/envelope.svg",
    },
    items: [
      { name: "SEO Inbox", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "SEO CRM", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Chasebox™", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Unmatched Inbox", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "Out-of-Office Detection",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
    ],
  },
  {
    category: {
      title: "Outreach & Follow Up",
      icon: "/st-images/chart-network-1.svg",
    },
    items: [
      {
        name: "Email Rotation",
        hasDesc: true,
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        desc: "Check out this video 📹 why email rotation is more imporatnt now than ever before.",
      },
      { name: "Smart Templates™", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "AI Template Assistant",
        hasDesc: true,
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        desc: "Unlock the power of generative AI to elevate your template ideation and craft compelling email pitches that command attention and stand out in the inbox.",
      },
      { name: "Email Sequencing", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Advanced Scheduling", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Holiday Scheduling", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Multi-Drip Outreach", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "Conditional Logic Templates",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        hasDesc: true,
        desc: "Use IF/ELSE conditions to customize messages and make them more relevant to the recipient. This allows for more personalized and targeted outreach that can help increase response rates.",
      },
      { name: "Global Templates", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Unsubscribe Lists", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "One-Click Unsubscribe",
        hasDesc: true,
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        desc: "Easily let your recipients opt out of your emails with just one click, using a special email header instead of a traditional link in the footer. This feature complies with the RFC 8058 standard for unsubscribing from email lists. Starting June 1, 2024, Google requires all bulk email senders to include this one-click unsubscribe feature in their email headers to ensure deliverability to Gmail addresses.",
      },
    ],
  },
  {
    category: {
      title: "Automation Builder",
      icon: "/st-images/robot-regular.svg",
    },
    items: [
      {
        name: "Automations",
        hasDesc: true,
        pro: "4",
        advanced: "20",
        scale: "50",
        desc: "Create advanced automation workflows based on a simple “When/Then” dynamic and streamline your day-to-day tasks while enforcing SOPs. Video Tutorial",
      },
      { name: "Actions", pro: "400/mo", advanced: "4k/mo", scale: "10k/mo" },
    ],
  },
  {
    category: {
      title: "Data & Security",
      icon: "/st-images/shield-check.svg",
    },
    items: [
      {
        name: "Granular User Permissions",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "Email Persona Security", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "Security Data Retention",
        pro: "15 days",
        advanced: "30 days",
        scale: "30 days",
      },
      { name: "Project Level Access", pro: "—", advanced: "✓", scale: "✓" },
      { name: "Skill-based User Roles", pro: "—", advanced: "✓", scale: "✓" },
      { name: "Audit Logs", pro: "—", advanced: "✓", scale: "✓" },
    ],
  },
  {
    category: { title: "Deliverability", icon: "/st-images/paper-plane.svg" },
    items: [
      { name: "Inbox Placement", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "IP Blacklist Monitoring",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "Email Account Monitoring",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "Domain Reputation Monitoring",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "Honeypot Monitoring", pro: "—", advanced: "✓", scale: "✓" },
      {
        name: "Email Server Location",
        hasDesc: true,
        desc: "Choose which geographic region(s) will host the servers that send your outreach emails. Strategic server location can improve email deliverability and help comply with regional data regulations. Different plans allow selection of one or multiple regions.",
        pro: "Choose 1 (US, UK)",
        advanced: "Choose 1 (US, UK)",
        scale: "Choose 1 (US, UK, DE, AU, FR)",
      },
      { name: "Shared Mailers", pro: "1", advanced: "1", scale: "1" },
      {
        name: "Dedicated Mailers",
        pro: "n/a",
        advanced: "Optional",
        scale: "Optional",
      },
      {
        name: "MX Right™ Checks",
        pro: "30-Day Frequency",
        advanced: "30-Day Frequency",
        scale: "15-Day Frequency",
      },
      {
        name: "Template Spam Testing (MX Risk™)",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "Template Readability Scoring",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "Spam Risk Mitigation", pro: "—", advanced: "✓", scale: "✓" },
    ],
  },
  {
    category: { title: "Email Connectivity", icon: "/st-images/mailbox.svg" },
    items: [
      {
        name: "Multi-Persona Management",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "IMAP/SMTP", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "Gmail",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-10.webp",
      },
      {
        name: "Microsoft 365",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-11.webp",
      },
      {
        name: "MS Exchange",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-12.webp",
      },
      {
        name: "Sendgrid",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-13.webp",
      },
      {
        name: "Mailgun",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-14.webp",
      },
      {
        name: "Mandrill",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-15.webp",
      },
      {
        name: "Hybrid Connections (oAuth + SMTP )",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "Auto-Responder Detection",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "Canned Responses", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Schedule Emails", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Email Snoozing", pro: "✓", advanced: "✓", scale: "✓" },
    ],
  },
  {
    category: { title: "SEO-Centric CRM", icon: "/st-images/list-check.svg" },
    items: [
      {
        name: "Custom & Personalization Data",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      { name: "Task & Reminders", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Task Automation", pro: "—", advanced: "✓", scale: "✓" },
      { name: "Pipeline Management", pro: "—", advanced: "✓", scale: "✓" },
    ],
  },
  {
    category: {
      title: "SEO Integrations",
      icon: "/st-images/puzzle-piece.svg",
    },
    items: [
      {
        name: "Ahrefs",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-17.webp",
      },
      {
        name: "Moz",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-18.webp",
      },
      {
        name: "Semrush",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-19.webp",
      },
      {
        name: "Majestic",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-21.webp",
      },
    ],
  },
  {
    category: {
      title: "Advanced Integrations",
      icon: "/st-images/apps-add.svg",
    },
    items: [
      {
        name: "Slack",
        pro: "—",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-22.webp",
      },
      {
        name: "Zapier",
        pro: "—",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-23.webp",
      },
      {
        name: "Webhooks",
        pro: "—",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/pb-plans-pricing-25.webp",
      },
      {
        name: "API",
        pro: "—",
        advanced: "✓",
        scale: "✓",
        icon: "/st-images/api-icon.webp",
      },
      {
        name: "Looker Studio",
        pro: "—",
        advanced: "—",
        hasDesc: true,
        scale: "✓",
        icon: "/st-images/google-looker.svg",
        desc: "Check out this video how Pitchbox integrates with Google Looker Studion",
      },
    ],
  },
  ,
  {
    category: {
      title: "Link Monitoring",
      icon: "/st-images/eye.svg",
    },
    items: [
      {
        name: "Links Monitored",
        pro: "1K Links",
        advanced: "5K Links",
        scale: "10K Links",
      },
      { name: "Backlink Health", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Backlink Change Log", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Bi-Lateral Link Checks", pro: "✓", advanced: "✓", scale: "✓" },
    ],
  },

  {
    category: {
      title: "Reporting",
      icon: "/st-images/chart-histogram-1.svg",
    },
    items: [
      { name: "Management Insights", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Campaign Performance", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Pipeline History", pro: "—", advanced: "✓", scale: "✓" },
      {
        name: "Email Account Analytics",
        pro: "✓",
        advanced: "✓",
        scale: "✓",
      },
      {
        name: "White-label Client Reports",
        pro: "—",
        advanced: "—",
        scale: "✓",
      },
      {
        name: "Segments & Multivariate Testing",
        pro: "—",
        advanced: "—",
        scale: "✓",
      },
      { name: "Custom Data Analytics", pro: "—", advanced: "—", scale: "✓" },
      { name: "Team Performance", pro: "—", advanced: "✓", scale: "✓" },
      { name: "Activity Feed", pro: "—", advanced: "✓", scale: "✓" },
      { name: "Looker Studio", pro: "—", advanced: "—", scale: "✓" },
    ],
  },
  {
    category: {
      title: "Support",
      icon: "/st-images/life-ring.svg",
    },
    items: [
      { name: "Onboarding", pro: "✓", advanced: "✓", scale: "✓" },
      { name: "Live Chat Support", pro: "✓", advanced: "✓", scale: "✓" },
      {
        name: "Dedicated Account Manager",
        pro: "—",
        advanced: "✓",
        scale: "✓",
      },
      { name: "On-going Team Training", pro: "—", advanced: "✓", scale: "✓" },
    ],
  },
];

export default function SubscriptionSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
  };

  function StickyPricingTable() {
    const [isSticky, setIsSticky] = useState(false);
    const [isTableEnd, setIsTableEnd] = useState(false);
    const tableRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!tableRef.current || !headerRef.current) return;

        const tableRect = tableRef.current.getBoundingClientRect();
        const headerHeight = headerRef.current.offsetHeight;

        const shouldBeSticky =
          tableRect.top <= 0 && tableRect.bottom > headerHeight;

        const isAtTableEnd = tableRect.bottom <= headerHeight;

        setIsSticky(shouldBeSticky && !isAtTableEnd);
        setIsTableEnd(isAtTableEnd);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderValue = (value) => {
      if (value === "✓") {
        return (
          <div className="w-5 h-5 bg-[#1AB394] rounded-full flex items-center justify-center mx-auto">
            <Check className="w-4 h-4 text-white" />
          </div>
        );
      }

      if (value === "-" || value === "—") {
        return <X className="w-5 h-5 text-gray-400 mx-auto" />;
      }
      return <span className="text-gray-900 font-medium">{value}</span>;
    };

    return (
      <div className="bg-white py-16">
        <Container className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-[32px] leading-relaxed font-medium text-gray-900 mb-8">
              Unmatched Functionality at a Glance
            </h2>
          </div>
          {isSticky && (
            <div style={{ height: headerRef.current?.offsetHeight || 0 }}></div>
          )}

          {/* Sticky Header */}
          <div
            ref={headerRef}
            className={`${
              isSticky
                ? "fixed mt-22 top-0 left-0 right-0 z-50 bg-white  transition-transform duration-300"
                : ""
            } ${isTableEnd ? "relative" : ""}`}
          >
            <Container className="px-4">
              <div className="grid grid-cols-5 gap-8 py-6">
                <div className=""></div>
                <div className=""></div>

                {plans.map((plan, index) => (
                  <div key={index} className="text-center ">
                    <h3 className="text-[24px] font-bold text-gray-900 mb-1">
                      {plan.name}
                    </h3>
                    <div>
                      <span className="text-3xl font-bold mr-2">
                        {plan.name === "Pro"
                          ? isMonthly
                            ? plan.price
                            : "$ 165"
                          : plan.name === "Advanced"
                          ? isMonthly
                            ? plan.price
                            : "$ 420"
                          : plan.name === "Scale"
                          ? isMonthly
                            ? plan.price
                            : "$ 675"
                          : "Default"}
                      </span>
                      <span className="text-base font-normal text-gray-500">
                        {" "}
                        /mo
                      </span>
                    </div>

                    <button
                      className={`border text-[14px] mt-2 cursor-pointer font-semibold leading-relaxed text-white w-full px-2 py-4 transition-all duration-300`}
                      style={{
                        backgroundColor: plan.btnColor
                          .replace("bg-[", "")
                          .replace("]", ""),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = plan.btnColor;
                        e.currentTarget.style.border = `1px solid ${plan.btnColor}`;
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.backgroundColor = plan.btnColor
                          .replace("bg-[", "")
                          .replace("]", "");
                        e.currentTarget.style.border = "none";
                      }}
                    >
                      {plan.buttonText}
                    </button>
                    <div className="text-center mt-4">
                      <Link
                        href="/signup"
                        className="relative group inline-block cursor-pointer"
                      >
                        <span className="relative inline-flex items-center gap-2 text-[12px] text-blue-500 font-semibold text-sm leading-relaxed after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                          or Subscribe
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>

          {/* Add spacing when header is sticky */}
          {isSticky && <div className="h-32"></div>}

          {/* Table Content */}
          <div ref={tableRef} className="bg-white">
            {tableData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <div className="bg-white py-4 px-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Image
                      src={section.category.icon}
                      alt={section.category.title}
                      width={32}
                      height={32}
                    />
                    {section.category.title}
                  </h4>
                </div>

                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid grid-cols-4 gap-4 py-4 px-6 border-b border-gray-100"
                  >
                    <div className="flex items-center text-left ">
                      {item.icon && (
                        <Image
                          width={32}
                          height={32}
                          alt={item.name}
                          src={item.icon}
                          className="mr-2"
                        ></Image>
                      )}
                      <span className="relative group text-gray-700 font-medium">
                        <span
                          className={`${
                            typeof item === "object" && item.hasDesc
                              ? "border-b border-dashed border-gray-400 cursor-pointer"
                              : ""
                          }`}
                        >
                          {typeof item === "object" ? item.name : item}
                        </span>

                        {typeof item === "object" && item.desc && (
                          <div className="absolute left-6 bottom-full mb-4 z-10 hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] group-hover:block bg-white text-gray-700 text-sm p-3 w-64">
                            {/* Tooltip arrow */}
                            <div className="absolute bottom-[-10px] left-4 w-0 h-0 border-l-[12px] shadow-2xl border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white"></div>

                            {item.desc.split("\n").map((line, idx) => (
                              <p key={idx} className="mb-1">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      {renderValue(item.pro)}
                    </div>
                    <div className="text-center flex items-center justify-center">
                      {renderValue(item.advanced)}
                    </div>
                    <div className="text-center flex items-center justify-center">
                      {renderValue(item.scale)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

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
                <span className="text-3xl font-bold mr-2">
                  {plan.title === "Pro"
                    ? isMonthly
                      ? plan.price
                      : "$ 165"
                    : plan.title === "Advanced"
                    ? isMonthly
                      ? plan.price
                      : "$ 420"
                    : plan.title === "Scale"
                    ? isMonthly
                      ? plan.price
                      : "$ 675"
                    : "Default"}
                </span>

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
                  className={`border text-[12px] mt-10 cursor-pointer font-semibold leading-relaxed text-white w-full px-2 py-4 transition-all duration-300`}
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
                  <Link
                    href="/signup"
                    className="relative group inline-block cursor-pointer"
                  >
                    <span className="relative inline-flex items-center gap-2 text-[12px] text-blue-500 font-semibold text-sm leading-relaxed after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                      or Subscribe
                    </span>
                  </Link>
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
      <Container className="px-5 mb-8">
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
              <Link href="/contact-us" className="border mt-4 text-[14px] px-8 py-3 bg-blue-500 text-white cursor-pointer hover:border hover:text-blue-500 hover:border-blue-500 hover:bg-white ">
                GET IN TOUCH
              </Link>
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
      <Container>
        <StickyPricingTable />
      </Container>
      <Container>
        <div className="px-1 mt-10">
          <ContentBtnWrapper
            title=" Want to See Pitchbox in Action?"
            desc="Book a demo and discover why Pitchbox is the industry leader"
            btnText="book a demo"
            link="/demo"
          />
        </div>
      </Container>
    </FullContainer>
  );
}
