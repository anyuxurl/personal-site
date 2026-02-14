
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-8 md:py-12 border-b border-slate-200 last:border-0">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed text-lg">
        {children}
      </div>
    </section>
  );
};

export default Section;
