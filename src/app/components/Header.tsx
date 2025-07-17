"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full py-4 px-6 md:px-12 bg-white shadow-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/logo.png" 
                        alt="ForgeAI Logo" 
                        width={150} 
                        height={40} 
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                        Contact
                    </Link>
                    <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
                        Portfolio
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
                        className="h-6 w-6 text-gray-700" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            <Link 
                                href="/about" 
                                className="text-gray-700 hover:text-gray-900 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                href="/contact" 
                                className="text-gray-700 hover:text-gray-900 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link 
                                href="/portfolio" 
                                className="text-gray-700 hover:text-gray-900 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Portfolio
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
