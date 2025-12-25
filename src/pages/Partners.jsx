import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Partners = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].partners;

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
    <section className="section-padding bg-gray-50 pt-24">
        <div className="container-custom">
          <SectionTitle title={t.title} subtitle={t.subtitle} />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center mb-12">
              <p className="text-lg text-black leading-relaxed mb-8">
                {t.description}
              </p>
              <button onClick={() => scrollToSection('contact')} className="btn-primary inline-block">
                {t.becomePartner}
              </button>
            </div>

            {/* Partner Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {language === 'ar' ? 'شراكة استراتيجية' : 'Strategic Partnership'}
                </h3>
                <p className="text-black">
                  {language === 'ar'
                    ? 'بناء شراكات طويلة الأمد لتحقيق أهداف مشتركة'
                    : 'Building long-term partnerships to achieve common goals'}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {language === 'ar' ? 'تأثير مستدام' : 'Sustainable Impact'}
                </h3>
                <p className="text-black">
                  {language === 'ar'
                    ? 'خلق تأثير إيجابي مستدام في المجتمع'
                    : 'Creating sustainable positive impact in the community'}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {language === 'ar' ? 'رؤية مشتركة' : 'Shared Vision'}
                </h3>
                <p className="text-black">
                  {language === 'ar'
                    ? 'العمل معاً لتحقيق رؤية إنسانية مشتركة'
                    : 'Working together to achieve a shared humanitarian vision'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Partners;
