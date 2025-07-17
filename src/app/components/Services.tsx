"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Check if we're on desktop (md breakpoint is typically 768px)
      const isDesktop = window.innerWidth >= 768;

      // On desktop, check if all cards are visible (no need for scrolling)
      const allCardsVisible = isDesktop && container.scrollWidth <= container.clientWidth;

      // Only enable scrolling on desktop and when not all cards are visible
      setCanScrollLeft(isDesktop && !allCardsVisible && container.scrollLeft > 0);
      setCanScrollRight(
        isDesktop && !allCardsVisible && 
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );

      // Calculate active index based on scroll position
      if (container.scrollWidth > container.clientWidth) {
        const cardWidth = container.scrollWidth / services.length;
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(Math.max(0, Math.min(newIndex, services.length - 1)));
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      checkScrollability();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="relative md:max-w-full">
          {/* Navigation Arrows - Only shown when scrolling is possible */}
          {canScrollLeft || canScrollRight ? (
            <div className="hidden md:block">
              {canScrollLeft && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              )}

              {canScrollRight && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              )}
            </div>
          ) : null}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-col md:flex-row md:justify-between md:overflow-x-auto gap-6 pb-6 md:snap-x md:snap-mandatory w-full"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none', 
              WebkitOverflowScrolling: 'touch',
              scrollPaddingLeft: '1rem',
              scrollPaddingRight: '1rem'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {services.map((service, index) => (
              <Card
                key={index}
                className="w-full md:w-[32%] flex-shrink-0 overflow-hidden md:snap-start p-0"
                style={{ scrollSnapAlign: 'start' }}
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

          {/* Scroll Indicator - Only shown when scrolling is possible */}
          {canScrollLeft || canScrollRight ? (
            <div className="flex justify-center mt-6 gap-2">
              <div className="text-sm text-muted-foreground md:hidden">
                Swipe to see more
              </div>
              <div className="hidden md:flex gap-2">
                {Array.from({ length: services.length }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-2 w-2 rounded-full",
                      index === activeIndex ? "bg-primary" : "bg-muted"
                    )}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
