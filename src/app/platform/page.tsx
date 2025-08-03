import { Header } from "../blocks/Header";
import { Copyright } from "../blocks/Copyright";
import { PlatformFeatures } from "./PlatformFeatures";
import Image from "next/image";
import content from "@/lib/content";

export default function PlatformPage() {
  return (
      <>
        <Header />
        <main className="pt-16">
          <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between min-h-[300px]">

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex items-center h-full">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeIn">
                    A Platform Built for Intelligent AI Innovation
                  </h1>
                  <p
                      className="text-lg md:text-xl text-black mb-8 animate-fadeIn"
                      style={{ animationDelay: "0.3s" }}
                  >
                    ForgeAI simplifies the complexity of building AI systems by empowering business analysts, product managers, and developers with tools that accelerate innovation—without compromising performance.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center h-full animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <Image
                    src={content.mainContent.image.src}
                    alt="AI Platform Illustration"
                    width={400}
                    height={400}
                    className="w-auto h-auto max-w-full object-contain"
                    priority
                />
              </div>
            </div>
          </section>

          <PlatformFeatures />
          <Copyright />
        </main>
      </>
  );
}
