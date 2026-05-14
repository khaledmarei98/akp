import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, BookOpen, Calendar, ChevronRight } from 'lucide-react';

const Counter = ({ value, label, prefix = '', suffix = '' }: { value: number, label: string, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-3xl md:text-4xl font-serif font-bold text-navy flex items-center">
        {prefix}{count}{suffix}+
      </div>
      <div className="text-navy/60 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
};

export const Hero = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative pt-24 pb-8 overflow-hidden min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min md:auto-rows-[1fr]">
          
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8 md:row-span-2 bento-card relative overflow-hidden flex flex-col justify-center min-h-[400px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20 border border-slate-100 hidden lg:block"></div>
            <div className="relative z-10 space-y-6">
              <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                Egypt's Leading Advisory
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-navy leading-[1.1] tracking-tight uppercase">
                Strategic Accounting & <br /><span className="text-gold">HR Solutions</span>
              </h1>
              <p className="text-navy/60 max-w-md text-sm md:text-base leading-relaxed font-medium">
                We empower Egyptian enterprises with expert tax consulting, financial engineering, and comprehensive HR management built for the modern era.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-8 py-4 bg-navy text-white text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-navy transition-all">
                  {t('hero.cta.book')}
                </button>
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-navy/40">
                  <div className="w-12 h-[2px] bg-gold"></div>
                  Watch Overview
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bento-card bg-navy text-white border-navy"
          >
            <div className="h-full flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-xs uppercase tracking-[0.2em] text-white/40">Global Stats</h3>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <Counter value={15} label="Years Exp" />
                <Counter value={500} label="Clients" />
                <Counter value={50} label="Courses" />
                <Counter value={2} label="Offices" prefix="0" />
              </div>
              <button className="w-full py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                Download Annual Report
              </button>
            </div>
          </motion.div>

          {/* Newsletter / Action Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bento-card bg-gold text-navy border-gold"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="font-black text-xs uppercase tracking-[0.2em] mb-4">AKP Library</h3>
                <p className="text-sm font-bold leading-tight">Access 200+ specialized accounting references and tax guides.</p>
              </div>
              <div className="mt-8">
                <button className="w-full py-4 bg-navy text-white text-[10px] font-black uppercase tracking-widest hover:bg-navy/90 transition-all">
                  Browse Free Resources
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
