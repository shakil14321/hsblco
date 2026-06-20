"use client";

import React, { JSX } from "react";
import { blockchain } from "@/constant/blockchain";
import { motion } from "framer-motion";

interface BlockchainItem {
  id: string | number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export default function ServicesCards(): JSX.Element {
  return (
    <section className="overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 uppercase tracking-[0.45em] text-xs font-black mb-6">
            Blockchain Solutions
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-5xl mx-auto">
            Modern Crypto &
            <br />
            NFT Digital Platforms
          </h2>

          <p className="mt-8 text-slate-400 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            We create secure blockchain ecosystems, crypto fintech systems, NFT
            marketplaces, and scalable digital platforms for next-generation
            online businesses and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blockchain.map((item: BlockchainItem) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                group relative overflow-hidden rounded-[34px]
                border border-white/10 bg-[#081120]/95
                backdrop-blur-2xl p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                hover:border-cyan-400/30
                hover:shadow-[0_30px_100px_rgba(34,211,238,0.16)]
                transition-all duration-500 ease-out
              "
            >
              <div className="pointer-events-none absolute -top-20 -right-20 z-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl opacity-40 transition duration-700 group-hover:opacity-80" />

              <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_48%)]" />

              <div className="absolute top-0 left-0 z-10 h-[3px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

              <div className="relative z-20 flex h-full flex-col">
                <div
                  className="
                    mb-6 flex h-16 w-16 items-center justify-center
                    rounded-2xl border border-cyan-400/20
                    bg-cyan-400/10 text-cyan-300
                    shadow-[0_10px_30px_rgba(34,211,238,0.15)]
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                  "
                >
                  {item.icon}
                </div>

                <h2 className="mb-4 text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-500">
                  {item.name}
                </h2>

                <div className="mb-5 h-1 w-14 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-24" />

                <p className="text-sm leading-7 text-slate-300 flex-1">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                  </div>

                  <span className="text-cyan-300 text-2xl transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}