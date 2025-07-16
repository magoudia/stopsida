import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

// Traductions globales (exemple, à compléter)
const translations = {
  fr: {
    footer: {
      about: "ONG fondée en 1993, œuvrant pour l'accès universel à des soins de qualité dans la lutte contre le VIH/SIDA et les défis sanitaires majeurs.",
      navigation: 'Navigation',
      aboutUs: 'Qui sommes-nous ?',
      ourActions: 'Nos actions',
      becomeVolunteer: 'Devenir bénévole',
      news: 'Actualités',
      reports: 'Rapports',
      contact: 'Contact',
      follow: 'Suivez-nous',
      newsletter: 'Newsletter',
      subscribe: "S'abonner",
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      rights: 'Tous droits réservés.'
    },
    home: {
      heroTitle: 'Ensemble contre le',
      heroHighlight: 'VIH/SIDA',
      heroDesc: "Depuis 1993, STOP SIDA œuvre pour l'accès universel à des soins de qualité et la lutte contre le VIH/SIDA en Mauritanie.",
      discoverActions: 'Découvrir nos actions',
      becomeVolunteer: 'Devenir bénévole',
      stats: [
        { value: '30+', label: "Années d'engagement" },
        { value: '10K+', label: 'Vies touchées' },
        { value: '50+', label: 'Projets réalisés' },
        { value: '24/7', label: 'Assistance disponible' }
      ],
      missionTitle: 'Notre Mission',
      missionDesc: "Lutter activement contre le VIH/SIDA par des actions de prévention, d'éducation, de traitement, et de plaidoyer, tout en renforçant les systèmes de santé pour les populations vulnérables.",
      missionPrevention: 'Prévention',
      missionPreventionDesc: 'Sensibilisation et éducation des communautés',
      missionTreatment: 'Traitement',
      missionTreatmentDesc: 'Accès aux soins et accompagnement médical',
      missionAdvocacy: 'Plaidoyer',
      missionAdvocacyDesc: 'Défense des droits et sensibilisation politique',
      learnMore: 'En savoir plus',
      joinTitle: 'Rejoignez notre combat',
      joinDesc: 'Ensemble, nous pouvons faire la différence dans la lutte contre le VIH/SIDA. Votre engagement compte.',
      joinVolunteer: 'Devenir bénévole',
      joinSupport: 'Nous soutenir',
      newsTitle: 'Actualités récentes',
      newsDesc: 'Suivez nos dernières actions et initiatives dans la lutte contre le VIH/SIDA',
      news: [
        {
          title: 'Nouvelle campagne de sensibilisation dans les écoles',
          date: '15 Décembre 2024',
          excerpt: "Lancement d'une campagne éducative dans 20 établissements scolaires de Nouakchott.",
        },
        {
          title: "Partenariat avec l'OMS pour la prévention",
          date: '10 Décembre 2024',
          excerpt: "Signature d'un accord de coopération pour renforcer les actions de prévention.",
        },
        {
          title: 'Formation de 100 agents de santé communautaire',
          date: '5 Décembre 2024',
          excerpt: 'Programme de formation intensive sur la prise en charge du VIH/SIDA.',
        },
      ],
      readMore: 'Lire la suite',
      allNews: 'Voir toutes les actualités',
      // ... autres clés pour les news, etc.
    },
    about: {
      heroTitle: 'Qui sommes-nous ?',
      heroDesc: 'STOP SIDA est une organisation non gouvernementale mauritanienne dédiée à la lutte contre le VIH/SIDA depuis plus de 30 ans.',
      historyTitle: 'Notre Histoire',
      historyP1: "Fondée en 1993, STOP SIDA est née de la volonté de répondre à l'urgence sanitaire que représentait l'épidémie de VIH/SIDA en Mauritanie. Depuis plus de trois décennies, nous avons évolué pour devenir une organisation de référence dans la lutte contre cette pandémie.",
      historyP2: "Notre approche holistique combine prévention, traitement, accompagnement psychosocial et plaidoyer pour garantir un accès équitable aux soins pour toutes les populations, en particulier les plus vulnérables.",
      keyDatesTitle: 'Dates clés',
      keyDates: [
        { year: '1993', event: "Création de l'ONG STOP SIDA" },
        { year: '2000', event: 'Premier centre de dépistage' },
        { year: '2010', event: 'Extension des programmes de prévention' },
        { year: '2020', event: 'Digitalisation des services' },
      ],
      missionTitle: 'Notre Mission',
      missionDesc: "Lutter activement contre le VIH/SIDA par des actions de prévention, d'éducation, de traitement, et de plaidoyer, tout en renforçant les systèmes de santé pour les populations vulnérables.",
      visionTitle: 'Notre Vision',
      visionDesc: "Un monde où chaque personne a accès à des soins de qualité et vit sans stigmatisation liée au VIH/SIDA.",
      valuesTitle: 'Nos Valeurs',
      valuesDesc: "Les principes qui guident notre action au quotidien.",
      values: [
        { title: 'Compassion', desc: "Nous agissons avec empathie et bienveillance envers toutes les personnes affectées." },
        { title: 'Solidarité', desc: "Nous croyons en la force du collectif pour surmonter les défis sanitaires." },
        { title: 'Excellence', desc: "Nous visons la qualité dans tous nos programmes et interventions." },
        { title: 'Engagement', desc: "Nous nous engageons pleinement dans notre mission de santé publique." },
      ],
      teamTitle: 'Notre Équipe',
      teamDesc: "Des professionnels engagés au service de la santé publique.",
      team: [
        { name: 'Fatimetou Maham', role: 'Présidente', desc: 'Leader expérimentée dans le domaine de la santé publique et des droits humains.' },
        { name: 'Dr. Ahmed Ould Salem', role: 'Directeur Médical', desc: "Spécialiste en infectiologie avec 15 ans d'expérience dans la lutte contre le VIH." },
        { name: 'Aminata Ba', role: 'Coordinatrice Programmes', desc: 'Experte en gestion de projets de développement et santé communautaire.' },
      ],
      impactTitle: 'Chiffres clés',
      impactDesc: "Notre impact en quelques chiffres.",
      impactStats: [
        { value: '10,000+', label: 'Personnes sensibilisées' },
        { value: '50+', label: 'Projets réalisés' },
        { value: '15', label: 'Partenaires actifs' },
        { value: '100+', label: 'Bénévoles formés' },
      ],
    },
    actions: {
      heroTitle: 'Nos Actions',
      heroDesc: 'Découvrez nos programmes et initiatives dans la lutte contre le VIH/SIDA et l\'amélioration de la santé publique en Mauritanie.',
      participateTitle: 'Participez à nos Actions',
      participateDesc: 'Rejoignez-nous dans notre mission pour un monde sans SIDA. Votre engagement peut faire la différence.',
      becomeVolunteer: 'Devenir bénévole',
      supportUs: 'Nous soutenir',
      programsTitle: 'Nos Programmes',
      programsDesc: "Six axes d'intervention pour une approche globale de la lutte contre le VIH/SIDA",
      programs: [
        {
          title: 'Prévention et Sensibilisation',
          description: 'Campagnes de sensibilisation dans les communautés, écoles et lieux de travail pour prévenir la transmission du VIH.',
          activitiesTitle: 'Activités clés :',
          activities: [
            'Ateliers éducatifs dans les écoles',
            'Campagnes de communication de masse',
            'Sensibilisation communautaire',
            'Distribution de matériel préventif'
          ]
        },
        {
          title: 'Dépistage et Diagnostic',
          description: 'Services de dépistage gratuit et confidentiel du VIH avec accompagnement psychosocial.',
          activitiesTitle: 'Activités clés :',
          activities: [
            'Tests de dépistage rapide',
            'Conseil pré et post-test',
            'Orientation vers les soins',
            'Suivi médical personnalisé'
          ]
        },
        {
          title: 'Prise en Charge Médicale',
          description: 'Accompagnement médical et psychosocial des personnes vivant avec le VIH/SIDA.',
          activitiesTitle: 'Activités clés :',
          activities: [
            'Traitement antirétroviral',
            'Suivi médical régulier',
            'Soutien nutritionnel',
            'Accompagnement psychologique'
          ]
        },
        {
          title: 'Formation et Éducation',
          description: 'Formation des professionnels de santé et éducation des communautés sur le VIH/SIDA.',
          activitiesTitle: 'Activités clés :',
          activities: [
            'Formation du personnel médical',
            'Éducation thérapeutique',
            'Ateliers communautaires',
            'Matériel éducatif adapté'
          ]
        },
        {
          title: 'Soutien Communautaire',
          description: "Création de groupes de soutien et réseaux d'entraide pour les personnes affectées.",
          activitiesTitle: 'Activités clés :',
          activities: [
            'Groupes de parole',
            'Réseaux de pairs éducateurs',
            'Activités génératrices de revenus',
            'Soutien aux familles'
          ]
        },
        {
          title: 'Plaidoyer et Droits',
          description: 'Défense des droits des personnes vivant avec le VIH et lutte contre la stigmatisation.',
          activitiesTitle: 'Activités clés :',
          activities: [
            'Campagnes anti-stigmatisation',
            'Plaidoyer politique',
            'Défense des droits humains',
            'Sensibilisation juridique'
          ]
        }
      ],
      projectsTitle: 'Projets en Cours',
      projectsDesc: 'Nos initiatives actuelles et à venir pour maximiser notre impact',
      projects: [
        {
          title: 'Projet ESPOIR 2024-2026',
          description: 'Programme de prévention et prise en charge du VIH dans 5 régions de Mauritanie.',
          status: 'En cours',
          beneficiariesLabel: 'Bénéficiaires :',
          beneficiaries: '2,500 personnes',
          partnerLabel: 'Partenaire :',
          partner: 'Fonds Mondial'
        },
        {
          title: 'Initiative Jeunes & Santé',
          description: 'Sensibilisation des jeunes de 15-25 ans sur la santé sexuelle et reproductive.',
          status: 'En cours',
          beneficiariesLabel: 'Bénéficiaires :',
          beneficiaries: '1,200 jeunes',
          partnerLabel: 'Partenaire :',
          partner: 'UNICEF'
        },
        {
          title: 'Renforcement Système Santé',
          description: 'Formation du personnel de santé et amélioration des infrastructures.',
          status: 'Planifié',
          beneficiariesLabel: 'Bénéficiaires :',
          beneficiaries: '50 centres de santé',
          partnerLabel: 'Partenaire :',
          partner: 'OMS'
        }
      ],
      impactTitle: 'Notre Impact',
      impactDesc: 'Les résultats concrets de nos actions sur le terrain',
      impactStats: [
        { value: '15,000+', label: 'Personnes sensibilisées' },
        { value: '3,500+', label: 'Tests de dépistage' },
        { value: '800+', label: 'Patients suivis' },
        { value: '200+', label: 'Agents formés' },
      ],
    },
    volunteer: {
      heroTitle: 'Devenir Bénévole',
      heroDesc: 'Rejoignez notre équipe de bénévoles engagés dans la lutte contre le VIH/SIDA. Ensemble, nous pouvons faire la différence.',
      whyJoinTitle: 'Pourquoi devenir bénévole ?',
      whyJoinDesc: 'Contribuez à une cause essentielle, développez vos compétences et faites partie d\'une équipe solidaire et engagée.',
      benefits: [
        'Avoir un impact positif sur la société',
        'Rencontrer des personnes inspirantes',
        'Participer à des projets concrets',
        'Recevoir une attestation de bénévolat'
      ],
      teamTitle: 'Notre équipe de bénévoles',
      opportunitiesTitle: 'Opportunités de bénévolat',
      opportunitiesDesc: 'Découvrez les différentes façons de vous engager à nos côtés.',
      opportunities: [
        {
          title: 'Sensibilisation',
          description: 'Participez à des campagnes de prévention et d\'information.',
          time: 'Selon vos disponibilités',
          skillsLabel: 'Compétences requises :',
          skills: ['Communication', 'Empathie', 'Travail en équipe']
        },
        {
          title: 'Accompagnement',
          description: 'Soutenez les personnes vivant avec le VIH/SIDA.',
          time: '1 à 2 fois par semaine',
          skillsLabel: 'Compétences requises :',
          skills: ['Écoute', 'Bienveillance', 'Discrétion']
        },
        {
          title: 'Formation',
          description: 'Animez des ateliers de sensibilisation dans les écoles et centres communautaires.',
          time: '3-5 heures/semaine',
          skillsLabel: 'Compétences requises :',
          skills: ['Pédagogie', 'Présentation', 'Créativité']
        },
        {
          title: 'Soutien administratif',
          description: 'Aidez à la gestion administrative et logistique des projets.',
          time: '4-6 heures/semaine',
          skillsLabel: 'Compétences requises :',
          skills: ['Bureautique', 'Organisation', 'Rigueur']
        }
      ],
      applyTitle: 'Postuler comme bénévole',
      applyDesc: 'Remplissez ce formulaire pour rejoindre notre équipe',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        age: 'Âge',
        profession: 'Profession',
        availability: 'Disponibilité',
        availabilityOptions: {
          select: 'Sélectionnez votre disponibilité',
        },
        experience: 'Expérience pertinente',
        experiencePlaceholder: 'Décrivez votre expérience en santé, travail social ou bénévolat...',
        motivation: 'Motivation',
        motivationPlaceholder: 'Expliquez pourquoi vous souhaitez devenir bénévole chez STOP SIDA...',
        send: 'Envoyer ma candidature',
      },
      sendApplication: 'Envoyer ma candidature',
      testimonials: [
        {
          text: "Être bénévole chez STOP SIDA m'a permis de contribuer concrètement à la santé de ma communauté. C'est une expérience enrichissante.",
          author: 'Aminata S.',
          since: 'Bénévole depuis 2 ans'
        },
        {
          text: "La formation reçue et l'accompagnement de l'équipe m'ont donné confiance pour sensibiliser efficacement sur le VIH/SIDA.",
          author: 'Mohamed O.',
          since: 'Bénévole depuis 1 an'
        },
        {
          text: "Chaque action, même petite, compte dans cette lutte. Je suis fière de faire partie de cette mission.",
          author: 'Fatou B.',
          since: 'Bénévole depuis 3 ans'
        }
      ]
    },
    contact: {
      heroTitle: 'Contactez-nous',
      heroDesc: 'Nous sommes là pour répondre à vos questions et vous accompagner dans votre engagement contre le VIH/SIDA',
      sendMessage: 'Envoyer le message',
      formTitle: 'Envoyez-nous un message',
      formDesc: 'Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.',
      name: 'Nom complet *',
      namePlaceholder: 'Votre nom',
      email: 'Email *',
      emailPlaceholder: 'votre@email.com',
      phone: 'Téléphone',
      phonePlaceholder: '+222 XX XX XX XX',
      organization: 'Organisation',
      organizationPlaceholder: 'Votre organisation',
      type: 'Type de demande *',
      subject: 'Sujet *',
      subjectPlaceholder: 'Objet de votre message',
      message: 'Message *',
      messagePlaceholder: 'Votre message...',
      send: 'Envoyer',
      success: 'Merci pour votre message ! Nous vous recontacterons bientôt.',
      contactInfo: [
        {
          icon: 'MapPin',
          title: 'Adresse',
          details: [
            'Rue Abdallahi Ould Moustapha',
            'Tevragh Zeina, Nouakchott',
            'Mauritanie'
          ]
        },
        {
          icon: 'Phone',
          title: 'Téléphone',
          details: ['+222 46 42 01 42']
        },
        {
          icon: 'Mail',
          title: 'Email',
          details: ['stopsida_rim@yahoo.fr']
        },
        {
          icon: 'Clock',
          title: 'Horaires',
          details: [
            'Lundi - Vendredi : 8h00 - 17h00',
            'Samedi : 8h00 - 12h00',
            'Dimanche : Fermé'
          ]
        }
      ],
      contactTypes: [
        { value: 'general', label: 'Demande générale' },
        { value: 'volunteer', label: 'Bénévolat' },
        { value: 'partnership', label: 'Partenariat' },
        { value: 'media', label: 'Presse & Médias' },
        { value: 'support', label: 'Soutien/Don' },
        { value: 'other', label: 'Autre' }
      ],
      mapTitle: 'Carte interactive',
      mapLocation: 'Tevragh Zeina, Nouakchott',
      practicalInfoTitle: 'Informations Pratiques',
      presidentContact: 'Contact Présidente',
      presidentName: 'Fatimetou Maham',
      emergencyTitle: 'Urgences',
      emergencyText: 'Pour les urgences médicales, contactez directement le centre de santé le plus proche ou appelez le 15.',
      socialMediaTitle: 'Réseaux Sociaux',
      socialMediaText: 'Suivez-nous sur Facebook, Twitter et LinkedIn pour nos dernières actualités.',
      faqTitle: 'Questions Fréquentes',
      faqVolunteer: {
        question: 'Comment devenir bénévole ?',
        answer: 'Consultez notre page "Devenir bénévole" ou contactez-nous directement.'
      },
      faqTesting: {
        question: 'Où se faire dépister ?',
        answer: 'Nous proposons des tests gratuits dans nos centres. Contactez-nous pour plus d\'infos.'
      },
      faqSupport: {
        question: 'Comment nous soutenir ?',
        answer: 'Plusieurs options : bénévolat, dons, partenariats. Parlons-en !'
      },
      newsletterTitle: 'Restez connecté',
      newsletterDesc: 'Abonnez-vous à notre newsletter pour recevoir nos actualités et des informations sur la lutte contre le VIH/SIDA',
      newsletterPlaceholder: 'Votre adresse e-mail',
      subscribeButton: "S'abonner"
    },
    reports: {
      heroTitle: 'Rapports et documents',
      heroDesc: "Accédez à nos rapports d'activités, études, guides et documents de référence dans la lutte contre le VIH/SIDA",
      searchPlaceholder: 'Rechercher un document...',
      featuredTitle: 'Documents en vedette',
      allReportsTitle: 'Tous les rapports',
      noResult: 'Aucun rapport trouvé.',
      downloadButton: 'Télécharger',
      filterBy: 'Filtrer par :',
      yearLabel: 'Année',
      typeLabel: 'Type',
      pagesLabel: 'pages',
      sizeLabel: 'Taille',
      downloadsLabel: 'téléchargements',
      types: ['Tous', 'Rapport Annuel', 'Étude', 'Guide', 'Rapport de Projet', 'Rapport Financier', 'Évaluation'],
      years: ['Toutes', '2023', '2022', '2021', '2020'],
      dateLabel: 'Date',
      reportsList: [
        {
          id: 1,
          title: 'Rapport Annuel 2023 - STOP SIDA',
          description: "Bilan complet des activités, réalisations et impact de l'ONG pour l'année 2023.",
          type: 'Rapport Annuel',
          year: '2023',
          date: '15 Mars 2024',
          pages: 45,
          size: '2.3 MB',
          downloads: 1250,
          featured: true
        },
        {
          id: 2,
          title: 'Étude sur la Prévalence du VIH en Mauritanie',
          description: 'Analyse épidémiologique de la situation du VIH/SIDA dans les différentes régions du pays.',
          type: 'Étude',
          year: '2023',
          date: '10 Février 2024',
          pages: 78,
          size: '4.1 MB',
          downloads: 890,
          featured: true
        },
        {
          id: 3,
          title: 'Guide de Prévention pour les Jeunes',
          description: 'Manuel éducatif destiné aux jeunes de 15-25 ans sur la prévention du VIH/SIDA.',
          type: 'Guide',
          year: '2023',
          date: '5 Décembre 2023',
          pages: 32,
          size: '1.8 MB',
          downloads: 2100,
          featured: false
        },
        {
          id: 4,
          title: "Rapport d'Activités Projet ESPOIR",
          description: 'Bilan des activités du projet ESPOIR pour la période 2022-2023.',
          type: 'Rapport de Projet',
          year: '2023',
          date: '20 Novembre 2023',
          pages: 28,
          size: '1.5 MB',
          downloads: 456,
          featured: false
        },
        {
          id: 5,
          title: 'Rapport Financier 2022',
          description: 'Transparence financière : utilisation des fonds et gestion des ressources.',
          type: 'Rapport Financier',
          year: '2022',
          date: '30 Juin 2023',
          pages: 24,
          size: '1.2 MB',
          downloads: 678,
          featured: false
        },
        {
          id: 6,
          title: 'Évaluation Impact Programme Jeunesse',
          description: "Évaluation de l'impact du programme de sensibilisation dans les établissements scolaires.",
          type: 'Évaluation',
          year: '2022',
          date: '15 Mai 2023',
          pages: 56,
          size: '3.2 MB',
          downloads: 723,
          featured: false
        }
      ],
      statsTitle: 'Transparence et accessibilité',
      statsDesc: 'Nos documents sont librement accessibles dans un souci de transparence',
      statsReports: 'Rapports publiés',
      statsDownloads: 'Téléchargements',
      statsFree: 'Accès gratuit',
      statsLanguages: 'Langues disponibles'
    },
    news: {
      pageTitle: 'Actualités',
      pageDesc: 'Suivez nos dernières actions, événements et avancées dans la lutte contre le VIH/SIDA',
      searchPlaceholder: 'Rechercher un article...',
      categories: ['Toutes', 'Prévention', 'Recherche', 'Événements', 'Partenariats', 'Formation'],
      featuredTitle: 'À la une',
      readMore: 'Lire la suite',
      otherNews: 'Autres actualités',
      allNews: 'Toutes les actualités',
      articles: [
        {
          id: 1,
          title: 'Nouvelle campagne de sensibilisation dans les écoles de Nouakchott',
          excerpt: 'STOP SIDA lance une campagne éducative dans 20 établissements scolaires pour sensibiliser les jeunes aux risques du VIH/SIDA.',
          content: 'Cette initiative vise à toucher plus de 5000 élèves...',
          date: '15 Décembre 2024',
          author: 'Équipe Communication',
          category: 'Prévention',
          image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 2,
          title: 'Partenariat stratégique avec l\'Organisation Mondiale de la Santé',
          excerpt: 'Signature d\'un accord de coopération pour renforcer les actions de prévention et de prise en charge du VIH en Mauritanie.',
          content: 'Ce partenariat permettra de...',
          date: '10 Décembre 2024',
          author: 'Direction',
          category: 'Partenariats',
          image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 3,
          title: 'Formation de 100 agents de santé communautaire',
          excerpt: 'Programme intensif de formation sur la prise en charge du VIH/SIDA et l\'accompagnement psychosocial des patients.',
          content: 'Cette formation de trois jours...',
          date: '5 Décembre 2024',
          author: 'Dr. Ahmed Ould Salem',
          category: 'Formation',
          image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        },
        {
          id: 4,
          title: 'Journée mondiale de lutte contre le SIDA 2024',
          excerpt: 'STOP SIDA organise une série d\'événements pour marquer la Journée mondiale de lutte contre le SIDA.',
          content: 'Le 1er décembre, nous avons organisé...',
          date: '1 Décembre 2024',
          author: 'Équipe Événements',
          category: 'Événements',
          image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        },
        {
          id: 5,
          title: 'Nouvelle étude sur l\'efficacité des traitements préventifs',
          excerpt: 'Publication des résultats d\'une étude menée en collaboration avec l\'Institut National de Recherche en Santé.',
          content: 'Les résultats montrent que...',
          date: '25 Novembre 2024',
          author: 'Équipe Recherche',
          category: 'Recherche',
          image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        },
        {
          id: 6,
          title: 'Ouverture d\'un nouveau centre de dépistage à Rosso',
          excerpt: 'Extension de nos services avec l\'ouverture d\'un centre de dépistage gratuit et confidentiel dans la région du Trarza.',
          content: 'Ce nouveau centre permettra...',
          date: '20 Novembre 2024',
          author: 'Équipe Terrain',
          category: 'Prévention',
          image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        }
      ],
      newsletterTitle: 'Restez informé',
      newsletterDesc: 'Abonnez-vous à notre newsletter pour recevoir nos actualités et informations sur la lutte contre le VIH/SIDA',
      newsletterPlaceholder: 'Votre adresse email',
      subscribeButton: "S'abonner",
    },
    partners: {
      heroTitle: 'Nos Partenaires',
      heroDesc: 'Ensemble, nous construisons un réseau solide pour lutter efficacement contre le VIH/SIDA en Mauritanie',
      introTitle: 'Partenariats Stratégiques',
      introDesc1: 'Depuis notre création en 1993, STOP SIDA a développé un réseau de partenaires diversifiés qui nous permettent d\'amplifier notre impact et d\'atteindre nos objectifs de santé publique.',
      introDesc2: 'Ces collaborations stratégiques nous permettent de bénéficier d\'expertises complémentaires, de ressources techniques et financières, et d\'une portée élargie pour nos actions.',
      approachTitle: 'Notre approche',
      approachItems: [
        'Partenariats basés sur des valeurs communes',
        'Collaboration transparente et équitable',
        'Complémentarité des expertises',
        'Impact durable et mesurable'
      ],
      categoriesTitle: 'Nos Partenaires par Catégorie',
      categoriesDesc: 'Un écosystème diversifié d\'organisations engagées dans la lutte contre le VIH/SIDA',
      achievementsTitle: 'Réalisations Communes',
      achievementsDesc: 'Les résultats concrets de nos collaborations',
      partnerSince: 'Partenaire depuis :',
      categories: [
        {
          title: 'Organisations Internationales',
          partners: [
            {
              name: 'Organisation Mondiale de la Santé (OMS)',
              description: 'Partenariat stratégique pour le renforcement des systèmes de santé',
              since: '2010',
              type: 'Technique et Financier'
            },
            {
              name: 'UNICEF Mauritanie',
              description: 'Collaboration sur les programmes jeunesse et santé reproductive',
              since: '2015',
              type: 'Technique'
            },
            {
              name: 'Fonds Mondial',
              description: 'Financement des programmes de lutte contre le VIH/SIDA',
              since: '2008',
              type: 'Financier'
            }
          ]
        },
        {
          title: 'Institutions Gouvernementales',
          partners: [
            {
              name: 'Ministère de la Santé',
              description: 'Coordination des politiques nationales de santé publique',
              since: '1993',
              type: 'Institutionnel'
            },
            {
              name: 'Programme National de Lutte contre le SIDA',
              description: 'Mise en œuvre des stratégies nationales de prévention',
              since: '1995',
              type: 'Opérationnel'
            }
          ]
        },
        {
          title: 'ONG et Société Civile',
          partners: [
            {
              name: 'Médecins Sans Frontières',
              description: 'Collaboration sur la prise en charge médicale',
              since: '2012',
              type: 'Technique'
            },
            {
              name: 'Association Mauritanienne des Droits de l\'Homme',
              description: 'Plaidoyer pour les droits des personnes vivant avec le VIH',
              since: '2018',
              type: 'Plaidoyer'
            }
          ]
        },
        {
          title: 'Secteur Privé',
          partners: [
            {
              name: 'Banque Mauritanienne pour le Commerce International',
              description: 'Soutien financier aux programmes de sensibilisation',
              since: '2020',
              type: 'Financier'
            },
            {
              name: 'Mauritel',
              description: 'Campagnes de communication et sensibilisation',
              since: '2019',
              type: 'Communication'
            }
          ]
        }
      ],
      achievements: [
        {
          title: 'Projets Conjoints',
          value: '15+',
          description: 'Projets réalisés en partenariat'
        },
        {
          title: 'Financement Mobilisé',
          value: '2.5M€',
          description: 'Fonds levés grâce aux partenariats'
        },
        {
          title: 'Bénéficiaires',
          value: '50K+',
          description: 'Personnes touchées par nos actions communes'
        },
        {
          title: 'Années d\'Expérience',
          value: '30+',
          description: 'Années de collaboration fructueuse'
        }
      ],
      testimonialsTitle: 'Témoignages de Partenaires',
      testimonialsDesc: 'Ce que disent nos partenaires de notre collaboration',
      testimonials: [
        {
          text: 'STOP SIDA est un partenaire fiable et engagé. Leur expertise terrain et leur connaissance du contexte local sont précieuses pour nos programmes.',
          author: 'Dr. Marie Dubois',
          role: 'Représentante OMS Mauritanie'
        },
        {
          text: "La collaboration avec STOP SIDA nous a permis d'atteindre des populations vulnérables et d'avoir un impact réel sur la prévention du VIH.",
          author: 'Ahmed Ould Mohamed',
          role: 'Directeur PNLS'
        },
        {
          text: "STOP SIDA démontre un professionnalisme exemplaire et une transparence totale dans la gestion des projets. C'est un partenaire de choix.",
          author: 'Sarah Johnson',
          role: 'Coordinatrice Fonds Mondial'
        }
      ],
      becomePartner: 'Devenir Partenaire',
      becomePartnerDesc: 'Vous souhaitez rejoindre notre réseau de partenaires ? Contactez-nous pour explorer les opportunités de collaboration.',
      contactUs: 'Nous contacter',
      seeReports: 'Voir nos rapports',
      // ... autres clés ...
    },
    // ... autres sections globales
  },
  en: {
    footer: {
      about: 'NGO founded in 1993, working for universal access to quality care in the fight against HIV/AIDS and major health challenges.',
      navigation: 'Navigation',
      aboutUs: 'About Us',
      ourActions: 'Our Actions',
      becomeVolunteer: 'Become a Volunteer',
      news: 'News',
      reports: 'Reports',
      contact: 'Contact',
      follow: 'Follow us',
      newsletter: 'Newsletter',
      subscribe: 'Subscribe',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      rights: 'All rights reserved.'
    },
    home: {
      heroTitle: 'Together against',
      heroHighlight: 'HIV/AIDS',
      heroDesc: 'Since 1993, STOP SIDA has been working for universal access to quality care and the fight against HIV/AIDS in Mauritania.',
      discoverActions: 'Discover our actions',
      becomeVolunteer: 'Become a volunteer',
      stats: [
        { value: '30+', label: 'Years of commitment' },
        { value: '10K+', label: 'Lives impacted' },
        { value: '50+', label: 'Projects completed' },
        { value: '24/7', label: 'Support available' }
      ],
      missionTitle: 'Our Mission',
      missionDesc: 'Actively fighting HIV/AIDS through prevention, education, treatment, and advocacy, while strengthening health systems for vulnerable populations.',
      missionPrevention: 'Prevention',
      missionPreventionDesc: 'Community awareness and education',
      missionTreatment: 'Treatment',
      missionTreatmentDesc: 'Access to care and medical support',
      missionAdvocacy: 'Advocacy',
      missionAdvocacyDesc: 'Rights defense and political awareness',
      learnMore: 'Learn more',
      joinTitle: 'Join our fight',
      joinDesc: 'Together, we can make a difference in the fight against HIV/AIDS. Your commitment matters.',
      joinVolunteer: 'Become a volunteer',
      joinSupport: 'Support us',
      newsTitle: 'Recent News',
      newsDesc: 'Follow our latest actions and initiatives in the fight against HIV/AIDS',
      news: [
        {
          title: 'New awareness campaign in schools',
          date: 'December 15, 2024',
          excerpt: 'Launch of an educational campaign in 20 schools in Nouakchott.',
        },
        {
          title: 'Partnership with WHO for prevention',
          date: 'December 10, 2024',
          excerpt: 'Signing of a cooperation agreement to strengthen prevention actions.',
        },
        {
          title: 'Training of 100 community health workers',
          date: 'December 5, 2024',
          excerpt: 'Intensive training program on HIV/AIDS care.',
        },
      ],
      readMore: 'Read more',
      allNews: 'See all news',
      // ... autres clés pour les news, etc.
    },
    about: {
      heroTitle: 'About Us',
      heroDesc: 'STOP SIDA is a Mauritanian non-governmental organization dedicated to fighting HIV/AIDS for over 30 years.',
      historyTitle: 'Our History',
      historyP1: "Founded in 1993, STOP SIDA was born out of the desire to respond to the health emergency posed by the HIV/AIDS epidemic in Mauritania. For over three decades, we have evolved to become a reference organization in the fight against this pandemic.",
      historyP2: "Our holistic approach combines prevention, treatment, psychosocial support, and advocacy to ensure equitable access to care for all populations, especially the most vulnerable.",
      keyDatesTitle: 'Key Dates',
      keyDates: [
        { year: '1993', event: 'Creation of STOP SIDA NGO' },
        { year: '2000', event: 'First testing center' },
        { year: '2010', event: 'Expansion of prevention programs' },
        { year: '2020', event: 'Digitalization of services' },
      ],
      missionTitle: 'Our Mission',
      missionDesc: 'Actively fight HIV/AIDS through prevention, education, treatment, and advocacy, while strengthening health systems for vulnerable populations.',
      visionTitle: 'Our Vision',
      visionDesc: 'A world where everyone has access to quality care and lives without HIV/AIDS-related stigma.',
      valuesTitle: 'Our Values',
      valuesDesc: 'The principles that guide our daily action.',
      values: [
        { title: 'Compassion', desc: 'We act with empathy and kindness towards all affected people.' },
        { title: 'Solidarity', desc: 'We believe in the power of the collective to overcome health challenges.' },
        { title: 'Excellence', desc: 'We aim for quality in all our programs and interventions.' },
        { title: 'Commitment', desc: 'We are fully committed to our public health mission.' },
      ],
      teamTitle: 'Our Team',
      teamDesc: 'Committed professionals serving public health.',
      team: [
        { name: 'Fatimetou Maham', role: 'President', desc: 'Experienced leader in public health and human rights.' },
        { name: 'Dr. Ahmed Ould Salem', role: 'Medical Director', desc: 'Infectious disease specialist with 15 years of experience in HIV.' },
        { name: 'Aminata Ba', role: 'Programs Coordinator', desc: 'Expert in development project management and community health.' },
      ],
      impactTitle: 'Key Figures',
      impactDesc: 'Our impact in a few numbers.',
      impactStats: [
        { value: '10,000+', label: 'People reached' },
        { value: '50+', label: 'Projects completed' },
        { value: '15', label: 'Active partners' },
        { value: '100+', label: 'Volunteers trained' },
      ],
    },
    actions: {
      heroTitle: 'Our Actions',
      heroDesc: 'Discover our programs and initiatives in the fight against HIV/AIDS and the improvement of public health in Mauritania.',
      participateTitle: 'Participate in our Actions',
      participateDesc: 'Join us in our mission for a world without AIDS. Your commitment can make a difference.',
      becomeVolunteer: 'Become a volunteer',
      supportUs: 'Support us',
      programsTitle: 'Our Programs',
      programsDesc: 'Six axes for a comprehensive approach to fighting HIV/AIDS',
      programs: [
        {
          title: 'Prevention and Sensibilization',
          description: 'Community, school, and workplace campaigns to prevent HIV transmission.',
          activitiesTitle: 'Key Activities:',
          activities: [
            'Educational workshops in schools',
            'Mass communication campaigns',
            'Community sensitization',
            'Distribution of preventive materials'
          ]
        },
        {
          title: 'Screening and Diagnosis',
          description: 'Free and confidential HIV screening services with psychosocial support.',
          activitiesTitle: 'Key Activities:',
          activities: [
            'Quick screening tests',
            'Pre- and post-test counseling',
            'Referral to care',
            'Regular medical follow-up'
          ]
        },
        {
          title: 'Medical Care',
          description: 'Medical and psychosocial support for people living with HIV/AIDS.',
          activitiesTitle: 'Key Activities:',
          activities: [
            'Antiretroviral treatment',
            'Regular medical follow-up',
            'Nutritional support',
            'Psychosocial support'
          ]
        },
        {
          title: 'Training and Education',
          description: 'Training of health professionals and community education on HIV/AIDS.',
          activitiesTitle: 'Key Activities:',
          activities: [
            'Medical staff training',
            'Therapeutic education',
            'Community workshops',
            'Adapted educational materials'
          ]
        },
        {
          title: 'Community Support',
          description: 'Creation of support groups and peer networks for affected individuals.',
          activitiesTitle: 'Key Activities:',
          activities: [
            'Support groups',
            'Peer educators networks',
            'Income-generating activities',
            'Family support'
          ]
        },
        {
          title: 'Advocacy and Rights',
          description: 'Defense of the rights of people living with HIV and fight against stigma.',
          activitiesTitle: 'Key Activities:',
          activities: [
            'Anti-stigma campaigns',
            'Political advocacy',
            'Human rights defense',
            'Legal sensitization'
          ]
        }
      ],
      projectsTitle: 'Current Projects',
      projectsDesc: 'Our current initiatives and upcoming projects to maximize our impact',
      projects: [
        {
          title: 'ESP OIR Project 2024-2026',
          description: 'Prevention and care program for HIV in 5 regions of Mauritania.',
          status: 'Ongoing',
          beneficiariesLabel: 'Beneficiaries:',
          beneficiaries: '2,500 people',
          partnerLabel: 'Partner:',
          partner: 'World Bank'
        },
        {
          title: 'Youth & Health Initiative',
          description: 'Sensitization of young people aged 15-25 on sexual and reproductive health.',
          status: 'Ongoing',
          beneficiariesLabel: 'Beneficiaries:',
          beneficiaries: '1,200 young people',
          partnerLabel: 'Partner:',
          partner: 'UNICEF'
        },
        {
          title: 'Strengthening Health System',
          description: 'Training of health staff and infrastructure improvement.',
          status: 'Planned',
          beneficiariesLabel: 'Beneficiaries:',
          beneficiaries: '50 health centers',
          partnerLabel: 'Partner:',
          partner: 'WHO'
        }
      ],
      impactTitle: 'Our Impact',
      impactDesc: 'The concrete results of our actions on the ground',
      impactStats: [
        { value: '15,000+', label: 'People reached' },
        { value: '3,500+', label: 'Screening tests' },
        { value: '800+', label: 'Patients followed' },
        { value: '200+', label: 'Trained staff' }
      ]
    },
    volunteer: {
      heroTitle: 'Become a Volunteer',
      heroDesc: 'Join our committed team of volunteers in the fight against HIV/AIDS. Together, we can make a difference.',
      whyJoinTitle: 'Why join us?',
      whyJoinDesc: 'By becoming a volunteer at STOP SIDA, you directly help improve the lives of people affected by HIV/AIDS in Mauritania. Your commitment makes a difference in our public health mission.',
      benefits: [
        'Free training on HIV/AIDS and public health',
        'Recognized volunteer certificate',
        'Professional network in the humanitarian sector',
        'Rewarding and valuable experience',
        'Concrete contribution to public health',
        'Development of transferable skills'
      ],
      teamTitle: 'STOP SIDA Volunteers',
      opportunitiesTitle: 'Volunteer Opportunities',
      opportunitiesDesc: 'Discover the different ways to contribute to our mission',
      opportunities: [
        {
          title: 'Community Awareness',
          description: 'Take part in awareness campaigns in neighborhoods and villages.',
          time: '4-6 hours/week',
          skillsLabel: 'Required skills:',
          skills: ['Communication', 'Empathy', 'Local languages']
        },
        {
          title: 'Medical Support',
          description: 'Support patients in their care and treatment journey.',
          time: '6-8 hours/week',
          skillsLabel: 'Required skills:',
          skills: ['Medical training', 'Listening', 'Confidentiality']
        },
        {
          title: 'Education and Training',
          description: 'Lead educational workshops in schools and community centers.',
          time: '3-5 hours/week',
          skillsLabel: 'Required skills:',
          skills: ['Pedagogy', 'Presentation', 'Creativity']
        },
        {
          title: 'Administrative Support',
          description: 'Assist in the administrative and logistical management of projects.',
          time: '4-6 hours/week',
          skillsLabel: 'Required skills:',
          skills: ['Office skills', 'Organization', 'Rigor']
        }
      ],
      applyTitle: 'Apply as a Volunteer',
      applyDesc: 'Fill out this form to join our team',
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        phone: 'Phone',
        age: 'Age',
        profession: 'Profession',
        availability: 'Availability',
        availabilityOptions: {
          select: 'Select your availability',
        },
        experience: 'Relevant experience',
        experiencePlaceholder: 'Describe your experience in health, social work, or volunteering...',
        motivation: 'Motivation',
        motivationPlaceholder: 'Explain why you want to become a volunteer at STOP SIDA...',
        send: 'Send my application',
      },
      sendApplication: 'Send my application',
      testimonials: [
        {
          text: 'كوني متطوعة في STOP SIDA سمح لي بالمساهمة فعليًا في صحة مجتمعي. إنها تجربة غنية.',
          author: 'أميناتا س.',
          since: 'متطوعة منذ سنتين'
        },
        {
          text: 'التدريب الذي تلقيته ودعم الفريق منحاني الثقة للتوعية بفعالية حول فيروس نقص المناعة.',
          author: 'محمد و.',
          since: 'متطوع منذ سنة'
        },
        {
          text: 'كل عمل، حتى لو كان صغيرًا، له قيمة في هذه المعركة. أنا فخورة بأن أكون جزءًا من هذه المهمة.',
          author: 'فاتو ب.',
          since: 'متطوعة منذ 3 سنوات'
        }
      ]
    },
    contact: {
      heroTitle: 'Contact Us',
      heroDesc: 'We are here to answer your questions and support you in your commitment against HIV/AIDS',
      sendMessage: 'Send message',
      formTitle: 'Send us a message',
      formDesc: 'Fill out this form and we will get back to you as soon as possible.',
      name: 'Full name *',
      namePlaceholder: 'Your name',
      email: 'Email *',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+222 XX XX XX XX',
      organization: 'Organization',
      organizationPlaceholder: 'Your organization',
      type: 'Request type *',
      subject: 'Subject *',
      subjectPlaceholder: 'Subject of your message',
      message: 'Message *',
      messagePlaceholder: 'Your message...',
      send: 'Send',
      success: 'Thank you for your message! We will get back to you soon.',
      contactInfo: [
        {
          icon: 'MapPin',
          title: 'Address',
          details: [
            'Rue Abdallahi Ould Moustapha',
            'Tevragh Zeina, Nouakchott',
            'Mauritania'
          ]
        },
        {
          icon: 'Phone',
          title: 'Phone',
          details: ['+222 46 42 01 42']
        },
        {
          icon: 'Mail',
          title: 'Email',
          details: ['stopsida_rim@yahoo.fr']
        },
        {
          icon: 'Clock',
          title: 'Hours',
          details: [
            'Monday - Friday: 8:00 AM - 5:00 PM',
            'Saturday: 8:00 AM - 12:00 PM',
            'Sunday: Closed'
          ]
        }
      ],
      contactTypes: [
        { value: 'general', label: 'General request' },
        { value: 'volunteer', label: 'Volunteering' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'media', label: 'Press & Media' },
        { value: 'support', label: 'Support/Donation' },
        { value: 'other', label: 'Other' }
      ],
      mapTitle: 'Interactive Map',
      mapLocation: 'Tevragh Zeina, Nouakchott',
      practicalInfoTitle: 'Practical Information',
      presidentContact: 'President Contact',
      presidentName: 'Fatimetou Maham',
      emergencyTitle: 'Emergency',
      emergencyText: 'For medical emergencies, contact the nearest health center directly or call 15.',
      socialMediaTitle: 'Social Media',
      socialMediaText: 'Follow us on Facebook, Twitter and LinkedIn for our latest news.',
      faqTitle: 'Frequently Asked Questions',
      faqVolunteer: {
        question: 'How to become a volunteer?',
        answer: 'Check our "Become a Volunteer" page or contact us directly.'
      },
      faqTesting: {
        question: 'Where to get tested?',
        answer: 'We offer free tests in our centers. Contact us for more information.'
      },
      faqSupport: {
        question: 'How to support us?',
        answer: 'Several options: volunteering, donations, partnerships. Let\'s talk!'
      },
      newsletterTitle: 'Stay Connected',
      newsletterDesc: 'Subscribe to our newsletter to receive our news and information about the fight against HIV/AIDS',
      newsletterPlaceholder: 'Your email address',
      subscribeButton: 'Subscribe'
    },
    reports: {
      heroTitle: 'Reports and Documents',
      heroDesc: "Access our activity reports, studies, guides and reference documents in the fight against HIV/AIDS",
      searchPlaceholder: 'Search for a document...',
      featuredTitle: 'Featured documents',
      allReportsTitle: 'Other documents',
      noResult: 'No report found.',
      downloadButton: 'Download',
      filterBy: 'Filter by:',
      yearLabel: 'Date',
      typeLabel: 'Type',
      pagesLabel: 'pages',
      sizeLabel: 'Size',
      downloadsLabel: 'downloads',
      types: ['All', 'Annual Report', 'Study', 'Guide', 'Project Report', 'Financial Report', 'Evaluation'],
      years: ['All', '2023', '2022', '2021', '2020'],
      dateLabel: 'Date',
      reportsList: [
        {
          id: 1,
          title: '2023 Annual Report - STOP SIDA',
          description: "Comprehensive review of the NGO's activities, achievements and impact for 2023.",
          type: 'Annual Report',
          year: '2023',
          date: 'March 15, 2024',
          pages: 45,
          size: '2.3 MB',
          downloads: 1250,
          featured: true
        },
        {
          id: 2,
          title: 'Study on HIV Prevalence in Mauritania',
          description: 'Epidemiological analysis of the HIV/AIDS situation in the different regions of the country.',
          type: 'Study',
          year: '2023',
          date: 'February 10, 2024',
          pages: 78,
          size: '4.1 MB',
          downloads: 890,
          featured: true
        },
        {
          id: 3,
          title: 'Prevention Guide for Youth',
          description: 'Educational manual for young people aged 15-25 on HIV/AIDS prevention.',
          type: 'Guide',
          year: '2023',
          date: 'December 5, 2023',
          pages: 32,
          size: '1.8 MB',
          downloads: 2100,
          featured: false
        },
        {
          id: 4,
          title: 'ESPOIR Project Activity Report',
          description: 'Summary of ESPOIR project activities for the 2022-2023 period.',
          type: 'Project Report',
          year: '2023',
          date: 'November 20, 2023',
          pages: 28,
          size: '1.5 MB',
          downloads: 456,
          featured: false
        },
        {
          id: 5,
          title: '2022 Financial Report',
          description: 'Financial transparency: use of funds and resource management.',
          type: 'Financial Report',
          year: '2022',
          date: 'June 30, 2023',
          pages: 24,
          size: '1.2 MB',
          downloads: 678,
          featured: false
        },
        {
          id: 6,
          title: 'Youth Program Impact Evaluation',
          description: 'Evaluation of the impact of the awareness program in schools.',
          type: 'Evaluation',
          year: '2022',
          date: 'May 15, 2023',
          pages: 56,
          size: '3.2 MB',
          downloads: 723,
          featured: false
        }
      ],
      statsTitle: 'Transparency and Accessibility',
      statsDesc: 'Our documents are freely accessible in the spirit of transparency',
      statsReports: 'Published reports',
      statsDownloads: 'Downloads',
      statsFree: 'Free access',
      statsLanguages: 'Available languages'
    },
    news: {
      pageTitle: 'News',
      pageDesc: 'Follow our latest actions, events and progress in the fight against HIV/AIDS',
      searchPlaceholder: 'Search for an article...',
      categories: ['All', 'Prevention', 'Research', 'Events', 'Partnerships', 'Training'],
      featuredTitle: 'Featured',
      readMore: 'Read more',
      otherNews: 'Other news',
      allNews: 'All news',
      articles: [
        {
          id: 1,
          title: 'New awareness campaign in Nouakchott schools',
          excerpt: 'STOP SIDA launches an educational campaign in 20 schools to raise awareness among young people about HIV/AIDS risks.',
          content: 'This initiative aims to reach over 5,000 students...',
          date: 'December 15, 2024',
          author: 'Communications Team',
          category: 'Prévention',
          image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 2,
          title: 'Strategic partnership with the World Health Organization',
          excerpt: 'Signing of a cooperation agreement to strengthen prevention and care actions for HIV in Mauritania.',
          content: 'This partnership will allow...',
          date: 'December 10, 2024',
          author: 'Management',
          category: 'Partenariats',
          image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 3,
          title: 'Training of 100 community health workers',
          excerpt: 'Intensive training program on HIV/AIDS care and psychosocial support for patients.',
          content: 'This three-day training...',
          date: 'December 5, 2024',
          author: 'Dr. Ahmed Ould Salem',
          category: 'Training',
          image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        },
        {
          id: 4,
          title: 'World AIDS Day 2024',
          excerpt: 'STOP SIDA organizes a series of events to mark World AIDS Day.',
          content: 'On December 1st, we organized...',
          date: 'December 1, 2024',
          author: 'Events Team',
          category: 'Événements',
          image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        },
        {
          id: 5,
          title: 'New study on the effectiveness of preventive treatments',
          excerpt: 'Publication of the results of a study conducted in collaboration with the National Institute of Health Research.',
          content: 'The results show that...',
          date: 'November 25, 2024',
          author: 'Research Team',
          category: 'Recherche',
          image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        },
        {
          id: 6,
          title: 'Opening of a new testing center in Rosso',
          excerpt: 'Expansion of our services with the opening of a free and confidential testing center in the Trarza region.',
          content: 'This new center will allow...',
          date: 'November 20, 2024',
          author: 'Field Team',
          category: 'Prévention',
          image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        }
      ],
      newsletterTitle: 'Stay informed',
      newsletterDesc: 'Subscribe to our newsletter to receive our latest news',
      newsletterPlaceholder: 'Your email address',
      subscribeButton: 'Subscribe',
    },
    partners: {
      heroTitle: 'Our Partners',
      heroDesc: 'Together, we build a strong network to effectively fight HIV/AIDS in Mauritania',
      introTitle: 'Strategic Partnerships',
      introDesc1: 'Since our creation in 1993, STOP SIDA has developed a diverse network of partners that allow us to amplify our impact and achieve our public health objectives.',
      introDesc2: 'These strategic collaborations allow us to benefit from complementary expertise, technical and financial resources, and an expanded reach for our actions.',
      approachTitle: 'Our approach',
      approachItems: [
        'Partnerships based on shared values',
        'Transparent and equitable collaboration',
        'Complementarity of expertise',
        'Sustainable and measurable impact'
      ],
      categoriesTitle: 'Our Partners by Category',
      categoriesDesc: 'A diverse ecosystem of organizations committed to fighting HIV/AIDS',
      achievementsTitle: 'Joint Achievements',
      achievementsDesc: 'The concrete results of our collaborations',
      partnerSince: 'Partner since:',
      categories: [
        {
          title: 'International Organizations',
          partners: [
            {
              name: 'World Health Organization (WHO)',
              description: 'Strategic partnership for strengthening health systems',
              since: '2010',
              type: 'Technical and Financial'
            },
            {
              name: 'UNICEF Mauritania',
              description: 'Collaboration on youth and reproductive health programs',
              since: '2015',
              type: 'Technical'
            },
            {
              name: 'Global Fund',
              description: 'Funding for HIV/AIDS programs',
              since: '2008',
              type: 'Financial'
            }
          ]
        },
        {
          title: 'Government Institutions',
          partners: [
            {
              name: 'Ministry of Health',
              description: 'Coordination of national public health policies',
              since: '1993',
              type: 'Institutional'
            },
            {
              name: 'National AIDS Control Program',
              description: 'Implementation of national prevention strategies',
              since: '1995',
              type: 'Operational'
            }
          ]
        },
        {
          title: 'NGOs and Civil Society',
          partners: [
            {
              name: 'Doctors Without Borders',
              description: 'Collaboration on medical care',
              since: '2012',
              type: 'Technical'
            },
            {
              name: 'Mauritanian Human Rights Association',
              description: 'Advocacy for the rights of people living with HIV',
              since: '2018',
              type: 'Advocacy'
            }
          ]
        },
        {
          title: 'Private Sector',
          partners: [
            {
              name: 'Mauritanian Bank for International Trade',
              description: 'Financial support for awareness programs',
              since: '2020',
              type: 'Financial'
            },
            {
              name: 'Mauritel',
              description: 'Communication and awareness campaigns',
              since: '2019',
              type: 'Communication'
            }
          ]
        }
      ],
      achievements: [
        {
          title: 'Joint Projects',
          value: '15+',
          description: 'Projects completed in partnership'
        },
        {
          title: 'Mobilized Funding',
          value: '2.5M€',
          description: 'Funds raised through partnerships'
        },
        {
          title: 'Beneficiaries',
          value: '50K+',
          description: 'People reached by our joint actions'
        },
        {
          title: 'Years of Experience',
          value: '30+',
          description: 'Years of fruitful collaboration'
        }
      ],
      testimonialsTitle: 'Partner Testimonials',
      testimonialsDesc: 'What our partners say about our collaboration',
      testimonials: [
        {
          text: 'STOP SIDA is a reliable and committed partner. Their field expertise and knowledge of the local context are valuable for our programs.',
          author: 'Dr. Marie Dubois',
          role: 'WHO Representative Mauritania'
        },
        {
          text: 'Collaboration with STOP SIDA has enabled us to reach vulnerable populations and have a real impact on HIV prevention.',
          author: 'Ahmed Ould Mohamed',
          role: 'Director, PNLS'
        },
        {
          text: 'STOP SIDA demonstrates exemplary professionalism and total transparency in project management. They are a partner of choice.',
          author: 'Sarah Johnson',
          role: 'Global Fund Coordinator'
        }
      ],
      becomePartner: 'Become a Partner',
      becomePartnerDesc: 'Would you like to join our network of partners? Contact us to explore collaboration opportunities.',
      contactUs: 'Contact us',
      seeReports: 'See our reports'
    },
    // ... autres sections globales
  },
  ar: {
    footer: {
      about: 'منظمة غير حكومية تأسست عام 1993، تعمل من أجل الوصول الشامل إلى رعاية صحية عالية الجودة في مكافحة فيروس نقص المناعة البشرية/الإيدز والتحديات الصحية الكبرى.',
      navigation: 'التنقل',
      aboutUs: 'من نحن؟',
      ourActions: 'أنشطتنا',
      becomeVolunteer: 'كن متطوعًا',
      news: 'الأخبار',
      reports: 'التقارير',
      contact: 'اتصل',
      follow: 'تابعنا',
      newsletter: 'النشرة الإخبارية',
      subscribe: 'اشترك',
      legal: 'إشعار قانوني',
      privacy: 'سياسة الخصوصية',
      rights: 'جميع الحقوق محفوظة.'
    },
    home: {
      heroTitle: 'معًا ضد',
      heroHighlight: 'الإيدز/فيروس نقص المناعة',
      heroDesc: 'منذ عام 1993، تعمل STOP SIDA من أجل الوصول الشامل إلى رعاية صحية عالية الجودة ومكافحة فيروس نقص المناعة البشرية/الإيدز في موريتانيا.',
      discoverActions: 'اكتشف أنشطتنا',
      becomeVolunteer: 'كن متطوعًا',
      stats: [
        { value: '30+', label: 'سنة التزام' },
        { value: '10K+', label: 'حياة تم التأثير عليها' },
        { value: '50+', label: 'مشاريع منجزة' },
        { value: '24/7', label: 'دعم متوفر' }
      ],
      missionTitle: 'مهمتنا',
      missionDesc: 'مكافحة فيروس نقص المناعة البشرية/الإيدز من خلال الوقاية والتعليم والعلاج والدعوة، مع تعزيز أنظمة الصحة للفئات الضعيفة.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'عالم يتمتع فيه الجميع بإمكانية الوصول إلى رعاية عالية الجودة ويعيشون دون وصمة مرتبطة بفيروس نقص المناعة البشرية/الإيدز.',
      valuesTitle: 'قيمنا',
      valuesDesc: 'المبادئ التي توجه عملنا اليومي.',
      values: [
        { title: 'التعاطف', desc: 'نتصرف بتعاطف ولطف مع جميع المتأثرين.' },
        { title: 'التضامن', desc: 'نؤمن بقوة الجماعة لتجاوز التحديات الصحية.' },
        { title: 'التميز', desc: 'نهدف إلى الجودة في جميع برامجنا وتدخلاتنا.' },
        { title: 'الالتزام', desc: 'نلتزم تمامًا بمهمتنا في الصحة العامة.' },
      ],
      teamTitle: 'فريقنا',
      teamDesc: 'مهنيون ملتزمون في خدمة الصحة العامة.',
      team: [
        { name: 'فاطمة تو ماهام', role: 'الرئيسة', desc: 'قائدة ذات خبرة في مجال الصحة العامة وحقوق الإنسان.' },
        { name: 'د. أحمد ولد سالم', role: 'المدير الطبي', desc: 'أخصائي أمراض معدية مع خبرة 15 عامًا في مكافحة فيروس نقص المناعة.' },
        { name: 'أميناتا با', role: 'منسقة البرامج', desc: 'خبيرة في إدارة مشاريع التنمية وصحة المجتمع.' },
      ],
      impactTitle: 'الأرقام الرئيسية',
      impactDesc: 'تأثيرنا في بعض الأرقام.',
      impactStats: [
        { value: '10,000+', label: 'أشخاص تم توعيتهم' },
        { value: '50+', label: 'مشاريع منجزة' },
        { value: '15', label: 'شركاء نشطون' },
        { value: '100+', label: 'متطوعون مدربون' },
      ],
      newsTitle: 'أحدث الأخبار',
      newsDesc: 'تابع آخر أنشطتنا وفعالياتنا وتقدمنا في مكافحة فيروس نقص المناعة البشرية/الإيدز',
      news: [
        {
          title: 'حملة توعية جديدة في المدارس',
          date: '15 ديسمبر 2024',
          excerpt: 'تطلق STOP SIDA حملة تعليمية في 20 مدرسة لتوعية الشباب بمخاطر فيروس نقص المناعة البشرية/الإيدز.',
        },
        {
          title: 'شراكة استراتيجية مع منظمة الصحة العالمية',
          date: '10 ديسمبر 2024',
          excerpt: 'توقيع اتفاقية تعاون لتعزيز إجراءات الوقاية والرعاية من فيروس نقص المناعة في موريتانيا.',
        },
        {
          title: 'تدريب 100 عامل صحة مجتمعية',
          date: '5 ديسمبر 2024',
          excerpt: 'برنامج تدريبي مكثف حول رعاية فيروس نقص المناعة والدعم النفسي الاجتماعي للمرضى.',
        },
      ],
      // Ajout de la clé 'articles' pour l'affichage des actualités en arabe
      articles: [
        {
          id: 1,
          title: 'حملة توعية جديدة في مدارس نواكشوط',
          excerpt: 'تطلق STOP SIDA حملة تعليمية في 20 مدرسة لرفع وعي الشباب بمخاطر فيروس نقص المناعة البشرية/الإيدز.',
          content: 'تهدف هذه المبادرة إلى الوصول إلى أكثر من 5000 طالب من خلال أنشطة تفاعلية وورش عمل تعليمية.',
          date: '15 ديسمبر 2024',
          author: 'فريق التواصل',
          category: 'الوقاية',
          image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 2,
          title: 'شراكة استراتيجية مع منظمة الصحة العالمية',
          excerpt: 'توقيع اتفاقية تعاون لتعزيز إجراءات الوقاية والرعاية من فيروس نقص المناعة في موريتانيا.',
          content: 'ستسمح هذه الشراكة بتوسيع نطاق الفحوصات المجانية وزيادة التوعية المجتمعية.',
          date: '10 ديسمبر 2024',
          author: 'فريق STOP SIDA',
          category: 'شراكات',
          image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 3,
          title: 'تدريب 100 عامل صحة مجتمعية',
          excerpt: 'برنامج تدريبي مكثف حول رعاية فيروس نقص المناعة والدعم النفسي الاجتماعي للمرضى.',
          content: 'تم تدريب المشاركين على أحدث بروتوكولات الرعاية والدعم النفسي.',
          date: '5 ديسمبر 2024',
          author: 'إدارة البرامج',
          category: 'تدريب',
          image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        }
      ],
      readMore: 'اقرأ المزيد',
      allNews: 'عرض كل الأخبار',
      // ... autres clés ...
      newsletterTitle: 'ابق على تواصل',
      newsletterDesc: 'اشترك في النشرة الإخبارية لتصلك أخبارنا ومعلوماتنا حول مكافحة فيروس نقص المناعة البشرية/الإيدز',
      newsletterPlaceholder: 'بريدك الإلكتروني',
      subscribeButton: 'اشترك',
      // ... autres clés ...
      missionPrevention: 'الوقاية',
      missionPreventionDesc: 'التوعية والتعليم المجتمعي',
      missionTreatment: 'العلاج',
      missionTreatmentDesc: 'الوصول إلى الرعاية والمرافقة الطبية',
      missionAdvocacy: 'المناصرة',
      missionAdvocacyDesc: 'الدفاع عن الحقوق والتوعية السياسية',
      learnMore: 'اعرف المزيد',
      joinTitle: 'انضموا إلى نضالنا',
      joinDesc: 'معًا، يمكننا إحداث فرق في مكافحة فيروس نقص المناعة البشرية/الإيدز. التزامكم مهم.',
      joinVolunteer: 'كن متطوعًا',
      joinSupport: 'ادعمنا',
    },
    about: {
      heroTitle: 'من نحن؟',
      heroDesc: 'STOP SIDA هي منظمة غير حكومية موريتانية مكرسة لمكافحة فيروس نقص المناعة البشرية/الإيدز لأكثر من 30 عامًا.',
      historyTitle: 'تاريخنا',
      historyP1: "تأسست STOP SIDA عام 1993 استجابةً للطوارئ الصحية التي شكلها وباء فيروس نقص المناعة البشرية/الإيدز في موريتانيا. على مدى أكثر من ثلاثة عقود، تطورنا لنصبح منظمة مرجعية في مكافحة هذا الوباء.",
      historyP2: "يجمع نهجنا الشمولي بين الوقاية والعلاج والدعم النفسي الاجتماعي والدعوة لضمان الوصول العادل إلى الرعاية لجميع الفئات، وخاصة الأكثر ضعفًا.",
      keyDatesTitle: 'تواريخ رئيسية',
      keyDates: [
        { year: '1993', event: 'تأسيس منظمة STOP SIDA' },
        { year: '2000', event: 'أول مركز فحص' },
        { year: '2010', event: 'توسيع برامج الوقاية' },
        { year: '2020', event: 'رقمنة الخدمات' },
      ],
      missionTitle: 'مهمتنا',
      missionDesc: 'مكافحة فيروس نقص المناعة البشرية/الإيدز من خلال الوقاية والتعليم والعلاج والدعوة، مع تعزيز أنظمة الصحة للفئات الضعيفة.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'عالم يتمتع فيه الجميع بإمكانية الوصول إلى رعاية عالية الجودة ويعيشون دون وصمة مرتبطة بفيروس نقص المناعة البشرية/الإيدز.',
      valuesTitle: 'قيمنا',
      valuesDesc: 'المبادئ التي توجه عملنا اليومي.',
      values: [
        { title: 'التعاطف', desc: 'نتصرف بتعاطف ولطف مع جميع المتأثرين.' },
        { title: 'التضامن', desc: 'نؤمن بقوة الجماعة لتجاوز التحديات الصحية.' },
        { title: 'التميز', desc: 'نهدف إلى الجودة في جميع برامجنا وتدخلاتنا.' },
        { title: 'الالتزام', desc: 'نلتزم تمامًا بمهمتنا في الصحة العامة.' },
      ],
      teamTitle: 'فريقنا',
      teamDesc: 'مهنيون ملتزمون في خدمة الصحة العامة.',
      team: [
        { name: 'فاطمة تو ماهام', role: 'الرئيسة', desc: 'قائدة ذات خبرة في مجال الصحة العامة وحقوق الإنسان.' },
        { name: 'د. أحمد ولد سالم', role: 'المدير الطبي', desc: 'أخصائي أمراض معدية مع خبرة 15 عامًا في مكافحة فيروس نقص المناعة.' },
        { name: 'أميناتا با', role: 'منسقة البرامج', desc: 'خبيرة في إدارة مشاريع التنمية وصحة المجتمع.' },
      ],
      impactTitle: 'الأرقام الرئيسية',
      impactDesc: 'تأثيرنا في بعض الأرقام.',
      impactStats: [
        { value: '10,000+', label: 'أشخاص تم توعيتهم' },
        { value: '50+', label: 'مشاريع منجزة' },
        { value: '15', label: 'شركاء نشطون' },
        { value: '100+', label: 'متطوعون مدربون' },
      ],
    },
    actions: {
      heroTitle: 'أنشطتنا',
      heroDesc: 'اكتشف برامجنا ومبادراتنا في مكافحة فيروس نقص المناعة البشرية/الإيدز وتحسين الصحة العامة في موريتانيا.',
      participateTitle: 'شارك في أنشطتنا',
      participateDesc: 'انضم إلينا في مهمتنا من أجل عالم بلا إيدز. التزامك يمكن أن يحدث فرقًا.',
      becomeVolunteer: 'كن متطوعًا',
      supportUs: 'ادعمنا',
      programsTitle: 'برامجنا',
      programsDesc: 'ستة محاور للتدخل من أجل مقاربة شاملة لمكافحة فيروس نقص المناعة البشرية/الإيدز',
      programs: [
        { title: 'الوقاية والتوعية', description: 'حملات توعية في المجتمعات والمدارس وأماكن العمل للوقاية من انتقال فيروس نقص المناعة.', activitiesTitle: 'أنشطة رئيسية:', activities: ['ورشات تعليمية في المدارس', 'حملات تواصل جماهيري', 'توعية مجتمعية', 'توزيع مواد وقائية'] },
        { title: 'الفحص والتشخيص', description: 'خدمات فحص مجانية وسرية لفيروس نقص المناعة مع دعم نفسي اجتماعي.', activitiesTitle: 'أنشطة رئيسية:', activities: ['اختبارات فحص سريعة', 'استشارة قبل وبعد الفحص', 'توجيه نحو الرعاية', 'متابعة طبية شخصية'] },
        { title: 'الرعاية الطبية', description: 'مرافقة طبية ونفسية اجتماعية للأشخاص المصابين بفيروس نقص المناعة.', activitiesTitle: 'أنشطة رئيسية:', activities: ['علاج مضاد للفيروسات', 'متابعة طبية منتظمة', 'دعم غذائي', 'مرافقة نفسية'] },
        { title: 'التدريب والتعليم', description: 'تدريب المهنيين الصحيين وتثقيف المجتمعات حول فيروس نقص المناعة.', activitiesTitle: 'أنشطة رئيسية:', activities: ['تدريب الطاقم الطبي', 'تثقيف علاجي', 'ورشات مجتمعية', 'مواد تعليمية مناسبة'] },
        { title: 'الدعم المجتمعي', description: 'إنشاء مجموعات دعم وشبكات مساندة للأشخاص المتأثرين.', activitiesTitle: 'أنشطة رئيسية:', activities: ['مجموعات نقاش', 'شبكات أقران تثقيفيين', 'أنشطة مدرة للدخل', 'دعم للأسر'] },
        { title: 'الدعوة والحقوق', description: 'الدفاع عن حقوق الأشخاص المصابين بفيروس نقص المناعة ومكافحة الوصم.', activitiesTitle: 'أنشطة رئيسية:', activities: ['حملات ضد الوصم', 'دعم سياسي', 'الدفاع عن حقوق الإنسان', 'توعية قانونية'] }
      ],
      projectsTitle: 'مشاريع جارية',
      projectsDesc: 'مبادراتنا الحالية والقادمة لتعظيم تأثيرنا',
      projects: [
        { title: 'مشروع الأمل 2024-2026', description: 'برنامج للوقاية والرعاية من فيروس نقص المناعة في 5 مناطق بموريتانيا.', status: 'قيد التنفيذ', beneficiariesLabel: 'المستفيدون:', beneficiaries: '2,500 شخص', partnerLabel: 'الشريك:', partner: 'الصندوق العالمي' },
        { title: 'مبادرة الشباب والصحة', description: 'توعية الشباب من 15-25 سنة حول الصحة الجنسية والإنجابية.', status: 'قيد التنفيذ', beneficiariesLabel: 'المستفيدون:', beneficiaries: '1,200 شاب', partnerLabel: 'الشريك:', partner: 'اليونيسف' },
        { title: 'تعزيز نظام الصحة', description: 'تدريب الطاقم الصحي وتحسين البنية التحتية.', status: 'مخطط', beneficiariesLabel: 'المستفيدون:', beneficiaries: '50 مركز صحي', partnerLabel: 'الشريك:', partner: 'منظمة الصحة العالمية' }
      ],
      impactTitle: 'أثرنا',
      impactDesc: 'النتائج الملموسة لأنشطتنا على الأرض',
      impactStats: [
        { value: '15,000+', label: 'أشخاص تم توعيتهم' },
        { value: '3,500+', label: 'اختبارات فحص' },
        { value: '800+', label: 'مرضى متابعون' },
        { value: '200+', label: 'عناصر مدربة' }
      ]
    },
    reports: {
      heroTitle: 'التقارير والوثائق',
      heroDesc: 'الوصول إلى تقارير أنشطتنا والدراسات والوثائق المرجعية في مكافحة فيروس نقص المناعة البشرية/الإيدز',
      searchPlaceholder: 'ابحث عن وثيقة...',
      featuredTitle: 'وثائق مميزة',
      allReportsTitle: 'وثائق أخرى',
      noResult: 'لم يتم العثور على أي تقرير.',
      downloadButton: 'تحميل',
      filterBy: 'تصفية حسب:',
      yearLabel: 'السنة',
      typeLabel: 'النوع',
      pagesLabel: 'صفحات',
      sizeLabel: 'الحجم',
      downloadsLabel: 'التنزيلات',
      types: ['الكل', 'تقرير سنوي', 'دراسة', 'دليل', 'تقرير مشروع', 'تقرير مالي', 'تقييم'],
      years: ['الكل', '2023', '2022', '2021', '2020'],
      dateLabel: 'التاريخ',
      reportsList: [
        {
          id: 1,
          title: 'تقرير سنوي 2023 - STOP SIDA',
          description: 'مراجعة شاملة لأنشطة وإنجازات وتأثير الجمعية لعام 2023.',
          type: 'تقرير سنوي',
          year: '2023',
          date: '15 مارس 2024',
          pages: 45,
          size: '2.3 MB',
          downloads: 1250,
          featured: true
        },
        {
          id: 2,
          title: 'دراسة حول انتشار فيروس نقص المناعة في موريتانيا',
          description: 'تحليل وبائي لوضع فيروس نقص المناعة البشرية/الإيدز في مختلف مناطق البلاد.',
          type: 'دراسة',
          year: '2023',
          date: '10 فبراير 2024',
          pages: 78,
          size: '4.1 MB',
          downloads: 890,
          featured: true
        },
        {
          id: 3,
          title: 'دليل الوقاية للشباب',
          description: 'دليل تعليمي للشباب من 15 إلى 25 سنة حول الوقاية من فيروس نقص المناعة.',
          type: 'دليل',
          year: '2023',
          date: '5 ديسمبر 2023',
          pages: 32,
          size: '1.8 MB',
          downloads: 2100,
          featured: false
        },
        {
          id: 4,
          title: 'تقرير أنشطة مشروع ESPOIR',
          description: 'ملخص أنشطة مشروع ESPOIR للفترة 2022-2023.',
          type: 'تقرير مشروع',
          year: '2023',
          date: '20 نوفمبر 2023',
          pages: 28,
          size: '1.5 MB',
          downloads: 456,
          featured: false
        },
        {
          id: 5,
          title: 'تقرير مالي 2022',
          description: 'الشفافية المالية: استخدام الأموال وإدارة الموارد.',
          type: 'تقرير مالي',
          year: '2022',
          date: '30 يونيو 2023',
          pages: 24,
          size: '1.2 MB',
          downloads: 678,
          featured: false
        },
        {
          id: 6,
          title: 'تقييم أثر برنامج الشباب',
          description: 'تقييم أثر برنامج التوعية في المدارس.',
          type: 'تقييم',
          year: '2022',
          date: '15 مايو 2023',
          pages: 56,
          size: '3.2 MB',
          downloads: 723,
          featured: false
        }
      ],
      statsTitle: 'الشفافية وإمكانية الوصول',
      statsDesc: 'وثائقنا متاحة بحرية في إطار الشفافية',
      statsReports: 'تقارير منشورة',
      statsDownloads: 'التنزيلات',
      statsFree: 'وصول مجاني',
      statsLanguages: 'اللغات المتاحة'
    },
    contact: {
      heroTitle: 'اتصل بنا',
      heroDesc: 'نحن هنا للإجابة على أسئلتك ودعمك في التزامك ضد فيروس نقص المناعة البشرية/الإيدز',
      sendMessage: 'أرسل الرسالة',
      formTitle: 'اترك لنا رسالة',
      formDesc: 'املأ هذا النموذج وسنعود إليك في أقرب وقت ممكن.',
      name: 'الاسم الكامل *',
      namePlaceholder: 'اسمك',
      email: 'البريد الإلكتروني *',
      emailPlaceholder: 'بريدك@الإلكتروني.com',
      phone: 'الهاتف',
      phonePlaceholder: '+222 XX XX XX XX',
      organization: 'المنظمة',
      organizationPlaceholder: 'منظمتك',
      type: 'نوع الطلب *',
      subject: 'الموضوع *',
      subjectPlaceholder: 'موضوع رسالتك',
      message: 'الرسالة *',
      messagePlaceholder: 'رسالتك...',
      send: 'إرسال',
      success: 'شكرًا لرسالتك! سنعود إليك قريبًا.',
      address: 'العنوان',
      contactInfo: [
        {
          icon: 'MapPin',
          title: 'العنوان',
          details: [
            'شارع عبد الله ولد مصطفى',
            'تفرغ زينة، نواكشوط',
            'موريتانيا'
          ]
        },
        {
          icon: 'Phone',
          title: 'الهاتف',
          details: ['+222 46 42 01 42']
        },
        {
          icon: 'Mail',
          title: 'البريد الإلكتروني',
          details: ['stopsida_rim@yahoo.fr']
        },
        {
          icon: 'Clock',
          title: 'ساعات العمل',
          details: [
            'الاثنين - الجمعة: 8:00 - 17:00',
            'السبت: 8:00 - 12:00',
            'الأحد: مغلق'
          ]
        }
      ],
      contactTypes: [
        { value: 'general', label: 'طلب عام' },
        { value: 'volunteer', label: 'تطوع' },
        { value: 'partnership', label: 'شراكة' },
        { value: 'media', label: 'إعلام وصحافة' },
        { value: 'support', label: 'دعم/تبرع' },
        { value: 'other', label: 'أخرى' }
      ],
      mapTitle: 'خريطة تفاعلية',
      mapLocation: 'تفرغ زينة، نواكشوط',
      practicalInfoTitle: 'معلومات عملية',
      presidentContact: 'اتصال الرئيسة',
      presidentName: 'فاطمة محم',
      emergencyTitle: 'الطوارئ',
      emergencyText: 'للطوارئ الطبية، اتصل مباشرة بأقرب مركز صحي أو اتصل بالرقم 15.',
      socialMediaTitle: 'وسائل التواصل الاجتماعي',
      socialMediaText: 'تابعنا على فيسبوك وتويتر ولينكد إن لأحدث أخبارنا.',
      faqTitle: 'الأسئلة الشائعة',
      faqVolunteer: {
        question: 'كيف أصبح متطوعًا؟',
        answer: 'راجع صفحة "كن متطوعًا" أو اتصل بنا مباشرة.'
      },
      faqTesting: {
        question: 'أين يمكن إجراء الفحص؟',
        answer: 'نقدم اختبارات مجانية في مراكزنا. اتصل بنا لمزيد من المعلومات.'
      },
      faqSupport: {
        question: 'كيف تدعمنا؟',
        answer: 'عدة خيارات: تطوع، تبرعات، شراكات. دعنا نتحدث!'
      },
      newsletterTitle: 'ابق على تواصل',
      newsletterDesc: 'اشترك في النشرة الإخبارية لتصلك أخبارنا ومعلوماتنا حول مكافحة فيروس نقص المناعة البشرية/الإيدز',
      newsletterPlaceholder: 'بريدك الإلكتروني',
      subscribeButton: 'اشترك'
    },
    volunteer: {
      heroTitle: 'كن متطوعًا',
      heroDesc: 'انضم إلى فريق متطوعينا الملتزمين في مكافحة فيروس نقص المناعة البشرية/الإيدز. معًا، يمكننا إحداث فرق.',
      whyJoinTitle: 'لماذا تنضم إلينا؟',
      whyJoinDesc: 'من خلال أن تصبح متطوعًا في STOP SIDA، تساهم مباشرة في تحسين حياة الأشخاص المتأثرين بفيروس نقص المناعة البشرية/الإيدز في موريتانيا. التزامك يصنع الفرق في مهمتنا للصحة العامة.',
      benefits: [
        'تدريب مجاني حول فيروس نقص المناعة البشرية/الإيدز والصحة العامة',
        'شهادة تطوع معترف بها',
        'شبكة مهنية في القطاع الإنساني',
        'تجربة غنية وقيّمة',
        'مساهمة ملموسة في الصحة العامة',
        'تطوير مهارات قابلة للنقل'
      ],
      teamTitle: 'متطوعو STOP SIDA',
      opportunitiesTitle: 'فرص التطوع',
      opportunitiesDesc: 'اكتشف الطرق المختلفة للمساهمة في مهمتنا',
      opportunities: [
        {
          title: 'التوعية المجتمعية',
          description: 'المشاركة في حملات التوعية في الأحياء والقرى.',
          time: '4-6 ساعات/أسبوع',
          skillsLabel: 'المهارات المطلوبة :',
          skills: ['التواصل', 'التعاطف', 'اللغات المحلية']
        },
        {
          title: 'المرافقة الطبية',
          description: 'دعم المرضى في مسارهم العلاجي.',
          time: '6-8 ساعات/أسبوع',
          skillsLabel: 'المهارات المطلوبة :',
          skills: ['تدريب طبي', 'الاستماع', 'السرية']
        },
        {
          title: 'التعليم والتدريب',
          description: 'تنشيط ورشات تعليمية في المدارس والمراكز المجتمعية.',
          time: '3-5 ساعات/أسبوع',
          skillsLabel: 'المهارات المطلوبة :',
          skills: ['البيداغوجيا', 'العرض', 'الإبداع']
        }
      ],
      applyTitle: 'التقديم كمتطوع',
      applyDesc: 'املأ هذا النموذج للانضمام إلى فريقنا',
      form: {
        firstName: 'الاسم',
        lastName: 'اللقب',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        age: 'العمر',
        profession: 'المهنة',
        availability: 'التوفر',
        availabilityOptions: {
          select: 'اختر التوفر',
        },
        experience: 'الخبرة ذات الصلة',
        experiencePlaceholder: 'صف خبرتك في مجال الصحة أو العمل الاجتماعي أو التطوع...',
        motivation: 'الدافع',
        motivationPlaceholder: 'اشرح لماذا ترغب في أن تصبح متطوعًا في STOP SIDA...',
        send: 'إرسال الطلب',
      },
      sendApplication: 'إرسال الطلب',
      testimonials: [
        {
          text: 'كوني متطوعة في STOP SIDA سمح لي بالمساهمة فعليًا في صحة مجتمعي. إنها تجربة غنية.',
          author: 'أميناتا س.',
          since: 'متطوعة منذ سنتين'
        },
        {
          text: 'التدريب الذي تلقيته ودعم الفريق منحاني الثقة للتوعية بفعالية حول فيروس نقص المناعة.',
          author: 'محمد و.',
          since: 'متطوع منذ سنة'
        },
        {
          text: 'كل عمل، حتى لو كان صغيرًا، له قيمة في هذه المعركة. أنا فخورة بأن أكون جزءًا من هذه المهمة.',
          author: 'فاتو ب.',
          since: 'متطوعة منذ 3 سنوات'
        }
      ]
    },
    news: {
      pageTitle: 'الأخبار',
      pageDesc: 'تابع آخر أنشطتنا وفعالياتنا وتقدمنا في مكافحة فيروس نقص المناعة البشرية/الإيدز',
      searchPlaceholder: 'ابحث عن مقال...',
      categories: ['الكل', 'الوقاية', 'شراكات', 'تدريب'],
      featuredTitle: 'الأبرز',
      readMore: 'اقرأ المزيد',
      otherNews: 'أخبار أخرى',
      allNews: 'كل الأخبار',
      newsletterTitle: 'ابق على اطلاع',
      newsletterDesc: 'اشترك في النشرة الإخبارية لتصلك آخر أخبارنا',
      newsletterPlaceholder: 'بريدك الإلكتروني',
      subscribeButton: 'اشترك',
      articles: [
        {
          id: 1,
          title: 'حملة توعية جديدة في مدارس نواكشوط',
          excerpt: 'تطلق STOP SIDA حملة تعليمية في 20 مدرسة لرفع وعي الشباب بمخاطر فيروس نقص المناعة البشرية/الإيدز.',
          content: 'تهدف هذه المبادرة إلى الوصول إلى أكثر من 5000 طالب من خلال أنشطة تفاعلية وورش عمل تعليمية.',
          date: '15 ديسمبر 2024',
          author: 'فريق التواصل',
          category: 'الوقاية',
          image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 2,
          title: 'شراكة استراتيجية مع منظمة الصحة العالمية',
          excerpt: 'توقيع اتفاقية تعاون لتعزيز إجراءات الوقاية والرعاية من فيروس نقص المناعة في موريتانيا.',
          content: 'ستسمح هذه الشراكة بتوسيع نطاق الفحوصات المجانية وزيادة التوعية المجتمعية.',
          date: '10 ديسمبر 2024',
          author: 'فريق STOP SIDA',
          category: 'شراكات',
          image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: true
        },
        {
          id: 3,
          title: 'تدريب 100 عامل صحة مجتمعية',
          excerpt: 'برنامج تدريبي مكثف حول رعاية فيروس نقص المناعة والدعم النفسي الاجتماعي للمرضى.',
          content: 'تم تدريب المشاركين على أحدث بروتوكولات الرعاية والدعم النفسي.',
          date: '5 ديسمبر 2024',
          author: 'إدارة البرامج',
          category: 'تدريب',
          image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
          featured: false
        }
      ],
    },
    partners: {
      heroTitle: 'شركاؤنا',
      heroDesc: 'معًا، نبني شبكة قوية لمكافحة فيروس نقص المناعة البشرية/الإيدز بفعالية في موريتانيا',
      introTitle: 'شراكات استراتيجية',
      introDesc1: 'منذ تأسيسنا عام 1993، طورت STOP SIDA شبكة متنوعة من الشركاء تسمح لنا بتضخيم تأثيرنا وتحقيق أهدافنا في الصحة العامة.',
      introDesc2: 'تسمح لنا هذه التعاونات الاستراتيجية بالاستفادة من خبرات تكميلية وموارد تقنية ومالية ووصول موسع لإجراءاتنا.',
      approachTitle: 'نهجنا',
      approachItems: [
        'شراكات مبنية على قيم مشتركة',
        'تعاون شفاف وعادل',
        'تكامل الخبرات',
        'تأثير مستدام وقابل للقياس'
      ],
      categoriesTitle: 'شركاؤنا حسب الفئة',
      categoriesDesc: 'نظام بيئي متنوع من المنظمات الملتزمة بمكافحة فيروس نقص المناعة البشرية/الإيدز',
      achievementsTitle: 'الإنجازات المشتركة',
      achievementsDesc: 'النتائج الملموسة لتعاوننا',
      partnerSince: 'شريك منذ:',
      categories: [
        {
          title: 'المنظمات الدولية',
          partners: [
            {
              name: 'منظمة الصحة العالمية',
              description: 'شراكة استراتيجية لتعزيز أنظمة الصحة',
              since: '2010',
              type: 'تقني ومالي'
            },
            {
              name: 'اليونيسف موريتانيا',
              description: 'تعاون في برامج الشباب والصحة الإنجابية',
              since: '2015',
              type: 'تقني'
            },
            {
              name: 'الصندوق العالمي',
              description: 'تمويل برامج مكافحة فيروس نقص المناعة البشرية/الإيدز',
              since: '2008',
              type: 'مالي'
            }
          ]
        },
        {
          title: 'المؤسسات الحكومية',
          partners: [
            {
              name: 'وزارة الصحة',
              description: 'تنسيق السياسات الوطنية للصحة العامة',
              since: '1993',
              type: 'مؤسسي'
            },
            {
              name: 'البرنامج الوطني لمكافحة الإيدز',
              description: 'تنفيذ الاستراتيجيات الوطنية للوقاية',
              since: '1995',
              type: 'تشغيلي'
            }
          ]
        },
        {
          title: 'المنظمات غير الحكومية والمجتمع المدني',
          partners: [
            {
              name: 'أطباء بلا حدود',
              description: 'تعاون في الرعاية الطبية',
              since: '2012',
              type: 'تقني'
            },
            {
              name: 'الجمعية الموريتانية لحقوق الإنسان',
              description: 'دعوة لحقوق الأشخاص المصابين بفيروس نقص المناعة',
              since: '2018',
              type: 'دعوة'
            }
          ]
        },
        {
          title: 'القطاع الخاص',
          partners: [
            {
              name: 'البنك الموريتاني للتجارة الدولية',
              description: 'دعم مالي لبرامج التوعية',
              since: '2020',
              type: 'مالي'
            },
            {
              name: 'موريتل',
              description: 'حملات التواصل والتوعية',
              since: '2019',
              type: 'تواصل'
            }
          ]
        }
      ],
      achievements: [
        {
          title: 'مشاريع مشتركة',
          value: '15+',
          description: 'مشاريع منجزة في شراكة'
        },
        {
          title: 'تمويل محشد',
          value: '2.5M€',
          description: 'أموال محصلة بفضل الشراكات'
        },
        {
          title: 'المستفيدون',
          value: '50K+',
          description: 'أشخاص تم الوصول إليهم من خلال إجراءاتنا المشتركة'
        },
        {
          title: 'سنوات الخبرة',
          value: '30+',
          description: 'سنوات من التعاون المثمر'
        }
      ],
      testimonialsTitle: 'شهادات الشركاء',
      testimonialsDesc: 'آراء شركائنا حول تعاوننا',
      testimonials: [
        {
          text: 'STOP SIDA شريك موثوق وملتزم. خبرتهم الميدانية ومعرفتهم بالسياق المحلي ذات قيمة كبيرة لبرامجنا.',
          author: 'د. ماري دوبوا',
          role: 'ممثلة منظمة الصحة العالمية في موريتانيا'
        },
        {
          text: 'مكّننا التعاون مع STOP SIDA من الوصول إلى الفئات الضعيفة وتحقيق تأثير حقيقي في الوقاية من فيروس نقص المناعة.',
          author: 'أحمد ولد محمد',
          role: 'مدير البرنامج الوطني لمكافحة الإيدز'
        },
        {
          text: 'تُظهر STOP SIDA احترافية مثالية وشفافية كاملة في إدارة المشاريع. إنه شريك مميز.',
          author: 'سارة جونسون',
          role: 'منسقة الصندوق العالمي'
        }
      ],
      becomePartner: 'كن شريكًا',
      becomePartnerDesc: 'هل ترغب في الانضمام إلى شبكة شركائنا؟ اتصل بنا لاستكشاف فرص التعاون.',
      contactUs: 'اتصل بنا',
      seeReports: 'عرض تقاريرنا'
    },
    // ... autres sections globales
  }
};

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
}; 