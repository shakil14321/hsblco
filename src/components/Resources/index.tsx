"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { RESOURCES_DATA } from "@/constant/resourcesData";
import CustomButton from "../common/CustomButton";
import dynamic from "next/dynamic";

const ResourcesSlider = dynamic(
  () => import("./ResourcesSlider"),
  { ssr: false },
);

export default function Resources() {
  return (
    <section className="bg-white overflow-hidden ">
      <div className="xl:px-8 md:px-3 section-inner">
        {/* Dark Mode Theme for Resources */}
        <div className="resources-wrapper resources-bg text-white pt-24 pb-16 rounded-t-[60px]">
          <div className="container mx-auto px-6 lg:px-12 xl:px-20">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl xl:max-w-4xl">
                <span className="text-gray-300  text-sm uppercase tracking-[0.2em] mb-4 block">
                  Knowledge Hub & Case Studies
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 leading-tight ">
                  Expert Insights on the Future of Digital Infrastructure.
                </h2>
              </div>
              <div className="hidden lg:block">
                <p className="text-gray-300 max-w-xs text-sm leading-relaxed italic">
                  Leveraging next-gen technology to solve today&apos;s most complex business challenges.
                </p>
              </div>
            </div>

            {/* Swiper Slider Implementation */}
            <ResourcesSlider data={RESOURCES_DATA} />

            {/* Controls Bar */}
            <div className="flex flex-col md:flex-row justify-between gap-8 items-center mt-16 border-t border-gray-800 pt-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">Latest Updates Available</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <CustomButton
                  title="View All Insights"
                  className="bg-primary hover:bg-white hover:text-black text-white transition-all duration-300 rounded-full px-8"
                />

                <div className="flex gap-3">
                  <button className="prev-btn w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                    <ArrowLeft size={20} className="group-hover:scale-110" />
                  </button>
                  <button className="next-btn w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                    <ArrowRight size={20} className="group-hover:scale-110" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}