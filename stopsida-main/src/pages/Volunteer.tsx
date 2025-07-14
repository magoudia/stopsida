import React, { useState } from 'react';
import { Users, Heart, Clock, Award, CheckCircle, Send } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    profession: '',
    experience: '',
    motivation: '',
    availability: '',
    skills: []
  });

  const t = useTranslations() as any;
  const benefits = t.volunteer.benefits;
  const opportunities = t.volunteer.opportunities;

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
    alert('Merci pour votre candidature ! Nous vous recontacterons bientôt.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.volunteer.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              {t.volunteer.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi devenir bénévole */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t.volunteer.whyJoinTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.volunteer.whyJoinDesc}
              </p>
              <div className="space-y-4">
                {benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t.volunteer.teamTitle}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunités de bénévolat */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.volunteer.opportunitiesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.volunteer.opportunitiesDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    {/* On garde l'icône dynamique si elle existe, sinon rien */}
                    {opportunity.icon ? <opportunity.icon className="h-6 w-6 text-red-600" /> : null}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {opportunity.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {opportunity.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{opportunity.time}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">{opportunity.skillsLabel || t.volunteer.skillsLabel}</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {opportunity.skills.map((skill: string, skillIndex: number) => (
                        <span key={skillIndex} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.volunteer.applyTitle}
              </h2>
              <p className="text-xl text-gray-600">
                {t.volunteer.applyDesc}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.firstName} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.firstName}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.lastName} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.lastName}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.email}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.phone}
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.age}
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.age}
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.profession}
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.profession}
                  />
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.availability}
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">{t.volunteer.form.availabilityOptions.select}</option>
                    {/* Ajouter d'autres options si besoin */}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.experience}
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.experiencePlaceholder}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.volunteer.form.motivation} *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.volunteer.form.motivationPlaceholder}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 mt-6"
              >
                <Send className="h-5 w-5" />
                {t.volunteer.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-red-600 text-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.volunteer.testimonialsTitle}
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {t.volunteer.testimonialsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="text-red-100 mb-4 italic">
                "Être bénévole chez STOP SIDA m'a permis de contribuer concrètement 
                à la santé de ma communauté. C'est une expérience enrichissante."
              </p>
              <div className="font-semibold">Aminata S.</div>
              <div className="text-red-200 text-sm">Bénévole depuis 2 ans</div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="text-red-100 mb-4 italic">
                "La formation reçue et l'accompagnement de l'équipe m'ont donné 
                confiance pour sensibiliser efficacement sur le VIH/SIDA."
              </p>
              <div className="font-semibold">Mohamed O.</div>
              <div className="text-red-200 text-sm">Bénévole depuis 1 an</div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="text-red-100 mb-4 italic">
                "Chaque action, même petite, compte dans cette lutte. 
                Je suis fière de faire partie de cette mission."
              </p>
              <div className="font-semibold">Fatou B.</div>
              <div className="text-red-200 text-sm">Bénévole depuis 3 ans</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;