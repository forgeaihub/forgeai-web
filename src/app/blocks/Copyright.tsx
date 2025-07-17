"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 px-6 md:px-12 bg-slate-50 border-t">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-slate-600">
                        © {currentYear} ForgeAI. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <Link 
                            href="/privacy" 
                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                            href="/terms" 
                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
