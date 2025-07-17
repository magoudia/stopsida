import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award, Shield, Calendar, FileText, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';
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
import ev1 from '../assets/ev1.png';
import ev2 from '../assets/ev2.png';
import ev3 from '../assets/ev3.png';

const Home: React.FC = () => {
  const t = useTranslations();
  const stats = t.home.stats.map((s, i) => ({ ...s, icon: [Users, Heart, Award, Shield][i] }));

  const newsImages = [
    'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];
  const recentNews = t.home.news.map((n, i) => ({ ...n, image: newsImages[i] }));

  // Carrousel partenaires
  const carouselRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const autoScrollIntervals = useRef<(NodeJS.Timeout | null)[]>([null, null]);
  const isHovered = useRef([false, false]);

  useEffect(() => {
    const logoWidth = 108; // largeur estimée d'un logo + gap
    const logosPerStep = 1; // scroll plus fluide
    const scrollBy = logoWidth * logosPerStep;
    const scrollSpeed = 30; // ms entre chaque scroll
    const step = 1; // px à chaque scroll

    [0, 1].forEach((row) => {
      const ref = carouselRefs[row].current;
      if (!ref) return;
      if (autoScrollIntervals.current[row]) clearInterval(autoScrollIntervals.current[row]!);
      autoScrollIntervals.current[row] = setInterval(() => {
        if (isHovered.current[row]) return;
        if (!ref) return;
        // Scroll d'un petit pas
        if (ref.scrollLeft + ref.offsetWidth >= ref.scrollWidth) {
          ref.scrollLeft = 0;
        } else {
          ref.scrollLeft += step;
        }
      }, scrollSpeed);
    });
    return () => {
      autoScrollIntervals.current.forEach((interval) => interval && clearInterval(interval));
    };
  }, []);

  // Gestion du hover pour stopper l'auto-scroll
  const handleMouseEnter = (row: number) => {
    isHovered.current[row] = true;
  };
  const handleMouseLeave = (row: number) => {
    isHovered.current[row] = false;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t.home.heroTitle}
                <span className="block text-red-200">{t.home.heroHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
                {t.home.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to="/nos-actions" className="btn-primary inline-flex items-center justify-center">
                    {t.home.discoverActions}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to="/devenir-benevole" className="btn-secondary">
                    {t.home.becomeVolunteer}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <motion.img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe médicale STOP SIDA"
                className="rounded-lg shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
              <motion.div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}>
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold">{t.home.stats[0].value}</p>
                    <p className="text-sm text-gray-600">{t.home.stats[0].label}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mission STOP SIDA"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t.home.missionTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.home.missionDesc}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.home.missionPrevention}</h4>
                    <p className="text-gray-600">{t.home.missionPreventionDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.home.missionTreatment}</h4>
                    <p className="text-gray-600">{t.home.missionTreatmentDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.home.missionAdvocacy}</h4>
                    <p className="text-gray-600">{t.home.missionAdvocacyDesc}</p>
                  </div>
                </div>
              </div>
              <Link to="/qui-sommes-nous" className="btn-primary inline-flex items-center">
                {t.home.learnMore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Nos actions en images - Aperçu */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos actions en images</h2>
          <p className="text-xl text-gray-600 mb-8">Découvrez quelques moments forts de nos événements et interventions.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="w-72">
              <img src={ev1} alt="Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2" className="h-44 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2</div>
            </div>
            <div className="w-72">
              <img src={ev2} alt="FORMATION DES AGENTS DE SANTE COMMUNAUTAIRE POUR L’ACCE AUX SERVICES DE SANTE ORGANISE PAR STOP SIDA" className="h-44 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">FORMATION DES AGENTS DE SANTE COMMUNAUTAIRE POUR L’ACCE AUX SERVICES DE SANTE ORGANISE PAR STOP SIDA</div>
            </div>
            <div className="w-72">
              <img src={ev3} alt="Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2" className="h-44 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2</div>
            </div>
          </div>
          <Link to="/nos-actions" className="btn-primary">Voir toutes les actions</Link>
        </div>
      </motion.section>

      {/* Recent News */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.home.newsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.newsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentNews.map((news, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link to="/actualites" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                    {t.home.readMore}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/actualites" className="btn-primary inline-flex items-center">
              {t.home.allNews}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-red-600 text-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.home.joinTitle}
            </h2>
            <p className="text-xl text-red-100">
              {t.home.joinDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devenir-benevole" className="btn-secondary inline-flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                {t.home.joinVolunteer}
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                <Handshake className="mr-2 h-5 w-5" />
                {t.home.joinSupport}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Section partenaires avec carrousel sur 2 lignes et flèches */}
      <motion.section
        className="bg-gray-50 py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container-max text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide text-gray-800 uppercase">ILS NOUS FONT CONFIANCE</h3>
          {/* Carrousel 2 lignes auto-défilant avec flèches */}
          <div className="space-y-8">
            {[0, 1].map((row) => {
              const logos = [
                ministereSante, oms, fondMondial, usaid, undp, unfpa, peaceCorps, palladium, propel, bac, bamis, bmi, pharma, SCM, sircoma, taskhaf, elles, ms, senls, publi, iom, unaids, hp
              ];
              const half = Math.ceil(logos.length / 2);
              const rowLogos = row === 0 ? logos.slice(0, half) : logos.slice(half);
              const logoWidth = 108; // largeur estimée d'un logo + gap
              const logosPerStep = 3;
              const scrollBy = logoWidth * logosPerStep;
              const handleScroll = (direction: 'left' | 'right') => {
                const ref = carouselRefs[row].current;
                if (!ref) return;
                if (direction === 'left') {
                  ref.scrollLeft = Math.max(0, ref.scrollLeft - scrollBy);
                } else {
                  ref.scrollLeft = Math.min(ref.scrollWidth, ref.scrollLeft + scrollBy);
                }
              };
              return (
                <div key={row} className="relative flex items-center">
                  {/* Flèche gauche supprimée */}
                  <div
                    ref={carouselRefs[row]}
                    className="flex gap-8 items-center transition-all duration-300 overflow-x-auto scrollbar-hide mx-10"
                    style={{ minWidth: '100%', scrollBehavior: 'smooth' }}
                    onMouseEnter={() => handleMouseEnter(row)}
                    onMouseLeave={() => handleMouseLeave(row)}
                  >
                    {rowLogos.concat(rowLogos).map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo}
                        alt={`Partenaire ${idx}`}
                        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
                        style={{ minWidth: 100 }}
                      />
                    ))}
                  </div>
                  {/* Flèche droite supprimée */}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;