import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Mic, MicOff, Phone } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

const SYSTEM_INSTRUCTION = `
You are the official AI assistant for Korba Restaurant, located in Noshahra Cantt, KPK, Pakistan.
Your job is to assist customers with information about the restaurant, menu, location, and ordering.

Key Information:
- Location: Noshahra Cantt, KPK, Pakistan.
- Contact Number / WhatsApp: 03189375460.
- How to Order: Customers can place an order directly on our website by visiting the Menu page, adding items to their cart, and proceeding to checkout. Alternatively, they can order directly via WhatsApp using the WhatsApp button on the screen.
- Signature Dishes: Kachay Beef Pulao, Special Biryani, Beef Chapli Kabab, Chicken Tikka, Seekh Kabab, Karak Chai.
- Vibe: Traditional Pakistani cuisine with a modern, refined touch.

Be polite, helpful, and concise. If someone asks to order, guide them to the Menu page or tell them to use the WhatsApp button.
`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hello! Welcome to Korba Restaurant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Voice Agent State
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [session, setSession] = useState<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: (import.meta as any).env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      // Replay history for context
      for (const msg of messages.slice(1)) {
        await chat.sendMessage({ message: msg.text });
      }

      const response = await chat.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Sorry, I could not understand that.' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am having trouble connecting right now.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVoiceAgent = async () => {
    if (isVoiceActive) {
      // Stop voice agent
      if (session) {
        session.close();
        setSession(null);
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      setIsVoiceActive(false);
      setMessages(prev => [...prev, { role: 'model', text: 'Voice agent disconnected.' }]);
      return;
    }

    // Start voice agent
    try {
      setIsVoiceActive(true);
      setMessages(prev => [...prev, { role: 'model', text: 'Connecting to voice agent...' }]);
      
      const ai = new GoogleGenAI({ apiKey: (import.meta as any).env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const source = audioContextRef.current.createMediaStreamSource(mediaStreamRef.current);
      scriptProcessorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: SYSTEM_INSTRUCTION,
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
        },
        callbacks: {
          onopen: () => {
            setMessages(prev => [...prev, { role: 'model', text: 'Voice agent connected! Start speaking.' }]);
            scriptProcessorRef.current!.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcm16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                pcm16[i] = Math.max(-32768, Math.min(32767, inputData[i] * 32768));
              }
              const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcm16.buffer)));
              sessionPromise.then(s => s.sendRealtimeInput({
                media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
              }));
            };
            source.connect(scriptProcessorRef.current!);
            scriptProcessorRef.current!.connect(audioContextRef.current!.destination);
          },
          onmessage: (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              const binaryString = atob(base64Audio);
              const pcm16 = new Int16Array(binaryString.length / 2);
              for (let i = 0; i < pcm16.length; i++) {
                pcm16[i] = binaryString.charCodeAt(i * 2) | (binaryString.charCodeAt(i * 2 + 1) << 8);
              }
              
              const audioBuffer = audioContextRef.current!.createBuffer(1, pcm16.length, 24000);
              const channelData = audioBuffer.getChannelData(0);
              for (let i = 0; i < pcm16.length; i++) {
                channelData[i] = pcm16[i] / 32768.0;
              }
              
              const sourceNode = audioContextRef.current!.createBufferSource();
              sourceNode.buffer = audioBuffer;
              sourceNode.connect(audioContextRef.current!.destination);
              sourceNode.start();
            }
          },
          onerror: (err) => {
            console.error('Live API Error:', err);
            setIsVoiceActive(false);
          },
          onclose: () => {
            setIsVoiceActive(false);
          }
        }
      });
      
      setSession(await sessionPromise);
    } catch (err) {
      console.error('Failed to start voice agent:', err);
      setIsVoiceActive(false);
      setMessages(prev => [...prev, { role: 'model', text: 'Failed to connect to voice agent. Please ensure microphone permissions are granted.' }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl border border-zinc-200 w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand p-4 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold">Korba Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything about our menu or location</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-zinc-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand text-white rounded-tr-none' 
                      : 'bg-white border border-zinc-200 text-zinc-800 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-zinc-100 flex items-center gap-2">
              <button 
                onClick={toggleVoiceAgent}
                className={`p-3 rounded-full transition-colors ${isVoiceActive ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
                title={isVoiceActive ? "Stop Voice Agent" : "Start Voice Agent"}
              >
                {isVoiceActive ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-grow bg-zinc-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                disabled={isVoiceActive}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isVoiceActive}
                className="p-3 bg-brand text-white rounded-full hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chatbot Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform hover:bg-brand-dark"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/923189375460" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        title="Order via WhatsApp"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};
