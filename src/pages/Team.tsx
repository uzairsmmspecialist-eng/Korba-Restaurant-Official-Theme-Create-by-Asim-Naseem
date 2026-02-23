import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Star, Instagram, Twitter, Facebook, Search } from 'lucide-react';

const CHEFS = [
  {
    name: "Chef Ahmed Khan",
    role: "Executive Chef",
    specialty: "Traditional Pulao & Nihari",
    image: "https://i.pravatar.cc/400?u=ahmed",
    bio: "With over 20 years of experience in royal kitchens, Chef Ahmed brings the authentic taste of Noshahra to your plate."
  },
  {
    name: "Chef Maria Zain",
    role: "Head of Pastry",
    specialty: "Traditional Desserts",
    image: "https://i.pravatar.cc/400?u=maria",
    bio: "Chef Maria specializes in fusion desserts that blend traditional Pakistani sweets with modern pastry techniques."
  },
  {
    name: "Chef Zeeshan Ali",
    role: "Grill Master",
    specialty: "Charcoal Seekh Kababs",
    image: "https://i.pravatar.cc/400?u=zeeshan",
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
      className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Our Culinary Masters</p>
          <h1 className="text-6xl font-bold tracking-tight mb-6">Meet Our Expert Chefs</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            The hands behind the magic. Our team of senior chefs brings decades of experience and passion to every dish.
          </p>
        </div>

        {/* Senior Chefs Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {CHEFS.map((chef, i) => (
            <motion.div 
              key={chef.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100 group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 gap-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-colors">
                    <Instagram size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-brand hover:text-white transition-colors">
                    <Facebook size={18} />
                  </button>
                </div>
              </div>
              <div className="p-10 text-center">
                <div className="inline-flex items-center gap-1 text-brand-yellow mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-2xl font-bold mb-2">{chef.name}</h3>
                <p className="text-brand font-bold text-xs uppercase tracking-widest mb-6">{chef.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 italic">"{chef.bio}"</p>
                <div className="pt-6 border-t border-zinc-100">
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Specialty</p>
                  <p className="font-bold text-zinc-900">{chef.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members Section */}
        <div className="bg-zinc-900 rounded-[4rem] p-16 md:p-24 text-white">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Dedicated Team</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">The backbone of Korba Restaurant, ensuring every guest receives royal treatment.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="font-bold text-lg mb-1">{member.name}</p>
                <p className="text-xs text-brand-yellow font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
