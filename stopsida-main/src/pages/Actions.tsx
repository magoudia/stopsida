import React from 'react';
import { Shield, Heart, Users, BookOpen, Stethoscope, Megaphone } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import ev1 from '../assets/ev1.png';
import ev2 from '../assets/ev2.png';
import ev3 from '../assets/ev3.png';
import ev4 from '../assets/ev4.png';

const Actions: React.FC = () => {
  const t = useTranslations() as any;

  const programImages = [
    'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
  const programIcons = [Shield, Stethoscope, Heart, BookOpen, Users, Megaphone];
  const programs = (t.actions.programs as any[]).map((p: any, i: number) => ({ ...p, icon: programIcons[i], image: programImages[i] }));

  const currentProjects = t.actions.projects as any[];

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
              {t.actions.heroTitle}
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-red-100 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {t.actions.heroDesc}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Programmes principaux */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {t.actions.programsTitle}
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {t.actions.programsDesc}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <program.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <motion.h3 className="text-xl font-semibold text-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                      {program.title}
                    </motion.h3>
                  </div>
                  <motion.p className="text-gray-600 mb-4 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    {program.description}
                  </motion.p>
                  <div>
                    <motion.h4 className="font-medium text-gray-900 mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>{program.activitiesTitle}</motion.h4>
                    <ul className="space-y-1">
                      {program.activities.map((activity, actIndex) => (
                        <motion.li
                          key={actIndex}
                          className="text-sm text-gray-600 flex items-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + actIndex * 0.05 }}
                        >
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {activity}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projets en cours */}
      <motion.section
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {t.actions.projectsTitle}
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              {t.actions.projectsDesc}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <motion.h3 className="text-lg font-semibold text-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                      {project.title}
                    </motion.h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'En cours' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <motion.p className="text-gray-600 text-sm leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                    {project.description}
                  </motion.p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{project.beneficiariesLabel}</span>
                    <span className="font-medium text-gray-900">{project.beneficiaries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{project.partnerLabel}</span>
                    <span className="font-medium text-gray-900">{project.partner}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Galerie d'événements */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galerie d'événements</h2>
          <p className="text-xl text-gray-600 mb-8">Retrouvez ici les moments forts de nos actions sur le terrain.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={ev1} alt="Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2" className="h-48 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2</div>
            </div>
            <div>
              <img src={ev2} alt="FORMATION DES AGENTS DE SANTE COMMUNAUTAIRE POUR L’ACCE AUX SERVICES DE SANTE ORGANISE PAR STOP SIDA" className="h-48 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">FORMATION DES AGENTS DE SANTE COMMUNAUTAIRE POUR L’ACCE AUX SERVICES DE SANTE ORGANISE PAR STOP SIDA</div>
            </div>
            <div>
              <img src={ev3} alt="Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2" className="h-48 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2</div>
            </div>
            <div>
              <img src={ev4} alt="Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2" className="h-48 w-full object-cover rounded-lg shadow mb-2" />
              <div className="font-semibold text-gray-800 text-sm">Deuxième rapport trimestriel de mise en œuvre des activités du NFM3 lot 2</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Impact et résultats */}
      <motion.section
        className="bg-red-600 text-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {t.actions.impactTitle}
            </motion.h2>
            <motion.p className="text-xl text-red-100 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              {t.actions.impactDesc}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.actions.impactStats.map((stat, i) => (
              <motion.div
                className="text-center"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to action */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              {t.actions.participateTitle}
            </motion.h2>
            <motion.p className="text-xl text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              {t.actions.participateDesc}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/devenir-benevole"
                className="btn-primary inline-flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Users className="mr-2 h-5 w-5" />
                {t.actions.becomeVolunteer}
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Heart className="mr-2 h-5 w-5" />
                {t.actions.supportUs}
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Actions;