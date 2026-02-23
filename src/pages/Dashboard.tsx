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
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
          {/* Sidebar */}
          <div className="md:w-64 shrink-0">
            <div className="bg-white rounded-[2rem] sm:rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg shadow-brand/20">
                  {user.name.charAt(0)}
                </div>
                <h2 className="font-bold text-base sm:text-lg">{user.name}</h2>
                <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1 break-all">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('history')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'history' ? 'bg-brand text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <Package size={18} className="shrink-0" /> Order History
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'profile' ? 'bg-brand text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <User size={18} className="shrink-0" /> Profile Settings
                </button>
                <button 
                  onClick={() => setActiveTab('reservations')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'reservations' ? 'bg-brand text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <Calendar size={18} className="shrink-0" /> My Reservations
                </button>
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-red-500 hover:bg-red-50 transition-all mt-6 sm:mt-8"
                >
                  <LogOut size={18} className="shrink-0" /> Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow min-w-0">
            {activeTab === 'history' && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">Recent Orders</h3>
                {orders.map(order => (
                  <div key={order.id} className="bg-white rounded-[2rem] sm:rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4 sm:mb-6">
                      <div className="w-1/2 sm:w-auto">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Order ID</p>
                        <p className="font-bold text-sm sm:text-base">{order.id}</p>
                      </div>
                      <div className="w-1/2 sm:w-auto">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Date</p>
                        <p className="font-bold text-sm sm:text-base">{order.date}</p>
                      </div>
                      <div className="w-1/2 sm:w-auto">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Status</p>
                        <span className="px-2 sm:px-3 py-1 bg-emerald-50 text-emerald-600 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100">
                          {order.status}
                        </span>
                      </div>
                      <div className="w-1/2 sm:w-auto">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Total</p>
                        <p className="font-bold text-brand text-sm sm:text-base">Rs. {order.total}</p>
                      </div>
                    </div>
                    <div className="border-t border-zinc-100 pt-4 sm:pt-6">
                      <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-2 sm:mb-3">Items</p>
                      <div className="flex flex-wrap gap-2">
                        {order.items.map(item => (
                          <span key={item} className="px-2 sm:px-3 py-1 bg-zinc-100 text-zinc-600 text-[10px] sm:text-xs font-medium rounded-lg">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-zinc-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-10">
                  <h3 className="text-xl sm:text-2xl font-bold">Profile Information</h3>
                  {!isEditing && (
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="text-brand font-bold text-xs sm:text-sm flex items-center gap-2 hover:underline self-start sm:self-auto"
                    >
                      <Settings size={16} /> Edit Profile
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <form onSubmit={handleUpdate} className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400">Address</label>
                      <textarea 
                        rows={3}
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand transition-all resize-none"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button type="submit" className="btn-primary px-8 py-3 sm:py-4 bg-brand hover:bg-brand-yellow hover:text-zinc-900 border-none w-full sm:w-auto justify-center">Save Changes</button>
                      <button 
                        type="button" 
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary px-8 py-3 sm:py-4 w-full sm:w-auto justify-center"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6 sm:space-y-10">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 shrink-0">
                        <User size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Full Name</p>
                        <p className="font-bold text-base sm:text-lg truncate">{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 shrink-0">
                        <Mail size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Email Address</p>
                        <p className="font-bold text-base sm:text-lg truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 shrink-0">
                        <Phone size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Phone Number</p>
                        <p className="font-bold text-base sm:text-lg truncate">{user.phone || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 shrink-0">
                        <MapPin size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Delivery Address</p>
                        <p className="font-bold text-base sm:text-lg truncate">{user.address || 'Not provided'}</p>
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
                className="space-y-6 sm:space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-3xl font-bold tracking-tight">My Reservations</h2>
                </div>
                
                <div className="grid gap-4 sm:gap-6">
                  {[
                    { id: 'R1', date: '2024-03-25', time: '07:00 PM', guests: 4, status: 'Confirmed' },
                    { id: 'R2', date: '2024-04-12', time: '08:30 PM', guests: 2, status: 'Pending' }
                  ].map((res) => (
                    <div key={res.id} className="bg-white rounded-[2rem] sm:rounded-3xl p-6 sm:p-8 border border-zinc-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                          <Calendar size={24} className="sm:w-7 sm:h-7" />
                        </div>
                        <div>
                          <p className="font-bold text-base sm:text-lg">Table for {res.guests} Guests</p>
                          <p className="text-xs sm:text-sm text-zinc-500">{res.date} at {res.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t md:border-t-0 border-zinc-100 pt-4 md:pt-0">
                        <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest ${
                          res.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                          {res.status}
                        </span>
                        <button className="text-xs sm:text-sm text-zinc-400 hover:text-brand transition-colors font-medium">
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
