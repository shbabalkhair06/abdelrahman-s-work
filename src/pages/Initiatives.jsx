import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import InitiativeCard from '../components/InitiativeCard';

const Initiatives = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].initiatives;

  const initiatives = [
    {
      image: t.elderlyHome.image,
      title: t.elderlyHome.title,
      description: t.elderlyHome.description,
    },
    {
      image: t.orphanIftar.image,
      title: t.orphanIftar.title,
      description: t.orphanIftar.description,
    },
    {
      image: t.clothesBank.image,
      title: t.clothesBank.title,
      description: t.clothesBank.description,
    },
    {
      image: t.thareedStop.image,
      title: t.thareedStop.title,
      description: t.thareedStop.description,
    },
    {
      image: t.azzouniRestaurant.image,
      title: t.azzouniRestaurant.title,
      description: t.azzouniRestaurant.description,
    },
  ];

  return (
    <section className="section-padding bg-gray-50 pt-24">
        <div className="container-custom">
          <SectionTitle title={t.title} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <InitiativeCard
                key={index}
                image={initiative.image}
                title={initiative.title}
                description={initiative.description}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Initiatives;