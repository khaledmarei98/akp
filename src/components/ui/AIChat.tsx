import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center shadow-2xl shadow-navy/40 z-[60] border-2 border-gold/20 hover:scale-110 active:scale-95 transition-all"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-navy animate-pulse" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-28 right-8 w-[350px] md:w-[400px] h-[500px] glass-morphism rounded-[32px] border border-navy/10 shadow-3xl z-[60] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-navy p-6 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-none">AKP AI Assistant</p>
                    <p className="text-xs text-green-400 font-medium">Online • Instant Help</p>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
               </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
               <div className="bg-gray-soft p-4 rounded-2xl rounded-tl-none border border-navy/5 max-w-[80%]">
                  <p className="text-xs font-bold text-navy opacity-40 uppercase tracking-widest mb-1 italic">AKP AI</p>
                  <p className="text-sm text-navy">Hello! I'm AKP's digital assistant. How can I help you today? You can ask me about Egyptian Tax laws, our HR services, or accounting courses.</p>
               </div>
               
               <div className="bg-navy p-4 rounded-2xl rounded-tr-none text-white ml-auto max-w-[80%] shadow-lg">
                  <p className="text-sm">I'm interested in the IFRS training course.</p>
               </div>
               
               <div className="bg-gray-soft p-4 rounded-2xl rounded-tl-none border border-navy/5 max-w-[80%]">
                  <p className="text-xs font-bold text-navy opacity-40 uppercase tracking-widest mb-1 italic">AKP AI</p>
                  <p className="text-sm text-navy">Great choice! Our IFRS Fundamentals course covers the latest 2024 standards. It's a 12-hour session with expert certification.</p>
                  <button className="text-xs text-gold font-bold mt-2 uppercase border-b border-gold">View Course Details</button>
               </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-navy/5">
                <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Type your message..."
                     className="w-full bg-gray-soft border border-navy/5 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:border-gold transition-all"
                     value={msg}
                     onChange={(e) => setMsg(e.target.value)}
                   />
                   <button className="absolute right-2 top-1.5 bg-navy text-white p-1.5 rounded-xl hover:bg-navy/90 transition-colors">
                      <Send className="w-4 h-4" />
                   </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
