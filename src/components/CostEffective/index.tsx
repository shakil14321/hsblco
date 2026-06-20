"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThreeSixtyWrap from "./ThreeSixtyWrap";

export default function CostEffective() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".floating-box", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      gsap.from(".content-part", {
        opacity: 0,
        x: -50,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="pt-24 pb-4 bg-white overflow-hidden "
    >
      <div className="absolute z-10 container mx-auto px-6 lg:px-20 text-center mb-16">
        <span className="text-secondary font-medium mb-4 block italic tracking-wide">
          Future-Ready Infrastructure: Beyond Artificial Intelligence
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl mx-auto text-white leading-tight">
          Integrated Tech Solutions to Drive Your Digital Evolution
        </h2>
      </div>

      <div className="container mx-auto px-3 xl:px-20 mt-40">
        <div className="bg-[#f8faff] rounded-[50px] lg:p-8 xl:p-16 grid grid-cols-1 md:grid-cols-2 lg:gap-16 md:gap-8 gap-12 items-center border border-gray-100 shadow-sm">
          {/* Left Content */}
          <div className="content-part space-y-8">
            <div className="inline-block px-5 py-2 bg-primary italic text-white text-[10px] md:text-xs rounded-full tracking-wider uppercase">
              Full-Stack Innovation & Integration
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-white leading-tight">
              Scaling Business Excellence with Multi-Dimensional Tech.
            </h3>

            <p className="text-white xl:text-lg leading-relaxed">
              We bridge the gap between complex technology and business goals.
              By integrating IoT connectivity, Blockchain security, and AI-driven automation,
              we build a unified ecosystem that accelerates growth.
            </p>

            <ul className="space-y-4">
              {[
                "End-to-end automation for streamlined operations",
                "High-performance custom software & mobile ecosystems",
                "Secure & decentralized Blockchain frameworks",
                "Real-time IoT data synchronization & monitoring",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-white font-medium"
                >
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Check className="text-white" size={14} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right 360° Viewer */}
          <div className="h-full relative">
            <div className="sticky top-0">
              <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl bg-white flex items-center justify-center">
                <ThreeSixtyWrap />
                <video
                  className="w-full h-full object-cover aspect-square"
                  src="/video/360.mp4"
                  poster="/image/360.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Floating Boxes */}
              <div className="floating-box absolute md:top-10 -top-6 lg:-left-10 -left-2 bg-primary text-white p-5 rounded-2xl max-w-52 shadow-2xl z-20">
                <p className="text-sm font-medium">
                  360° Interactive Visualization
                </p>
              </div>

              <div className="floating-box absolute lg:top-1/2 top-0 lg:-right-4 -right-2 bg-secondary p-4 rounded-xl shadow-2xl z-20 text-white text-xs">
                Drag to Rotate
              </div>

              <div className="floating-box absolute bottom-6 right-6 bg-white text-gray-900 py-3 px-6 rounded-full shadow-xl z-20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                Real-time 360 View
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
