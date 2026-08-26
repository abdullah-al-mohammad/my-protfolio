'use client';

import { useState } from 'react';
import Banner from './banneer/page';
import Contact from './contact/page';
import Education from './education/page';
import Footer from './footer/page';
import Skills from './my-skills/page';
import Navbar from './navbar/page';
import Portfolio from './portfolio/page';
import About from './about/page';

export default function Home() {
  const [current, setCurrent] = useState<'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact'>('home');

  const renderSection = () => {
    switch (current) {
      case 'home':
        return <Banner key="home" />;
      case 'about':
        return (
          <div className="fade-in">
            <About />
          </div>
        );
      case 'skills':
        return (
          <div className="fade-in">
            <Skills />
          </div>
        );
      case 'projects':
        return (
          <div className="fade-in">
            <Portfolio />
          </div>
        );
      case 'experience':
        return (
          <div className="fade-in">
            <Education />
          </div>
        );
      case 'contact':
        return (
          <div className="fade-in">
            <Contact />
          </div>
        );
      default:
        return <Banner key="home-default" />;
    }
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <Navbar current={current} onNavigate={(s) => setCurrent(s as any)} />

      <div className="py-8">
        {renderSection()}
      </div>

      {/* Footer remains visible on all pages */}
      <Footer />
    </main>
  );
}
