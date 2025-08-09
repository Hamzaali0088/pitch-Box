"use client";
import Image from "next/image";
import Container from "../../common/Container";
import Link from "next/link";

const cards = [
  {
    title: "A Blueprint for In House Link Building Success",
    image:
      "/st-images/A-Blueprint-for-In-House-Link-Building-Success-with-Adam-Collins-520x293.jpg",
    alt: "Adam Collins",
    link: "/link-masters/in-house-link-building-blueprint",
  },
  {
    title: "How This SEO Agency Built Over 100,000 Links for Clients",
    image: "/st-images/Karl-Hudson-Lessons-from-100K-Links-thumb-520x293.jpeg",
    alt: "Karl Hudson",
    link: "/link-masters/how-this-seo-agency-built-100000-links",
  },
  {
    title:
      "How to Build High Authority Links with Purpose-Driven SEO Campaigns",
    image:
      "/st-images/Authority-First-SEO-Strategies-with-Dale-Bertrand-520x293.jpg",
    alt: "Dale Bertrand",
    link: "/link-masters/how-to-build-high-authority-links-with-purpose-driven-seo",
  },
  {
    title: "How to Build Links with Cats, Comedy and Creative Genius",
    image: "/st-images/How-to-Build-Links-with-Humor-520x293.png",
    alt: "humor",
    link: "/link-masters/how-to-build-links-with-humor",
  },
  {
    title:
      "How to Skyrocket a Client’s Traffic from 300K to 10M+ Monthly Visitors",
    image:
      "/st-images/Amit-Raj-How-to-Skyrocket-Clients-Traffic-from-300K-to-10M-Monthly-Visitors-520x293.jpg",
    alt: "Amit Raj",
    link: "/link-masters/how-to-skyrocket-a-clients-traffic-from-300k-to-10m-monthly-visitors",
  },
  {
    title: "How to Scale an SEO Agency From 30 to 140 Clients",
    image:
      "/st-images/Jack-Roebuck-How-to-Scale-an-SEO-Agency-From-30-to-140-Clients-520x293.webp",
    alt: "Jack roebuck",
    link: "/link-masters/how-to-scale-an-seo-agency-to-140-clients",
  },
  {
    title: "How We Build 1000 Links a Month: The Profit Engine Story",
    image:
      "/st-images/How-We-Build-1000-Links-a-Month-Jason-Morris-520x293.jpg",
    alt: "Jason-Morris",
    link: "/link-masters/how-to-build-1000-links-per-month",
  },
];

export default function PodcastGrid() {
  return (
    <section className="bg-gray-100 py-24">
      <Container className="px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group cursor-pointer bg-white overflow-hidden"
            >
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 mb-6">
                <h3 className="text-lg font-medium hover:text-blue-400 text-gray-800 leading-relaxed">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
