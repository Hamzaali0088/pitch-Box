"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "../../common/Container";
import { List, Play, RotateCcw, RotateCw } from "lucide-react";

const episodes = [
  {
    title: "How to Scale an Ecommerce Brand to $20M with SEO",
    duration: "59:43",
  },
  {
    title: "A Blueprint for In-House Link Building Success",
    duration: "51:36",
  },
  {
    title: "How This SEO Agency Built Over 100,000 Links for Clients",
    duration: "52:31",
  },
  {
    title:
      "Maximizing Impact: How to Build High Authority Links with Purpose-Driven SEO Campaigns",
    duration: "31:18",
  },
  {
    title: "How to Build Links with Cats, Comedy and Creative Genius",
    duration: "36:02",
  },
  {
    title:
      "How to Skyrocket a Client's Traffic from 300K to 10M+ Monthly Visitors",
    duration: "35:09",
  },
  {
    title: "How to Scale an SEO Agency From 30 to 140 Clients",
    duration: "40:17",
  },
  {
    title: "How To Build 1000 Links Per Month with Jason Morris",
    duration: "40:19",
  },
];

export default function PodcastPlayer() {
  const [selectedEpisode, setSelectedEpisode] = useState(0);

  return (
    <Container className="bg-white rounded-lg mt-24">
      <div className=" rounded-xl w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-start py-4">
          <div className="h-40 w-40">
            <Image
              src="/st-images/a4vntx6ngpojlfq8zb6ieled6qed.jpeg"
              width={50}
              height={50}
              alt="Podcast cover"
              className="rounded-lg w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex flex-col">
              <h2 className="text-[20px] font-bold text-black leading-relaxed">
                {episodes[selectedEpisode].title}
              </h2>
              <p className="text-[12px] text-black">
                Link Masters: The Art and Science of Link Building
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Play Button */}
              <button className="bg-black text-white p-3 rounded-full">
                <Play className="h-6 w-6" />
              </button>

              {/* Waveform + Timestamp */}
              <div className="relative w-[850px] h-[70px]">
                {/* Wave Image */}
                <Image
                  src="/st-images/5.svg"
                  alt="waveform"
                  width={400}
                  height={50}
                  className="object-contain w-full h-full"
                />

                {/* Timestamp */}
                <span className="absolute bottom-1 right-2 text-xs text-gray-600 bg-white bg-opacity-70 px-1 rounded">
                  00:00 | {episodes[selectedEpisode].duration}
                </span>
              </div>
            </div>

            <div className=" flex flex-row">
              {/* Rewind 15 */}
              <button className="flex items-center hover:text-gray-700 transition">
                <div className=" group relative w-8 h-8 flex items-center justify-center">
                  <RotateCcw className="w-9 h-9" strokeWidth={1.5} />
                  <span className="absolute text-[10px] font-semibold text-black top-2.5 right-2.5">
                    15
                  </span>
                </div>
              </button>

              {/* Forward 30s */}
              <button className="flex items-center hover:text-gray-700 transition">
                <div className=" group relative w-8 h-8 flex items-center justify-center">
                  <RotateCw className="w-9 h-9" strokeWidth={1.5} />
                  <span className="absolute text-[10px] font-semibold text-black top-2.5 right-2.5">
                    30
                  </span>
                </div>
              </button>
              <div className="flex flex-row  text-[14px] gap-4">
                <button className="ml-4 font-bold">1×</button>
                

                <button className="">More Info</button>
                <button>Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-60 overflow-y-auto">
        {episodes.map((episode, index) => (
          <div
            key={index}
            onClick={() => setSelectedEpisode(index)}
            className={`flex items-center justify-between py-1 cursor-pointer border-t border-gray-200 ${
              index === selectedEpisode ? "font-semibold" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Image
                src="/st-images/a4vntx6ngpojlfq8zb6ieled6qed.jpeg"
                width={40}
                height={40}
                alt="Podcast cover"
                className="w-8 h-8 object-contain rounded"
              />
              <span className="text-sm leading-tight truncate">
                {episode.title}
              </span>
            </div>
            <span className="text-sm text-gray-600 shrink-0">
              {episode.duration}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
