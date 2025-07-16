import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, Building } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const t = useTranslations() as any;
  
  // Mapping des icônes
  const iconMap: { [key: string]: any } = {
    MapPin,
    Phone,
    Mail,
    Clock
  };

  const contactInfo = t.contact?.contactInfo || [
    {
      icon: 'MapPin',
      title: 'Adresse',
      details: [
        'Rue Abdallahi Ould Moustapha',
        'Tevragh Zeina, Nouakchott',
        'Mauritanie'
      ]
    },
    {
      icon: 'Phone',
      title: 'Téléphone',
      details: ['+222 46 42 01 42']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['stopsida_rim@yahoo.fr']
    },
    {
      icon: 'Clock',
      title: 'Horaires',
      details: [
        'Lundi - Vendredi : 8h00 - 17h00',
        'Samedi : 8h00 - 12h00',
        'Dimanche : Fermé'
      ]
    }
  ];

  const contactTypes = t.contact?.contactTypes || [
    { value: 'general', label: 'Demande générale' },
    { value: 'volunteer', label: 'Bénévolat' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'media', label: 'Presse & Médias' },
    { value: 'support', label: 'Soutien/Don' },
    { value: 'other', label: 'Autre' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer le formulaire
    alert(t.contact?.success || 'Merci pour votre message ! Nous vous recontacterons bientôt.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      subject: '',
      message: '',
      type: 'general'
    });
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
              {t.contact.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              {t.contact.heroDesc}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white section-padding"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info: any, index: number) => {
              const IconComponent = iconMap[info.icon];
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail: string, detailIndex: number) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 section-padding"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.contact?.formTitle || 'Envoyez-nous un message'}
                </h2>
                <p className="text-gray-600">
                  {t.contact?.formDesc || 'Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact?.name || 'Nom complet *'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder={t.contact?.namePlaceholder || 'Votre nom'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact?.email || 'Email *'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder={t.contact?.emailPlaceholder || 'votre@email.com'}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact?.phone || 'Téléphone'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder={t.contact?.phonePlaceholder || '+222 XX XX XX XX'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact?.organization || 'Organisation'}
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder={t.contact?.organizationPlaceholder || 'Votre organisation'}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact?.type || 'Type de demande *'}
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {contactTypes.map((type: any) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact?.subject || 'Sujet *'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.contact?.subjectPlaceholder || 'Objet de votre message'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact?.message || 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.contact?.messagePlaceholder || 'Votre message...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t.contact?.send || t.contact?.sendMessage || 'Envoyer'}
                </button>
              </form>
            </div>

            {/* Carte et informations supplémentaires */}
            <div className="space-y-8">
              {/* Carte */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>{t.contact?.mapTitle || 'Carte interactive'}</p>
                    <p className="text-sm">{t.contact?.mapLocation || 'Tevragh Zeina, Nouakchott'}</p>
                  </div>
                </div>
              </motion.div>

              {/* Informations supplémentaires */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.contact?.practicalInfoTitle || 'Informations Pratiques'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t.contact?.presidentContact || 'Contact Présidente'}</h4>
                    <p className="text-gray-600">{t.contact?.presidentName || 'Fatimetou Maham'}</p>
                    <p className="text-gray-600">+222 46 42 01 42</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t.contact?.emergencyTitle || 'Urgences'}</h4>
                    <p className="text-gray-600">
                      {t.contact?.emergencyText || 'Pour les urgences médicales, contactez directement le centre de santé le plus proche ou appelez le 15.'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t.contact?.socialMediaTitle || 'Réseaux Sociaux'}</h4>
                    <p className="text-gray-600">
                      {t.contact?.socialMediaText || 'Suivez-nous sur Facebook, Twitter et LinkedIn pour nos dernières actualités.'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FAQ rapide */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.contact?.faqTitle || 'Questions Fréquentes'}
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{t.contact?.faqVolunteer?.question || 'Comment devenir bénévole ?'}</h4>
                    <p className="text-gray-600 text-sm">
                      {t.contact?.faqVolunteer?.answer || 'Consultez notre page "Devenir bénévole" ou contactez-nous directement.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t.contact?.faqTesting?.question || 'Où se faire dépister ?'}</h4>
                    <p className="text-gray-600 text-sm">
                      {t.contact?.faqTesting?.answer || 'Nous proposons des tests gratuits dans nos centres. Contactez-nous pour plus d\'infos.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t.contact?.faqSupport?.question || 'Comment nous soutenir ?'}</h4>
                    <p className="text-gray-600 text-sm">
                      {t.contact?.faqSupport?.answer || 'Plusieurs options : bénévolat, dons, partenariats. Parlons-en !'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-red-600 text-white section-padding"
      >
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.contact?.newsletterTitle || 'Restez connecté'}
            </h2>
            <p className="text-xl text-red-100">
              {t.contact?.newsletterDesc || 'Abonnez-vous à notre newsletter pour recevoir nos actualités et informations sur la lutte contre le VIH/SIDA'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.contact?.newsletterPlaceholder || 'Votre adresse email'}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.contact?.subscribeButton || 'S\'abonner'}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;