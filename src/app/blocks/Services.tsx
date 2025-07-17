"use client";

import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";

const services = [
  {
    title: "No-Code AI Agent Builders",
    description:
      "Leverage platforms like n8n or Zapier to automate your workflows with AI-enhanced logic. We build and deploy intelligent agents that connect your tools, make decisions, and automate tasks — all without writing code.",
    imageUrl: "/globe.svg",
  },
  {
    title: "Custom AI Agent Development",
    description:
      "Need a fully tailored solution? We design and develop AI agents using Python, LangChain, or OpenAI APIs. Whether it's a chatbot, a data summarizer, or a business process bot, we build powerful solutions that scale with you.",
    imageUrl: "/window.svg",
  },
  {
    title: "AI Agent Integration",
    description:
      "Already have an AI system or agent? We help fine-tune, optimize, and integrate it into your business ecosystem. Get expert help with performance, API connections, prompt engineering, and user experience to get the most out of your AI.",
    imageUrl: "/file.svg",
  },
];

export function Services() {

  return (
    <section className="py-8 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="relative md:max-w-full">

          {/* Services Container */}
          <div
            className="flex flex-col md:flex-row md:justify-between gap-6 pb-6 w-full"
          >
            {services.map((service, index) => (
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
