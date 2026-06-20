"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { PHILOSOPHY_DATA } from "@/constant/philosophyData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Rotate the "About Us" Badge
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none",
      });

      // Animate Point Items on Scroll
      gsap.from(".point-item", {
        opacity: 0,
        x: 50,
        stagger: 0.3,
        duration: 1.4,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="text-white overflow-hidden xl:px-8 px-3 mt-1"
    >
      <div className="section-inner  philosophy-bg py-24 rounded-[40px]">
        <div className="container mx-auto px-6 xl:px-20">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-15 relative">
            {/* LEFT BADGE */}
            <div className="2xl:col-span-4 lg:col-span-4 flex lg:justify-start justify-center">
              <div className="mb-13 inline-flex items-center justify-center py-5 md:px-16 px-8 features-heading-clip rounded-b-3xl border border-white/10 backdrop-blur-xl bg-linear-to-br from-[#27344d]/95 via-[#182235]/95 to-[#0b1220]/95 shadow-[0_12px_50px_rgba(59,130,246,0.18)]">
                <span className="text-white tracking-[0.3em] uppercase text-sm font-bold whitespace-nowrap">
                  Our Philosophy
                </span>
              </div>
            </div>

            {/* RIGHT TITLE */}
            <div className="2xl:col-span-8 lg:col-span-8 mr-32">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-[1.2] text-white font-light">
                We combine deep technical expertise with a passion for
                excellence to redefine what&apos;s possible in the tech world.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-12 md:gap-20 gap-16 items-center">
            {/* Left Side: Image & Spinning Badge */}
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden border border-gray-800 aspect-4/5 lg:aspect-square xl:h-160 philosophy-clip">
                <Image
                  width={1328}
                  height={1000}
                  src="/image/about/img-1.jpg" // Make sure this image path is correct
                  alt="Our Expertise"
                  className="w-full h-full object-cover"
                />
              </div>

              <Link href="/about-us">
                <div className="absolute lg:top-1/2 md:top-[90%] top-[90%] lg:-right-20 right-1/2 lg:-translate-y-1/2 lg:translate-x-0 translate-x-1/2 z-20 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                  <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
                    <div ref={badgeRef} className="absolute inset-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                        />
                        <text className="fill-white text-[9px] uppercase font-bold tracking-[1.75px]">
                          <textPath xlinkHref="#circlePath">
                            About Us — About Us — About Us —
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                      <ArrowRight className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Side: Philosophy Points */}
            <div className="space-y-12">
              {PHILOSOPHY_DATA.map((item, index) => (
                <div
                  key={index}
                  className="point-item group border-b border-gray-800 pb-10 last:border-0"
                >
                  <div className="flex gap-6">
                    <div className="text-gray-500 font-mono text-sm pt-1">
                      {item.num}
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-all duration-500">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed max-w-lg group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
