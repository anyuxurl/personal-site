
import React, { useState, useEffect, useCallback } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [showToast, setShowToast] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const content = TRANSLATIONS[lang];

  // Heuristic #1: System Status (Scroll progress & Back to Top)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Heuristic #3: User Control (Language Switching)
  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  // Heuristic #1 & #5: Feedback on action (Prevent broken mail client frustration)
  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(content.links.email);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, [content.links.email]);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Toast Notification (Heuristic #1: Feedback) */}
      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform ${
          showToast ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {content.ui.copied}
        </div>
      </div>

      {/* Language Toggle (Heuristic #3 & #7) */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-slate-900 tracking-tight">KC.</span>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => toggleLang('zh')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                lang === 'zh' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              简体中文
            </button>
            <button 
              onClick={() => toggleLang('en')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                lang === 'en' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {content.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-8">
            {content.role}
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={copyEmail}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span className="font-medium underline decoration-slate-200 underline-offset-4 group-hover:decoration-blue-200">Email</span>
            </button>
            <a 
              href={content.links.github} 
              target="_blank" 
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <a 
              href={content.links.telegram} 
              target="_blank" 
              className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7.021l-2.022 9.531c-.15.673-.546.837-1.111.519l-3.078-2.27-1.485 1.428c-.164.164-.301.301-.617.301l.221-3.136 5.708-5.155c.248-.22-.054-.343-.385-.122l-7.054 4.441-3.041-.951c-.661-.207-.674-.661.138-.978l11.884-4.58c.55-.201 1.03.129.824 1.015z"/></svg>
              </div>
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </header>

        {/* Content Sections */}
        <Section title={content.sections.about.title}>
          <p>{content.sections.about.content}</p>
        </Section>

        <Section title={content.sections.thoughts.title}>
          <p className="italic text-slate-500 border-l-4 border-slate-200 pl-6 py-2">
            "{content.sections.thoughts.content}"
          </p>
        </Section>

        <Section title={content.sections.skills.title}>
          <div className="flex flex-wrap gap-2">
            {content.sections.skills.items.map(skill => (
              <div 
                key={skill} 
                className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section title={content.sections.projects.title}>
          <div className="space-y-6">
            {content.sections.projects.items.map(project => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                cta={content.sections.projects.cta} 
              />
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {content.name}. Built with Precision & Care.
          </p>
        </footer>
      </main>

      {/* Back to Top (Heuristic #3: Freedom) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        } hover:bg-blue-600 focus:ring-4 focus:ring-blue-200`}
        aria-label={content.ui.backToTop}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </div>
  );
};

export default App;
