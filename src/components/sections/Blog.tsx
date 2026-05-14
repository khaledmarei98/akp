import React from 'react';
import { motion } from 'motion/react';
import { ARTICLES } from '../../data/mockData';
import { BookOpen, User, Clock, ChevronRight, Share2, ArrowRight } from 'lucide-react';

export const Blog = () => {
  return (
    <section className="section-padding bg-white" id="blog">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Insights & Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-navy">
            Professional <span className="text-gold">Perspectives</span>
          </h3>
          <p className="text-navy/60 text-base font-medium">
            Stay ahead with the latest financial updates, HR practices, and business strategies from our expert consultants.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 auto-rows-fr">
          {/* Featured Post - Bento Wide */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-navy text-white bento-card p-0 flex flex-col md:flex-row overflow-hidden border-navy"
          >
             <div className="md:w-1/2 overflow-hidden h-64 md:h-full">
                <img 
                  src={ARTICLES[0].image} 
                  alt={ARTICLES[0].title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <div className="text-gold text-[10px] font-black uppercase tracking-[0.2em]">Featured</div>
                <h4 className="text-2xl font-black uppercase tracking-tight leading-tight">
                  {ARTICLES[0].title}
                </h4>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  Building a robust accounting system is the foundation of any successful business in Egypt.
                </p>
                <button className="flex items-center gap-3 text-gold font-black text-[10px] uppercase tracking-widest pt-4">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
             </div>
          </motion.div>

          <motion.div 
            className="md:col-span-4 bento-card bg-gold text-navy border-gold flex flex-col justify-center items-center text-center p-8"
          >
             <BookOpen className="w-12 h-12 mb-6" />
             <h4 className="font-black uppercase tracking-tight text-xl mb-4">Newsletter</h4>
             <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">Weekly insights on Egyptian tax laws and HR regulations.</p>
             <input type="email" placeholder="ENTER EMAIL" className="w-full bg-white/10 border border-navy/10 px-4 py-3 placeholder:text-navy/40 text-[10px] font-black mb-2 focus:outline-none focus:border-navy" />
             <button className="w-full bg-navy text-white text-[10px] font-black py-4 uppercase tracking-[0.2em]">Subscribe</button>
          </motion.div>

          {ARTICLES.slice(1, 4).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="md:col-span-4 bg-white bento-card p-6 border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[9px] font-black text-navy/40 uppercase tracking-[0.2em]">
                  <span>{article.date}</span>
                  <span className="text-gold">{article.category}</span>
                </div>
                <h4 className="text-sm font-black uppercase tracking-tight text-navy leading-tight">
                  {article.title}
                </h4>
              </div>
              <button className="mt-8 flex items-center justify-between text-[10px] font-black uppercase tracking-widest group">
                 Read Now
                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="bg-navy text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-navy/90 transition-all shadow-xl shadow-navy/20">
              Browse All Articles <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  );
};
