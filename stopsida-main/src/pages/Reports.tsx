import React, { useState } from 'react';
import { FileText, Download, Calendar, Eye, Search, Filter } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Reports: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const t = useTranslations() as any;

  // Fallback si la traduction des rapports est absente
  if (!t.reports) {
    return <div className="text-center text-red-500 py-12">Aucun contenu de rapport disponible dans cette langue.</div>;
  }

  // Sécurisation de l'accès aux tableaux de traduction
  const reports = t.reports?.reportsList ?? [];
  const types = t.reports?.types ?? [];
  const years = t.reports?.years ?? [];

  const filteredReports = reports.filter((report: any) => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === '' || selectedYear === years[0] || report.year === selectedYear;
    const matchesType = selectedType === '' || selectedType === types[0] || report.type === selectedType;
    return matchesSearch && matchesYear && matchesType;
  });

  const featuredReports = filteredReports.filter((report: any) => report.featured);
  const regularReports = filteredReports.filter((report: any) => !report.featured);

  const handleDownload = (reportId: number) => {
    alert(`Téléchargement du rapport ${reportId} en cours...`);
  };

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
              {t.reports.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              {t.reports.heroDesc}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Filtres et recherche */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white py-8"
      >
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.reports.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{t.reports.filterBy}</span>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {types.map((type: string) => (
                  <option key={type} value={type === types[0] ? '' : type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {years.map((year: string) => (
                  <option key={year} value={year === years[0] ? '' : year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Documents en vedette */}
      {featuredReports.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 section-padding"
        >
          <div className="container-max">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.reports.featuredTitle}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredReports.map((report: any) => (
                <div key={report.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {report.type}
                        </span>
                        <span className="text-sm text-gray-500">{report.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {report.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {report.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {t.reports.downloadsLabel}: {report.downloads}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {t.reports.dateLabel}: {report.date}
                          </div>
                        </div>
                        <button
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2"
                          onClick={() => handleDownload(report.id)}
                        >
                          <Download className="h-4 w-4" />
                          {t.reports.downloadButton}
                        </button>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{t.reports.pagesLabel}: {report.pages}</span>
                        <span>{t.reports.sizeLabel}: {report.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Tous les rapports */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white section-padding"
      >
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t.reports.allReportsTitle}
          </h2>
          {regularReports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {regularReports.map((report: any) => (
                <div key={report.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {report.type}
                        </span>
                        <span className="text-sm text-gray-500">{report.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {report.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {report.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {t.reports.downloadsLabel}: {report.downloads}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {t.reports.dateLabel}: {report.date}
                          </div>
                        </div>
                        <button
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2"
                          onClick={() => handleDownload(report.id)}
                        >
                          <Download className="h-4 w-4" />
                          {t.reports.downloadButton}
                        </button>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{t.reports.pagesLabel}: {report.pages}</span>
                        <span>{t.reports.sizeLabel}: {report.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              {t.reports.noResult}
            </div>
          )}
        </div>
      </motion.section>

      {/* Statistiques */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-red-600 text-white section-padding"
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.reports.statsTitle}
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {t.reports.statsDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-red-100">{t.reports.statsReports}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-red-100">{t.reports.statsDownloads}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-red-100">{t.reports.statsFree}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-red-100">{t.reports.statsLanguages}</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Reports;