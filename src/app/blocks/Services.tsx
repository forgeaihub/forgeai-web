"use client";

import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import content from "@/lib/content";

// Swiper imports
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation, Pagination, A11y} from "swiper/modules";

export function Services() {
    return (
        <section id="services" className="py-8 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{content.services.title}</h2>

                <div className="relative md:max-w-full">
                    {/* Swiper Container */}
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        breakpoints={{
                            640: {slidesPerView: 1},
                            768: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                        }}
                        className="pb-12 !h-auto"
                    >
                        {content.services.serviceList.map((service, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <Card
                                    className="flex flex-col h-full overflow-hidden p-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    {/* Image Placeholder */}
                                    <div className="flex items-center justify-center h-48 w-full">
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-contain p-6"
                                        />
                                    </div>

                                    {/* Content */}
                                    <CardHeader className="px-6 pt-4 pb-0 min-h-[4rem]">
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 pt-2 flex-grow min-h-[24rem]">
                                        <CardDescription
                                            className="text-base prose max-w-none"
                                            dangerouslySetInnerHTML={{__html: service.description}}
                                        />
                                    </CardContent>
                                    <CardFooter className="mt-auto"/>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}