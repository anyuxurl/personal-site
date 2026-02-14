
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  cta: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, cta }) => {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={project.link}
        className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
      >
        <span>{cta}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;
