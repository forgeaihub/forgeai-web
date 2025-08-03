"use client";

import content from "@/lib/content";

// SVG Icons
const IconComponents = {
    AssignmentIndOutlinedIcon: () => (
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium p2 h-6 w-6 text-background" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AssignmentIndOutlinedIcon">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25M19 19H5V5h14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58M8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12z"></path>
        </svg>
    ),
    PlagiarismOutlinedIcon: () => (
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium p2 h-6 w-6 text-background" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlagiarismOutlinedIcon">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"></path>
            <path d="M9.03 11.03c-1.37 1.37-1.37 3.58 0 4.95 1.12 1.12 2.8 1.31 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13-1.37-1.37-3.59-1.37-4.95 0m3.53 3.53c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12.59-.59 1.54-.59 2.12 0 .59.59.59 1.53 0 2.12"></path>
        </svg>
    ),
    AccountBalanceOutlinedIcon: () => (
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium p2 h-6 w-6 text-background" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountBalanceOutlinedIcon">
            <path d="M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-6.74L16.71 6H6.29zm0-2.26L2 6v2h19V6z"></path>
        </svg>
    ),
    AssessmentOutlinedIcon: () => (
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium p2 h-6 w-6 text-background" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AssessmentOutlinedIcon">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></path>
        </svg>
    ),
};

export function Services() {
    return (
        <section id="services" className="py-8 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full" style={{ 
                    backgroundImage: 'radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)',
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">{content.services.title}</h2>

                <div className="grid gap-8 md:grid-cols-1 justify-center lg:grid-cols-2">
                    {content.services.serviceList.map((service, index) => {
                        const Icon = IconComponents[service.icon as keyof typeof IconComponents];

                        return (
                            <div 
                                key={index} 
                                className="rounded-md p-px bg-gradient-to-b from-muted to-transparent flex flex-col flex-auto border border-muted border-opacity-100 border-b-opacity-0 relative after:absolute after:inset-x-0 after:bottom-0 after:h-8 after:bg-gradient-to-t after:from-transparent after:to-muted/30 after:z-10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fadeIn group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="p-10 space-y-5 bg-background rounded-md grow relative z-20">
                                    {/* Icon and Title */}
                                    <div className="flex gap-4 items-center">
                                        <div className="h-12 w-12 rounded-full flex items-center justify-center bg-stone-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                                            style={{ 
                                                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            <Icon />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-primary">{service.title}</h3>
                                        </div>
                                    </div>

                                    {/* Category and Function */}
                                    <div className="flex flex-row gap-4 p-2 items-start border rounded-md border-muted">
                                        <div className="flex-1 border-r border-muted">
                                            <p className="text-base text-black font-medium">Category</p>
                                            <p className="text-sm text-primary pr-2">{service.category}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-base text-black font-medium">Function</p>
                                            <p className="text-sm text-primary pr-2">{service.function}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="p-2 border rounded-md border-muted">
                                        <div className="text-black text-base whitespace-pre-line">
                                            {service.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
