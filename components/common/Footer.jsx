import React from "react";

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";

export default function Footer() {
  return (
    <div>
      <FooterSection />
    </div>
  );
}

const FooterSection = () => {
  const footerSections = [
    {
      title: "Why Pitchbox?",
      links: [
        { tag: "Product Overview", href: "/product" },
        { tag: "Prospecting", href: "/product/link-building-prospecting" },
        { tag: "AI Tools for Link Builders", href: "/ai" },
        { tag: "Workflow", href: "/product/skill-based-workflow" },
        { tag: "Outreach & Follow Up", href: "/product/outreach-follow-up" },
        { tag: "SEO Email Client", href: "/product/seo-email-client" },
        { tag: "CRM", href: "/product/seo-crm" },
        { tag: "Reports", href: "/product/reports" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { tag: "SEO Integrations", href: "/integrations/seo-integrations" },
        { tag: "Zapier", href: "/integrations/zapier" },
        { tag: "Looker Studio", href: "/integrations/looker-studio" },
        { tag: "Slack", href: "/integrations/slack" },
        { tag: "All integrations", href: "/integrations" },
        { tag: "API", href: "/developer-api" },
      ],
    },
    {
      title: "Resources",
      links: [
        { tag: "Blog", href: "/blog" },
        { tag: "Knowledge base", href: "/help" },
        { tag: "Case Studies", href: "/case-studies" },
        { tag: "Link Masters Podcast", href: "/link-masters" },
        { tag: "Events & Webinars", href: "/events-webinars" },
        { tag: "Get Pitchbox Certified", href: "/pitchbox-certified" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 text-gray-500" />,
      text: "626 Jacksonville Rd., Suite 105, Warminster, PA 18974",
    },
    {
      icon: <Mail className="w-4 h-4 text-gray-500" />,
      text: "support@pitchbox.com",
    },
    {
      icon: <Phone className="w-4 h-4 text-gray-500" />,
      text: "+1 (215) 475-5096",
    },
    {
      icon: <Clock className="w-4 h-4 text-gray-500" />,
      text: "US Support Hours: 9am - 8pm EST",
    },
    {
      icon: <Clock className="w-4 h-4 text-gray-500" />,
      text: "EU Support Hours: 9am - 5pm GMT",
    },
  ];

  const socialIcons = [
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <Container className="py-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo isSticky={true} />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed opacity-60">
              Link Building Software for Agencies, Publishers, and Brands.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-gray-500 mb-2 text-sm opacity-90">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-neutral-500 opacity-60 text-[14px] leading-relaxed hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information — full width on md */}
          <div className="md:col-span-4 lg:col-span-1">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 opacity-60 mt-0.5">
                    {info.icon}
                  </div>
                  <span className="text-gray-500 opacity-60 text-sm leading-relaxed">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className=" max-w-5xl py-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 ">
              <span className="text-[14px] opacity-60 text-gray-500">
                Copyright © 2025 · Pitchbox™ · All rights reserved
              </span>
              <div className="flex items-center space-x-4">
                <a
                  href="/terms"
                  className="text-[14px] opacity-60 text-gray-500 hover:text-gray-700 hover:opacity-90   transition-colors"
                >
                  Terms
                </a>
                <span className="opacity-60 ">·</span>
                <a
                  href="/cookie-policy"
                  className="text-[14px] opacity-60 text-gray-500 hover:text-gray-700 hover:opacity-90 transition-colors"
                >
                  Cookie Policy
                </a>
                <span className="opacity-60 ">·</span>
                <a
                  href="#"
                  className="text-[14px] opacity-60 text-gray-500 hover:text-gray-700 hover:opacity-90 transition-colors"
                >
                  VDP
                </a>
                <span className="opacity-60 ">·</span>
                <a
                  href="/privacy-policy"
                  className="text-[14px] opacity-60 text-gray-500 hover:text-gray-700 hover:opacity-90 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-700 opacity-60 hover:opacity-90 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
