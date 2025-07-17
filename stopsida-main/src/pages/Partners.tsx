import React from 'react';
import { Handshake, Globe, Heart, Award, Users, Building } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import ministereSante from '../assets/ministere_sante.png';
import oms from '../assets/oms.png';
import fondMondial from '../assets/fond_mondial.png';
import usaid from '../assets/usaid.png';
import undp from '../assets/undp.png';
import unfpa from '../assets/unfpa.png';
import peaceCorps from '../assets/peace_corps.png';
import palladium from '../assets/palladium.png';
import propel from '../assets/propel.png';
import bac from '../assets/bac.png';
import bamis from '../assets/bamis.png';
import bmi from '../assets/bmi.png';
import pharma from '../assets/pharma.png';
import SCM from '../assets/SCM.png';
import sircoma from '../assets/sircoma.png';
import taskhaf from '../assets/taskhaf.png';
import elles from '../assets/elles.png';
import ms from '../assets/ms.png';
import senls from '../assets/senls.png';
import publi from '../assets/publi.png';
import iom from '../assets/iom.png';
import unaids from '../assets/unaids.png';
import hp from '../assets/hp.png';

const Partners: React.FC = () => {
  const t = useTranslations() as any;

  // Fallback si la traduction des partenaires est absente
  if (!t.partners) {
    return <div className="text-center text-red-500 py-12">Aucun contenu de partenaires disponible dans cette langue.</div>;
  }

  // Sécurisation de l'accès aux données de traduction
  const categories = t.partners?.categories ?? [];
  const achievements = t.partners?.achievements ?? [];

  const iconMap = {
    'Organisations Internationales': Globe,
    'International Organizations': Globe,
    'المنظمات الدولية': Globe,
    'Institutions Gouvernementales': Building,
    'Government Institutions': Building,
    'المؤسسات الحكومية': Building,
    'ONG et Société Civile': Users,
    'NGOs and Civil Society': Users,
    'المنظمات غير الحكومية والمجتمع المدني': Users,
    'Secteur Privé': Award,
    'Private Sector': Award,
    'القطاع الخاص': Award,
  };

  // Mapping nom partenaire -> logo (à jour avec les fichiers assets)
  const partnerLogoMap: Record<string, string> = {
    'Organisation Mondiale de la Santé (OMS)': oms,
    'UNICEF Mauritanie': undp, // Remplacer par unicef.png si tu ajoutes le logo
    'Fonds Mondial': fondMondial,
    'Ministère de la Santé': ministereSante,
    'Programme National de Lutte contre le SIDA': ms,
    'BAC SANTE': bac,
    'Bamis': bamis,
    'BMI': bmi,
    'Elles du Sahel': elles,
    'Health Policy Plus': hp,
    'IOM UN MIGRATION': iom,
    'Palladium': palladium,
    'Peace Corps': peaceCorps,
    'Groupe Chinguitty Pharma': pharma,
    'PROPEL Health': propel,
    'Publi Tech': publi,
    'Société Ciment de Mauritanie': SCM,
    'Secretariat Executif SENLS': senls,
    'SIRCOMA': sircoma,
    'Taskhaf': taskhaf,
    'UNAIDS': unaids,
    'UNDP': undp,
    'UNFPA': unfpa,
    'USAID': usaid,
  };
  function getPartnerLogo(name: string) {
    return partnerLogoMap[name] || ministereSante;
  }

  // Définition des partenaires par catégorie selon la liste utilisateur
  const partnersByCategory = [
    {
      title: 'Organisations Internationales',
      partners: [
        { logo: fondMondial, name: 'Le Fonds Mondial', desc: 'Financement VIH/SIDA' },
        { logo: oms, name: 'Organisation Mondiale de la Santé', desc: 'Appui technique' },
        { logo: unaids, name: 'UNAIDS', desc: 'Coordination ONUSIDA' },
        { logo: undp, name: 'UNDP', desc: 'Développement durable' },
        { logo: unfpa, name: 'UNFPA', desc: 'Santé reproductive' },
        { logo: iom, name: 'IOM UN Migration', desc: 'Migration & santé' },
        { logo: usaid, name: 'USAID', desc: 'Coopération américaine' },
      ]
    },
    {
      title: 'Institutions Gouvernementales',
      partners: [
        { logo: ministereSante, name: 'Ministère de la Santé (Mauritanie)' },
        { logo: senls, name: 'Secrétariat Exécutif SENLS' },
        { logo: ms, name: 'MS/PNEPS' },
      ]
    },
    {
      title: 'ONG & Société Civile',
      partners: [
        { logo: elles, name: 'Elles du Sahel' },
        { logo: peaceCorps, name: 'Peace Corps' },
        { logo: hp, name: 'Health Policy Plus' },
        { logo: propel, name: 'PROPEL Health' },
      ]
    },
    {
      title: 'Secteur Privé',
      partners: [
        { logo: bamis, name: 'BAMIS', desc: 'Banque' },
        { logo: bmi, name: 'BMI', desc: 'Banque' },
        { logo: pharma, name: 'Groupe Chinguitty Pharma', desc: 'Pharmacie' },
        { logo: SCM, name: 'Société Ciment de Mauritanie', desc: 'Industrie' },
        { logo: sircoma, name: 'SIRCOMA', desc: '?' },
        { logo: publi, name: 'Publi Tech', desc: 'Communication' },
        { logo: palladium, name: 'Palladium', desc: 'Consulting' },
        { logo: bac, name: 'BAC Santé', desc: '' },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-red-600 to-red-800 text-white section-padding"
      >
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.partners.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              {t.partners.heroDesc}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white section-padding"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Handshake className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t.partners.introTitle}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.partners.introDesc1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.partners.introDesc2}
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{t.partners.approachTitle}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.partners.approachItems?.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Partenariats STOP SIDA"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Catégories de partenaires */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 section-padding"
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.partners.categoriesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.partners.categoriesDesc}
            </p>
          </div>

          {partnersByCategory.map((cat, idx) => (
            <motion.section
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 section-padding"
            >
              <div className="container-max">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.partners.map((p, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow bg-white">
                      <img src={p.logo} alt={p.name} className="w-16 h-16 object-contain rounded-lg bg-white mb-3" />
                      <div className="font-bold text-gray-900 text-lg mb-1">{p.name}</div>
                      {p.desc && <div className="text-gray-600 text-sm mb-2">{p.desc}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </motion.section>

      {/* Réalisations communes */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-red-600 text-white section-padding"
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.partners.achievementsTitle}
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {t.partners.achievementsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-red-100 font-semibold mb-2">
                  {achievement.title}
                </div>
                <div className="text-red-200 text-sm">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Témoignages de partenaires */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white section-padding"
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.partners.testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.partners.testimonialsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.partners.testimonials?.map((testimonial: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-red-600 text-sm">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Devenir partenaire */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 section-padding"
      >
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.partners.becomePartner}
            </h2>
            <p className="text-xl text-gray-600">
              {t.partners.becomePartnerDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center justify-center">
                <Handshake className="mr-2 h-5 w-5" />
                {t.partners.contactUs}
              </a>
              <a href="/rapports" className="btn-secondary inline-flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" />
                {t.partners.seeReports}
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Partners;