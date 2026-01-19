
import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, User, MessageSquare } from 'lucide-react';

const Suggestions: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de l'envoi
    console.log("Envoi de la suggestion à info@nagodetransfert.com", formData);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="suggestions-form" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-black text-[#6F1AAE] uppercase tracking-tighter">Suggestions</h2>
          <p className="text-gray-500 font-medium">
            Votre avis nous aide à grandir. Partagez vos idées ou vos préoccupations directement avec l'équipe Nagode Transfert.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          {isSent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-95 duration-500">
               <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 size={40} />
               </div>
               <h3 className="text-2xl font-black text-gray-900 mb-2">Message envoyé !</h3>
               <p className="text-gray-500 max-w-xs font-medium">
                 Merci pour votre suggestion. Nous l'étudierons avec la plus grande attention.
               </p>
               <button 
                onClick={() => setIsSent(false)}
                className="mt-8 text-[#6F1AAE] font-bold text-sm uppercase tracking-widest underline"
               >
                 Envoyer un autre message
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Nom Complet</label>
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-[#6F1AAE] focus:ring-1 focus:ring-[#6F1AAE] outline-none transition-all font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Votre Email</label>
                  <div className="relative">
                    <input 
                      required
                      type="email" 
                      placeholder="jean@exemple.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-[#6F1AAE] focus:ring-1 focus:ring-[#6F1AAE] outline-none transition-all font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Message / Suggestion</label>
                <div className="relative">
                  <textarea 
                    required
                    rows={5}
                    placeholder="Dites-nous ce que vous en pensez..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-[#6F1AAE] focus:ring-1 focus:ring-[#6F1AAE] outline-none transition-all font-medium resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                  <MessageSquare size={18} className="absolute left-4 top-6 text-gray-300" />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#6F1AAE] text-white font-black rounded-2xl shadow-xl hover:shadow-[#6F1AAE]/40 hover:bg-[#5A148C] transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest"
                >
                  <Send size={18} />
                  Envoyer à info@nagodetransfert.com
                </button>
              </div>
            </form>
          )}

          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#6F1AAE]/5 rounded-bl-[5rem] -mr-10 -mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
