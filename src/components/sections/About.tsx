import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Target, Eye, ShieldCheck, Award, TrendingUp, Users } from 'lucide-react';

export const About = () => {
  const { isRtl } = useLanguage();

  const values = [
    { title: 'Trust & Integrity', desc: 'Building long-term relationships based on transparency and honesty.', icon: ShieldCheck },
    { title: 'Expertise', desc: 'Over 15 years of deep expertise in Egypt\'s financial and HR regulations.', icon: Award },
    { title: 'Innovation', desc: 'Implementing modern ERP and HR systems for business efficiency.', icon: TrendingUp },
  ];

  return (
    <section className="section-padding bg-gray-soft" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-navy/20 font-serif text-5xl md:text-6xl font-bold uppercase tracking-widest leading-none mb-[-20px]">Profile</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-navy">About <span className="text-gold italic">AKP Consulting</span></h3>
            </div>
            
            <p className="text-navy/70 leading-relaxed text-lg">
              AKP is a leading professional services firm based in Egypt, established to bridge the gap between complex regulatory requirements and business growth. We specialize in providing tailored financial, tax, and human resource solutions that empower organizations to focus on their core mission while we handle the complexities of compliance and organizational development.
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="bento-card p-6 shadow-sm">
                <Target className="w-10 h-10 text-gold mb-4" />
                <h4 className="font-black uppercase tracking-tight text-xl text-navy mb-2">Our Vision</h4>
                <p className="text-navy/60 text-sm">To be the primary partner for every business seeking financial excellence and HR innovation in the Middle East.</p>
              </div>
              <div className="bento-card p-6 shadow-sm">
                <Eye className="w-10 h-10 text-gold mb-4" />
                <h4 className="font-black uppercase tracking-tight text-xl text-navy mb-2">Our Mission</h4>
                <p className="text-navy/60 text-sm">Delivering precise, technology-driven consulting services that ensure compliance, efficiency, and sustainable growth.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
             {values.map((val, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -5 }}
                 className={cn(
                   "relative z-10 p-8 bento-card transition-all",
                   i === 0 ? "bg-navy text-white border-navy sm:mt-12" : "bg-white text-navy"
                 )}
               >
                 <val.icon className={cn("w-12 h-12 mb-6", i === 0 ? "text-gold" : "text-navy")} />
                 <h4 className="text-lg font-black uppercase tracking-tight mb-3">{val.title}</h4>
                 <p className={cn("text-xs leading-relaxed", i === 0 ? "text-white/60" : "text-navy/60")}>
                   {val.desc}
                 </p>
               </motion.div>
             ))}

             <div className="relative z-10 p-8 bento-card bg-gold text-navy border-gold flex flex-col justify-center">
                <Users className="w-12 h-12 mb-6" />
                <h4 className="text-4xl font-black mb-1">500+</h4>
                <p className="font-bold text-[10px] uppercase tracking-widest leading-tight">Partner Success Stories</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from '../../lib/utils';
