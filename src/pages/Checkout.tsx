import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowLeft, CreditCard, Truck, ShieldCheck, Trash2, Plus, Minus, CheckCircle2, Smartphone, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const { cart, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'jazzcash' | 'easypaisa' | 'bank'>('cod');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-40 pb-24 px-6 text-center max-w-2xl mx-auto"
      >
        <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand/20">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Order Confirmed!</h1>
        <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
          Thank you for choosing Korba. Your feast is being prepared with precision and will be at your doorstep in Noshahra Cantt shortly.
          {paymentMethod !== 'cod' && (
            <span className="block mt-4 text-brand font-bold">
              Our team will verify your {paymentMethod === 'bank' ? 'Bank Transfer' : paymentMethod === 'jazzcash' ? 'JazzCash' : 'EasyPaisa'} payment shortly.
            </span>
          )}
        </p>
        <Link to="/" className="btn-primary inline-flex justify-center px-10 py-4 text-lg bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none">
          Return to Home
        </Link>
      </motion.div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 px-6 text-center">
        <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-8 text-zinc-400">
          <ShoppingBag size={32} />
        </div>
        <h1 className="text-4xl font-bold mb-6">Your cart is empty</h1>
        <p className="text-zinc-500 mb-12 text-lg">Looks like you haven't added any masterpieces to your cart yet.</p>
        <Link to="/menu" className="btn-primary inline-flex justify-center px-10 py-4">
          Explore the Menu
        </Link>
      </div>
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
        <div className="flex items-center gap-4 mb-12">
          <Link to="/menu" className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-4xl font-bold">Complete Your Order</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Truck className="text-brand" /> Delivery Information
              </h2>
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+92 300 1234567"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Delivery Address (Noshahra Cantt)</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="House #, Street #, Sector..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all resize-none"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Special Instructions</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Ring the bell twice, less spicy..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CreditCard className="text-brand" /> Payment Method
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all border-2 ${
                    paymentMethod === 'cod' ? 'border-brand bg-brand/5' : 'border-zinc-100 hover:border-brand/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === 'cod' ? 'bg-brand text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <Truck size={20} />
                    </div>
                    <span className="font-bold">Cash on Delivery</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-4 bg-white ${paymentMethod === 'cod' ? 'border-brand' : 'border-zinc-200'}`} />
                </div>

                <div 
                  onClick={() => setPaymentMethod('jazzcash')}
                  className={`p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all border-2 ${
                    paymentMethod === 'jazzcash' ? 'border-brand bg-brand/5' : 'border-zinc-100 hover:border-brand/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === 'jazzcash' ? 'bg-brand text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <Smartphone size={20} />
                    </div>
                    <span className="font-bold">JazzCash</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-4 bg-white ${paymentMethod === 'jazzcash' ? 'border-brand' : 'border-zinc-200'}`} />
                </div>

                <div 
                  onClick={() => setPaymentMethod('easypaisa')}
                  className={`p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all border-2 ${
                    paymentMethod === 'easypaisa' ? 'border-brand bg-brand/5' : 'border-zinc-100 hover:border-brand/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === 'easypaisa' ? 'bg-brand text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <Smartphone size={20} />
                    </div>
                    <span className="font-bold">EasyPaisa</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-4 bg-white ${paymentMethod === 'easypaisa' ? 'border-brand' : 'border-zinc-200'}`} />
                </div>

                <div 
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all border-2 ${
                    paymentMethod === 'bank' ? 'border-brand bg-brand/5' : 'border-zinc-100 hover:border-brand/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === 'bank' ? 'bg-brand text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <Building2 size={20} />
                    </div>
                    <span className="font-bold">Bank Transfer</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-4 bg-white ${paymentMethod === 'bank' ? 'border-brand' : 'border-zinc-200'}`} />
                </div>
              </div>

              {paymentMethod !== 'cod' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-200"
                >
                  <p className="text-sm text-zinc-600 mb-4">
                    {paymentMethod === 'bank' 
                      ? "Please transfer the total amount to the following bank account and upload the receipt."
                      : `Please send the total amount to our ${paymentMethod === 'jazzcash' ? 'JazzCash' : 'EasyPaisa'} account: 0300-1234567`}
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Transaction ID</label>
                      <input 
                        type="text" 
                        placeholder="Enter Transaction ID"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-8">
            <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
                <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} className="w-16 h-16 rounded-xl object-cover" alt={item.name} />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-sm">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-zinc-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 bg-white/10 rounded-lg px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-brand"><Minus size={12} /></button>
                            <span className="text-xs font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-brand"><Plus size={12} /></button>
                          </div>
                          <span className="text-sm font-bold">Rs. {item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 border-t border-white/10 pt-8">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span>Rs. {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Delivery Fee</span>
                    <span>Rs. 150</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-brand-yellow">Rs. {totalPrice + 150}</span>
                  </div>
                </div>

                <button 
                  onClick={handleOrder}
                  className="btn-primary w-full justify-center py-5 mt-10 text-lg shadow-xl shadow-brand/20 bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none"
                >
                  Place Order Now
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck size={14} />
                  <span>Secure Checkout Guaranteed</span>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
