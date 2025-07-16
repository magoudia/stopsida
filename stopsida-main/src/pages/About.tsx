import React from 'react';
import { Calendar, Target, Eye, Heart, Users, Award } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const t = useTranslations() as any;

  const values = t.about.values.map((v, i) => ({ ...v, icon: [Heart, Users, Award, Target][i] }));

  const teamImages = [
    'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
  ];
  const team = t.about.team.map((m, i) => ({ ...m, image: teamImages[i] }));

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

      {/* Histoire */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t.about.historyTitle}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.historyP1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.historyP2}
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{t.about.keyDatesTitle}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.about.keyDates.map((d, i) => (
                    <li key={i}><strong>{d.year}</strong> - {d.event}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Histoire STOP SIDA"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.about.missionTitle}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.missionDesc}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.about.visionTitle}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.visionDesc}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Valeurs */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.about.valuesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.about.valuesDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <value.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Équipe */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.about.teamTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.about.teamDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Chiffres clés */}
      <motion.section
        className="bg-red-600 text-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.about.impactTitle}
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {t.about.impactDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.about.impactStats.map((stat, i) => (
              <div className="text-center" key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;