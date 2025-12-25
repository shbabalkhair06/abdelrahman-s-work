import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].gallery;

  // Gallery images with titles
  const images = [
    { src: '/gallery-1.jpg', title: language === 'ar' ? 'نشاط تطوعي' : 'Volunteer Activity' },
    { src: '/gallery-2.jpg', title: language === 'ar' ? 'فريق العمل' : 'Team Work' },
    { src: '/gallery-3.jpg', title: language === 'ar' ? 'مبادرة خيرية' : 'Charity Initiative' },
    { src: '/gallery-4.jpg', title: language === 'ar' ? 'عمل تطوعي' : 'Volunteer Work' },
    { src: '/gallery-5.jpg', title: language === 'ar' ? 'نشاط مجتمعي' : 'Community Activity' },
    { src: '/gallery-6.jpg', title: language === 'ar' ? 'زيارة تطوعية' : 'Volunteer Visit' },
    { src: '/gallery-7.jpg', title: language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team' },
    { src: '/gallery-8.jpg', title: language === 'ar' ? 'مبادرة إنسانية' : 'Humanitarian Initiative' },
    { src: '/gallery-9.jpg', title: language === 'ar' ? 'فريقنا التطوعي' : 'Our Volunteer Team' },
  ];

  return (
    <section className="section-padding bg-gray-50 pt-24">
        <div className="container-custom">
          <SectionTitle title={t.title} subtitle={t.subtitle} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                  {/* Overlay with title - appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <h3 className="text-white text-xl font-bold text-center px-4 drop-shadow-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Gallery;