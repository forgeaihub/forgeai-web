"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutCompany() {
    return (
        <section className="py-8 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About US</h2>

                <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardHeader className="px-6 pt-6 pb-0">
                        <CardTitle className="text-2xl text-center md:text-left">Our Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pt-4 pb-6">
                        <p className="text-muted-foreground text-base leading-relaxed">
                            We specialize in building intelligent, task-driven AI agents tailored to your business needs. 
                            Whether you're looking to streamline operations, enhance customer experience, or build cutting-edge automation, 
                            we bring powerful AI solutions to life. Our agents are designed for real-world use—scalable, secure, 
                            and smart from the ground up. Partner with us to transform ideas into working AI that delivers results.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
