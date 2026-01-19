
import React from 'react';

const Destinations: React.FC = () => {
  const countries = [
    { name: 'Bénin', img: 'https://images.unsplash.com/photo-1596401057633-531035771761?auto=format&fit=crop&q=80&w=400', flag: 'BJ' },
    { name: 'Ghana', img: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=400', flag: 'GH' },
    { name: 'Togo', img: 'https://images.unsplash.com/photo-1530939525049-3b9e4a3c1e29?auto=format&fit=crop&q=80&w=400', flag: 'TG' },
    { name: 'Burkina Faso', img: 'https://images.unsplash.com/photo-1518156172600-4b3602f9e422?auto=format&fit=crop&q=80&w=400', flag: 'BF' },
    { name: 'Côte d\'Ivoire', img: 'https://images.unsplash.com/photo-1589327668500-2d857d9b047a?auto=format&fit=crop&q=80&w=400', flag: 'CI' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#2D1B69]">Parcourez l'Afrique avec Nagode Transfert</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Nous sommes présents dans toute la sous-région pour faciliter vos déplacements et vos échanges commerciaux.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {countries.map((country, idx) => (
            <div key={idx} className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <img src={country.img} alt={country.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                 <div className="w-8 h-6 rounded overflow-hidden border border-white/20 shadow-sm flex">
                    <div className={`h-full flex-1 ${idx === 0 ? 'bg-green-500' : idx === 2 ? 'bg-green-600' : 'bg-orange-400'}`}></div>
                    <div className={`h-full flex-1 ${idx === 0 ? 'bg-yellow-400' : idx === 2 ? 'bg-yellow-400' : 'bg-white'}`}></div>
                    <div className={`h-full flex-1 ${idx === 0 ? 'bg-red-500' : idx === 2 ? 'bg-red-500' : 'bg-green-600'}`}></div>
                 </div>
                 <span className="text-xl font-bold text-white tracking-wide">{country.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
