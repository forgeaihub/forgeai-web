const content = {
  header: {
    logo: {
      src: "/logo.png",
      alt: "ForgeAI Logo"
    },
    navigation: [
      { text: "Services", href: "#services" },
      { text: "About Us", href: "#about" },
      { text: "Platform", href: "/platform" }
    ]
  },
  mainContent: {
    image: {
      src: "/forgeai.png",
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
        title: "Custom AI Agents with n8n",
        description: "We build intelligent, no-code/low-code AI agents using n8n that plug directly into your existing systems. Whether it's for sales, support, internal automation, or lead qualification — our agents work around the clock to deliver results.\n\n• Lead capture and nurturing bots\n• Customer support chatbots\n• AI-driven follow-ups and CRM updates\n• Slack/Teams notification bots\n• Backend process automation\n• Multichannel workflows (email, SMS, API, DB, etc.)",
        category: "AI Automation",
        function: "Workflow",
        icon: "AssignmentIndOutlinedIcon",
      },
      {
        title: "Sales & Support AI Workflows",
        description: "Supercharge your customer experience with intelligent agents that handle repetitive tasks, escalate priority issues, and proactively engage leads.\n\n• Live chat & helpdesk integration (Zendesk, Intercom, Freshdesk, etc.)\n• Email triage, auto-responses & smart routing\n• Upsell & cross-sell automations based on behavior\n• Personalized follow-up sequences\n• Ticket categorization & sentiment analysis using AI",
        category: "Customer Experience",
        function: "Sales & Support",
        icon: "PlagiarismOutlinedIcon",
      },
      {
        title: "Enterprise Integrations & Automation Architecture",
        description: "We connect all your apps and services — cloud or on-prem — using scalable automation pipelines powered by n8n and custom nodes.\n\n• API integrations with CRMs, ERPs, HRMs\n• Data sync between platforms (HubSpot, Salesforce, etc.)\n• Scheduled reports and intelligent alerts\n• Secure webhook endpoints for real-time operations\n• Event-driven infrastructure (Zapier replacement)",
        category: "Enterprise Solutions",
        function: "Integration",
        icon: "AccountBalanceOutlinedIcon",
      },
      {
        title: "Agent Monitoring & Optimization",
        description: "We don't just launch bots — we keep them sharp. Our team continuously monitors, tests, and optimizes your automations to ensure performance, accuracy, and compliance.\n\n• Health checks, failover mechanisms\n• Auto-debugging and error handling\n• Analytics & insights dashboards\n• Versioning & rollback\n• Model fine-tuning (OpenAI/GPT, etc.)",
        category: "Maintenance",
        function: "Optimization",
        icon: "AssessmentOutlinedIcon",
      },
      {
        title: "On-Premise & Private Cloud Deployment",
        description: "Concerned about data security or compliance? We offer private, enterprise-grade n8n deployments with full control and customization.\n\n• Secure on-prem Docker/Kubernetes setups\n• SSO & OAuth2 authentication\n• Custom node development\n• GDPR/ISO27001 compliant architecture\n• SLA-backed support & maintenance",
        category: "Security",
        function: "Deployment",
        icon: "AssignmentIndOutlinedIcon",
      },
      {
        title: "AI-Powered Predictive Analytics",
        description: "Leverage the power of machine learning to predict future trends and make data-driven decisions for your business.\n\n• Customer behavior prediction\n• Sales forecasting and inventory optimization\n• Anomaly detection and risk assessment\n• Personalized recommendation engines\n• Automated data visualization and reporting\n• Continuous model improvement and adaptation",
        category: "Data Intelligence",
        function: "Analytics",
        icon: "AssessmentOutlinedIcon",
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
      { text: "Terms of Service", href: "/terms" }
    ]
  }
};

export default content;
