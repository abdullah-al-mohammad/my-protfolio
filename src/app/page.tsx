"use client";
import { useState } from 'react';
import Banner from './banneer/page';
import WhatsAppButton from './components/WhatsAppButton';
import Contact from './contact/page';
import Education from './education/page';
import Footer from './footer/page';
import Skills from './my-skills/page';
import Navbar from './navbar/page';
import Portfolio from './portfolio/page';
import About from './about/page';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <Navbar setActiveSection={setActiveSection}></Navbar>
      <div className="space-y-20 py-10">
        {activeSection === 'home' && <Banner></Banner>}
        {activeSection === 'projects' && <Portfolio></Portfolio>}
        {activeSection === 'contact' && <Contact></Contact>}
        {activeSection === 'about' && (
          <div className="space-y-20">
            <About></About>
            <Skills></Skills>
            <Education></Education>
          </div>
        )}
      </div>
      <Footer></Footer>
      <WhatsAppButton />
    </main>
  );
}
