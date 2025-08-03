import React from 'react';
import { Gavel, List, LayoutGrid, Link, TrendingUp, ShieldCheck } from 'lucide-react';

// Main App component
const EnterpriseFeatures = () => {
    // Data for the feature cards
    const features = [
        {
            icon: Gavel,
            title: 'Compliance and Integration',
            description:
                "ForgeAI's AI solutions are developed with regulatory requirements in mind, ensuring that your operations remain compliant across jurisdictions.",
        },
        {
            icon: List,
            title: 'Complex Data Handling',
            description:
                "ForgeAI's AI solutions are crafted to manage intricate data structures, providing real-time analytics and insights that enable you to make informed decisions swiftly and accurately.",
        },
        {
            icon: LayoutGrid,
            title: 'Management Tools',
            description:
                'We provide a comprehensive suite of tools for the effective management, scaling, and deployment of your AI solutions. Our platform is designed to give you complete control over your AI operations, with real-time monitoring and analytics.',
        },
        {
            icon: Link,
            title: 'Seamless Integration',
            description:
                'Our technology offers seamless integration capabilities, allowing for automated solutions for smaller projects or bespoke integration for specific needs, ensuring a perfect fit within your existing ecosystem.',
        },
        {
            icon: TrendingUp,
            title: 'Built to Scale',
            description:
                'Our fully asynchronous system architecture guarantees that our technology adapts to your evolving requirements. These solutions are designed to scale seamlessly with your needs, and to deliver consistent performance without compromise.',
        },
        {
            icon: ShieldCheck,
            title: 'Reliable and Robust',
            description:
                'Our AI systems are built on a foundation of reliability, equipped with advanced error handling and fallback strategies to maintain consistent performance under any circumstances.',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-black">
                    Production Ready for Enterprises
                </h1>

                {/* Introductory Paragraph */}
                <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-black">
                    At ForgeAI, we understand that enterprises require AI solutions that are not only innovative
                    but also dependable, scalable, and compliant with industry regulations.
                </p>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col hover:scale-[1.02] animate-fadeIn group bg-white"
                            style={{
                                animationDelay: `${index * 0.1}s`, // Added animation delay for staggered effect
                                backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, rgba(200,200,200,0.2), rgba(220,220,220,0.2))',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                                border: '1px solid transparent',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                            }}
                        >
                            {/* Icon Container */}
                            <div className="mb-4 h-12 w-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                                 style={{
                                     background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
                                     boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                 }}
                            >
                                {/* Icon */}
                                <feature.icon className="h-6 w-6 text-black" />
                            </div>
                            {/* Feature Title */}
                            <h2 className="text-xl font-semibold mb-2 text-black">
                                {feature.title}
                            </h2>
                            {/* Feature Description */}
                            <p className="text-black mt-2 flex-grow leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EnterpriseFeatures;
