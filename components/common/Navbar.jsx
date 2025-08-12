"use client";

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const navbarMenuItems = [
  { label: "Overview", href: "/product" },
  {
    label: "Product",
    hasDropdown: true,
    megaMenu: true,
    sections: [
      {
        title: "why pitchbox?",
        items: [
          {
            title: "Results",
            desc: "Hear success stories from teams similar to your own",
            href: "/case-studies",
          },
          {
            title: "Podcast",
            desc: "Link Masters features interviews with top SEO experts",
            href: "/link-masters",
          },
        ],
      },
      {
        title: "platform",
        items: [
          {
            title: "SEO Email Client",
            imgSrc: "/st-images/menu-icon-2.png",
            desc: "Email Management made specifically for link builders",
            href: "/product/seo-email-client",
          },
          {
            title: "CRM",
            imgSrc: "/st-images/menu-icon-4.png",
            desc: "Built for Link Builders, PR, and Outreach Professionals",
            href: "/product/seo-crm",
          },

          {
            title: "Reports",
            imgSrc: "/st-images/menu-icon-6.png",
            desc: "Analytics for ROI-focused Link Builders",
            href: "/product/reports",
          },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "✨AI", href: "/ai" },
  {
    label: "Connect",
    hasDropdown: true,
    items: [
      {
        title: "SEO Integrations",
        desc: "Metrics and data from the top tools in the industry",
        href: "/integrations/seo-integrations",
        imgSrc: "/st-images/menu-icon-seo-integrations.png",
      },
      {
        title: "Zapier",
        desc: "Connect Pitchbox with thousands of applications",
        href: "/integrations/zapier",
        imgSrc: "/st-images/menu-icon-zapier.webp",
      },
      {
        title: "Slack",
        desc: "Pitchbox notifications in your Slack channels",
        href: "/integrations/slack",
        imgSrc: "/st-images/menu-icon-slack.webp",
      },
      {
        title: "Looker Studio",
        desc: "Create custom reports and dashboards",
        href: "/integrations/looker-studio",
        imgSrc: "/st-images/google-looker.png",
      },
      {
        title: "All Integrations",
        desc: "Connect industry-leading tools to Pitchbox",
        href: "/integrations",
        imgSrc: "/st-images/menu-icon-3.png",
      },
    ],
  },
  {
    label: "Resources",
    hasDropdown: true,
    megaMenu: true,
    sections: [
      {
        title: "learn",
        items: [
          {
            title: "Blog",
            desc: "Learn from the top leaders in SEO",
            href: "/blog",
            imgSrc: "/st-images/menu-icon-7.png",
          },
          {
            title: "Knowledge Base",
            desc: "Helpful articles for navigating Pitchbox",
            href: "/help",
            imgSrc: "/st-images/menu-icon-8.png",
          },
          {
            title: "Case Studies",
            desc: "Hear success stories from teams similar to your own",
            href: "/case-studies",
            imgSrc: "/st-images/menu-icon-9.png",
          },
        ],
      },
    ],
    featuredReads: [
      {
        title: "A Step-by-Step Guide to Securing Free, Quality Backlinks",
        desc: "Learn how to earn premium backlinks at no cost by refining your prospecting and outreach techniques",
        href: "/blog/how-to-get-free-backlinks",
        imgSrc: "/st-images/secure-backlinks-by-bibi.webp",
      },
      {
        title: "Link Prospecting Hacks From An Agency",
        desc: "Valuable insights and prospecting tips from Stewart Dunlop of linkbuilder.io",
        href: "/blog/links-prospecting-hacks",
        imgSrc: "/st-images/link-prospecting-hacks.webp",
      },
      {
        title: "Building an All-Star Link Building Team",
        desc: "How a young agency scaled their outreach emails and built up to 1000s of links per month with Pitchbox",
        href: "/blog/building-an-all-star-link-building-team",
        imgSrc: "/st-images/teamwork.jpg",
      },
    ],
  },
  { label: "Log In", href: "/login" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  };

  const router = useRouter();
  const pathname = router.pathname;

  const isTransparentPage = [
    "/case-studies",
    "/integrations",
    "/pricing",
    "/cookie-policy",
    "/contact-us",
    "/privacy-policy",
    "/terms",
    "/demo",
    "/product/seo-email-client",
  ].includes(pathname);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300  ${
        isSticky || isTransparentPage
          ? "bg-white border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <Container className="">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* logo place here */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                width={200}
                height={40}
                src="/logo.png"
                alt="Logo"
                className="object-cover"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">
            <nav className="flex items-center space-x-6">
              {navbarMenuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    item.hasDropdown && handleMouseEnter(item.label);
                  }}
                  onMouseLeave={() => {
                    item.hasDropdown && handleMouseLeave();
                  }}
                >
                  {/* dropdown navigation items */}
                  {item.hasDropdown ? (
                    <button
                      className={`flex text-[14px] mt-1 font-medium items-center space-x-1 hover:text-blue-400 transition-colors duration-200 py-2 cursor-pointer ${
                        isSticky || isTransparentPage
                          ? "text-gray-800"
                          : "text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.label === activeDropdown ? (
                        <ChevronUp className="w-3.5 h-3.5 transition-all duration-200" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 transition-all duration-200" />
                      )}
                    </button>
                  ) : (
                    // navigation items with no dropdown
                    <Link
                      className={`items-center text-[14px] font-medium transition-colors duration-200 py-2 cursor-pointer ${
                        isSticky || isTransparentPage
                          ? "text-gray-800 hover:text-blue-500"
                          : "text-white hover:text-blue-400"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* dropdown menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute left-0 top-12 z-50 transition-all duration-200">
                      {item.megaMenu ? (
                        <Container className="rounded-lg shadow-xl max-w-[600px] w-[500px] border border-gray-100 bg-white">
                          <div className="flex flex-row gap-x-4 px-2 py-4">
                            {item.sections.map((section, sectionIndex) => (
                              <div className="flex-1" key={sectionIndex}>
                                <h3 className="font-semibold text-gray-700 border-b border-gray-200 text-[14px] uppercase tracking-widest mb-2 pb-2">
                                  {section.title}
                                </h3>
                                <div className="space-y-1">
                                  {section.items.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subItem.href}
                                      className="flex items-start transition-colors duration-200 group p-2 rounded-lg hover:bg-gray-50"
                                    >
                                      {subItem && "imgSrc" in subItem && (
                                        <div className="flex-shrink-0 mr-3">
                                          <img
                                            className="h-5 w-5 object-contain"
                                            src={subItem.imgSrc}
                                            alt={subItem.title}
                                          />
                                        </div>
                                      )}
                                      <div className="flex-1">
                                        <p className="font-semibold text-gray-900 group-hover:text-blue-500 text-[15px] mb-1">
                                          {subItem.title}
                                        </p>
                                        <p className="text-[13px] text-gray-600 leading-relaxed">
                                          {subItem.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {/* resources featured reads */}
                            {item.featuredReads && (
                              <div className="max-w-[250px] w-full ">
                                <h3 className="font-semibold text-gray-700 border-b border-gray-200 text-[14px] uppercase tracking-widest mb-2 pb-2">
                                  featured reads
                                </h3>
                                <div className="space-y-3">
                                  {item.featuredReads.map((post, postIndex) => (
                                    <Link
                                      className="flex p-3 rounded-lg group hover:bg-gray-50 transition-colors duration-200"
                                      key={postIndex}
                                      href={post.href}
                                    >
                                      <div className="flex-shrink-0 mr-3">
                                        <img
                                          className="h-12 w-12 object-cover rounded"
                                          src={post.imgSrc}
                                          alt={post.title}
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <p className="font-semibold text-gray-900 group-hover:text-blue-500 text-[14px] mb-1 line-clamp-2">
                                          {post.title}
                                        </p>
                                        <p className="text-[12px] text-gray-600 line-clamp-2">
                                          {post.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </Container>
                      ) : (
                        <div className="rounded-lg shadow-xl py-2 min-w-[320px] max-w-md w-auto bg-white border border-gray-100 overflow-y-auto max-h-[500px]">
                          <div className="space-y-1">
                            {item.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                className="flex items-start space-x-3 p-3 hover:bg-gray-50 group transition-colors duration-200"
                                href={subItem.href}
                              >
                                <div className="flex-shrink-0">
                                  <img
                                    src={subItem.imgSrc}
                                    className="w-5 h-5 object-contain"
                                    alt={subItem.title}
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-[15px] text-gray-900 group-hover:text-blue-500">
                                    {subItem.title}
                                  </div>
                                  <div className="text-[13px] text-gray-500 mt-1">
                                    {subItem.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* buttons */}
            <div className="flex items-center space-x-3">
              <Link
                className={`border uppercase px-4 py-2 font-medium transition-colors duration-200 text-[14px] rounded ${
                  isSticky || isTransparentPage
                    ? "border-[#1198EB] text-gray-800 hover:bg-[#1198EB] hover:text-white"
                    : "border-white text-white hover:bg-[#1198EB]"
                }`}
                href="/signup"
              >
                try for free
              </Link>
              <Link
                className={`px-4 py-2 uppercase border border-white text-[14px] text-white bg-[#1198EB] hover:border-[#1198EB] hover:bg-white transition-colors rounded ${
                  isSticky || isTransparentPage
                    ? "hover:text-gray-800"
                    : "hover:text-[#1198EB]"
                }`}
                href="/demo"
              >
                book a demo
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors duration-200 ${
              isSticky || isTransparentPage ? "text-gray-800" : "text-white"
            }`}
          >
            <Menu className="w-7 h-7 cursor-pointer" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 h-full w-72 max-w-full bg-[#252525] z-50 overflow-y-auto transition-transform transform translate-x-0">
            {/* Close button */}
            <div className="flex justify-end p-2">
              <button
                onClick={closeMobileMenu}
                className="text-white rounded p-3 bg-gray-950"
              >
                <X className="w-4 h-4 cursor-pointer" strokeWidth={4} />
              </button>
            </div>

            <div className="space-y-2">
              {navbarMenuItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center w-full text-white bg-gray-950 font-medium py-3 px-3">
                        <span>{item.label}</span>

                        <ChevronDown className="w-4 h-4" />
                      </div>

                      <div className="mt-2 space-y-2 p-4 bg-gray-950">
                        {item.megaMenu ? (
                          <>
                            {item.sections?.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-4">
                                <h4 className="font-semibold text-white text-[12px] py-2 uppercase tracking-wide mb-2 border-b-2 border-white ">
                                  {section.title}
                                </h4>
                                <div className="space-y-2">
                                  {section.items?.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subItem.href}
                                      className="flex gap-2 space-x-2 py-2 px-2 text-white text-[12px]"
                                    >
                                      {subItem && "imgSrc" in subItem && (
                                        <div className="flex-shrink-0 mb-7">
                                          <Image
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                            src={subItem.imgSrc}
                                            alt={subItem.title}
                                          />
                                        </div>
                                      )}
                                      <div className="flex-1">
                                        <p className="font-medium text-[12px] text-white">
                                          {subItem.title}
                                        </p>
                                        <p className="text-[12px] text-white">
                                          {subItem.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {item.featuredReads && (
                              <div className="mb-4">
                                <h4 className="font-semibold text-white border-b-2 border-white py-2 text-[12px] uppercase tracking-wide mb-2">
                                  featured reads
                                </h4>
                                <div className="space-y-2">
                                  {item.featuredReads.map((post, postIndex) => (
                                    <Link
                                      key={postIndex}
                                      href={post.href}
                                      className="group flex items-center gap-4 py-2 px-2 text-white hover:bg-gray-50"
                                    >
                                      <div className="flex-shrink-0">
                                        <Image
                                          width={60}
                                          height={30}
                                          className="object-contain"
                                          src={post.imgSrc}
                                          alt={post.title}
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <p className="font-medium text-[14px] group-hover:text-blue-500 text-white">
                                          {post.title}
                                        </p>
                                        <p className="text-[12px] group-hover:text-blue-500 text-white">
                                          {post.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="space-y-2">
                            {item.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="flex gap-2 py-2 px-2 text-white  bg-gray-950 "
                              >
                                <div className="flex-shrink-0">
                                  <Image
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                    src={subItem.imgSrc}
                                    alt={subItem.title}
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-[12px] text-white">
                                    {subItem.title}
                                  </p>
                                  <p className="text-[12px]  text-white">
                                    {subItem.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      className="block text-white font-medium py-3 px-2 bg-gray-950"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="space-y-3">
                <Link
                  className="block px-4 py-3 font-medium uppercase bg-gray-950 text-white  hover:bg-[#1198EB] transition-colors"
                  onClick={closeMobileMenu}
                  href="/trial"
                >
                  try for free
                </Link>
                <Link
                  className="block px-4 py-3 font-medium uppercase bg-gray-950 text-white  hover:bg-[#1198EB] transition-colors"
                  onClick={closeMobileMenu}
                  href="/demo"
                >
                  book a demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Scroll to top button */}
      {isSticky && (
        <div className="fixed bottom-8 right-8 transition-all z-40 cursor-pointer">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="h-5 w-5" strokeWidth="3" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
