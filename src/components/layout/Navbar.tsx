import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Globe, User, LogIn, LaptopIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const { lang, setLang, t, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.library'), href: '#library' },
    { name: t('nav.courses'), href: '#courses' },
    { name: t('nav.blog'), href: '#blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16",
      isScrolled ? "bg-navy/95 border-gold shadow-lg" : "bg-navy border-gold",
      "border-b-2"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold flex items-center justify-center font-bold text-xl text-navy">
            AKP
          </div>
          <span className="text-lg font-bold tracking-tight uppercase text-white hidden sm:inline">
            Consulting <span className="text-gold font-light">Group</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="p-2 border border-white/10 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
          >
            <Globe className="w-3 h-3 text-gold" />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
          <button className="px-4 py-2 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-navy transition-all">
            {t('nav.portal')}
          </button>
          
          <button className="px-4 py-2 bg-gold text-navy text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold-hover transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism border-b overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-serif font-medium text-navy border-b border-navy/5 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <button 
                  onClick={() => {
                    setLang(lang === 'en' ? 'ar' : 'en');
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-lg font-medium"
                >
                  <Globe className="w-5 h-5 text-gold" />
                  <span>{lang === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-navy text-white py-4 rounded-xl text-lg font-bold">
                  <LogIn className="w-5 h-5" />
                  {t('nav.portal')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
