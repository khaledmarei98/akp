import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  FileUp, 
  Bell, 
  Download, 
  CreditCard, 
  Clock, 
  Search, 
  LayoutDashboard,
  Shield,
  FileCheck
} from 'lucide-react';

export const Portal = () => {
  return (
    <section className="section-padding bg-navy relative overflow-hidden" id="portal">
      {/* Background decoration */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px] z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-xs">
                <Shield className="w-4 h-4" /> Secure Access
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
                Financial <br /><span className="text-gold">Control Center</span>
              </h2>
            </div>
            
            <p className="text-white/60 text-base font-medium leading-relaxed">
              Experience the efficiency of our exclusive Client Portal. Manage your invoices, track HR requests, and access real-time financial reports anywhere, anytime.
            </p>

            <ul className="space-y-3">
              {[
                { icon: FileUp, text: 'Instant Document Upload & Vault' },
                { icon: BarChart3, text: 'Real-time Financial Dashboards' },
                { icon: FileCheck, text: 'Track Tax Compliance Status' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <div className="w-8 h-8 bg-white/5 flex items-center justify-center text-gold border border-white/10">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
               <button className="bg-gold text-navy px-8 py-4 rounded-none font-black text-xs uppercase tracking-widest hover:bg-gold-hover transition-all">
                  Access Portal
               </button>
               <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-none font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Documentation
               </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
             {/* Dashboard Mockup - Bento Style */}
             <div className="bg-white p-6 rounded-none shadow-2xl scale-110 lg:translate-x-12 border-8 border-navy">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-navy flex items-center justify-center font-black text-white text-xs">OA</div>
                      <div>
                         <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Company Root</p>
                         <p className="text-sm font-black text-navy uppercase tracking-tight">Nile Logistics Co.</p>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-8 h-8 bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Bell className="w-4 h-4 text-navy/40" />
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                   <div className="bg-navy p-6 space-y-2 border border-navy">
                      <BarChart3 className="w-6 h-6 text-gold mb-2" />
                      <p className="text-[10px] uppercase font-black text-white/40 tracking-widest">Revenue Status</p>
                      <p className="text-xl font-black text-white">EGP 1.2M</p>
                   </div>
                   <div className="bg-gray-soft p-6 space-y-2 border border-slate-100">
                      <LayoutDashboard className="w-6 h-6 text-navy/40 mb-2" />
                      <p className="text-[10px] uppercase font-black text-navy/40 tracking-widest">Efficiency</p>
                      <p className="text-xl font-black text-navy">94%</p>
                   </div>
                </div>

                <div className="space-y-1">
                   {[
                     { name: 'Income Statement Q1', status: 'Ready' },
                     { name: 'VAT Return Submission', status: 'Filed' },
                   ].map((doc, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 group hover:border-gold transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-gray-soft flex items-center justify-center text-navy/40">
                             <Download className="w-4 h-4" />
                           </div>
                           <p className="text-[10px] font-black text-navy uppercase tracking-tight">{doc.name}</p>
                        </div>
                        <span className="text-[9px] font-black uppercase text-gold tracking-widest">{doc.status}</span>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';
