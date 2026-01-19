
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Search } from 'lucide-react';

interface Agency {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}

interface CountryAgencies {
  country: string;
  flag: string;
  agencies: Agency[];
}

const agenciesData: CountryAgencies[] = [
  {
    country: "Togo",
    flag: "🇹🇬",
    agencies: [
      { id: "tg-1", city: "Agbalepedo", address: "Quartier Agbalepedo, Lomé", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-2", city: "Agoe Zongo", address: "Agoe Zongo, Lomé", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-3", city: "Adeticope", address: "Zone Industrielle Adeticope", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-4", city: "Notsè", address: "Centre Ville Notsè", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-5", city: "Atakpame", address: "Quartier Agbonou", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-6", city: "Anié", address: "Route Nationale 1, Anié", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-7", city: "Blitta", address: "Centre Ville Blitta", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-8", city: "Sotouboua", address: "Centre Ville Sotouboua", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-9", city: "Adjengré", address: "Centre Ville Adjengré", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-10", city: "Sokodé", address: "Quartier Administratif", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-11", city: "Bassar", address: "Centre Ville Bassar", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-12", city: "Kabou", address: "Gare Routière Kabou", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-13", city: "G/Kouka", address: "Grand Kouka Centre", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-14", city: "Tchamba", address: "Centre Ville Tchamba", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-15", city: "Kaboli", address: "Centre Ville Kaboli", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-16", city: "Kara", address: "Face au Grand Marché", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-17", city: "Ketao", address: "Marché International de Ketao", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-18", city: "Kanté", address: "Route Nationale 1, Kanté", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-19", city: "Niamtougou", address: "A proximité de l'Aéroport", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-20", city: "Mango", address: "Centre Ville Mango", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-21", city: "Dapaong", address: "Quartier Commercial", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" },
      { id: "tg-22", city: "Cinkassé", address: "Cinkassé", phone: "+228 22 00 00 00", email: "contact@nagodetransfert.com" }
    ]
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    agencies: [
      { id: "gh-1", city: "Atchimota", address: "Achimota Station, Accra", phone: "+233 20 000 0000", email: "ghana@nagodetransfert.com" },
      { id: "gh-2", city: "Adenta", address: "Adenta Barrier, Accra", phone: "+233 24 000 0000", email: "ghana@nagodetransfert.com" }
    ]
  },
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    agencies: [
      { id: "ci-1", city: "Koumassi", address: "Koumassi, Gare de Bassam, Abidjan", phone: "+225 07 00 00 00 00", email: "ci@nagodetransfert.com" }
    ]
  }
];

const Agencies: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<string>("Togo");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgencies = agenciesData
    .find(c => c.country === activeCountry)
    ?.agencies.filter(a => 
      a.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
      a.address.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <section className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-black text-[#6F1AAE] uppercase tracking-tighter">Nos Agences</h2>
          <div className="w-24 h-1.5 bg-[#6F1AAE] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Retrouvez-nous dans plus de {agenciesData.reduce((acc, curr) => acc + curr.agencies.length, 0)} points de service à travers l'Afrique de l'Ouest.
          </p>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex bg-gray-100 p-1.5 rounded-2xl w-full md:w-auto overflow-x-auto no-scrollbar">
            {agenciesData.map((c) => (
              <button
                key={c.country}
                onClick={() => setActiveCountry(c.country)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeCountry === c.country 
                  ? 'bg-white text-[#6F1AAE] shadow-md scale-105' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <span className="text-xl">{c.flag}</span>
                {c.country}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher une ville..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-[#6F1AAE] outline-none transition-all"
            />
          </div>
        </div>

        {/* Agencies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgencies.length > 0 ? (
            filteredAgencies.map((agency, idx) => (
              <div 
                key={agency.id} 
                className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-[#6F1AAE]/5 text-[#6F1AAE] rounded-2xl flex items-center justify-center group-hover:bg-[#6F1AAE] group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase tracking-widest">
                    Ouverte
                  </div>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#6F1AAE] transition-colors">{agency.city}</h3>
                <p className="text-gray-500 text-sm font-medium mb-6 flex items-start gap-2">
                  <span className="mt-1 opacity-50"><MapPin size={14} /></span>
                  {agency.address}
                </p>

                <div className="space-y-3 pt-6 border-t border-gray-50">
                  <a href={`tel:${agency.phone}`} className="flex items-center gap-3 text-sm font-bold text-gray-700 hover:text-[#6F1AAE] transition-colors">
                    <Phone size={16} className="text-[#6F1AAE]" />
                    {agency.phone}
                  </a>
                  <a href={`mailto:${agency.email}`} className="flex items-center gap-3 text-sm font-bold text-gray-700 hover:text-[#6F1AAE] transition-colors">
                    <Mail size={16} className="text-[#6F1AAE]" />
                    {agency.email}
                  </a>
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Globe size={16} className="text-[#6F1AAE]" />
                    www.nagodetransfert.com
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Aucune agence trouvée</h3>
              <p className="text-gray-500">Essayez une autre recherche ou changez de pays.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Agencies;
