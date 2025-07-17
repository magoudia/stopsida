import React from 'react';
import { Calendar, Target, Eye, Heart, Users, Award, MapPin, Phone, Mail, Building, Shield, Globe, BookOpen, Microscope, HandHeart } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const t = useTranslations() as any;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-red-600 to-red-800 text-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {t.about.heroTitle}
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-red-100 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {t.about.heroDesc}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Informations de contact */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Informations de contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Building className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Siège social</p>
                  <p className="text-gray-600">Tevragh Zeina, Nouakchott</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p className="text-gray-600">46420142</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">stopsida_rim@yahoo.fr</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Récépissé</p>
                  <p className="text-gray-600">FA010000361408202203049</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Date de création</p>
                  <p className="text-gray-600">31 juillet 1993</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Compte bancaire</p>
                  <p className="text-gray-600">BNM No: 012644811010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Présentation générale */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Présentation de l'ONG</h2>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                STOP SIDA est une Organisation Non Gouvernementale, créée le 31 juillet 1993, dont la vocation 
                est le développement économique et social. ONG STOP SIDA est fondée sur la base du volontariat 
                à caractère Humanitaire et à but non lucratif.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Créée le 31 juillet 1993, STOP SIDA est la première ONG thématique dans le domaine de la lutte 
                contre le VIH/SIDA en Mauritanie. La vision de l'ONG STOP SIDA cadre parfaitement avec les 
                orientations de la stratégie nationales de lutte contre les IST/VIH/SIDA.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Organisation */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Organisation de l'ONG STOP SIDA</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Organisation administrative */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Organisation administrative</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ONG STOP SIDA est dirigée par une équipe multidisciplinaire composée de religieux, de 
                personnels de santé, de sociologues, de parlementaires et d'enseignants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le Bureau Exécutif comprend le Président, la Secrétaire générale, le Trésorier et les chargés de 
                programmes. Il se réunit une fois par an et statue sur les projets exécutés ou en cours et les 
                orientations futures de l'Organisation.
              </p>
            </div>

            {/* Organisation comptable et financière */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Organisation comptable et financière</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les activités se font essentiellement sur des financements de projets avec des sources 
                nationales et internationales. Tous les fonds sont réceptionnés dans un compte principal 
                avec des sous-comptes spécifiques dédiés à chaque projet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La Présidente est l'ordonnateur de toutes les dépenses sur proposition de la secrétaire générale 
                et du trésorier. Chaque transaction financière est appuyée par un état de payement signé.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Objectifs */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Objectifs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Éducation et prévention</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Améliorer les connaissances-attitudes-pratiques des jeunes en matière de compétences de vie, 
                de genre et de droits humains. Prévention des infections liées aux IST/VIH/SIDA.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Microscope className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Dépistage et sensibilisation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Augmenter le niveau de connaissance des modes de transmission et des moyens de prévention, 
                ainsi que la couverture en dépistage à travers l'organisation d'activités avancées.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <HandHeart className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Prise en charge</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Contribuer à l'amélioration du suivi et observance du traitement des PVVIH à travers la mise 
                en place des médiateurs et le renforcement des capacités du réseau des OSC.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Santé publique</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Sensibilisation sur les maladies hydriques et autres maladies non transmissibles. 
                Sensibilisation pour l'accès aux services de santé de base dont la SR/PF.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Plaidoyer</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Plaidoyer en faveur de la SR/PF (exemple de plaidoyer : la loi et textes d'application de la SR).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Vaccination</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Vaccinations des enfants de 0 à 5 ans par deux stratégies : une fixe dans notre centre de santé 
                et une mobile.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expérience et réalisations */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expérience et réalisations</h2>
          
          <div className="space-y-8">
            {/* Prise en charge des PVVIH */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prise en charge des PVVIH</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stop SIDA a été pionnière dans la prise en charge des PVVIH, en jouant le rôle 
                d'intermédiaire avec les services de prise en charge au Sénégal (au moment où il n'y avait pas encore 
                d'ARV en Mauritanie).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En partenariat avec le SENLS et sur financement de la banque mondiale, nous avons pu évoluer 
                de 4 à 5 PVVIH à plus de 20 PVVIH suivis régulièrement, puis à plus de cent trente (431) PVVIH.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La prise en charge des PVVIH était globale : (i) médicale par la distribution gratuite d'ARV et 
                de traitement des IO, (ii) nutritionnelle à travers des kits alimentaires distribués chaque mois, 
                (iii) psychologique avec l'accompagnement des PVVIH par un psychologue et (iv) économique à travers 
                l'appui d'AGR pour les PVVIH le nécessitant.
              </p>
            </div>

            {/* Centre de santé */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Centre de santé communautaire</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le centre est construit avec l'appui des fonds de l'Ambassade du Japon et le gap complété 
                par les OSC. Pour faire de ce centre un modèle d'excellence de la qualité des soins offerts 
                au niveau communautaire.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personnel en place (DRS) :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Un médecin</li>
                    <li>• Quatre sages-femmes</li>
                    <li>• Trois infirmières</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Défis à relever :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Détachement de personnel médical pour la maternité</li>
                    <li>• Unité de stomatologie</li>
                    <li>• Unité d'Ophtalmo</li>
                    <li>• Stock de médicament essentiel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Communication et sensibilisation */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication pour un changement de comportement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il s'agit de lutter contre la stigmatisation et discrimination des PVVIH et de travailler 
                pour une amélioration de leur statut socio-économique et juridique.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'amélioration du niveau des connaissances et l'accessibilité des services de santé pour les femmes, 
                les adolescents et jeunes sur la Santé Sexuelle et reproductive (SSR).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les Centres d'écoute d'information et de formation des jeunes sont des espaces où les Jeunes et 
                les Adolescents peuvent parler librement des problèmes de leur sexualité en toute confiance.
              </p>
            </div>

            {/* Plaidoyer */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plaidoyer en politique de santé</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Avec l'appui de HP+/USAID et AFP sous le leadership du programme de la santé reproductive, 
                notre plaidoyer a permis à la femme Mauritanienne d'avoir une loi en faveur de la SR en décembre 
                2017 et des textes d'application de la loi en mars 2018.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ces textes ont été vulgarisés au niveau de trois régions à ce jour.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Réseaux et affiliations */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Réseaux et affiliations</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROMISR</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Préside le réseau des ONG Mauritaniennes intervenant dans la SR (ROMISR).
              </p>
              <h4 className="font-semibold text-gray-900 mb-2">Buts du réseau :</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Conjuguer, harmoniser et intensifier les efforts pour coordonner les programmes SERMINIA</li>
                <li>• Mettre en commun et rationaliser les moyens humains et matériels</li>
                <li>• Assurer une bonne diffusion des informations et faciliter l'échange des expériences</li>
                <li>• L'assistance juridique et psychologique aux personnes vulnérables</li>
                <li>• Veiller à la mise en valeur des actions des OSC affiliées</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alliances et transfert des compétences</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Partenariat gagnant-gagnant pour la pérennisation des actions : Renforcer les capacités par un 
                transfert des compétences et la création des alliances avec les réseaux des organisations de la société 
                civile au niveau communautaire.
              </p>
              <h4 className="font-semibold text-gray-900 mb-2">Réseaux partenaires :</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Réseau des imams et érudits de Mauritanie</li>
                <li>• Réseau des femmes journalistes</li>
                <li>• Jeunes influenceurs sur les réseaux sociaux</li>
                <li>• Membre fondateur du GFF</li>
                <li>• Convention de partenariat avec 3 mairies de Nouakchott</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Autres activités */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Autres activités</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Participation aux forums</h3>
              <p className="text-gray-700 leading-relaxed">
                Participation aux forums et conférences nationales et internationales sur les dites thématiques.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outils de communication</h3>
              <p className="text-gray-700 leading-relaxed">
                Conception, reproduction et vulgarisation de plusieurs outils/support de communication : 
                Livrets, Bandes Dessinées, dépliants, affiches, animation d'émissions radio télévisées.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;