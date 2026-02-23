import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Map, ChevronRight } from 'lucide-react';

export const Sitemap = () => {
  const silos = [
    {
      title: 'Main Navigation',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Our Menu', path: '/menu' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'Guest Services',
      links: [
        { name: 'Book a Table', path: '/reservations' },
        { name: 'User Dashboard', path: '/dashboard' },
        { name: 'Sign In', path: '/login' },
        { name: 'Create Account', path: '/signup' },
      ]
    },
    {
      title: 'Content & Media',
      links: [
        { name: 'The Korba Journal (Blog)', path: '/blog' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Disclaimer', path: '/disclaimer' },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-zinc-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
              <Map size={24} />
            </div>
            <h1 className="text-4xl font-bold">Site Map</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {silos.map((silo, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900 border-b border-zinc-100 pb-4">{silo.title}</h2>
                <ul className="space-y-3">
                  {silo.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link to={link.path} className="text-zinc-500 hover:text-brand transition-colors flex items-center gap-2 group text-lg">
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-brand" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
