import React from 'react';
import { Shield, Heart, Users, BookOpen, Stethoscope, Megaphone } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

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
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.actions.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              {t.actions.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Programmes principaux */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.actions.programsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.actions.programsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <program.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{program.activitiesTitle}</h4>
                    <ul className="space-y-1">
                      {program.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.actions.projectsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.actions.projectsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'En cours' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact et résultats */}
      <section className="bg-red-600 text-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.actions.impactTitle}
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {t.actions.impactDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.actions.impactStats.map((stat, i) => (
              <div className="text-center" key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.actions.participateTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.actions.participateDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/devenir-benevole" className="btn-primary inline-flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                {t.actions.becomeVolunteer}
              </a>
              <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" />
                {t.actions.supportUs}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actions;