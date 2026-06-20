"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PARTNERS_DATA, STRATEGY_DATA } from "@/constant/strategyData";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Strategy() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".strategy-col", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="text-white overflow-hidden">
      <div className="container mx-auto px-8 xl:px-16">
        <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0d1422] via-[#09111d] to-[#050816] xl:py-24 md:py-16 py-12 px-6 md:px-8 xl:px-12">
          {/* BG Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-105 h-105 bg-cyan-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-130 h-[520px] bg-blue-500/5 blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.04),transparent_35%)]" />
          </div>

          <div className="relative z-10">
            <div className="xl:mb-20 mb-12">
              <span className="text-cyan-400 text-sm mb-4 block">
                AI Automations To Save Time & Grow Your Business!!
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl leading-tight text-white">
                From strategy to delivery, we are here to make sure that your
                business endeavor succeeds.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 border-t border-white/10 pt-16">
              <div className="space-y-12">
                <p className="text-slate-300">
                  Free up your time to focus on growing your business with cost
                  effective AI solutions!
                </p>

                <Link
                  href="/contact"
                  className="w-36 h-36 rounded-full border border-cyan-400/20 bg-white/[0.03] backdrop-blur-xl flex flex-col gap-2 items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 text-white transition-all duration-500 group"
                >
                  <span className="text-sm font-bold">Start Build</span>

                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>
              </div>

              {STRATEGY_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="strategy-col border-l border-white/10 md:pl-8 pl-4 space-y-8"
                >
                  <span className="text-cyan-400 font-mono">{item.id}</span>

                  <h3 className="xl:text-2xl md:text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="w-24 h-24 2xl:my-20 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400">
                    {item.icon}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Partners Logo Section */}
            <div className="xl:mt-32 lg:mt-20 my-12 relative">
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-5 lg:px-10 xl:px-14 xl:py-24 lg:py-20 md:py-12 py-16">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                <div className="text-center mb-10">
                  <span className="text-slate-300 lg:text-base md:text-sm text-xs italic">
                    Trusted by businesses big and small, everywhere!!
                  </span>
                </div>

                <Marquee
                  speed={60}
                  pauseOnHover={true}
                  gradient={false}
                  className="overflow-hidden cursor-pointer"
                >
                  {PARTNERS_DATA.map((logo, idx) => (
                    <div
                      key={idx}
                      className="mx-10 flex items-center justify-center"
                    >
                      <span className="text-2xl md:text-3xl font-black text-slate-500 tracking-tighter opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all uppercase italic">
                        {logo}
                      </span>
                    </div>
                  ))}
                </Marquee>

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#09111d] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#09111d] to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}