"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import content from "@/lib/content";
import { ContactModal } from "../components/ContactModal";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <header className="w-full py-4 px-6 md:px-12 bg-white shadow-lg fixed top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={content.header.logo.src}
                        alt={content.header.logo.alt}
                        width={150}
                        height={0}
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {content.header.navigation.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href.startsWith("#") ? "/" + item.href : item.href}
                            className="text-black hover:text-black font-medium"
                            onClick={(e) => {
                                if (item.href.startsWith("#")) {
                                    if (
                                        window.location.pathname === "/" ||
                                        window.location.pathname === "/forgeai-web/"
                                    ) {
                                        e.preventDefault();
                                        document
                                            .getElementById(item.href.substring(1))
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }
                            }}
                        >
                            {item.text}
                        </Link>
                    ))}
                    <Link
                        href="#"
                        className="text-black hover:text-black font-medium"
                        onClick={(e) => {
                            e.preventDefault();
                            openContactModal();
                        }}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
                        <nav className="flex flex-col space-y-4">
                            {content.header.navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href.startsWith("#") ? "/" + item.href : item.href}
                                    className="text-black hover:text-black font-medium"
                                    onClick={(e) => {
                                        if (item.href.startsWith("#")) {
                                            if (
                                                window.location.pathname === "/" ||
                                                window.location.pathname === "/forgeai-web/"
                                            ) {
                                                e.preventDefault();
                                                document
                                                    .getElementById(item.href.substring(1))
                                                    ?.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {item.text}
                                </Link>
                            ))}
                            <Link
                                href="#"
                                className="text-black hover:text-black font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openContactModal();
                                    setIsMenuOpen(false);
                                }}
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                )}
            </div>

            <ContactModal isOpen={isContactModalOpen} onCloseAction={closeContactModal} />
        </header>
    );
}
