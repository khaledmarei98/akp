import React from 'react';
import { motion } from 'motion/react';
import { COURSES } from '../../data/mockData';
import { Clock, User as LucideUser, Star, Play, ChevronRight, GraduationCap } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Courses = () => {
  return (
    <section className="section-padding bg-gray-soft" id="courses">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-xs">
              <GraduationCap className="w-4 h-4" /> Professional Development
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">
              Training <span className="text-gold">Academy</span>
            </h2>
            <p className="text-navy/60 text-base font-medium">
              Upskill your finance and HR departments with our expert-led professional courses.
            </p>
          </div>
          <button className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-none hover:bg-gold hover:text-navy transition-all shadow-sm">
            View All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white bento-card overflow-hidden group border-slate-100"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-navy px-3 py-1 text-[9px] font-black text-white uppercase tracking-widest">
                  {course.category}
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-[9px] font-black text-navy/40 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gold" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-gold fill-current" />
                    4.9
                  </div>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-navy leading-tight group-hover:text-gold transition-colors">
                  {course.title}
                </h3>

                <button className="w-full bg-gray-soft text-navy py-4 border border-slate-100 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-navy group-hover:text-white transition-all">
                  Enroll Now <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
           <div className="text-6xl font-serif text-gold/20 mb-[-30px]">“</div>
           <p className="text-2xl font-serif font-bold text-navy/80 italic leading-relaxed">
             "The training sessions provided by AKP were transformative for our accounting team. Their deep knowledge of IFRS and Egyptian tax laws is unmatched."
           </p>
           <div className="mt-6">
              <p className="font-bold text-navy">Omar El-Ghadban</p>
              <p className="text-xs text-navy/40 uppercase tracking-widest">CFO, Nile Logistics Co.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

import { ArrowUpRight } from 'lucide-react';
