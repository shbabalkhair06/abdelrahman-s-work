import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].home;
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [loadedImages, setLoadedImages] = useState([]);

  // All available images for the mosaic background
  const allImages = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
    '/gallery-7.jpg',
    '/gallery-8.jpg',
    '/gallery-9.jpg',
    '/about-us.jpg',
    '/elderly-home.jpg',
    '/orphan-iftar.jpg',
    '/clothes-bank.jpg',
    '/thareed-stop.jpg',
    '/azzouni-restaurant.jpg',
    '/11.jpg',
    '/22.jpg',
    '/33.jpg',
    '/44.jpg',
    '/55.jpg',
    '/66.jpg',
    '/م1.jpg',
    '/م2.jpg',
    '/م3.jpg',
    '/م4.jpg',
  ];

  // Track mouse for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Preload images
  useEffect(() => {
    setLoadedImages(allImages);
  }, []);

  const scrollToSection = (sectionId) => {
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

  // Floating particles (hearts and hands)
  const particles = [
    { emoji: '💝', size: 'text-2xl', delay: '0s', duration: '15s', left: '5%' },
    { emoji: '🤲', size: 'text-3xl', delay: '2s', duration: '18s', left: '15%' },
    { emoji: '💛', size: 'text-xl', delay: '4s', duration: '14s', left: '25%' },
    { emoji: '🌟', size: 'text-2xl', delay: '1s', duration: '16s', left: '35%' },
    { emoji: '💚', size: 'text-3xl', delay: '3s', duration: '20s', left: '45%' },
    { emoji: '🤝', size: 'text-2xl', delay: '5s', duration: '17s', left: '55%' },
    { emoji: '✨', size: 'text-xl', delay: '2.5s', duration: '15s', left: '65%' },
    { emoji: '💝', size: 'text-2xl', delay: '4.5s', duration: '19s', left: '75%' },
    { emoji: '🌙', size: 'text-3xl', delay: '1.5s', duration: '16s', left: '85%' },
    { emoji: '💫', size: 'text-xl', delay: '3.5s', duration: '18s', left: '95%' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* ============================================
            STUNNING IMAGE MOSAIC BACKGROUND
            ============================================ */}
        <div className="absolute inset-0">
          {/* Image Grid - Mosaic Style */}
          <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 auto-rows-fr">
            {loadedImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 hover:scale-110"
                  style={{
                    filter: 'grayscale(20%) brightness(0.7)',
                  }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Individual image overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/30" />
              </div>
            ))}
          </div>

          {/* Main Gradient Overlay - Creates the dramatic effect */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: `
                radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(212, 175, 55, 0.15) 0%, 
                  transparent 40%),
                radial-gradient(ellipse at center, 
                  rgba(15, 61, 38, 0.7) 0%, 
                  rgba(15, 61, 38, 0.85) 40%,
                  rgba(15, 61, 38, 0.95) 70%,
                  rgba(15, 61, 38, 0.98) 100%)
              `
            }}
          />

          {/* Animated Shine Effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                linear-gradient(45deg, 
                  transparent 30%, 
                  rgba(212, 175, 55, 0.1) 50%, 
                  transparent 70%)
              `,
              backgroundSize: '200% 200%',
              animation: 'shimmer 8s linear infinite',
            }}
          />

          {/* Vignette Effect */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />
        </div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 orb-animate"
            style={{
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, transparent 70%)',
              top: '5%',
              left: '5%',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-25 orb-animate"
            style={{
              background: 'radial-gradient(circle, rgba(45, 122, 90, 0.6) 0%, transparent 70%)',
              top: '60%',
              right: '5%',
              animationDelay: '3s',
            }}
          />
          <div
            className="absolute w-[300px] h-[300px] rounded-full blur-2xl opacity-30 orb-animate"
            style={{
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, transparent 70%)',
              bottom: '10%',
              left: '40%',
              animationDelay: '6s',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="particles-container">
          {particles.map((particle, index) => (
            <div
              key={index}
              className={`absolute ${particle.size} opacity-60 animate-particle`}
              style={{
                left: particle.left,
                bottom: '-50px',
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            >
              {particle.emoji}
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
        </div>

        {/* ============================================
            MAIN CONTENT
            ============================================ */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Decorative element above title */}
          <div className="flex justify-center mb-6 animate-fade-in-down">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-luxury-gold" />
              <span className="text-4xl md:text-5xl animate-heartbeat">💚</span>
              <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-luxury-gold" />
            </div>
          </div>

          {/* Main Title with Shimmer Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 animate-fade-in-up drop-shadow-2xl">
            <span className="text-shimmer">{t.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold text-white/90 animate-fade-in-up animation-delay-200 drop-shadow-lg">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            {t.description}
          </p>

          {/* CTA Box with Gold Glow */}
          <div className="animate-fade-in-up animation-delay-400 mb-10">
            <div className="inline-block relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-luxury-gold via-accent to-luxury-gold rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative bg-gradient-to-r from-luxury-gold via-accent-gold to-luxury-gold text-primary-dark px-8 md:px-12 py-4 md:py-5 rounded-xl text-xl md:text-2xl font-bold shadow-2xl border-2 border-white/20">
                {t.cta}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in-up animation-delay-500">
            <button
              onClick={() => scrollToSection('join')}
              className="group relative overflow-hidden bg-white text-primary px-8 md:px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl group-hover:animate-heartbeat">🤝</span>
                {t.joinBtn}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold">
                <span className="flex items-center gap-2">
                  <span className="text-2xl animate-heartbeat">🤝</span>
                  {t.joinBtn}
                </span>
              </span>
            </button>

            <button
              onClick={() => scrollToSection('volunteer-opportunities')}
              className="group relative overflow-hidden border-2 border-white/50 text-white px-8 md:px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-500 hover:border-luxury-gold hover:shadow-glow-gold hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl group-hover:animate-wave">🤝</span>
                {language === 'ar' ? 'فرص التطوع' : 'Volunteer'}
              </span>
            </button>
          </div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>
    </div>
  );
};

export default Home;