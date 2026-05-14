import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="section-padding bg-gray-soft" id="contact">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Get In Touch</h2>
               <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-navy leading-tight">Elevate Your <span className="text-gold">Business</span></h3>
               <p className="text-navy/60 text-base font-medium">Contact our consultants today for a comprehensive evaluation of your accounting and HR needs.</p>
            </div>

            <div className="space-y-4">
               <div className="flex gap-6 group bento-card p-4 items-center">
                  <div className="w-12 h-12 bg-gray-soft flex items-center justify-center text-navy group-hover:bg-gold transition-colors">
                     <Mail className="w-5 h-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black text-navy/40 uppercase tracking-[0.2em] mb-1">Electronic Mail</p>
                     <p className="text-sm font-black text-navy uppercase">info@akpconsulting.com</p>
                  </div>
               </div>
               
               <div className="flex gap-6 group bento-card p-4 items-center">
                  <div className="w-12 h-12 bg-gray-soft flex items-center justify-center text-navy group-hover:bg-gold transition-colors">
                     <Phone className="w-5 h-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black text-navy/40 uppercase tracking-[0.2em] mb-1">Direct Line</p>
                     <p className="text-sm font-black text-navy uppercase">+20 (2) 1234 5678</p>
                  </div>
               </div>
               
               <div className="flex gap-6 group bento-card p-4 items-center">
                  <div className="w-12 h-12 bg-gray-soft flex items-center justify-center text-navy group-hover:bg-gold transition-colors">
                     <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black text-navy/40 uppercase tracking-[0.2em] mb-1">Main Headquarters</p>
                     <p className="text-sm font-black text-navy uppercase leading-tight">New Cairo, Egypt</p>
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-navy/5">
                <p className="text-sm font-bold text-navy/40 uppercase tracking-widest mb-6">Social Connect</p>
                <div className="flex gap-4">
                  {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-navy/5 text-navy hover:text-gold hover:border-gold transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card p-8 md:p-10 border-navy border-4"
          >
            <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                     <label className="text-[9px] font-black text-navy uppercase tracking-widest leading-none">Full Name</label>
                     <input type="text" placeholder="NAME" className="w-full bg-gray-soft border border-slate-200 p-4 focus:outline-none focus:border-gold transition-all text-xs font-bold" />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[9px] font-black text-navy uppercase tracking-widest leading-none">Email Address</label>
                     <input type="email" placeholder="EMAIL" className="w-full bg-gray-soft border border-slate-200 p-4 focus:outline-none focus:border-gold transition-all text-xs font-bold" />
                  </div>
               </div>
               
               <div className="space-y-1">
                  <label className="text-[9px] font-black text-navy uppercase tracking-widest leading-none">Inquiry Type</label>
                  <select className="w-full bg-gray-soft border border-slate-200 p-4 focus:outline-none focus:border-gold transition-all appearance-none cursor-pointer text-xs font-black uppercase tracking-widest">
                     <option>Financial Accounting</option>
                     <option>Tax Consulting</option>
                     <option>HR Management</option>
                  </select>
               </div>
               
               <div className="space-y-1">
                  <label className="text-[9px] font-black text-navy uppercase tracking-widest leading-none">Message</label>
                  <textarea rows={4} placeholder="HOW CAN WE HELP?" className="w-full bg-gray-soft border border-slate-200 p-4 focus:outline-none focus:border-gold transition-all text-xs font-bold"></textarea>
               </div>
               
               <button type="submit" className="w-full bg-navy text-white py-5 rounded-none font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold hover:text-navy transition-all group">
                  Submit Proposal <Send className="w-4 h-4" />
               </button>
               
               <button type="button" className="w-full flex items-center justify-center gap-3 text-green-600 font-bold py-4 rounded-2xl border border-green-600/20 hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Chat via WhatsApp
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
