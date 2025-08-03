"use client";

import Image from "next/image";
import { useState } from "react";
import content from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ContactModal } from "../components/ContactModal";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function MainContent() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-white">
            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                {/* Left aligned text block */}
                <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        {content.mainContent.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-black mb-6">
                        {content.mainContent.description}
                    </p>
                    <Button onClick={openContactModal} className="mt-2 text-white cursor-pointer">
                        Get In Touch
                    </Button>
                </div>

                {/* SVG Image on the right */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    {/*<Image*/}
                    {/*    src={content.mainContent.image.src}*/}
                    {/*    alt={content.mainContent.image.alt}*/}
                    {/*    width={400}*/}
                    {/*    height={400}*/}
                    {/*    className="w-auto h-auto max-w-full"*/}
                    {/*    priority*/}
                    {/*/>*/}
                    <DotLottieReact
                        src="https://lottie.host/eff8b715-ad4f-4a69-abcd-3135236f164f/gZrqjVeAgk.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal 
                isOpen={isContactModalOpen} 
                onCloseAction={closeContactModal}
            />
        </section>
    );
}
