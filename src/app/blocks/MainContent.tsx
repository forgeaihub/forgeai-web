"use client";

import Image from "next/image";
import content from "@/lib/content";

export function MainContent() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <Image
                    src={content.mainContent.image.src}
                    alt={content.mainContent.image.alt}
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover"
                    priority
                />
                {/* Optional overlay if you want to add it back */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
            </div>

            {/* Text Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex justify-start">
                {/* Left aligned text block - takes half width on medium+ screens */}
                <div className="w-full md:w-1/2 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {content.mainContent.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-6">
                        {content.mainContent.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
