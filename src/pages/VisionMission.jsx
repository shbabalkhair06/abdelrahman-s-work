import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const VisionMission = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].vision;

  return (
    <section className="section-padding pt-24">
        <div className="container-custom">
          <SectionTitle title={t.title} />
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-xl p-8 text-white">
              <div className="text-5xl mb-4 text-center">👁️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {t.visionTitle}
              </h3>
              <p className="text-lg leading-relaxed text-center">
                {t.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-accent to-accent-dark rounded-xl shadow-xl p-8 text-white">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {t.missionTitle}
              </h3>
              <p className="text-lg leading-relaxed text-center">
                {t.mission}
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default VisionMission;
