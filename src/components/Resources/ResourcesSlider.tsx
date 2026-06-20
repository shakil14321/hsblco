'use client'

import { ResourcesSliderTypes } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
    data: ResourcesSliderTypes[]
}

const ResourcesSlider = ({ data }: Props) => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mb-16 overflow-hidden"
            >
                {data.map((res, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="group cursor-pointer">
                            {/* Folder-style Cut-out Image */}
                            <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-zinc-800 resources-clip">
                                <Image
                                    width={440}
                                    height={440}
                                    src={res.img}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt=""
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {res.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className={cn("bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase",
                                                tIdx === 0 && 'bg-primary text-white',
                                                tIdx === 2 && 'bg-secondary text-white',
                                            )}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold leading-snug group-hover:text-secondary transition-colors">
                                {res.title}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ResourcesSlider;