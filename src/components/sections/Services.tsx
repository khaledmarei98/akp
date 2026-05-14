import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICES } from '../../data/mockData';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const ServiceIcon = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <Icon className={className} />;
};

export const Services = () => {
  const { lang } = useLanguage();

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-xs">
              <span className="w-8 h-[2px] bg-gold" /> Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">
              Specialized <span className="text-gold">Solutions</span>
            </h2>
            <p className="text-navy/60 text-base font-medium">
              We provide a full spectrum of services designed to address the unique challenges of the Egyptian business market.
            </p>
          </div>
          <button className="text-navy font-black text-xs uppercase tracking-widest flex items-center gap-2 group border-b-2 border-gold pb-1 self-start md:self-end">
            View All Services <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-white border border-slate-100 hover:border-gold transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-soft flex items-center justify-center text-navy mb-6 group-hover:bg-gold transition-all">
                  <ServiceIcon name={service.icon} className="w-6 h-6" />
                </div>
                
                <span className="inline-block text-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {service.category}
                </span>
                
                <h3 className="text-xl font-black uppercase tracking-tight text-navy mb-3">{service.title}</h3>
                <p className="text-navy/60 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-navy font-black text-[10px] uppercase tracking-widest group-hover:text-gold transition-colors">
                  Learn More 
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
