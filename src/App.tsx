import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Library } from './components/sections/Library';
import { Courses } from './components/sections/Courses';
import { Blog } from './components/sections/Blog';
import { Portal } from './components/sections/Portal';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { AIChat } from './components/ui/AIChat';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { isRtl } = useLanguage();

  return (
    <div className={isRtl ? "font-sans rtl" : "font-sans ltr"}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Library />
        <Courses />
        <Blog />
        <Portal />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
