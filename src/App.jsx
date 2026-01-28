import { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Initiatives from './pages/Initiatives';
import JoinUs from './pages/JoinUs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import VolunteerOpportunity from './pages/VolunteerOpportunity';

// Language Context
export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to Arabic
    return localStorage.getItem('language') || 'ar';
  });

  useEffect(() => {
    // Update HTML attributes when language changes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  // Smooth scroll handler
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80; // Navbar height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="vision">
            <VisionMission />
          </div>
          <div id="initiatives">
            <Initiatives />
          </div>
          <div id="volunteer-opportunities">
            <VolunteerOpportunity />
          </div>
          <div id="join">
            <JoinUs />
          </div>
          <div id="gallery">
            <Gallery />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="partners">
            <Partners />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;