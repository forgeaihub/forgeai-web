const content = {
  header: {
    logo: {
      src: "/logo.png",
      alt: "ForgeAI Logo"
    },
    navigation: [
      { text: "Services", href: "#services" },
      { text: "About Us", href: "#about" },
      { text: "Contact Us", href: "#contact" }
    ]
  },
  mainContent: {
    image: {
      src: "/globe.svg",
      alt: "AI Transformation"
    },
    title: "Forge Your AI Future",
    description: "Transform your business with custom AI agents that automate, analyze, and accelerate your workflows.",
    button: "Get Started"
  },
  services: {
    title: "Our Services",
    serviceList: [
      {
        title: "No-Code AI Agent Builders",
        description: "Leverage platforms like n8n or Zapier to automate your workflows with AI-enhanced logic. We build and deploy intelligent agents that connect your tools, make decisions, and automate tasks — all without writing code.",
        imageUrl: "/globe.svg",
      },
      {
        title: "Custom AI Agent Development",
        description: "Need a fully tailored solution? We design and develop AI agents using Python, LangChain, or OpenAI APIs. Whether it's a chatbot, a data summarizer, or a business process bot, we build powerful solutions that scale with you.",
        imageUrl: "/window.svg",
      },
      {
        title: "AI Agent Integration",
        description: "Already have an AI system or agent? We help fine-tune, optimize, and integrate it into your business ecosystem. Get expert help with performance, API connections, prompt engineering, and user experience to get the most out of your AI.",
        imageUrl: "/file.svg",
      },
    ]
  },
  aboutCompany: {
    title: "About US",
    expertise: {
      title: "Our Expertise",
      description: "We specialize in building intelligent, task-driven AI agents tailored to your business needs. Whether you're looking to streamline operations, enhance customer experience, or build cutting-edge automation, we bring powerful AI solutions to life. Our agents are designed for real-world use—scalable, secure, and smart from the ground up. Partner with us to transform ideas into working AI that delivers results."
    }
  },
  contactUs: {
    title: "Contact Us",
    subtitle: "Have questions or want to learn more? Get in touch with our team.",
    form: {
      firstName: {
        label: "First Name",
        placeholder: ""
      },
      lastName: {
        label: "Last Name",
        placeholder: ""
      },
      email: {
        label: "Email",
        placeholder: ""
      },
      message: {
        label: "Message",
        placeholder: "Tell us how we can help you..."
      },
      submitButton: "Send Message"
    }
  },
  copyright: {
    companyName: "ForgeAI",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Contact Us", href: "/contact" }
    ]
  }
};

export default content;