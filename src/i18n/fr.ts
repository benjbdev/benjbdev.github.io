import type { Translations } from './en';

export const fr: Translations = {
  meta: {
    title: 'Benjamin Bellantonio — Architecte Principal & Conseiller Technologique',
    description:
      "Architecte Principal et Conseiller Technologique, j'aide les sociétés produit à naviguer les décisions critiques d'architecture et de plateforme.",
  },
  nav: {
    about: 'À propos',
    services: 'Services',
    experience: 'Expérience',
    contact: 'Contact',
  },
  hero: {
    label: '// architecte principal & conseiller technologique',
    subtitle:
      "J'aide les sociétés produit à naviguer les décisions critiques d'architecture et de plateforme à mesure que leurs systèmes et équipes évoluent — pas comme un consultant qui remet un rapport et disparaît, mais comme un vrai partenaire technique senior.",
    cta1: 'Voir mes services',
    cta2: 'Me contacter',
  },
  about: {
    label: '// à propos',
    bio: "Plus de 15 ans à concevoir et opérer des systèmes distribués en production. Dernièrement Directeur Technique chez CoachHub, bras droit technique du CPTO — pilotant la direction architecturale des systèmes backend, animant la conception de systèmes transverses, et livrant AIMY, une plateforme de coaching IA event-driven, de zéro à la production en 6 mois. Expérience en startups early-stage et scale-ups en France, en Malaisie et à l'international. Remote-native.",
    whenTitle: 'Quand les entreprises font appel à moi',
    whenList: [
      "Vous construisez vite et avez besoin de fondations architecturales qui ne deviendront pas un goulot d'étranglement en Série A",
      "Vous scalez vite et l'architecture commence à craquer sous la pression",
      "Vous réorganisez l'engineering et personne ne s'entend sur la propriété des services ou les frontières d'équipes",
      'Vous perdez de la vélocité produit face à la dette technique accumulée',
      "Un architecte clé vient de partir et l'équipe a besoin de continuité technique senior",
      "Sur-dépendance aux vendors tiers sans propriété claire ni chemin de sortie",
      "Évaluation d'une évolution majeure de plateforme — migration cloud, intégration IA, consolidation microservices",
    ],
    stats: [
      { value: '15+', label: "Ans d'expérience" },
      { value: 'Distribué', label: 'Systèmes' },
      { value: 'IA', label: 'Plateformes' },
      { value: 'Remote', label: 'Native' },
    ],
  },
  services: {
    label: '// services',
    cards: [
      {
        icon: 'Search',
        title: 'Architecture & Audit de Plateforme',
        description:
          "Un engagement focalisé (2–6 semaines) pour diagnostiquer la santé de votre architecture et plateforme, identifier les problèmes à fort levier, et produire un plan d'action clair et priorisé. Livrable : un rapport et un workshop sur lequel votre équipe peut agir immédiatement.",
      },
      {
        icon: 'Layers',
        title: 'Architecte Principal Fractionnel',
        description:
          "Engagement part-time continu (jusqu'à 3 jours/semaine) apportant une guidance architecturale senior sur la conception système, la prise de décision technique, le mentoring engineering, et l'évolution de plateforme. Je m'intègre avec vos leaders et ingénieurs senior, pas au-dessus d'eux.",
      },
      {
        icon: 'ArrowUpRight',
        title: 'Support de Transformation Plateforme',
        description:
          "Conseil et support opérationnel sur des initiatives de plateforme critiques : migrations, re-architectures, initiatives de scaling, ou intégration post-acquisition. Cadré sur l'initiative.",
      },
    ],
  },
  background: {
    label: '// parcours',
    bio: "Plus de 15 ans à concevoir et opérer des systèmes distribués en production. Dernièrement Directeur Technique chez CoachHub, bras droit technique du CPTO. Expérience en startups early-stage et scale-ups en France, en Malaisie et à l'international.",
    cta: 'Voir le profil complet sur LinkedIn →',
  },
  contact: {
    label: '// me contacter',
    intro:
      "Temps partiel, remote-first. Déplacements possibles pour workshops et kickoffs. Engagement typique : 1 à 6 mois, cadré sur un résultat précis. Co-fondateur, CTO, ou dirigeant face à un point d'inflexion technique — je serai ravi d'échanger avec vous.",
    bookTitle: 'Réserver un appel de 30 min',
    bookSubtext: 'Choisissez un créneau — sans engagement.',
    formName: 'Nom',
    formEmail: 'Email',
    formCompany: 'Entreprise (optionnel)',
    formMessage: 'Message',
    formSubmit: 'Envoyer le message',
    formSuccess: 'Message envoyé ! Je vous répondrai sous peu.',
    formError: "Une erreur s'est produite. Veuillez réessayer ou me contacter par email.",
  },
  footer: {
    copy: '© 2025 Benjamin Bellantonio',
  },
};
