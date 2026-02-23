import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UtensilsCrossed, 
  Clock, 
  MapPin, 
  Star, 
  ChevronRight, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  ChefHat,
  Grape,
  Leaf,
  Mail,
  Phone,
  Send,
  Calendar,
  User,
  Search,
  ShoppingBag,
  ShieldCheck,
  Info
} from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Menu } from './pages/Menu';
import { Checkout } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';
import { Team } from './pages/Team';
import { Reservations } from './pages/Reservations';
import { Disclaimer } from './pages/Disclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Sitemap } from './pages/Sitemap';
import { BlogPost, blogPosts } from './pages/BlogPost';
import { NotFound } from './pages/NotFound';
import { Login, Signup } from './pages/Auth';
import { Chatbot } from './components/Chatbot';

// --- Shared Components ---

const BrandBanner = () => {
  const brands = [
    "Shan Foods", "National Foods", "Habib Cooking Oil", "Tapal Tea", 
    "Mehran Foods", "Mitchell's", "Shezan", "Knorr Pakistan", "Young's", "Laziza"
  ];
  
  return (
    <div className="bg-zinc-900 py-12 overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="mx-12 flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-yellow rounded-full" />
            <span className="text-white/40 text-xl font-bold uppercase tracking-[0.3em] hover:text-brand transition-colors cursor-default">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkPage = location.pathname === '/' || location.pathname === '/blog';
  const textColorClass = isScrolled 
    ? 'text-zinc-900' 
    : (isDarkPage ? 'text-white' : 'text-zinc-900');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl border-b-4 border-brand py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand-yellow transition-colors">
            <UtensilsCrossed size={22} className="text-white" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${textColorClass}`}>
            KORBA<span className="text-brand">.</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Menu', path: '/menu' },
            { name: 'Reservations', path: '/reservations' },
            { name: 'Team', path: '/team' },
            { name: 'About', path: '/about' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${
                location.pathname === item.path 
                  ? 'text-brand border-b-2 border-brand' 
                  : (isScrolled ? 'text-zinc-600 hover:text-brand' : (isDarkPage ? 'text-white/80 hover:text-brand-yellow' : 'text-zinc-600 hover:text-brand'))
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <input 
                    type="text" 
                    placeholder="Search food..."
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        navigate(`/menu?search=${(e.target as HTMLInputElement).value}`);
                        setShowSearch(false);
                      }
                    }}
                    className={`bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-yellow ${isScrolled || !isDarkPage ? 'text-zinc-900 border-zinc-200' : 'text-white'}`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 transition-colors ${isScrolled || !isDarkPage ? 'text-zinc-600 hover:text-brand' : 'text-white hover:text-brand-yellow'}`}
            >
              <Search size={20} />
            </button>
          </div>

          <Link to="/checkout" className={`relative p-2 transition-colors ${isScrolled || !isDarkPage ? 'text-zinc-600 hover:text-brand' : 'text-white hover:text-brand-yellow'}`}>
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-yellow text-zinc-900 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-zinc-900">
                {totalItems}
              </span>
            )}
          </Link>
          
          {user ? (
            <Link to="/dashboard" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-brand-yellow hover:text-zinc-900 transition-all shadow-lg">
              {user.name.charAt(0)}
            </Link>
          ) : (
            <Link to="/login" className="btn-primary text-sm hidden sm:flex bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};


const Footer = () => (
  <footer className="bg-zinc-900 pt-24 pb-12 px-6 rounded-t-[4rem] text-white border-t-8 border-brand">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
              <UtensilsCrossed size={24} className="text-white" />
            </div>
            <span className="text-3xl font-black tracking-tighter">KORBA<span className="text-brand-yellow">.</span></span>
          </Link>
          <p className="text-zinc-400 leading-relaxed">
            Crafting culinary excellence through the fusion of tradition and innovation. Experience the legendary taste of Noshahra Cantt.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, url: 'https://instagram.com' },
              { Icon: Facebook, url: 'https://facebook.com' },
              { Icon: Twitter, url: 'https://twitter.com' }
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-zinc-900 transition-all border border-white/10">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-brand-yellow uppercase tracking-widest">Site Map</h4>
          <ul className="grid grid-cols-2 gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Menu', path: '/menu' },
              { name: 'Reservations', path: '/reservations' },
              { name: 'Team', path: '/team' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
              { name: 'Dashboard', path: '/dashboard' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-zinc-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform text-brand" /> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-brand-yellow uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                <MapPin size={18} className="text-brand" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                123 Culinary Lane, <br /> Noshahra Cantt, Pakistan
              </p>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                <Phone size={18} className="text-brand" />
              </div>
              <p className="text-zinc-400 text-sm">+92 (300) 123-4567</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-brand-yellow uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/privacy-policy" className="text-zinc-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group">
                <ShieldCheck size={14} className="text-brand" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-zinc-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group">
                <Info size={14} className="text-brand" /> Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="text-zinc-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group">
                <MapPin size={14} className="text-brand" /> Site Map
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-500 text-sm">
          © 2024 Korba Restaurant. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-zinc-500">
          <Link to="/sitemap" className="hover:text-brand transition-colors">Site Map</Link>
          <Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
          <Link to="/disclaimer" className="hover:text-brand transition-colors">Disclaimer</Link>
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
  >
    {/* Enhanced Hero Section */}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-900">
      {/* Background Classic Effect: Red and Yellow Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-900" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-yellow rounded-full blur-[130px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-8 border border-brand/20 backdrop-blur-sm">
            <Star size={14} fill="currentColor" />
            Noshahra's Finest Dining
          </div>
          <h1 className="text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
            Authentic <br />
            <span className="text-brand-yellow italic font-serif">Kachay Beef</span> <br />
            Pulao
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-12 leading-relaxed font-medium">
            Experience the legendary taste of our slow-cooked beef pulao and charcoal-grilled seekh kababs. A royal feast awaits you.
          </p>
          <div className="flex flex-wrap gap-5 mb-12">
            <Link to="/menu" className="btn-hero">
              Order Your Feast <ChevronRight size={20} />
            </Link>
            <Link to="/team" className="btn-hero-alt">
              Meet Our Team
            </Link>
          </div>

          {/* Hero Scrolling Products */}
          <div className="relative overflow-hidden py-4 border-y border-white/10">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {['Beef Pulao', 'Seekh Kabab', 'Chicken Tikka', 'Karak Chai', 'Special Karahi', 'Shami Kabab'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                  <span className="text-white/60 text-sm font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
              {['Beef Pulao', 'Seekh Kabab', 'Chicken Tikka', 'Karak Chai', 'Special Karahi', 'Shami Kabab'].map((item, i) => (
                <div key={i+10} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                  <span className="text-white/60 text-sm font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12 animate-float">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-brand-yellow/30 shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/pakistan-pulao-hero/800/1000" 
                  alt="Gourmet Pulao" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-brand/30 shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/pakistan-rolls-hero/800/800" 
                  alt="Spring Rolls" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-6 animate-float-delayed">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-brand/30 shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/pakistan-shawarma-hero/800/800" 
                  alt="Chicken Shawarma" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-brand-yellow/30 shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/pakistan-fries-hero/800/1000" 
                  alt="Crispy French Fries" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center p-4 shadow-2xl border-4 border-zinc-900"
          >
            <p className="text-zinc-900 font-black text-center text-xs leading-tight uppercase tracking-tighter">
              Best in <br /> Noshahra <br /> Cantt
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Brand Banner Section */}
    <BrandBanner />

    {/* The Korba Standard Section */}
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">The Korba Standard</p>
          <h2 className="text-5xl font-bold tracking-tight mb-6">A New Layer of Taste</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Each culinary technique works independently and seamlessly together to support your entire dining journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: UtensilsCrossed, title: 'Precision Cooking', desc: 'Traditional open-fire techniques combined to ensure every protein is cooked to absolute perfection.', img: 'https://picsum.photos/seed/grill-meat/600/400' },
            { icon: ChefHat, title: 'Masterful Coordination', desc: 'Our kitchen operates with the efficiency of a high-tech lab, ensuring your meal arrives at the peak of flavor.', highlight: true, img: 'https://picsum.photos/seed/chef-cooking/600/400' },
            { icon: Leaf, title: 'Sustainable Sourcing', desc: 'We partner with local farms to bring you ingredients that are not only fresh but ethically produced.', img: 'https://picsum.photos/seed/fresh-vegetables/600/400' }
          ].map((feature, i) => (
            <div key={feature.title} className={`bento-card group p-0 overflow-hidden relative ${feature.highlight ? 'bg-brand border-none' : 'bg-zinc-50 hover:border-brand-yellow/50'}`}>
              <div className="h-48 overflow-hidden relative">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className={`absolute inset-0 ${feature.highlight ? 'bg-brand/40' : 'bg-black/20'}`} />
              </div>
              <div className="p-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${feature.highlight ? 'bg-white/20' : 'bg-zinc-100 group-hover:bg-brand-yellow'}`}>
                  <feature.icon size={24} className={feature.highlight ? 'text-white' : 'text-zinc-900'} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-white' : ''}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${feature.highlight ? 'text-white/80' : 'text-zinc-500'}`}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bento Menu Section */}
    <section id="menu" className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Seasonal Selection</p>
            <h2 className="text-5xl font-bold tracking-tight">Designed for Every Plate</h2>
          </div>
          <p className="text-zinc-500 max-w-md text-lg">
            Whether you're exploring our tasting menu, or opting for a classic à la carte experience, our kitchen adapts effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-[1000px] md:h-[700px]">
          <div className="md:col-span-2 md:row-span-2 bento-card bg-zinc-50 p-0 overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/pakistan-pulao/1000/1000" 
              alt="Beef Pulao" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-[0.3em] mb-3">Signature Dish</span>
              <h3 className="text-3xl font-bold mb-3">Kachay Beef Pulao</h3>
              <p className="text-white/70 text-base max-w-xs leading-relaxed">Tender beef, aromatic basmati rice, and our secret blend of spices.</p>
            </div>
          </div>

          <div className="md:col-span-2 bento-card bg-white flex flex-col justify-center p-12 border-l-8 border-brand shadow-xl">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                <UtensilsCrossed size={28} />
              </div>
              <h3 className="text-2xl font-bold">Family Platters</h3>
            </div>
            <p className="text-zinc-500 text-base mb-8 leading-relaxed">Perfect for sharing. Includes Pulao, Seekh Kababs, Tikka, and fresh Naan for the whole family.</p>
            <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
              <span className="text-2xl font-bold text-brand">Rs. 3500</span>
              <Link to="/menu" className="text-brand font-bold text-sm flex items-center gap-2 group">
                Order Now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="bento-card bg-white p-0 overflow-hidden group relative">
            <img 
              src="https://picsum.photos/seed/pakistan-kabab/600/600" 
              alt="Seekh Kabab" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>

          <div className="bento-card bg-white p-0 overflow-hidden group relative">
            <img 
              src="https://picsum.photos/seed/pakistan-tea/600/600" 
              alt="Karak Chai" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>

    {/* Food Showcase Scrolling Section */}
    <section className="py-32 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Culinary Excellence</h2>
        <p className="text-zinc-400">A visual journey through our most loved dishes</p>
      </div>
      <div className="flex gap-8 animate-marquee-slow">
        {[
          'pakistan-curry',
          'pakistan-rice',
          'pakistan-kebab',
          'pakistan-naan',
          'pakistan-dessert',
          'pakistan-chai'
        ].map((seed, i) => (
          <div key={i} className="w-[400px] shrink-0 relative group">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden relative">
              <img 
                src={`https://picsum.photos/seed/${seed}/800/1066`} 
                alt="Food Item" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50 opacity-60" />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Expert Chefs Section */}
    <section className="py-32 px-6 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Culinary Masters</p>
            <h2 className="text-5xl font-bold tracking-tight">Meet Our Expert Chefs</h2>
          </div>
          <Link to="/team" className="btn-primary bg-zinc-900 text-white hover:bg-brand hover:text-white border-none">
            View Full Team <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Chef Ahmed Khan", role: "Executive Chef", img: "https://i.pravatar.cc/400?u=ahmed", specialty: "Traditional Pulao" },
            { name: "Chef Maria Zain", role: "Head of Pastry", img: "https://i.pravatar.cc/400?u=maria", specialty: "Fusion Desserts" },
            { name: "Chef Zeeshan Ali", role: "Grill Master", img: "https://i.pravatar.cc/400?u=zeeshan", specialty: "Charcoal BBQ" }
          ].map((chef, i) => (
            <motion.div 
              key={chef.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={chef.img} alt={chef.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-2">{chef.role}</p>
                  <h3 className="text-2xl font-bold">{chef.name}</h3>
                </div>
              </div>
              <div className="p-8 text-center">
                <p className="text-zinc-500 text-sm mb-4 italic">Expert in {chef.specialty}</p>
                <div className="flex justify-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section with Auto-Scroll */}
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Guest Stories</p>
          <h2 className="text-5xl font-bold tracking-tight">What Our Guests Are Saying</h2>
        </div>
        
        <div className="flex gap-8 animate-marquee-slow hover:[animation-play-state:paused]">
          {[
            { name: 'Ali Ahmed', role: 'Food Blogger', text: 'The Beef Pulao is legendary. Best I have had in Noshahra Cantt!' },
            { name: 'Sara Khan', role: 'Local Resident', text: 'Seekh Kababs are so juicy and flavorful. My kids love it!' },
            { name: 'Zainab Bibi', role: 'Traveler', text: 'A must-visit place. The ambiance and food are both top-notch.' },
            { name: 'Hamza Malik', role: 'Chef', text: 'Authentic flavors with a modern touch. Truly impressive culinary work.' },
            { name: 'Fatima Noor', role: 'Student', text: 'Affordable and delicious. The Karak Chai is the perfect ending.' },
            { name: 'Usman Ghani', role: 'Business Owner', text: 'Great for family dinners. The service is exceptional.' }
          ].map((testimonial, i) => (
            <div key={i} className="w-[400px] shrink-0 p-10 rounded-[3rem] bg-zinc-50 border border-zinc-100 hover:shadow-xl transition-all duration-500">
              <div className="text-brand mb-8">
                <span className="text-7xl font-serif opacity-30">“</span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} size={14} className="text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-zinc-600 mb-10 text-lg leading-relaxed italic">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-5">
                <img src={`https://i.pravatar.cc/150?u=${i+10}`} className="w-12 h-12 rounded-full border-2 border-brand shadow-md" alt="User" />
                <div>
                  <p className="font-bold text-base">{testimonial.name}</p>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Map & Final CTA Section */}
    <section className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[4rem] overflow-hidden h-[500px] shadow-2xl border-8 border-white relative group">
            {/* Mock Map Image */}
            <img 
              src="https://picsum.photos/seed/noshahra-map/1000/1000" 
              alt="Map Location" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <MapPin size={32} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <p className="text-brand font-bold uppercase tracking-[0.3em] text-xs">Visit Us Today</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Your Table is <br /> <span className="text-brand">Waiting for You.</span>
            </h2>
            <p className="text-zinc-500 text-xl leading-relaxed">
              Located in the heart of Noshahra Cantt, we bring you the finest Pakistani cuisine in a setting that feels like home. Don't just take our word for it—come and taste the magic yourself.
            </p>
            <div className="pt-6">
              <Link to="/menu" className="btn-primary px-12 py-6 text-xl shadow-2xl shadow-brand/30 group">
                Order Something Delicious <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const About = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-32 pb-24 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-6">Our Story</p>
          <h1 className="text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Born from Passion, <br />
            Refined by <span className="text-brand-yellow italic">Tradition</span>
          </h1>
          <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
            Founded in 2018, Korba Restaurant was built on a simple premise: that dining should be an immersive experience that engages all five senses. We combine traditional heirloom recipes from Noshahra Cantt with modern culinary techniques.
          </p>
          <p className="text-lg text-zinc-500 mb-12 leading-relaxed">
            Our team of master chefs work in tandem to explore the rich heritage of Pakistani cuisine, ensuring that every bite is a celebration of flavor and culture.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-4xl font-bold mb-2 text-brand">12k+</p>
              <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest">Happy Guests</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-brand">15</p>
              <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest">Culinary Awards</p>
            </div>
          </div>
          <Link to="/menu" className="btn-primary px-10 py-4 bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none inline-flex items-center gap-2 group">
            Explore Our Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="https://picsum.photos/seed/about-korba/1000/1000" 
              alt="Our Kitchen" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-brand p-10 rounded-[3rem] shadow-2xl max-w-[240px]">
            <ChefHat size={40} className="mb-4 text-zinc-900" />
            <p className="font-bold text-xl mb-2">Executive Chef</p>
            <p className="text-sm text-zinc-900/70">Marcus Vane, 3-Star Michelin Veteran</p>
          </div>
        </motion.div>
      </div>

      <div className="bg-zinc-900 rounded-[4rem] p-16 md:p-24 text-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">The principles that guide every dish we serve and every interaction we have.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Leaf, title: 'Sustainability', desc: 'We source 100% of our ingredients from local, ethical farms.' },
            { icon: Star, title: 'Excellence', desc: 'We never settle for "good enough." Every plate is a masterpiece.' },
            { icon: User, title: 'Hospitality', desc: 'Our guests are at the heart of everything we do.' }
          ].map(value => (
            <div key={value.title} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <value.icon size={32} className="text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">The Korba Journal</p>
          <h1 className="text-6xl font-bold tracking-tight mb-6">Culinary Insights</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Explore the stories, traditions, and secrets behind our kitchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-zinc-100 shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center">
                      <User size={12} className="text-zinc-400" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900">{post.author}</span>
                  </div>
                  <span className="text-brand font-bold text-xs flex items-center gap-1">
                    Read More <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-32 pb-24 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-6">Get in Touch</p>
          <h1 className="text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Let's Start a <br />
            <span className="text-brand-yellow italic">Conversation</span>
          </h1>
          <p className="text-lg text-zinc-500 mb-12 leading-relaxed">
            Have a question about our menu, or looking to book a private event? Our team is here to help you create an unforgettable experience.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Our Location</h3>
                <p className="text-zinc-500">123 Culinary Lane, Noshahra Cantt<br />Pakistan, 24100</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-zinc-500">+92 (300) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <p className="text-zinc-500">hello@korba-restaurant.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Subject</label>
              <select className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all appearance-none">
                <option>General Inquiry</option>
                <option>Table Reservation</option>
                <option>Private Event</option>
                <option>Press & Media</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Your Message</label>
              <textarea 
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all resize-none"
              />
            </div>
            
            <button className="btn-primary w-full justify-center py-5 text-lg">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen selection:bg-brand selection:text-zinc-900 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

