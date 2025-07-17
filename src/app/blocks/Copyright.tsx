"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import content from "@/lib/content";

export function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 px-6 md:px-12 bg-secondary/30 border-t shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-slate-600">
                        © {currentYear} {content.copyright.companyName}. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        {content.copyright.links.map((link, index) => (
                            index < content.copyright.links.length - 1 ? (
                                <Link 
                                    key={index}
                                    href={link.href} 
                                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                >
                                    {link.text}
                                </Link>
                            ) : (
                                <Button key={index} variant="ghost" size="sm" asChild>
                                    <Link href={link.href}>{link.text}</Link>
                                </Button>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
