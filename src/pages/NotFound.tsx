import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 px-6 min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-center"
    >
      <div className="w-24 h-24 bg-brand/10 rounded-3xl flex items-center justify-center text-brand mb-8 animate-float">
        <UtensilsCrossed size={48} />
      </div>
      <h1 className="text-8xl font-black text-zinc-900 mb-4 tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold text-zinc-800 mb-6">Page Not Found</h2>
      <p className="text-zinc-500 max-w-md mx-auto text-lg mb-10 leading-relaxed">
        We couldn't find the page you're looking for. It might have been moved or the recipe might still be in the works.
      </p>
      <Link to="/" className="btn-primary px-10 py-4 text-lg shadow-xl shadow-brand/20 group">
        Return Home <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};
