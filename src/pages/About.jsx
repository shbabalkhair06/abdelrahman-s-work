import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].about;

  const values = [
    { icon: '💝', text: t.values.giving, color: 'from-pink-500 to-rose-500' },
    { icon: '🤝', text: t.values.teamwork, color: 'from-blue-500 to-indigo-500' },
    { icon: '🌍', text: t.values.responsibility, color: 'from-green-500 to-emerald-500' },
    { icon: '🔍', text: t.values.transparency, color: 'from-purple-500 to-violet-500' },
    { icon: '✨', text: t.values.dedication, color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-luxury-gold/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle title={t.title} />

        <div className="max-w-6xl mx-auto">
          {/* About Content - Image with Text Overlay */}
          <div className="relative mb-16 animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              {/* Image - Full width with minimum height on mobile to fit text */}
              <img
                src="/about-us.jpg"
                alt={language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team'}
                className="w-full h-auto block object-cover min-h-[450px] sm:min-h-[400px] md:min-h-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />

              {/* Gradient Overlay - Stronger on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 md:via-primary-dark/40 to-transparent" />

              {/* Decorative corner accents - Smaller on mobile */}
              <div className="absolute top-0 left-0 w-12 h-12 md:w-24 md:h-24 border-t-4 border-l-4 border-luxury-gold/40 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-12 h-12 md:w-24 md:h-24 border-t-4 border-r-4 border-luxury-gold/40 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-24 md:h-24 border-b-4 border-l-4 border-luxury-gold/40 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-24 md:h-24 border-b-4 border-r-4 border-luxury-gold/40 rounded-br-3xl" />

              {/* Text Content Overlay - At bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 lg:p-12">
                <div className="max-w-4xl mx-auto">
                  {/* Glass card */}
                  <div className="bg-primary-dark/80 md:bg-primary-dark/70 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-8 border border-white/20 shadow-2xl">
                    {/* Decorative line */}
                    <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                      <div className="w-6 md:w-10 h-1 rounded-full bg-gradient-to-r from-luxury-gold to-accent" />
                      <span className="text-luxury-gold text-base md:text-xl">✦</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-luxury-gold/50 to-transparent" />
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 md:mb-4 font-medium text-white drop-shadow-lg">
                      {t.description}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium text-white/90 drop-shadow-lg">
                      {t.description2}
                    </p>

                    {/* Decorative bottom line */}
                    <div className="flex items-center gap-2 md:gap-4 mt-3 md:mt-4 justify-end">
                      <div className="flex-1 h-px bg-gradient-to-l from-luxury-gold/50 to-transparent" />
                      <span className="text-luxury-gold text-base md:text-xl">✦</span>
                      <div className="w-6 md:w-10 h-1 rounded-full bg-gradient-to-l from-luxury-gold to-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="relative">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
                <span className="text-3xl animate-bounce-slow">💎</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                {t.values.title}
              </h3>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="value-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="value-card-icon relative inline-block">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${value.color} blur-xl opacity-30 scale-150`} />
                    <span className="relative">{value.icon}</span>
                  </div>

                  <p className="text-lg font-semibold text-gray-800">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;