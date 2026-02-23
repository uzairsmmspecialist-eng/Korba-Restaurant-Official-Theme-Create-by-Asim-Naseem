import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle2, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    setIsSubmitted(true);
    
    // Simulate email/SMS confirmation
    console.log("Confirmation sent to:", formData.email, formData.phone);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-40 pb-24 px-6 text-center max-w-2xl mx-auto"
      >
        <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand/20">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Table Reserved!</h1>
        <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
          Your table for {formData.guests} guests on {formData.date} at {formData.time} has been successfully booked. 
          A confirmation email and SMS have been sent to you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-secondary px-10 py-4 text-lg"
          >
            Make Another Booking
          </button>
          <a href="/" className="btn-primary px-10 py-4 text-lg bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none">
            Return Home
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Reservations</p>
            <h1 className="text-6xl font-bold tracking-tight mb-8">Book Your Table</h1>
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
              Experience royal dining at Korba. Whether it's a family dinner or a special celebration, we ensure your experience is legendary.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Location</h3>
                  <p className="text-zinc-500">123 Culinary Lane, Noshahra Cantt, Pakistan</p>
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
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Opening Hours</h3>
                  <p className="text-zinc-500">Mon - Sun: 12:00 PM - 11:00 PM (Peshawar Time)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Number of Guests</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input 
                      required
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-16 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Time (Peshawar Time)</label>
                  <div className="relative">
                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <select 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-16 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all appearance-none"
                    >
                      <option value="">Select Time</option>
                      {['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Special Requests (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Any dietary requirements or special occasions?"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({...formData, specialRequest: e.target.value})}
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-5 text-lg bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none shadow-xl shadow-brand/20">
                Confirm Reservation <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
