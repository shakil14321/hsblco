"use client";
import dynamic from "next/dynamic";

const BlogSlider = dynamic(
    () => import("../Blog/BlogSlider"),
    { ssr: false },
);

import { BLOG_DATA } from '@/constant/blogData';



export const SuccessStories = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                   success stories
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-secondary tracking-tighter max-w-3xl mx-auto leading-[1.1]">
                    Let&apos;s check our memorable <span className="text-primary">awesome stroies</span>.
                </h2>
            </div>

            <BlogSlider data={BLOG_DATA} />
        </div>
    </section>
);