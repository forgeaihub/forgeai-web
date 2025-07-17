"use client";

import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import content from "@/lib/content";

export function Services() {

  return (
    <section id="services" className="py-8 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{content.services.title}</h2>

        <div className="relative md:max-w-full">

          {/* Services Container */}
          <div
            className="flex flex-col md:flex-row md:justify-between gap-6 pb-6 w-full"
          >
            {content.services.serviceList.map((service, index) => (
              <Card
                key={index}
                className="w-full md:w-[32%] overflow-hidden p-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="flex items-center justify-center h-48 w-full bg-muted">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="p-6"
                  />
                </div>

                {/* Content */}
                <CardHeader className="px-6 pt-4 pb-0">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pt-2">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
