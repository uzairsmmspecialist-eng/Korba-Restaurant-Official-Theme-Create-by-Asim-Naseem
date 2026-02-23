import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock } from 'lucide-react';

export const PrivacyPolicy = () => (
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
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600 leading-relaxed">
          <p className="text-lg font-medium text-zinc-900">
            Last updated: February 22, 2026
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you make a reservation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and dietary preferences.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and confirm your table reservations.</li>
              <li>Send you updates about your bookings.</li>
              <li>Send newsletters and promotional offers (if you've opted in).</li>
              <li>Improve our services and guest experience.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">3. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">4. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at privacy@korba-restaurant.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  </motion.div>
);
