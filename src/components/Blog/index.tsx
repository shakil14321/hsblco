"use client";

import dynamic from "next/dynamic";

const BlogSlider = dynamic(
  () => import("./BlogSlider"),
  { ssr: false },
);


import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { BLOG_DATA } from "@/constant/blogData";
import CustomButton from "../common/CustomButton";
import { Button } from "../ui/button";

export default function Blog() {
  const container = useRef<HTMLDivElement>(null);


  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="section-inner container mx-auto px-3 md:px-6 xl:px-20">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:justify-between items-end mb-16 gap-6">
          <div className="xl:max-w-4xl max-w-3xl">
            <span className="text-secondary mb-4 block italic text-sm">
             Knowledge Base & Tech Insights
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
             Exploring the Frontiers of <span className="text-primary">Cognitive Computing</span> & AI
            </h2>
          </div>
          <div className="flex items-center gap-4 md:me-0 me-auto">
            <CustomButton
              title="Check All Posts"
              className="bg-gray-600 hover:bg-primary text-white"
            />
            <div className="flex gap-2">
              <Button className="blog-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <ArrowLeft size={20} />
              </Button>
              <Button className="blog-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <BlogSlider data={BLOG_DATA} />
      </div>
    </section>
  );
}
