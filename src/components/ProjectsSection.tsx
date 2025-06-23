'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Summit 2024 - MedFinder',
      description: 'App Web para búsqueda de medicamentos segun la ubicacion de la eps, gestion de usuarios e implementacion IA y blockchain',
      image: '/projects/image1.png',
      githubUrl: 'https://github.com/JulianMbp/Medicamentos.git',
      technologies: ['Next.js', 'Django', 'PostgreSQL', 'Node.js']
    },
    {
      id: 2,
      title: 'Sistema de Monitoreo de Tráfico',
      description: 'Sistema de monitoreo de tráfico con IA para visualización de datos y análisis de patrones.',
      image: '/projects/image2.png', 
      githubUrl: 'https://github.com/sara9559ojeda/ProyectoFinalPatrones.git',
      technologies: ['Next.js', 'Springboot', 'Python', 'MySQL']
    },
    {
      id: 3,
      title: 'Sistema de gestión de reclamos',
      description: 'Gestión de reclamos implementando consultas SQL avanzadas y CRUD de datos.',
      image: '/projects/image3.png', 
      githubUrl: 'https://github.com/sara9559ojeda/ProyectoFinalBD.git',
      technologies: ['Springboot', 'MySQL', 'Html', 'JavaScript']
    },
  ];
  return (
    <section id="projects" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-electric-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-electric-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-electric-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-electric-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-6 animate-pulse delay-500"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-electric-violet-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-electric-violet-300 rounded-full animate-ping opacity-30 delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-electric-violet-500 rounded-full animate-ping opacity-35 delay-500"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-electric-violet-400 rounded-full animate-ping opacity-25 delay-1500"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-900/5 via-transparent to-electric-violet-900/5"></div>
        
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-electric-violet-500/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-electric-violet-500/10 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-violet-500/10 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-violet-500/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-violet-400 via-electric-violet-500 to-electric-violet-600 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-electric-violet-500/20 bg-electric-violet-500/5 hover:border-electric-violet-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-electric-violet-500/20 backdrop-blur-sm">
                <div className="relative h-60 sm:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-violet-600/20 to-electric-violet-800/40"></div>
                  <div className="w-full h-full bg-gradient-to-br from-electric-violet-800/50 to-electric-violet-900/50 flex items-center justify-center">
                    <svg className="w-16 h-16 text-electric-violet-400/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                 
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                </div>

                {/* Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-electric-violet-500/20 text-electric-violet-300 rounded-full border border-electric-violet-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botón */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-electric-violet-500 hover:bg-electric-violet-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Ver Código
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-electric-violet-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-electric-violet-300 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}