"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "../components/ContactModal";
import EnterpriseFeatures from './EnterpriseFeatures';

// SVG Icons for features
const FeatureIcons = {
  RapidValue: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  PromptEngineering: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  SmarterData: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  SeamlessIntegration: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  ProvenFrameworks: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  SyntheticData: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  TestBusinessValue: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ProductionReady: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  TrainModels: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
  ),
  EngagingUX: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  RealTimeInteractivity: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  BusinessOutcomes: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  BuildSmarter: () => (
    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

// Feature data
const features = [
  {
    icon: "RapidValue",
    title: "⚡ Rapid Value Creation",
    description: "Deliver results 10x faster. ForgeAI's platform is built for professionals who need to move fast. Whether you're prototyping or going into production, our tools ensure speed without sacrificing quality."
  },
  {
    icon: "PromptEngineering",
    title: "✨ Prompt Engineering Redefined",
    description: "The power of AI. The ease of Forge. Our cutting-edge Prompt Engineering Platform features an intelligent assistant that guides prompt creation and optimization—dramatically increasing the accuracy and reliability of your generative AI outputs."
  },
  {
    icon: "SmarterData",
    title: "📊 Smarter Data Usage",
    description: "Tap into previously unreachable data. Our advanced retriever technology brings deep contextual understanding to your applications, delivering richer insights and tailored outputs. Build smarter, more relevant solutions."
  },
  {
    icon: "SeamlessIntegration",
    title: "🔌 Seamless Integration",
    description: "Build once. Deploy anywhere. ForgeAI apps integrate effortlessly with your existing backend via robust APIs and plug directly into your frontend using our SDK. Whether it's a web platform or mobile app, integration is smooth and scalable."
  },
  {
    icon: "ProvenFrameworks",
    title: "🧱 Proven Frameworks for Scalable AI",
    description: "From idea to impact—faster. We provide a systematic framework to take your AI ideas from concept to full-scale implementation, giving your teams a repeatable path to success."
  },
  {
    icon: "SyntheticData",
    title: "🧪 Synthetic Data Generation",
    description: "Fuel innovation with high-quality, synthetic data. Need data? Generate powerful synthetic datasets for training, testing, and prototyping—without the limitations of real-world data constraints or privacy concerns."
  },
  {
    icon: "TestBusinessValue",
    title: "✅ Test Business Value Early",
    description: "Build powerful proof-of-concepts. Our tools help you rapidly validate ideas by creating working prototypes that prove technical feasibility and real-world value—before committing to full development."
  },
  {
    icon: "ProductionReady",
    title: "🚀 Production-Ready AI Applications",
    description: "Launch robust, scalable AI solutions. Go beyond experimentation. ForgeAI supports you in deploying reliable, production-grade AI applications designed to deliver valuable outputs and integrate seamlessly into existing workflows."
  },
  {
    icon: "TrainModels",
    title: "🧠 Train and Optimize Your Own Models",
    description: "Own your intelligence. Use deployment data to refine your applications and train custom AI models. Deploy them on your infrastructure for complete data privacy, optimized performance, and cost control."
  },
  {
    icon: "EngagingUX",
    title: "🎨 Engaging User Experience",
    description: "Intelligent frontends. Seamless UX. Design isn't an afterthought. Our platform helps you create engaging interfaces that integrate real-time AI outputs—resulting in smarter, smoother user experiences."
  },
  {
    icon: "RealTimeInteractivity",
    title: "💡 Real-Time Interactivity",
    description: "Make every interaction count. From personalized content to intelligent recommendations and dynamic simulations—ForgeAI enables highly interactive, real-time AI experiences that delight users."
  },
  {
    icon: "BusinessOutcomes",
    title: "📈 Drive Better Business Outcomes",
    description: "Leverage generative data. Use data from AI-generated outputs to drive strategic decisions. Our analytics tools help you extract insights, improve engagement, and optimize business processes."
  },
  {
    icon: "BuildSmarter",
    title: "🚧 Build Smarter, Scale Faster",
    description: "Create. Automate. Innovate. ForgeAI enables dynamic AI-driven solution building at scale. Whether you're automating internal processes or delivering intelligent customer experiences, we help you build with confidence."
  }
];

export function PlatformFeatures() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = FeatureIcons[feature.icon as keyof typeof FeatureIcons];

              return (
                <div 
                  key={index} 
                  className="rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col hover:scale-[1.02] animate-fadeIn group bg-white"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, rgba(200,200,200,0.2), rgba(220,220,220,0.2))',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '1px solid transparent',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                      style={{ 
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                  </div>
                  <p className="text-black mt-2 flex-grow">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              ✨ Ready to Build with ForgeAI?
            </h2>
            <p className="text-lg text-black mb-8 max-w-3xl mx-auto">
              Start transforming your workflows with smart, scalable generative AI today.
            </p>
            <Button 
              onClick={openContactModal} 
              className="text-white cursor-pointer px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 animate-pulse"
              style={{ animationDuration: '3s' }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
<EnterpriseFeatures/>
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onCloseAction={closeContactModal}
      />
    </>
  );
}
