import React from 'react';
import { motion } from 'motion/react';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1574966739987-65e38f2cea46?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1552590635-27c2c2128b15?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1504691937050-615054259170?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1506085743579-c72b37471346?auto=format&fit=crop&q=80&w=800'
];

export const Gallery = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Visual Journey</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Our Gallery</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            A glimpse into the vibrant atmosphere, candid moments, and culinary masterpieces at Korba.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden group relative"
            >
              <img src={src} alt={`Gallery ${i}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
