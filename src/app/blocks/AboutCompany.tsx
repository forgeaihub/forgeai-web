"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/lib/content";

export function AboutCompany() {
    return (
        <section id="about" className="py-8 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{content.aboutCompany.title}</h2>

                <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardHeader className="px-6 pt-6 pb-0">
                        <CardTitle className="text-2xl text-center md:text-left">{content.aboutCompany.expertise.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pt-4 pb-6">
                        <p className="text-black text-base leading-relaxed">
                            {content.aboutCompany.expertise.description}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
