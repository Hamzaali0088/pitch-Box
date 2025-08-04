"use client";
import React from "react";
import Container from "../../common/Container";
import Image from "next/image";
const companyLogos = [
  { title: "SEJ", imgSrc: "/st-images/sej-logo.webp" },
  { title: "Search Engine Land", imgSrc: "/st-images/sel-logo.webp" },
  { title: "Forbes", imgSrc: "/st-images/forbes-logo.webp" },
  { title: "MOZ", imgSrc: "/st-images/moz.webp" },
  { title: "PR Week", imgSrc: "/st-images/pr-week.webp" },
  { title: "QuickSprout", imgSrc: "/st-images/quicksprout.webp" },
  { title: "ECommerce", imgSrc: "/st-images/ecommerce-expo.webp" },

  { title: "TechCrunch", imgSrc: "/st-images/techcrunch.webp" },
  { title: "OnlineRetailer", imgSrc: "/st-images/online-retailer.webp" },
  {
    title: "Duct type marketing",
    imgSrc: "/st-images/duct-tape-marketing-logo.webp",
  },
];


const testimonialsA = [
  {
    id: 1,
    quote:
      "Hands down the best outreach tool out there – and a game-changer for link builders.",
    author: "Matt Diggity",
    role: "Diggity Marketing",
    avatar: "/st-images/Matt-Diggity-256x256-1-100x100.jpg",
  },
  {
    id: 2,
    quote:
      "Unlike many outreach platforms that are clunky and confusing, Pitchbox is a breeze to use.",
    author: "Brian Dean",
    role: "@Backlinko",
    avatar: "/st-images/Brian-Dean.jpg",
  },
  {
    id: 3,
    quote:
      "If you’re looking to scale your efforts and build a system of accountability Pitchbox has you covered!",
    author: "David Stein",
    role: "Wunderman",
    avatar: "/st-images/david-stein-sm.webp",
  },
  {
    id: 4,
    quote:
      "Pitchbox is amazing end to end – you should be proud of what you have built. I feel dirty recommending any other email tool since using Pitchbox.",
    author: "Matthew Woodward",
    role: "@MattWoodwardUK",
    avatar: "/st-images/Matthew-Woodward-sm2.webp",
  },
  {
    id: 5,
    quote:
      "If you are serious about scaling link building you’re going to need Pitchbox. In just a few months I was hitting efficiency as high as 500 RLD per month per one staff.",
    author: "Tony Spencer",
    role: "@notsleepy",
    avatar: "/st-images/Tony-Spencer-sm.webp",
  },
];

const testimonialsB = [
  {
    id: 6,
    quote:
      "Incredibly powerful. I strongly advise you look into Pitchbox… If you want to do this thing at true scale, I highly, highly recommend it",
    author: "Ryan Stewart",
    role: "Founder, WEBRIS",
    avatar: "/st-images/Ryan-Stewart-sm.jpg",
  },
  {
    id: 7,
    quote:
      "When it comes to link prospecting and outreach, there aren’t many tools with as much power and as many features as Pitchbox.",
    author: "Neil Patel",
    role: "Founder, Crazy Egg",
    avatar: "/st-images/neilpatel3-sm.jpg",
  },
  {
    id: 8,
    quote:
      "If you do outreach for international markets, take a look at @PitchboxApp: Outreach automation + prospecting that will save you TONS of time",
    author: "Aleyda Solis",
    role: "Founder, Orainti",
    avatar: "/st-images/aleyda-solis-sm.jpg",
  },
  {
    id: 9,
    quote: "It is really hard to express how good Pitchbox is.",
    author: "Russ Jones",
    role: "MOZ",
    avatar: "/st-images/rjonesx-66x66.jpg",
  },
  {
    id: 10,
    quote: "If you’re doing outreach for link building, it’s a must have.",
    author: "Todd Malicoat",
    role: "@stuntdubl",
    avatar: "/st-images/Tod-Malicoat-sm.webp",
  },
];

const testimonialsC = [
  {
    id: 11,
    quote:
      "Pitchbox is the sh*t. I love how Pitchbox helps inform strategy based on its prospecting. I also love that it makes it easy to provide complete transparency to our clients regarding our outreach efforts and, more importantly, it allows for a separation of concerns. The reality is that someone who is good at finding contacts, and knowing what a good link is, is not always someone who is good at outreach.",
    author: "Michael King",
    role: "Founder, iPullRank",
    avatar: "/st-images/Michael-King-sm.jpg",
  },
  {
    id: 12,
    quote:
      "Outspoken Media loves Pitchbox! It saves us time, which frees up our client’s budgets for more results whether we’re reaching out to the media and bloggers, or cleaning up links. Our favorite features include reliable contact discovery, scheduled follow-up, industry-leading email integration, and reporting on all phases of the outreach process. Its ease of use and prompt customer service make Pitchbox an essential tool for our digital marketing agency.",
    author: "Rhea Drysdale, CEO",
    role: "Founder, Outspoken Media",
    avatar: "/st-images/Rhea-Drysdale-wb-sm.jpg",
  },
  {
    id: 13,
    quote:
      "If you’re serious about personalization, automation and performance tracking of your outreach team, then look no further – Pitchbox finally answers all of your burning questions for software that helps you nurture your prospects, be it for PR, link building or toxic link removal.",
    author: "Christoph Cemper",
    role: "Founder, Link Research Tools",
    avatar: "/st-images/christoph-cemper3.jpg",
  },
  {
    id: 14,
    quote:
      "Pitchbox is THE answer to scaling your outreach efforts. It handles all aspects from the prospecting to the emailing to the tracking and managing the workflow. I highly recommend it to anyone who’s serious about building links and their online reputation.",
    author: "Stephan Spencer",
    role: "Co-Author of the Best Seller, The Art of SEO",
    avatar: "/st-images/stepahn-spencer-sm.jpg",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="transition-all duration-300">
      <div className="border bg-[#eef7e6] border-[#eef7e6] p-8 mb-8 relative">
        <p className="text-gray-600 text-[16px] leading-relaxed ">
          “{t.quote}”
        </p>
        {/* Speech Bubble Tail */}
        <div
          className={`absolute -bottom-3 left-6 border-[#eef7e6] bg-[#eef7e6]  transform rotate-45 w-8 h-8 `}
        ></div>
       

      </div>
      <div className="mt-6 flex items-center gap-3 space-x-3 px-2">
        <div className="relative">
          <Image
            src={t.avatar}
            alt={t.author}
            width={1000}
            height={1000}
            className="w-15 h-15 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-[15px] font-semibold text-gray-800">{t.author}</p>
          <p className="text-[13px] text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * 5-item grid → row1 = 3 items (col-span-4 each), row2 = 2 items (col-span-6 each)
 */
function FiveBlock({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {data.map((t, i) => (
        <div
          key={t.id}
          className={
            // mobile: full width, md+: dynamic spans
            i < 3
              ? "md:col-span-4" // first row -> 3 items
              : "md:col-span-6" // second row -> 2 centered
          }
        >
          <TestimonialCard t={t} />
        </div>
      ))}
    </div>
  );
}

/**
 * 4-item grid → 2 rows x 2 items (col-span-6 each)
 */
function FourBlock({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {data.map((t) => (
        <div key={t.id} className="md:col-span-6">
          <TestimonialCard t={t} />
        </div>
      ))}
    </div>
  );
}
const LogoGrid = () => {
  return (
    <div className="">
        <div className="my-12">
          <h3 className="text-gray-800 text-[24px] text-center">As seen in</h3>
        </div>
          <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-2">
            {companyLogos.map((logo, index) => (
              <div key={index} className="h-25">
                <Image
                  className="h-full w-full object-contain"
                  src={logo.imgSrc}
                  alt={logo.title}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <Container className="">
      <div className="py-20 ">
        <LogoGrid />    

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto my-16">
          <h2 className="text-[26px]  text-gray-700">
            Trusted by thousands of happy users worldwide
          </h2>
          <p className="text-[20px] text-neutral-400">
            But don’t take our word for it. Here’s what industry thought leaders
            have to say…
          </p>
        </div>

        <FiveBlock data={testimonialsA} />

        <FiveBlock data={testimonialsB} />

        <FourBlock data={testimonialsC} />
      </div>
    </Container>
  );
};
export default Testimonial;  
