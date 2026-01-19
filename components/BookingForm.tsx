
import React from 'react';
import { ChevronDown, Calendar, Construction } from 'lucide-react';
import { ServiceTab } from '../types';

type TripType = 'oneway' | 'roundtrip';

interface BookingFormProps {
  activeTab: ServiceTab;
  onTabChange: (tab: ServiceTab) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ activeTab, onTabChange }) => {
  const [tripType, setTripType] = React.useState<TripType>('oneway');

  const tabs = [
    { id: ServiceTab.TRANSPORT, label: 'Réserver' },
    { id: ServiceTab.COLIS, label: 'Suivre' },
    { id: ServiceTab.ARGENT, label: 'Transférer' },
  ];

  const countOptions = Array.from({ length: 51 }, (_, i) => i + 1);

  return (
    <div id="booking-section" className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-700 border border-gray-100 transition-all duration-500">
      {/* Onglets supérieurs */}
      <div className="flex bg-gray-50 border-b border-gray-200 p-1.5">
        {tabs.map((tab) => (
          <div key={tab.id} className="relative flex-1">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`w-full py-3.5 text-sm font-black transition-all duration-300 rounded-xl ${
                activeTab === tab.id 
                ? 'bg-[#6F1AAE] text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
            {activeTab === tab.id && (
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#6F1AAE] z-10"></div>
            )}
          </div>
        ))}
      </div>

      <div className="p-8 space-y-6 min-h-[420px]">
        {activeTab === ServiceTab.TRANSPORT && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="flex gap-8 mb-6 px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="tripType" 
                  checked={tripType === 'oneway'} 
                  onChange={() => setTripType('oneway')}
                  className="w-4 h-4 accent-[#6F1AAE] cursor-pointer"
                />
                <span className={`text-xs uppercase tracking-widest font-black transition-colors ${tripType === 'oneway' ? 'text-[#6F1AAE]' : 'text-gray-400'}`}>
                  Aller simple
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="tripType" 
                  checked={tripType === 'roundtrip'} 
                  onChange={() => setTripType('roundtrip')}
                  className="w-4 h-4 accent-[#6F1AAE] cursor-pointer"
                />
                <span className={`text-xs uppercase tracking-widest font-black transition-colors ${tripType === 'roundtrip' ? 'text-[#6F1AAE]' : 'text-gray-400'}`}>
                  Aller-retour
                </span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5">
              <div className="col-span-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Départ</label>
                <input type="text" placeholder="Ville de départ" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] transition-all font-medium" />
              </div>
              <div className="col-span-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Destination</label>
                <input type="text" placeholder="Ville d'arrivée" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] transition-all font-medium" />
              </div>

              {tripType === 'oneway' ? (
                <div className="col-span-2 relative">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Date de voyage</label>
                  <div className="relative group">
                    <input type="date" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none cursor-pointer appearance-none font-medium" />
                    <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="col-span-1 relative">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Date aller</label>
                    <div className="relative group">
                      <input type="date" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none cursor-pointer font-medium" />
                      <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="col-span-1 relative">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Date retour</label>
                    <div className="relative group">
                      <input type="date" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none cursor-pointer font-medium" />
                      <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}

              <div className="col-span-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Passagers</label>
                <div className="relative group">
                  <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none appearance-none pr-10 cursor-pointer font-medium">
                    {countOptions.map(n => <option key={n} value={n}>{n} {n > 1 ? 'Passagers' : 'Passager'}</option>)}
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Places</label>
                <div className="relative group">
                  <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none appearance-none pr-10 cursor-pointer font-medium">
                    {countOptions.map(n => <option key={n} value={n}>{n} {n > 1 ? 'Places' : 'Place'}</option>)}
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="w-full py-4.5 bg-gradient-to-r from-[#6F1AAE] to-[#8A2BE2] text-white font-black rounded-xl text-sm shadow-xl hover:shadow-[#6F1AAE]/40 transition-all transform active:scale-[0.98] uppercase tracking-widest">
                RECHERCHER UN VOYAGE
              </button>
            </div>
          </div>
        )}

        {activeTab === ServiceTab.COLIS && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="grid grid-cols-1 gap-y-6">
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Numéro de colis</label>
                <input type="text" placeholder="Ex: NT-123456" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] transition-all font-bold" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Agence départ</label>
                  <input type="text" placeholder="Ville départ" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8A2BE2] font-medium" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1.5 ml-1">Agence destination</label>
                  <input type="text" placeholder="Ville arrivée" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8A2BE2] font-medium" />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button className="w-full py-4.5 bg-gradient-to-r from-[#6F1AAE] to-[#8A2BE2] text-white font-black rounded-xl text-sm shadow-xl hover:shadow-[#6F1AAE]/40 transition-all transform active:scale-[0.98] uppercase tracking-widest">
                Suivre mon colis
              </button>
            </div>
          </div>
        )}

        {activeTab === ServiceTab.ARGENT && (
           <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in-95 duration-600">
             <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
               <Construction size={48} className="animate-pulse" />
             </div>
             <h3 className="text-2xl font-black text-[#6F1AAE] mb-2 uppercase tracking-tight">Nagode Pay</h3>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Phase de développement</p>
             <p className="text-sm text-gray-400 mt-5 max-w-xs mx-auto leading-relaxed font-medium">
               Nous préparons un service de transfert d'argent ultra-sécurisé pour toute l'Afrique de l'Ouest.
             </p>
             <div className="mt-10 px-6 py-2 bg-gray-100 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
               Bientôt disponible
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
