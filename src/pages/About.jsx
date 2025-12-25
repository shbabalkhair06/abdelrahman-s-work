import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].about;

  const values = [
    { icon: '💝', text: t.values.giving },
    { icon: '🤝', text: t.values.teamwork },
    { icon: '🌍', text: t.values.responsibility },
    { icon: '🔍', text: t.values.transparency },
    { icon: '✨', text: t.values.dedication },
  ];

  return (
    <section className="section-padding bg-gray-50 pt-24">
        <div className="container-custom">
          <SectionTitle title={t.title} />
          
          <div className="max-w-5xl mx-auto">
            {/* About Content with Image and Text Overlay */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 relative">
              <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
                {/* Background Image */}
                <img
                  src="/about-us.jpg"
                  alt={language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center rounded-2xl">
                        <div class="text-white text-center p-8">
                          <div class="text-6xl mb-4">👥</div>
                          <p class="text-xl font-bold">${language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team'}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* Overlay Gradient - Darker at bottom for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                
                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex items-end justify-center p-8 md:p-12 lg:p-16">
                  <div className="max-w-4xl w-full text-white">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl">
                      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 font-medium drop-shadow-lg">
                        {t.description}
                      </p>
                      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium drop-shadow-lg">
                        {t.description2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-8 text-center">
                {t.values.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <p className="text-lg font-semibold text-black">
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