import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';
import logo from '../assets/logo_stop_sida.jpg';

const Footer: React.FC = () => {
  const t = useTranslations();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo Stop Sida" className="w-10 h-10 rounded-full object-cover border-2 border-red-600 bg-white" />
              <div>
                <h3 className="text-xl font-bold">STOP SIDA</h3>
                <p className="text-sm text-gray-400">Mauritanie</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.footer.about}
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              <li><Link to="/qui-sommes-nous" className="text-gray-300 hover:text-white transition-colors">{t.footer.aboutUs}</Link></li>
              <li><Link to="/nos-actions" className="text-gray-300 hover:text-white transition-colors">{t.footer.ourActions}</Link></li>
              <li><Link to="/devenir-benevole" className="text-gray-300 hover:text-white transition-colors">{t.footer.becomeVolunteer}</Link></li>
              <li><Link to="/actualites" className="text-gray-300 hover:text-white transition-colors">{t.footer.news}</Link></li>
              <li><Link to="/rapports" className="text-gray-300 hover:text-white transition-colors">{t.footer.reports}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rue Abdallahi Ould Moustapha<br />
                  Tevragh Zeina, Nouakchott<br />
                  Mauritanie
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">+222 46 42 01 42</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">stopsida_rim@yahoo.fr</span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.footer.follow}</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">{t.footer.newsletter}</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors text-sm">
                  {t.footer.subscribe}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 STOP SIDA Mauritanie. {t.footer.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.footer.legal}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;