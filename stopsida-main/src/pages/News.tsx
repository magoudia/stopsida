import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const t = useTranslations() as any;

  // Fallback si la traduction des actualités est absente
  if (!t.news) {
    return <div className="text-center text-red-500 py-12">Aucun contenu d'actualités disponible dans cette langue.</div>;
  }

  // Sécurisation de l'accès aux tableaux de traduction
  const categories = t.news?.categories ?? [];
  const news = t.news?.articles ?? [];

  const filteredNews = news.filter((article: any) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === categories[0] || 
                           article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter((article: any) => article.featured);
  const regularNews = filteredNews.filter((article: any) => !article.featured);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.news.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              {t.news.pageDesc}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Filtres et recherche */}
      <motion.section
        className="bg-white py-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container-max">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.news.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category: string) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === categories[0] ? '' : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm hover:scale-105 hover:shadow-md focus:scale-105 focus:shadow-md ${
                    (selectedCategory === category || (selectedCategory === '' && category === categories[0]))
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Articles à la une */}
      {featuredNews.length > 0 && (
        <motion.section
          className="bg-gray-50 section-padding"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="container-max">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.news.featuredTitle}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article: any, idx: number) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <motion.button
                      className="text-red-600 hover:text-red-700 font-medium inline-flex items-center transition-colors duration-300"
                      whileHover={{ scale: 1.08 }}
                    >
                      {t.news.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Autres articles */}
      <motion.section
        className="bg-white section-padding"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {featuredNews.length > 0 ? t.news.otherNews : t.news.allNews}
          </h2>
          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article: any, idx: number) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                >
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <motion.button
                      className="text-red-600 hover:text-red-700 font-medium inline-flex items-center transition-colors duration-300"
                      whileHover={{ scale: 1.08 }}
                    >
                      {t.news.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-4">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Effacer les filtres
              </button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        className="bg-red-600 text-white section-padding"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.news.newsletterTitle}
            </h2>
            <p className="text-xl text-red-100">
              {t.news.newsletterDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.news.newsletterPlaceholder}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
              <motion.button
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:scale-105"
                whileHover={{ scale: 1.08 }}
              >
                {t.news.subscribeButton}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default News;