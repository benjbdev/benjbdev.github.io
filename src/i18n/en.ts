export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    about: string;
    services: string;
    contact: string;
    openMenu: string;
    switchLang: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    subtitle: string;
    whenTitle: string;
    whenList: string[];
    cta1: string;
    cta2: string;
  };
  about: {
    label: string;
    bio: string;
    whenTitle: string;
    whenList: string[];
    stats: Array<{ value: string; label: string }>;
  };
  services: {
    label: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    cta: {
      title: string;
      description: string;
    };
  };
  contact: {
    label: string;
    intro: string;
    bookTitle: string;
    bookSubtext: string;
    linkedinTitle: string;
    linkedinLink: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
  };
  footer: {
    name: string;
    legalLink: string;
    modal: {
      title: string;
      legalTitle: string;
      legalIntro: string;
      statusLabel: string;
      statusValue: string;
      activityLabel: string;
      activityValue: string;
      siretLabel: string;
      siretValue: string;
      locationLabel: string;
      locationValue: string;
      hostingLabel: string;
      hostingValue: string;
      privacyTitle: string;
      privacyP1: string;
      privacyP2: string;
      privacyP3: string;
      privacyP4: string;
      commsTitle: string;
      commsP1: string;
      commsP2: string;
    };
  };
}

export const en: Translations = {
  meta: {
    title:
      "Benjamin Bellantonio | Principal Engineer & Fractional Technology Advisor | Marseille, France",
    description:
      "Principal Engineer & Fractional Technology Advisor helping product companies navigate critical engineering and architecture decisions as their systems and teams scale.",
  },
  nav: {
    logo: "b.",
    about: "About",
    services: "Services",
    contact: "Contact",
    openMenu: "Open menu",
    switchLang: "Switch to",
  },
  hero: {
    greeting: "Hi, I'm Benjamin.",
    tagline:
      'Principal Engineer & <br class="hidden sm:block">Fractional Technology Advisor',
    subtitle:
      "Helping product companies navigate <strong>critical engineering and architecture decisions</strong> as their systems and teams scale — not as a consultant delivering reports, but as a <strong>senior technical partner working alongside CTOs and engineering leaders</strong>.",
    whenTitle: "Typically called when:",
    whenList: [
      "architecture starts slowing product velocity",
      "systems become hard to evolve",
      "senior technical leadership is missing",
    ],
    cta1: "How I help",
    cta2: "Discuss your situation",
  },
  about: {
    label: "About",
    bio: "15+ years designing and operating <strong>distributed systems in production</strong>.<br><br>Across several companies, I’ve worked as a <strong>Staff / Principal-level engineer and technology leader</strong>, often acting as the <strong>technical right-hand to CTOs or CPTOs</strong> — owning architecture across backend platforms and guiding cross-team technical decisions.<br><br>Experience across <strong>early-stage startups through scale-ups</strong>, working with teams in France, Malaysia, and internationally. <strong>Remote-native</strong>.",
    whenTitle: "Typical situations",
    whenList: [
      "Scaling quickly and the architecture is starting to break under load",
      "Product velocity slowing due to accumulated technical debt",
      "Reorganizing engineering and service ownership or team boundaries are unclear",
      "Building fast and needing architectural foundations that won’t become a bottleneck by Series A",
      "A core architect or principal engineer has left and the team needs senior technical continuity",
      "Evaluating a major platform evolution — cloud migration, AI integration, or microservices consolidation",
      "Over-reliance on third-party vendors without clear ownership or exit strategy",
    ],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "30+", label: "Companies" },
      { value: "25%+", label: "Delivery Gains" },
      { value: "50%+", label: "Incident Reduction" },
    ],
  },
  services: {
    label: "Services",
    cards: [
      {
        title: "Architecture & Platform Review",
        description:
          "A focused engagement (2–6 weeks) to evaluate architecture and platform health, identify key architectural issues and produce a prioritized action plan.<br><br>Deliverable: a clear report and working session your team can act on immediately.",
      },
      {
        title: "Fractional Principal Engineer",
        description:
          "Ongoing part-time engagement (up to 3 days/week) providing senior architectural guidance across system design, technical decision-making, engineering mentorship, and platform evolution.<br><br>I work alongside your leadership and senior engineers, not above them.",
      },
      {
        title: "Platform Transformation",
        description:
          "Advisory and hands-on support for high-stakes platform initiatives: migrations, re-architectures, scaling challenges, or post-acquisition integrations.<br><br>Scoped to the initiative, with a focus on architecture decisions and delivery risks.",
      },
    ],
    cta: {
      title: "Not sure which fits? Let's talk.",
      description:
        "Every engagement starts with a conversation. We define your goals, map the constraints, and shape the scope around the outcome you actually need — not a fixed package.",
    },
  },
  contact: {
    label: "Get in touch",
    intro:
      "Part-time, remote-first. On-site visits available for workshops and kickoffs. Typical engagement: 1–6 months, scoped to a clear outcome.<br><br>If you're a co-founder, CTO, or engineering leader navigating a technical inflection point, feel free to reach out.",
    bookTitle: "Book a 30-min call",
    bookSubtext: "Pick a time that works for you — no preparation needed.",
    linkedinTitle: "Connect on LinkedIn",
    linkedinLink: "linkedin.com/in/benjamin-bellantonio",
    formTitle: "Send a message",
    formName: "Name",
    formEmail: "Email",
    formCompany: "Company (optional)",
    formMessage: "Message",
    formSubmit: "Send message",
    formSuccess: "Message sent! I'll be in touch soon.",
    formError: "Something went wrong. Please try again or email me directly.",
  },
  footer: {
    name: "Benjamin Bellantonio, Principal Engineer & Fractional Technology Advisor, Marseille, France",
    legalLink: "Legal & Privacy",
    modal: {
      title: "Legal & Privacy",
      legalTitle: "Legal Information",
      legalIntro: "This website is operated by <strong>Benjamin Bellantonio</strong>, independent technology advisor.",
      statusLabel: "Status",
      statusValue: "Individual Entrepreneur (Micro-entrepreneur)",
      activityLabel: "Activity",
      activityValue: "IT systems and software consulting",
      siretLabel: "SIRET",
      siretValue: "532 734 928 00056",
      locationLabel: "Location",
      locationValue: "Marseille, France",
      hostingLabel: "Hosting",
      hostingValue: 'GitHub Pages – GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States — <a href="https://pages.github.com" class="underline">pages.github.com</a>',
      privacyTitle: "Confidentiality & Data Protection",
      privacyP1: "If you contact me through this website or by email, the information you provide (such as your name, email address, and message content) is used solely to respond to your request or discuss a potential collaboration.",
      privacyP2: "No personal data is sold, shared with third parties, or used for marketing purposes.",
      privacyP3: "Information may be retained only for the time necessary to handle the discussion or potential professional engagement.",
      privacyP4: "In accordance with the <strong>General Data Protection Regulation (GDPR)</strong>, you have the right to request access, correction, or deletion of your personal data.",
      commsTitle: "Professional Communication",
      commsP1: "Information shared through this website or during initial discussions is treated with professional discretion.",
      commsP2: "However, unless explicitly agreed otherwise, communication through the contact form or email does <strong>not constitute a formal confidentiality agreement (NDA)</strong>.",
    },
  },
};
