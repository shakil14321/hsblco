/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FEATURES_DATA } from "@/constant/featuresData";
import { Button } from "../ui/button";
import CustomButton from "../common/CustomButton";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".features-heading-clip", {
        opacity: 0,
        y: -40,
        scale: 0.9,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
      })

        .from(
          ".feature-main-title",
          {
            opacity: 0,
            y: 60,
            filter: "blur(14px)",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.7"
        )

        .from(
          ".feature-sub-content",
          {
            opacity: 0,
            y: 50,
            filter: "blur(12px)",
            duration: 1.1,
            ease: "expo.out",
          },
          "-=0.9"
        );

      const cards = gsap.utils.toArray(".feature-card");

      cards.forEach((card: any, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },

          opacity: 0,
          y: 90,
          scale: 0.92,
          rotateY: index % 2 === 0 ? -8 : 8,
          filter: "blur(14px)",

          duration: 1.2,
          delay: index * 0.08,
          ease: "expo.out",
          clearProps: "all",
        });
      });

      gsap.to(".floating-glow", {
        scale: 1.12,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".icon", {
        y: -6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden my-20">
      <div className="section-inner py-28 relative">
        <div className="container mx-auto px-6 xl:px-20">
          {/* TOP BADGE */}
          <div className="absolute top-0 py-5 md:px-24 px-8 features-heading-clip rounded-b-3xl border border-white/10 backdrop-blur-xl bg-linear-to-br from-[#27344d]/95 via-[#182235]/95 to-[#0b1220]/95 shadow-[0_12px_50px_rgba(59,130,246,0.18)]">
            <span className="text-white uppercase tracking-[0.2em] xl:text-sm md:text-xs text-[10px] font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">
              Unleashing Tech Potential
            </span>
          </div>

          {/* TITLE AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 mt-4">
            <h2 className="feature-main-title text-3xl md:text-4xl xl:text-5xl text-white font-black leading-tight tracking-tight">
              Powering the next generation of autonomous ecosystems.
            </h2>

            <div className="feature-sub-content flex flex-col justify-end space-y-10">
              <p className="text-gray-300 xl:text-xl text-lg leading-relaxed max-w-xl">
                We provide the technical scaffolding for modern industries,
                blending edge computing with decentralized intelligence to
                redefine how businesses operate in a hyper-connected world.
              </p>

              <div className="flex flex-wrap gap-5">
                <CustomButton
                  title="Explore Our Core"
                  fn={() => router.push("/solutions")}
                  className="bg-primary hover:bg-black text-white px-10"
                />

                <Button className="border-2 border-white/30 bg-transparent text-white px-10 h-14 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                  Documentation
                </Button>
              </div>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="-mt-16 grid grid-cols-1 md:grid-cols-2 xl:gap-12 gap-8">
            {FEATURES_DATA.map((item, index) => (
              <div
                key={index}
                className="
                  feature-card
                  services-clip
                  group
                  relative
                  overflow-hidden
                  bg-white/4
                  backdrop-blur-2xl
                  p-10
                  rounded-[40px]
                  border border-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  hover:shadow-[0_25px_70px_rgba(59,130,246,0.18)]
                  hover:border-cyan-400/20
                  hover:-translate-y-2
                  transition-all duration-700 ease-out
                "
              >
                {/* GLOW */}
                <div className="floating-glow absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="floating-glow absolute -bottom-28 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

                {/* ICON */}
                <div className="relative z-10 xl:mb-10 mb-6 inline-flex items-center justify-center p-6 rounded-3xl bg-linear-to-br from-[#111827] to-[#070b14] border border-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-700 shadow-[0_0_30px_rgba(0,255,255,0.08)]">
                  <div
                    className="icon text-4xl transition-all duration-700 group-hover:scale-110"
                    style={{
                      color:
                        index === 0
                          ? "#00F5FF"
                          : index === 1
                            ? "#7C3AED"
                            : index === 2
                              ? "#00FFA3"
                              : "#FF4D9D",

                      filter:
                        index === 0
                          ? "drop-shadow(0 0 18px rgba(0,245,255,0.8))"
                          : index === 1
                            ? "drop-shadow(0 0 18px rgba(124,58,237,0.8))"
                            : index === 2
                              ? "drop-shadow(0 0 18px rgba(0,255,163,0.8))"
                              : "drop-shadow(0 0 18px rgba(255,77,157,0.8))",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h3
                  className="relative z-10 text-2xl xl:text-3xl mb-6 font-semibold tracking-tight transition-all duration-500"
                  style={{
                    color:
                      index === 0
                        ? "#93C5FD"
                        : index === 1
                          ? "#67E8F9"
                          : index === 2
                            ? "#A5B4FC"
                            : "#7DD3FC",
                  }}
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="relative z-10 text-gray-300 text-lg leading-relaxed mb-10">
                  {item.desc}
                </p>

                {/* LINE */}
                <div className="relative z-10 mt-auto">
                  <div
                    className="w-16 h-1.5 rounded-full group-hover:w-32 transition-all duration-700 shadow-[0_0_20px_rgba(34,211,238,0.45)]"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(to right,#3B82F6,#60A5FA)"
                          : index === 1
                            ? "linear-gradient(to right,#06B6D4,#67E8F9)"
                            : index === 2
                              ? "linear-gradient(to right,#6366F1,#A5B4FC)"
                              : "linear-gradient(to right,#0EA5E9,#7DD3FC)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}