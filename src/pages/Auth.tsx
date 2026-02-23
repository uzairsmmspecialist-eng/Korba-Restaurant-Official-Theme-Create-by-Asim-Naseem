import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand/20">
            <UtensilsCrossed size={32} className="text-zinc-900" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-zinc-500 mt-2">Sign in to your Korba account</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-200 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>
            </div>
            
            <button type="submit" className="btn-primary w-full justify-center py-5 text-lg group">
              Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-zinc-500 text-sm">
              Don't have an account? {' '}
              <Link to="/signup" className="text-brand-dark font-bold hover:underline">Create one now</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(name, email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand/20">
            <UtensilsCrossed size={32} className="text-zinc-900" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Join the Feast</h1>
          <p className="text-zinc-500 mt-2">Create your Korba account today</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-200 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
              <input 
                required
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Password</label>
              <input 
                required
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
              />
            </div>
            
            <button type="submit" className="btn-primary w-full justify-center py-5 text-lg group">
              Create Account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-zinc-500 text-sm">
              Already have an account? {' '}
              <Link to="/login" className="text-brand-dark font-bold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
