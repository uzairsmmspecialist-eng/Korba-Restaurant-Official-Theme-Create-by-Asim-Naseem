import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, CheckCircle2, Loader2, AlertCircle, Database, Layout, Image as ImageIcon, Settings } from 'lucide-react';

export const DemoImporter = () => {
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const steps = [
    { name: 'Preparing environment...', icon: Settings },
    { name: 'Importing menu data...', icon: Database },
    { name: 'Downloading demo images...', icon: ImageIcon },
    { name: 'Configuring widgets and menus...', icon: Layout },
    { name: 'Finalizing setup...', icon: CheckCircle2 },
  ];

  const handleImport = async () => {
    setIsImporting(true);
    setIsComplete(false);
    setProgress(0);

    for (let i = 0; i < steps.length; i++) {
      setStatus(steps[i].name);
      // Simulate work
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProgress(((i + 1) / steps.length) * 100);
    }

    setIsImporting(false);
    setIsComplete(true);
    setStatus('Demo content imported successfully!');
    
    // In a real app, we might reload or update state here
    setTimeout(() => {
      setShowModal(false);
      setIsComplete(false);
      setProgress(0);
    }, 3000);
  };

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-all text-xs font-bold uppercase tracking-widest"
      >
        <Download size={16} />
        Import Demo Content
      </button>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isImporting && setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[3rem] p-10 sm:p-16 max-w-2xl w-full shadow-2xl overflow-hidden"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand">
                  <Download size={40} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-zinc-900">
                  One-Click Demo Import
                </h2>
                <p className="text-zinc-500 mb-10 text-lg leading-relaxed">
                  Import our full-fledged demo content including images, widgets, menus, and pages to get your site ready in seconds.
                </p>

                {!isImporting && !isComplete && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <Database size={20} className="text-brand mb-2" />
                        <p className="font-bold text-sm">Full Menu Data</p>
                        <p className="text-xs text-zinc-400">All 50+ dishes with prices</p>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <ImageIcon size={20} className="text-brand mb-2" />
                        <p className="font-bold text-sm">HD Images</p>
                        <p className="text-xs text-zinc-400">Optimized culinary photos</p>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <Layout size={20} className="text-brand mb-2" />
                        <p className="font-bold text-sm">Page Layouts</p>
                        <p className="text-xs text-zinc-400">Reservations, Blog, Team</p>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <Settings size={20} className="text-brand mb-2" />
                        <p className="font-bold text-sm">Theme Settings</p>
                        <p className="text-xs text-zinc-400">Colors, Fonts, Widgets</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl text-amber-700 text-sm border border-amber-100">
                      <AlertCircle size={20} className="shrink-0" />
                      <p className="text-left leading-tight">
                        <strong>Note:</strong> This will populate your site with our premium demo content. Existing data will be preserved.
                      </p>
                    </div>

                    <button 
                      onClick={handleImport}
                      className="btn-primary w-full justify-center py-5 text-lg shadow-xl shadow-brand/20"
                    >
                      Start Import Now
                    </button>
                  </div>
                )}

                {isImporting && (
                  <div className="space-y-8">
                    <div className="relative h-4 bg-zinc-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="absolute inset-y-0 left-0 bg-brand"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 size={32} className="text-brand animate-spin" />
                      <p className="font-bold text-zinc-900 animate-pulse">{status}</p>
                    </div>
                    <div className="space-y-3">
                      {steps.map((step, i) => {
                        const StepIcon = step.icon;
                        const isDone = progress > ((i + 1) / steps.length) * 100 || isComplete;
                        const isActive = status === step.name;
                        
                        return (
                          <div key={i} className={`flex items-center gap-3 text-sm font-medium transition-colors ${isDone ? 'text-green-600' : isActive ? 'text-brand' : 'text-zinc-300'}`}>
                            <StepIcon size={18} />
                            <span>{step.name}</span>
                            {isDone && <CheckCircle2 size={16} className="ml-auto" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {isComplete && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">Import Complete!</h3>
                    <p className="text-zinc-500">Your full-fledged website is now ready with all demo content.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
