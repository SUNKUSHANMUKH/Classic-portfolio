import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Project } from '../types';


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <span className="text-white font-medium">{project.category}</span>
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={16} className="text-white" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <GitHub size={16} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-blue-100 dark:bg-slate-600 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;