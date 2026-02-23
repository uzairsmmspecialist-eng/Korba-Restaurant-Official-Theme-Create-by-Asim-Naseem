import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

export const Disclaimer = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
  >
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-zinc-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
            <Info size={24} />
          </div>
          <h1 className="text-4xl font-bold">Disclaimer</h1>
        </div>
        
        <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600 leading-relaxed">
          <p className="text-lg font-medium text-zinc-900">
            Last updated: February 22, 2026
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">Nutritional Information</h2>
            <p>
              The nutritional information provided on our menu is based on standard recipes and may vary slightly due to seasonal ingredients, preparation techniques, and portion sizes. Guests with specific dietary requirements or allergies should inform our staff before ordering.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">Allergen Warning</h2>
            <p>
              Our kitchen handles nuts, dairy, wheat, and other common allergens. While we take extreme precautions to prevent cross-contamination, we cannot guarantee that any dish is 100% free of allergens.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">External Links</h2>
            <p>
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Korba Restaurant. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">Limitation of Liability</h2>
            <p>
              In no event shall Korba Restaurant be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  </motion.div>
);
