import React from 'react';
import { Handshake, Globe, Heart, Award, Users, Building } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white section-padding">
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
      </section>

      {/* Introduction */}
      <section className="bg-white section-padding">
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
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Partenariats STOP SIDA"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catégories de partenaires */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.partners.categoriesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.partners.categoriesDesc}
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category: any, categoryIndex: number) => {
              const IconComponent = iconMap[category.title as keyof typeof iconMap] || Globe;
              return (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.partners?.map((partner: any, partnerIndex: number) => (
                      <div key={partnerIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt={partner.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 line-clamp-2">
                              {partner.name}
                            </h4>
                            <span className="text-sm text-red-600 font-medium">
                              {partner.type}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {partner.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">{t.partners.partnerSince}</span> {partner.since}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Réalisations communes */}
      <section className="bg-red-600 text-white section-padding">
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
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-red-100 font-semibold mb-2">
                  {achievement.title}
                </div>
                <div className="text-red-200 text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages de partenaires */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce que disent nos partenaires de notre collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "STOP SIDA est un partenaire fiable et engagé. Leur expertise 
                terrain et leur connaissance du contexte local sont précieuses 
                pour nos programmes."
              </p>
              <div className="font-semibold text-gray-900">Dr. Marie Dubois</div>
              <div className="text-red-600 text-sm">Représentante OMS Mauritanie</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "La collaboration avec STOP SIDA nous a permis d'atteindre 
                des populations vulnérables et d'avoir un impact réel sur 
                la prévention du VIH."
              </p>
              <div className="font-semibold text-gray-900">Ahmed Ould Mohamed</div>
              <div className="text-red-600 text-sm">Directeur PNLS</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "STOP SIDA démontre un professionnalisme exemplaire et 
                une transparence totale dans la gestion des projets. 
                C'est un partenaire de choix."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-red-600 text-sm">Coordinatrice Fonds Mondial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Devenir Partenaire
            </h2>
            <p className="text-xl text-gray-600">
              Vous souhaitez rejoindre notre réseau de partenaires ? 
              Contactez-nous pour explorer les opportunités de collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center justify-center">
                <Handshake className="mr-2 h-5 w-5" />
                Nous contacter
              </a>
              <a href="/rapports" className="btn-secondary inline-flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" />
                Voir nos rapports
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;