import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/Actions';
import Volunteer from './pages/Volunteer';
import News from './pages/News';
import Reports from './pages/Reports';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qui-sommes-nous" element={<About />} />
              <Route path="/nos-actions" element={<Actions />} />
              <Route path="/devenir-benevole" element={<Volunteer />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/rapports" element={<Reports />} />
              <Route path="/partenaires" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;