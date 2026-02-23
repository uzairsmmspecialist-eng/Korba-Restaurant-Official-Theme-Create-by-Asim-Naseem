import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Package, Settings, LogOut, ChevronRight, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const { user, logout, orders, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'history' | 'profile' | 'reservations'>('history');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="md:w-64 shrink-0">
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-brand/20">
                  {user.name.charAt(0)}
                </div>
                <h2 className="font-bold text-lg">{user.name}</h2>
                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('history')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'history' ? 'bg-brand text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <Package size={18} /> Order History
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'profile' ? 'bg-brand text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <User size={18} /> Profile Settings
                </button>
                <button 
                  onClick={() => setActiveTab('reservations')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'reservations' ? 'bg-brand text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <Calendar size={18} /> My Reservations
                </button>
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all mt-8"
                >
                  <LogOut size={18} /> Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            {activeTab === 'history' ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-8">Recent Orders</h3>
                {orders.map(order => (
                  <div key={order.id} className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Order ID</p>
                        <p className="font-bold">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Date</p>
                        <p className="font-bold">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Status</p>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100">
                          {order.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Total</p>
                        <p className="font-bold text-brand">Rs. {order.total}</p>
                      </div>
                    </div>
                    <div className="border-t border-zinc-100 pt-6">
                      <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-3">Items</p>
                      <div className="flex flex-wrap gap-2">
                        {order.items.map(item => (
                          <span key={item} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-lg">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-200 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-bold">Profile Information</h3>
                  {!isEditing && (
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="text-brand font-bold text-sm flex items-center gap-2 hover:underline"
                    >
                      <Settings size={16} /> Edit Profile
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <form onSubmit={handleUpdate} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Address</label>
                      <textarea 
                        rows={3}
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all resize-none"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button type="submit" className="btn-primary px-8 bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none">Save Changes</button>
                      <button 
                        type="button" 
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary px-8"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400">
                        <User size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Full Name</p>
                        <p className="font-bold text-lg">{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Email Address</p>
                        <p className="font-bold text-lg">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Phone Number</p>
                        <p className="font-bold text-lg">{user.phone || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Delivery Address</p>
                        <p className="font-bold text-lg">{user.address || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reservations' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold tracking-tight">My Reservations</h2>
                </div>
                
                <div className="grid gap-6">
                  {[
                    { id: 'R1', date: '2024-03-25', time: '07:00 PM', guests: 4, status: 'Confirmed' },
                    { id: 'R2', date: '2024-04-12', time: '08:30 PM', guests: 2, status: 'Pending' }
                  ].map((res) => (
                    <div key={res.id} className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                          <Calendar size={28} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Table for {res.guests} Guests</p>
                          <p className="text-sm text-zinc-500">{res.date} at {res.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                          res.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                          {res.status}
                        </span>
                        <button className="text-zinc-400 hover:text-brand transition-colors">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
