import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Facebook, Linkedin, Twitter, Instagram, Send, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-gold/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <span className="text-navy font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-serif font-bold italic tracking-tight">AKP <span className="text-gold text-sm font-sans not-italic">Consulting</span></span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Premium professional services for accounting, finance, tax, and HR consulting in Egypt. Empowering businesses through excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl border-b border-gold/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Our Partners</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl border-b border-gold/20 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>123 Business Square, New Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+20 (2) 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@akpconsulting.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl border-b border-gold/20 pb-2 inline-block">Newsletter</h3>
            <p className="text-white/60 text-sm">Stay updated with latest tax laws and financial insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold"
              />
              <button className="absolute right-2 top-1.5 bg-gold text-navy p-1.5 rounded-md hover:bg-gold-hover transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} AKP Professional Consulting. All rights reserved. Designed with excellence in Egypt.</p>
        </div>
      </div>
    </footer>
  );
};
