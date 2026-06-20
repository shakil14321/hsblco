"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { GALLERY_DATA } from "@/constant/galleryData";
import CustomButton from "../common/CustomButton";
import { Button } from "../ui/button";
import Marquee from "react-fast-marquee";

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".header-content", {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="section-inner">
        <div className="header-content container mx-auto px-6 text-center mb-24">
          <span className="text-secondary  uppercase tracking-widest text-sm mb-4 block">
            Visual Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-8  leading-tight">
            Engineering the Future, <br /> One Framework at a Time.
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            From decentralized architectures to real-time industrial intelligence,
            explore the visual footprint of our technology deployments across
            global enterprise sectors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <CustomButton
              title="Start Your Project"
              className="bg-primary hover:bg-secondary text-white px-10 h-14 rounded-full"
            />
            <Button className="border-2 border-gray-900 bg-transparent text-gray-900 px-10 h-14 rounded-full  hover:bg-gray-900 hover:text-white transition-all duration-300">
              Technical Documentation
            </Button>
          </div>
        </div>

        <div className="gallery-marquee">
          <Marquee className="" speed={50} pauseOnHover={true} gradient={false}>
            {GALLERY_DATA.map((img, idx) => (
              <div
                key={idx}
                className="resources-clip  m-4 shrink-0 w-70 xl:w-87.5 rounded-[30px] overflow-hidden group cursor-pointer flex items-end"
              >
                <Image
                  width={350}
                  height={350}
                  src={img.url}
                  alt={`AI Generated-${idx}`}
                  className="w-full object-cover aspect-square grayscale-30 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
