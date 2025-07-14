import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe } from 'lucide-react';
import logo from '../assets/logo_stop_sida.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const navigationLabels = {
    fr: [
      { name: 'Accueil', href: '/' },
      { name: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
      { name: 'Nos actions', href: '/nos-actions' },
      { name: 'Devenir bénévole', href: '/devenir-benevole' },
      { name: 'Actualités', href: '/actualites' },
      { name: 'Rapports', href: '/rapports' },
      { name: 'Partenaires', href: '/partenaires' },
      { name: 'Contact', href: '/contact' },
    ],
    en: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/qui-sommes-nous' },
      { name: 'Our Actions', href: '/nos-actions' },
      { name: 'Become a Volunteer', href: '/devenir-benevole' },
      { name: 'News', href: '/actualites' },
      { name: 'Reports', href: '/rapports' },
      { name: 'Partners', href: '/partenaires' },
      { name: 'Contact', href: '/contact' },
    ],
    ar: [
      { name: 'الرئيسية', href: '/' },
      { name: 'من نحن؟', href: '/qui-sommes-nous' },
      { name: 'أنشطتنا', href: '/nos-actions' },
      { name: 'كن متطوعًا', href: '/devenir-benevole' },
      { name: 'الأخبار', href: '/actualites' },
      { name: 'التقارير', href: '/rapports' },
      { name: 'الشركاء', href: '/partenaires' },
      { name: 'اتصل بنا', href: '/contact' },
    ],
  };
  const navigation = navigationLabels[language];

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container-max">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 +222 46 42 01 42</span>
              <span>✉️ stopsida_rim@yahoo.fr</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <select
                value={language}
                onChange={e => setLanguage(e.target.value as 'fr' | 'en' | 'ar')}
                className="bg-transparent border-none text-white text-sm focus:outline-none"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="text-black">{lang.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo Stop Sida" className="w-12 h-12 rounded-full object-cover border-2 border-red-600 bg-white" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">STOP SIDA</h1>
              <p className="text-sm text-gray-600">Mauritanie</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;