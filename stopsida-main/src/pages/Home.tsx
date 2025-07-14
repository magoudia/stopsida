import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award, Shield, Calendar, FileText, Handshake } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const t = useTranslations();
  const stats = t.home.stats.map((s, i) => ({ ...s, icon: [Users, Heart, Award, Shield][i] }));

  const newsImages = [
    'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];
  const recentNews = t.home.news.map((n, i) => ({ ...n, image: newsImages[i] }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t.home.heroTitle}
                <span className="block text-red-200">{t.home.heroHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
                {t.home.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/nos-actions" className="btn-primary inline-flex items-center justify-center">
                  {t.home.discoverActions}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/devenir-benevole" className="btn-secondary">
                  {t.home.becomeVolunteer}
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe médicale STOP SIDA"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold">{t.home.stats[0].value}</p>
                    <p className="text-sm text-gray-600">{t.home.stats[0].label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mission STOP SIDA"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="bg-white section-padding">
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
              <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
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
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/actualites" className="btn-primary inline-flex items-center">
              {t.home.allNews}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white section-padding">
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
      </section>
    </div>
  );
};

export default Home;