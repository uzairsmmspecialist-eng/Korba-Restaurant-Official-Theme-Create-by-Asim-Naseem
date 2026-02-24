import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Star, Instagram, Twitter, Facebook, Search } from 'lucide-react';

const CHEFS = [
  {
    name: "Chef Ahmed Khan",
    role: "Executive Chef",
    specialty: "Traditional Pulao & Nihari",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "With over 20 years of experience in royal kitchens, Chef Ahmed brings the authentic taste of Noshahra to your plate."
  },
  {
    name: "Chef Farman Shah",
    role: "Head of Pastry",
    specialty: "Traditional Desserts",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Chef Farman specializes in fusion desserts that blend traditional Pakistani sweets with modern pastry techniques."
  },
  {
    name: "Chef Zeeshan Ali",
    role: "Grill Master",
    specialty: "Charcoal Seekh Kababs",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Master of the open flame, Zeeshan ensures every kabab is smoked to perfection using traditional wood-fire methods."
  }
];

const TEAM_MEMBERS = [
  { name: "Usman Ghani", role: "Restaurant Manager" },
  { name: "Fatima Noor", role: "Front of House" },
  { name: "Hamza Malik", role: "Sous Chef" },
  { name: "Sara Khan", role: "Customer Relations" },
  { name: "Zainab Bibi", role: "Operations Lead" },
  { name: "Ali Ahmed", role: "Quality Control" },
  { name: "Bilal Sheikh", role: "Logistics Manager" },
  { name: "Sana Javed", role: "Marketing Head" }
];

export const Team = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Our Culinary Masters</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Meet Our Expert Chefs</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
            The hands behind the magic. Our team of senior chefs brings decades of experience and passion to every dish.
          </p>
        </div>

        {/* Senior Chefs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-32">
          {CHEFS.map((chef, i) => (
            <motion.div 
              key={chef.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100 group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 sm:pb-8 gap-3 sm:gap-4">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-colors">
                    <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-colors">
                    <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-colors">
                    <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              </div>
              <div className="p-6 sm:p-10 text-center">
                <div className="inline-flex items-center gap-1 text-brand-yellow mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{chef.name}</h3>
                <p className="text-brand font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-6">{chef.role}</p>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">"{chef.bio}"</p>
                <div className="pt-4 sm:pt-6 border-t border-zinc-100">
                  <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Specialty</p>
                  <p className="font-bold text-sm sm:text-base text-zinc-900">{chef.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members Section */}
        <div className="bg-zinc-900 rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-16 md:p-24 text-white">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Dedicated Team</h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">The backbone of Korba Restaurant, ensuring every guest receives royal treatment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="font-bold text-base sm:text-lg mb-1">{member.name}</p>
                <p className="text-[10px] sm:text-xs text-brand-yellow font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
