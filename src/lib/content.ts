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
        title: "Custom AI Agents with n8n ",
        description: "We build intelligent, no-code/low-code AI agents using n8n that plug directly into your existing systems. Whether it's for sales, support, internal automation, or lead qualification — our agents work around the clock to deliver results.<br/><br/>" +
            "• Lead capture and nurturing bots<br/>" +
            "• Customer support chatbots<br/>" +
            "• AI-driven follow-ups and CRM updates<br/>" +
            "• Slack/Teams notification bots<br/>" +
            "• Backend process automation<br/>" +
            "• Multichannel workflows (email, SMS, API, DB, etc.)",
        imageUrl: "/n8nservice.jpg",
      },
      {
        title: "Sales & Support AI Workflows",
        description: "Supercharge your customer experience with intelligent agents that handle repetitive tasks, escalate priority issues, and proactively engage leads.<br/><br/>" +
            "• Live chat & helpdesk integration (Zendesk, Intercom, Freshdesk, etc.)<br/>" +
            "• Email triage, auto-responses & smart routing<br/>" +
            "• Upsell & cross-sell automations based on behavior<br/>" +
            "• Personalized follow-up sequences<br/>" +
            "• Ticket categorization & sentiment analysis using AI",
        imageUrl: "/Voice_bot.gif",
      },
      {
        title: "Enterprise Integrations & Automation Architecture",
        description: "We connect all your apps and services — cloud or on-prem — using scalable automation pipelines powered by n8n and custom nodes.<br/><br/>" +
            "• API integrations with CRMs, ERPs, HRMs<br/>" +
            "• Data sync between platforms (HubSpot, Salesforce, etc.)<br/>" +
            "• Scheduled reports and intelligent alerts<br/>" +
            "• Secure webhook endpoints for real-time operations<br/>" +
            "• Event-driven infrastructure (Zapier replacement)",
        imageUrl: "/crm.gif",
      },
      {
        title: "Agent Monitoring & Optimization",
        description: "We don't just launch bots — we keep them sharp. Our team continuously monitors, tests, and optimizes your automations to ensure performance, accuracy, and compliance.<br/><br/>" +
            "• Health checks, failover mechanisms<br/>" +
            "• Auto-debugging and error handling<br/>" +
            "• Analytics & insights dashboards<br/>" +
            "• Versioning & rollback<br/>" +
            "• Model fine-tuning (OpenAI/GPT, etc.)",
        imageUrl: "/rob_maintenance.gif",
      },
      {
        title: "On-Premise & Private Cloud Deployment",
        description: "Concerned about data security or compliance? We offer private, enterprise-grade n8n deployments with full control and customization.<br/><br/>" +
            "• Secure on-prem Docker/Kubernetes setups<br/>" +
            "• SSO & OAuth2 authentication<br/>" +
            "• Custom node development<br/>" +
            "• GDPR/ISO27001 compliant architecture<br/>" +
            "• SLA-backed support & maintenance",
        imageUrl: "/cloud.gif",
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