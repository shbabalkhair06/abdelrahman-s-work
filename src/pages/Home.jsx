import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].home;

  // All images from the website
  const allImages = [
    '/about-us.jpg',
    '/elderly-home.jpg',
    '/orphan-iftar.jpg',
    '/clothes-bank.jpg',
    '/thareed-stop.jpg',
    '/azzouni-restaurant.jpg',
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
    '/gallery-7.jpg',
    '/gallery-8.jpg',
    '/gallery-9.jpg',
  ];

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Collage - Grid of all images */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 h-full w-full opacity-30">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-primary/50 to-primary/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-5xl mb-6">❤️</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold drop-shadow-lg">
            {t.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-lg">
            {t.description}
          </p>
          
          {/* CTA Box */}
          <div className="bg-accent text-white px-8 py-4 rounded-xl text-xl md:text-2xl font-bold mb-8 inline-block shadow-xl">
            {t.cta}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('join')} className="btn-primary">
              {t.joinBtn}
            </button>
            <button onClick={() => scrollToSection('initiatives')} className="btn-secondary">
              {t.initiativesBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;