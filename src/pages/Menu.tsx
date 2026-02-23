import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Star, ChevronRight, Search, Filter, Sparkles, Quote, UtensilsCrossed } from 'lucide-react';
import { MENU_DATA, MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';

export const Menu = () => {
  const { addToCart, cart, updateQuantity } = useCart();
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const categories = ['All', 'Beef Specials', 'Main Dishes', 'BBQ & Grilled', 'Street Food', 'Fries & Sides', 'Breads', 'Desserts', 'Drinks'];

  const filteredMenu = MENU_DATA.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getItemQuantity = (id: string) => {
    return cart.find(i => i.id === id)?.quantity || 0;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={12} 
            className={`${i < Math.floor(rating) ? 'text-brand-yellow fill-brand-yellow' : 'text-zinc-200 fill-zinc-200'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-24 pb-0 bg-zinc-50 min-h-screen"
    >
      {/* Banner Section */}
      <section className="px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto relative h-[400px] rounded-[3rem] overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/menubanner/1920/1080" 
            alt="Menu Banner" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center p-12 md:p-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand/20 backdrop-blur-md border border-brand/30 rounded-full text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> New Seasonal Specials
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                A Symphony of <br /> <span className="text-brand-yellow">Traditional Flavors</span>
              </h1>
              <p className="text-zinc-300 max-w-xl text-lg leading-relaxed">
                Explore our curated selection of Pakistani masterpieces, crafted with precision and served with passion in the heart of Noshahra Cantt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-white p-4 rounded-3xl border border-zinc-200 shadow-sm sticky top-24 z-30">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for your favorite dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-zinc-900 text-white shadow-lg' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand">{item.category}</span>
                    {renderStars(item.rating)}
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-brand transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-zinc-400">{item.rating} ({item.reviews} reviews)</span>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-8 pt-6 border-t border-zinc-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Price</p>
                      <p className="text-2xl font-bold text-zinc-900">Rs. {item.price}</p>
                    </div>
                  </div>

                  {/* Order Controls */}
                  <div className="flex items-center justify-between mt-auto">
                    {getItemQuantity(item.id) > 0 ? (
                      <div className="flex items-center gap-4 bg-zinc-100 rounded-2xl p-1.5 w-full">
                        <button 
                          onClick={() => updateQuantity(item.id, getItemQuantity(item.id) - 1)}
                          className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-zinc-900 hover:bg-brand transition-colors shadow-sm"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="font-bold text-lg flex-grow text-center">{getItemQuantity(item.id)}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-zinc-900 hover:bg-brand transition-colors shadow-sm"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="btn-primary w-full justify-center py-4 text-base group animate-blink"
                      >
                        Add to Cart <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-400">
              <Search size={32} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">No dishes found</h3>
            <p className="text-zinc-500">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>

      {/* Compelling Copy Section */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-8">The Korba Philosophy</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10 leading-tight">
                More Than Just a Meal, <br /> It's a <span className="text-brand">Legacy.</span>
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-12">
                At Korba, we believe that food is the ultimate connector. Our recipes have been passed down through generations, refined with modern precision to bring you an experience that is both nostalgic and groundbreaking.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Guest Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand">
                    <UtensilsCrossed size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">50+</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Signature Dishes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-zinc-800 rounded-[3rem] p-12 border border-white/10 relative">
                <Quote className="text-brand opacity-20 absolute top-10 right-10" size={80} />
                <p className="text-2xl font-serif italic leading-relaxed mb-10 relative z-10">
                  "The Beef Nihari at Korba is quite simply the best I've had in all of Pakistan. The depth of flavor is unparalleled, and the service is as refined as the food itself."
                </p>
                <div className="flex items-center gap-5">
                  <img src="https://i.pravatar.cc/150?u=critic" className="w-16 h-16 rounded-full border-2 border-brand shadow-xl" alt="Critic" />
                  <div>
                    <p className="font-bold text-xl">Ahmed Khan</p>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Culinary Historian</p>
                  </div>
                </div>
              </div>
              {/* Decorative background */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
