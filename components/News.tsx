
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Nouvelles lignes vers le Ghana",
    excerpt: "Nagode Transfert étend son réseau avec 3 nouveaux départs quotidiens vers Accra et Kumasi.",
    date: "12 Mai 2024",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    category: "Réseau"
  },
  {
    id: 2,
    title: "Lancement de l'application mobile",
    excerpt: "Gérez vos réservations et vos envois directement depuis votre smartphone avec notre nouvelle app.",
    date: "05 Mai 2024",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    category: "Technologie"
  },
  {
    id: 3,
    title: "Engagement Sécurité 2024",
    excerpt: "Nous renouvelons notre flotte avec 10 nouveaux bus ultra-modernes équipés des dernières technologies de sécurité.",
    date: "28 Avril 2024",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    category: "Sécurité"
  }
];

const News: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-black text-[#6F1AAE] uppercase tracking-tighter">Actualités de Nagode Transfert</h2>
          <div className="w-24 h-1.5 bg-[#6F1AAE] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Restez informé des dernières nouveautés, promotions et changements de notre réseau.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-[#6F1AAE] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#6F1AAE] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {item.excerpt}
                </p>
                <button className="flex items-center gap-2 text-[#6F1AAE] font-black text-xs uppercase tracking-widest group/btn">
                  Lire la suite 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
