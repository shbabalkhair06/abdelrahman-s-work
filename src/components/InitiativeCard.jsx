const InitiativeCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div class="text-white text-center p-4">
                  <div class="text-4xl mb-2">🎯</div>
                </div>
              </div>
            `;
          }}
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-3 text-center">
          {title}
        </h3>
        <p className="text-black text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InitiativeCard;