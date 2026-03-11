export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    experience: string;
    contact: string;
  };
  hero: {
    label: string;
    tagline: string;
    subtitle: string;
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
      icon: string;
      title: string;
      description: string;
    }>;
    cta: {
      title: string;
      description: string;
    };
  };
  background: {
    label: string;
    bio: string;
    cta: string;
  };
  contact: {
    label: string;
    intro: string;
    bookTitle: string;
    bookSubtext: string;
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
    copy: string;
  };
}

export const en: Translations = {
  meta: {
    title: 'Benjamin Bellantonio — Principal Architect & Technology Advisor',
    description:
      'Principal Architect and Technology Advisor helping product companies navigate critical architecture and platform decisions.',
  },
  nav: {
    about: 'About',
    services: 'Services',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    label: 'principal architect & technology advisor',
    tagline: 'Principal architect and technology advisor.',
    subtitle:
      'I help product companies navigate critical architecture and platform decisions as their systems and teams evolve — not as a consultant who delivers reports and disappears, but as a senior technical partner.',
    cta1: 'See my services',
    cta2: 'Get in touch',
  },
  about: {
    label: 'About',
    bio: '15+ years designing and operating distributed systems in production. Most recently Director of Technology at CoachHub, acting as technical right-hand to the CPTO — owning architectural direction across core backend systems, leading cross-team system design, and shipping AIMY, an event-driven AI coaching platform, from zero to production in 6 months. Experience across early-stage startups through scale-ups in France, Malaysia, and internationally. Remote-native.',
    whenTitle: 'When companies reach out',
    whenList: [
      "Building fast and need architectural foundations that won't become a bottleneck at Series A",
      'Scaling fast and the architecture is starting to break under pressure',
      "Re-orging engineering and nobody agrees on service ownership or team boundaries",
      'Losing product velocity to accumulated technical debt',
      'A core architect just left and the team needs senior technical continuity',
      'Over-reliant on third-party vendors with no clear ownership or exit path',
      'Evaluating a major platform evolution — cloud migration, AI integration, microservices consolidation',
    ],
    stats: [
      { value: '15+', label: 'Years experience' },
      { value: 'Distributed', label: 'Systems' },
      { value: 'AI', label: 'Platforms' },
      { value: 'Remote', label: 'Native' },
    ],
  },
  services: {
    label: 'Services',
    cards: [
      {
        icon: 'Search',
        title: 'Architecture & Platform Assessment',
        description:
          'A focused engagement (2–6 weeks) to diagnose architecture and platform health, identify highest-leverage problems, and produce a clear, prioritized action plan. Deliverable: a report and workshop your team can act on immediately.',
      },
      {
        icon: 'Layers',
        title: 'Fractional Principal Architect',
        description:
          'Ongoing part-time engagement (up to 3 days/week) providing senior architectural guidance across system design, technical decision-making, engineering mentorship, and platform evolution. I embed with your leadership and senior engineers, not above them.',
      },
      {
        icon: 'ArrowUpRight',
        title: 'Platform Transformation Support',
        description:
          'Advisory and hands-on support during high-stakes platform initiatives: migrations, re-architectures, scaling initiatives, or post-acquisition integration. Scoped to the initiative.',
      },
    ],
    cta: {
      title: "Not sure which fits? Let's figure it out together.",
      description:
        "Every engagement starts with a conversation. We define your goals, map the constraints, and shape the scope around the outcome you actually need — not a fixed package.",
    },
  },
  background: {
    label: 'Background',
    bio: '15+ years designing and operating distributed systems in production. Most recently Director of Technology at CoachHub, acting as technical right-hand to the CPTO. Experience across early-stage startups through scale-ups in France, Malaysia, and internationally.',
    cta: 'View full profile on LinkedIn →',
  },
  contact: {
    label: 'Get in touch',
    intro:
      "Part-time, remote-first. On-site visits available for workshops and kickoffs. Typical engagement: 1 to 6 months, scoped to a clear outcome. Whether you're a co-founder, CTO, or executive navigating a technical inflection point — I'd be glad to hear from you.",
    bookTitle: 'Book a 30-min call',
    bookSubtext: 'Pick a time that works for you — no commitment.',
    formTitle: 'Send a message',
    formName: 'Name',
    formEmail: 'Email',
    formCompany: 'Company (optional)',
    formMessage: 'Message',
    formSubmit: 'Send message',
    formSuccess: "Message sent! I'll be in touch soon.",
    formError: 'Something went wrong. Please try again or email me directly.',
  },
  footer: {
    copy: '© 2025 Benjamin Bellantonio',
  },
};
