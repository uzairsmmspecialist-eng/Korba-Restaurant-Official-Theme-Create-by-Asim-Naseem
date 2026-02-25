import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  CheckCircle2, 
  Loader2, 
  Zap, 
  FileCode, 
  Cpu, 
  Globe, 
  Palette, 
  Type, 
  Layout, 
  Image as ImageIcon, 
  MessageSquare, 
  Star,
  Users,
  Box
} from 'lucide-react';
import { MENU_DATA } from '../data/menu';
import { blogPosts } from '../data/blog';

export const SystemReplicator = () => {
  const [isReplicating, setIsReplicating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const systemBlueprint = {
    version: 'T-1.0',
    brand: 'KURBAN',
    location: 'Noshahra Cantt, KPK, Pakistan',
    colors: {
      primary: '#DC2626', // Red
      secondary: '#FACC15', // Yellow
      dark: '#18181B', // Zinc-900
      light: '#F4F4F5', // Zinc-100
      accent: '#B91C1C' // Dark Red
    },
    typography: {
      sans: 'Inter, sans-serif',
      serif: 'Playfair Display, serif',
      mono: 'JetBrains Mono, monospace'
    },
    sections: [
      'Hero with Floating Food Animations',
      'Bento Grid Features',
      'Menu Grid with Category Filters',
      'Expert Chefs Showcase',
      'Auto-Scrolling Testimonials Marquee',
      'Interactive AI Chatbot (Gemini 3 Flash)',
      'Voice Agent Integration',
      'WhatsApp Direct Ordering System',
      'Full Checkout & Cart Flow',
      'Blog/Journal with Smart Product Recommendations',
      'Interactive Map & Reservations'
    ],
    menu: MENU_DATA,
    blog: blogPosts,
    reviews: [
      { name: 'Ali Ahmed', role: 'Food Blogger', text: 'The Beef Pulao at Kurban is quite simply the best I have ever had in Noshahra Cantt.', rating: 5 },
      { name: 'Sara Khan', role: 'Local Resident', text: 'Seekh Kababs are so juicy and flavorful. My kids love it!', rating: 5 },
      { name: 'Kamran Shah', role: 'Foodie', text: 'The Chicken Tikka is perfectly spiced and grilled. A true masterpiece of BBQ!', rating: 5 }
    ],
    team: [
      { name: "Chef Ahmed Khan", role: "Executive Chef", specialty: "Traditional Pulao" },
      { name: "Chef Farman Shah", role: "Head of Pastry", specialty: "Fusion Desserts" },
      { name: "Chef Zeeshan Ali", role: "Grill Master", specialty: "Charcoal BBQ" }
    ],
    animations: {
      library: 'Framer Motion (motion/react)',
      types: ['Fade In', 'Slide Up', 'Scale', 'Marquee', 'Floating', 'Blink']
    },
    ai_config: {
      model: 'gemini-3-flash-preview',
      capabilities: ['Text Chat', 'Voice Interaction', 'Menu Guidance', 'Order Assistance']
    }
  };

  const handleAZImport = async () => {
    setIsReplicating(true);
    setIsComplete(false);
    setProgress(0);

    const steps = [
      'Analyzing System DNA...',
      'Mapping Color Palettes & Typography...',
      'Injecting Layout Structures...',
      'Synchronizing A to Z Content...',
      'Calibrating Animations & Transitions...',
      'Activating AI Chatbot & Voice Systems...',
      'Linking Map & Reservation Engines...',
      'Finalizing A to Z Replication...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setStatus(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(((i + 1) / steps.length) * 100);
    }

    setIsReplicating(false);
    setIsComplete(true);
    setStatus('A to Z System Replicated Successfully!');
    
    setTimeout(() => {
      setShowModal(false);
      setIsComplete(false);
      setProgress(0);
    }, 3000);
  };

  const downloadBlueprint = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(systemBlueprint, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "kurban_system_blueprint_vT.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full hover:bg-brand-dark transition-all text-xs font-black uppercase tracking-widest shadow-lg shadow-brand/20 group"
      >
        <Zap size={16} className="group-hover:scale-125 transition-transform" />
        A to Z System Import
      </button>

      <button 
        onClick={downloadBlueprint}
        className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all text-[10px] font-bold uppercase tracking-widest border border-white/10"
      >
        <FileCode size={14} />
        Download System Blueprint (vT)
      </button>

      <a 
        href="/kurban-theme.zip"
        download
        className="flex items-center gap-2 px-6 py-3 bg-brand-yellow text-zinc-900 rounded-full hover:bg-white transition-all text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-yellow/20"
      >
        <Download size={14} />
        Download WordPress Theme (Ready to Use)
      </a>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isReplicating && setShowModal(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              className="relative bg-zinc-900 rounded-[3rem] p-10 sm:p-16 max-w-3xl w-full shadow-2xl border-4 border-brand overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                {!isReplicating && (
                  <button onClick={() => setShowModal(false)} className="text-zinc-500 hover:text-white transition-colors">
                    <Box size={24} />
                  </button>
                )}
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-8 text-brand animate-pulse">
                  <Cpu size={48} />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tighter text-white uppercase italic">
                  System <span className="text-brand">Replicator</span>
                </h2>
                <p className="text-zinc-400 mb-12 text-lg leading-relaxed max-w-xl mx-auto">
                  Execute a full-fledged A to Z import of the entire system architecture, design DNA, and content intelligence.
                </p>

                {!isReplicating && !isComplete && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                      {[
                        { icon: Palette, label: 'Design DNA', desc: 'Colors & Theme' },
                        { icon: Type, label: 'Typography', desc: 'Font Systems' },
                        { icon: Layout, label: 'Architecture', desc: 'A to Z Layout' },
                        { icon: ImageIcon, label: 'Graphics', desc: 'HD Assets' },
                        { icon: MessageSquare, label: 'AI Engine', desc: 'Chat & Voice' },
                        { icon: Globe, label: 'Map Engine', desc: 'Linking' },
                        { icon: Star, label: 'Reviews', desc: 'Guest Stories' },
                        { icon: Users, label: 'Team', desc: 'Expert Chefs' },
                        { icon: Zap, label: 'Animations', desc: 'Fluid Motion' }
                      ].map((item, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <item.icon size={20} className="text-brand-yellow mb-2" />
                          <p className="font-bold text-sm text-white">{item.label}</p>
                          <p className="text-[10px] text-zinc-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={handleAZImport}
                      className="btn-primary w-full justify-center py-6 text-xl bg-brand hover:bg-brand-dark shadow-2xl shadow-brand/40 font-black uppercase tracking-widest"
                    >
                      Execute A to Z Import
                    </button>
                  </div>
                )}

                {isReplicating && (
                  <div className="space-y-10">
                    <div className="relative h-6 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand to-brand-yellow"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                      <Loader2 size={48} className="text-brand animate-spin" />
                      <div className="space-y-2">
                        <p className="text-2xl font-black text-white uppercase tracking-widest italic">{status}</p>
                        <p className="text-zinc-500 font-mono text-sm">{progress.toFixed(0)}% Synchronized</p>
                      </div>
                    </div>
                  </div>
                )}

                {isComplete && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
                      <CheckCircle2 size={56} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white uppercase tracking-widest">Replication Complete</h3>
                      <p className="text-zinc-400 text-lg">The entire Kurban System DNA has been successfully synchronized.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
