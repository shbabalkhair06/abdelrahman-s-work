import { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const t = content[language];

  // Handle scroll to update active section
  const handleScroll = () => {
    const sections = ['home', 'about', 'vision', 'initiatives', 'join', 'gallery', 'contact', 'partners'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-xl font-bold text-primary">
              {language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair'}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'home' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'about' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.about}
            </a>
            <a
              href="#vision"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('vision');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'vision' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.vision}
            </a>
            <a
              href="#initiatives"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('initiatives');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'initiatives' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.initiatives}
            </a>
            <a
              href="#join"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('join');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'join' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.join}
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('gallery');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'gallery' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`font-semibold transition-colors ${
                activeSection === 'contact' ? 'text-primary' : 'text-black hover:text-primary'
              }`}
            >
              {t.nav.contact}
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className={`font-semibold ${
                  activeSection === 'home' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className={`font-semibold ${
                  activeSection === 'about' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.about}
              </a>
              <a
                href="#vision"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('vision');
                }}
                className={`font-semibold ${
                  activeSection === 'vision' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.vision}
              </a>
              <a
                href="#initiatives"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('initiatives');
                }}
                className={`font-semibold ${
                  activeSection === 'initiatives' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.initiatives}
              </a>
              <a
                href="#join"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('join');
                }}
                className={`font-semibold ${
                  activeSection === 'join' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.join}
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('gallery');
                }}
                className={`font-semibold ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.gallery}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className={`font-semibold ${
                  activeSection === 'contact' ? 'text-primary' : 'text-black'
                }`}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;