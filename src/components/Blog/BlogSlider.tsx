'use client'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import { BlogSliderTypes } from '@/types';
import { useState } from 'react';
import CustomPagination from '../common/CustomPagination';

interface Props {
    data: BlogSliderTypes[]
}

const BlogSlider = ({ data }: Props) => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const totalSlides = data?.length || 0;

    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{
                    prevEl: ".blog-prev",
                    nextEl: ".blog-next",
                }}
                //   autoplay={{ delay: 5000 }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className=""
            >
                {data.map((blog, idx) => (
                    <SwiperSlide key={idx}>
                        {({ isActive }) => (
                            <div className="group cursor-pointer transition-all duration-500 relative">
                                {/* Image Container with Folder Cut-out */}
                                <div className="relative aspect-[1.4/1] mb-8 overflow-hidden rounded-2xl cost-effective-clip">
                                    <Image
                                        width={440}
                                        height={315}
                                        src={blog.img}
                                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 `}
                                        alt=""
                                    />

                                    {/* Floating Tags */}
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        {blog.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="bg-zinc-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Arrow Icon */}
                                <div
                                    className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-500 
                                        opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
                                >
                                    <ArrowUpRight size={24} />
                                </div>
                                {/* Text Content */}
                                <div className="space-y-4 p-4">
                                    <h3
                                        className={`2xl:text-2xl xl:text-xl lg:text-lg line-clamp-2 leading-tight text-white transition-colors group-hover:text-primary`}
                                    >
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                        {blog.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-t border-gray-100">
                                        <span>{blog.author}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <CustomPagination
                activeIndex={activeIndex}
                totalSlides={totalSlides}
                onDotClick={(index) => swiperInstance?.slideToLoop(index)}
            />
        </>
    );
};

export default BlogSlider;