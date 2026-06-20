'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay } from "swiper/modules";
import CustomButton from "../common/CustomButton";
import { ServiceSliderTypes } from "@/types";
import { SERVICES_COLORS } from "@/constant/servicesData";
import { useState } from "react";
import CustomPagination from "../common/CustomPagination";

interface Props {
    data?: ServiceSliderTypes[];
}

const ServiceSlider = ({ data }: Props) => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const totalSlides = data?.length || 0;

    return (
        <>  <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-16"
        >
            {data?.map((service, index) => (
                <SwiperSlide key={index} className="h-auto">
                    <div className="services-clip group relative p-10 h-98 flex flex-col justify-between bg-[#f8faff] text-gray-900 rounded-4xl hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 ease-in-out hover:shadow-2xl  cursor-pointer">
                        <div>
                            <div className="xl:w-20 xl:h-20 h-12 w-12 rounded-3xl flex items-center justify-center xl:mb-8 mb-4 bg-white shadow-sm group-hover:bg-[#262626] transition-colors duration-500">
                                <div>{service.icon}</div>
                            </div>

                            <h3 style={{ color: SERVICES_COLORS[index] }} className="xl:text-2xl text-lg font-bold xl:mb-6 mb-4 group-hover:text-white! transition-colors line-clamp-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 group-hover:text-gray-400 mb-4 transition-colors line-clamp-2">
                                {service.desc}
                            </p>
                        </div>

                        <div className="lg:opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <CustomButton
                                title="Explore More"
                                className="xl:w-auto w-full bg-white text-black hover:bg-primary hover:text-white"
                            />
                        </div>
                    </div>
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

export default ServiceSlider;