/* eslint-disable react-hooks/purity */
"use client";

import Marquee from "react-fast-marquee";

const techTags = [
  // AI & Data
  "Generative AI Models",
  "Predictive Analytics",
  "Neural Networks",
  "Natural Language Processing",
  "Computer Vision",

  // IoT & Infrastructure
  "Smart IoT Ecosystems",
  "Edge Computing",
  "Real-time Sensor Data",
  "Industrial Automation",
  "Cloud Infrastructure",

  // Blockchain & Security
  "Decentralized Ledgers",
  "Smart Contract Audits",
  "Web3 Architecture",
  "Cryptographic Security",
  "Immutable Data Logs",

  // Software Engineering
  "Scalable Microservices",
  "Custom ERP Solutions",
  "Enterprise Software",
  "Cross-Platform Apps",
  "API Orchestration",
  "High-Performance Computing"
];

const TagItem = ({ text }: { text: string }) => (
  <div className="mx-3 px-6 py-3 bg-[#f8faff] text-gray-900  rounded-full shadow-sm border border-gray-100 text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default whitespace-nowrap uppercase tracking-wider">
    {text}
  </div>
);

export default function ScrollingTags() {
  return (
    <section className="py-24 bg-white overflow-hidden flex flex-center items-center">
      {/* -rotate-3 or -rotate-5 gives it a modern "slanted" look */}
      <div className="-rotate-3 flex flex-col gap-8 w-[120%] -ml-[10%]">

        {/* Row 1 – Moving Left (Fast) */}
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="white"
          gradientWidth={200}
          pauseOnHover
          className="overflow-hidden py-2"
        >
          {techTags.map((tag, idx) => (
            <TagItem key={`row1-${idx}`} text={tag} />
          ))}
        </Marquee>

        {/* Row 2 – Moving Right (Slower) */}
        <Marquee
          speed={40}
          direction="right"
          gradient={true}
          gradientColor="white"
          gradientWidth={200}
          pauseOnHover
          className="overflow-hidden py-2"
        >
          {techTags.slice().reverse().map((tag, idx) => (
            <TagItem key={`row2-${idx}`} text={tag} />
          ))}
        </Marquee>

        {/* Row 3 – Moving Left (Medium) - Optional for more depth */}
        <Marquee
          speed={45}
          gradient={true}
          gradientColor="white"
          gradientWidth={200}
          pauseOnHover
          className="overflow-hidden py-2"
        >
          {techTags.sort(() => Math.random() - 0.5).map((tag, idx) => (
            <TagItem key={`row3-${idx}`} text={tag} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}