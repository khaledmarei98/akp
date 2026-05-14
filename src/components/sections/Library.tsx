import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Download, FileText, FileSpreadsheet, File as LucideFile, Book, Filter } from 'lucide-react';
import { LIBRARY_ITEMS } from '../../data/mockData';
import { cn } from '../../lib/utils';

export const Library = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Accounting', 'Tax', 'HR', 'Finance'];

  const filteredItems = LIBRARY_ITEMS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="w-5 h-5 text-red-500" />;
      case 'Excel': return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
      case 'Word': return <LucideFile className="w-5 h-5 text-blue-500" />;
      case 'Book': return <Book className="w-5 h-5 text-gold" />;
      default: return <LucideFile className="w-5 h-5" />;
    }
  };

  return (
    <section className="section-padding bg-navy text-white overflow-hidden relative" id="library">
      {/* Decorative background element */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px] z-0" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-12 space-y-4">
          <h2 className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Reference Center</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Resource <span className="text-gold">Library</span></h3>
          <p className="text-white/60 text-base font-medium">Access a comprehensive collection of tax laws, accounting standards, and HR templates.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search references, laws, templates..."
              className="w-full bg-white/5 border border-white/10 rounded-none py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-all text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-4 rounded-none text-[10px] font-black uppercase tracking-widest transition-all",
                  activeCategory === cat ? "bg-gold text-navy" : "bg-white/5 border border-white/10 hover:border-white/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-none hover:border-gold transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-12 bg-white/5 flex items-center justify-center font-bold text-[10px]">
                    {item.type}
                  </div>
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{item.date}</span>
                </div>
                <h4 className="font-black text-sm uppercase tracking-tight mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                <span className="inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-gold/10 text-gold mb-6">{item.category}</span>
              </div>
              
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-none font-black text-[10px] uppercase tracking-widest hover:bg-gold hover:text-navy transition-all">
                Download Resource
              </button>
            </motion.div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className="col-span-full py-20 text-center text-white/40 italic">
              No matching resources found. Try adjusting your search or filters.
            </div>
          )}
        </div>

        {/* Featured Section */}
        <div className="mt-20 p-8 rounded-[40px] bg-gold flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-gold/20">
          <div className="text-navy">
             <h4 className="text-2xl font-serif font-bold mb-2">Need a custom template?</h4>
             <p className="font-medium opacity-80">Our experts can design custom HR and financial templates for your specific company needs.</p>
          </div>
          <button className="bg-navy text-white px-8 py-4 rounded-2xl font-bold whitespace-nowrap hover:scale-105 transition-transform shadow-xl">
             Request Custom Asset
          </button>
        </div>
      </div>
    </section>
  );
};
