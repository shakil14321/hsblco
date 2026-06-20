"use client";

import React, { useRef } from "react";
import { Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { GENERATIVE_CARD_DATA } from "@/constant/generativeCardData";

gsap.registerPlugin(ScrollTrigger);

export default function GenerativeCards() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".gen-card");

      cards.forEach((card, index) => {
        const fromLeft = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            x: fromLeft ? -160 : 160,
            y: 50,
            rotateY: fromLeft ? -10 : 10,
            scale: 0.94,
            filter: "blur(10px)",
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.35,
            ease: "expo.out",
            clearProps: "transform,filter,opacity,visibility",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.to(".floating-label", {
        y: -8,
        rotate: 1.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random",
        },
      });

      gsap.to(".image-glow", {
        scale: 1.08,
        opacity: 0.8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="pt-10 pb-24 hero-shape overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {GENERATIVE_CARD_DATA.map((card, idx) => (
          <div
            key={idx}
            className="
              gen-card
              group
              relative
              min-h-[660px]
              overflow-hidden
              rounded-[36px]
              p-6 md:p-10 xl:p-12
              flex flex-col items-center text-center
              border border-white/10
              bg-[#081120]/90
              backdrop-blur-2xl
              shadow-[0_24px_80px_rgba(0,0,0,0.35)]
              transition-all duration-700 ease-out
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-[0_35px_100px_rgba(34,211,238,0.18)]
            "
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),transparent_36%,rgba(34,211,238,0.08))] pointer-events-none" />

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/20" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/20" />

            <div className="relative z-10 mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              {card.badge}
            </div>

            <h3 className="relative z-10 mb-5 max-w-lg text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-white">
              {card.title}
            </h3>

            <p className="relative z-10 mb-10 max-w-md text-sm md:text-base leading-7 text-slate-300/80">
              {card.desc}
            </p>

            <div className="relative w-full max-w-[460px] aspect-[4/3]">
              <div className="image-glow absolute inset-6 rounded-[32px] bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10 h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1736] shadow-2xl">
                <Image
                  width={800}
                  height={600}
                  src={card.img}
                  alt="AI Visualization"
                  className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                  priority={idx === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/70 via-transparent to-transparent" />
              </div>

              {card.isLeft ? (
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="floating-label absolute bottom-24 -left-4 md:-left-10 rounded-xl bg-cyan-500 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-2xl">
                    IoT Node Sync
                  </div>

                  <div className="floating-label absolute bottom-4 left-16 rounded-xl border border-white/10 bg-[#0b1220]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-2xl backdrop-blur-xl">
                    Predictive Analytics
                  </div>

                  <div className="floating-label absolute bottom-40 right-4 rounded-xl bg-violet-500 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-2xl">
                    Edge Computing
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="floating-label absolute bottom-28 left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1220]/90 px-5 py-4 text-xs italic leading-snug text-white shadow-2xl backdrop-blur-xl">
                    Decentralized protocols ensuring data sovereignty and global security.
                  </div>

                  <div className="floating-label absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-2xl">
                    Smart Contracts <Zap size={12} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}