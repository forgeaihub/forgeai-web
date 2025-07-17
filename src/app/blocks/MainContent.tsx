"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import content from "@/lib/content";

export function MainContent() {
    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Image on the left */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <div className="relative w-full max-w-md h-[300px] md:h-[400px]">
                            <Image
                                src={content.mainContent.image.src}
                                alt={content.mainContent.image.alt}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content on the right */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {content.mainContent.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-6">
                            {content.mainContent.description}
                        </p>
                        <Button 
                            size="lg" 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                            {content.mainContent.button}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
