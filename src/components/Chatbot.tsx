import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Mic, MicOff, Volume2, VolumeX, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from '../data/menu';

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for "Korba Restaurant". 
Location: Noshahra Cantt.
About: Korba is a high-end restaurant blending traditional Pakistani flavors with modern culinary techniques.
Menu Highlights:
${MENU_DATA.map(item => `- ${item.name}: ${item.description} (Price: Rs. ${item.price})`).join('\n')}

Contact Info:
- Phone: +1 (555) 123-4567
- Email: hello@korba-restaurant.com
- Address: 123 Culinary Lane, Noshahra Cantt.

Your tone should be professional, welcoming, and helpful. 
Guide users on menu choices, location, and how to book a table. 
If they ask about ordering, tell them they can add items to their cart on the Menu page and checkout anytime.
Keep responses concise and engaging.
`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Welcome to Korba! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Speech Recognition
  const recognition = useRef<any>(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && ('WebkitSpeechRecognition' in window || 'speechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => setIsListening(false);
      recognition.current.onend = () => setIsListening(false);
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognition.current?.stop();
    } else {
      recognition.current?.start();
      setIsListening(true);
    }
  };

  const speak = (text: string) => {
    if (!isSpeaking || typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const model = genAI.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [
          { role: 'user', parts: [{ text: SYSTEM_INSTRUCTION }] },
          ...messages.map(m => ({ role: m.role === 'model' ? 'model' : 'user', parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
      });

      const response = await model;
      const botText = response.text || "I'm sorry, I couldn't process that.";
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
      speak(botText);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-900 p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-zinc-900">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Korba Concierge</h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Always Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-zinc-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-brand text-zinc-900 rounded-tr-none' 
                      : 'bg-white border border-zinc-200 text-zinc-700 rounded-tl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-zinc-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-zinc-100 flex items-center gap-2">
              <button 
                onClick={toggleListening}
                className={`p-3 rounded-xl transition-all ${
                  isListening ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                }`}
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our menu or location..."
                className="flex-grow bg-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-brand text-zinc-900 rounded-xl hover:bg-brand-dark disabled:opacity-50 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-zinc-900 text-brand rounded-full shadow-2xl flex items-center justify-center hover:bg-zinc-800 transition-all border border-white/10"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};
