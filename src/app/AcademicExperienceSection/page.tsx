'use client';

import { useEffect, useState } from 'react';

export default function AcademicExperienceSection() {
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

    const section = document.getElementById('academic-experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const academicHistory = [
    {
      year: '2022',
      title: 'Bachiller Académico',
      institution: 'Quijano Vodniza',
      status: 'Completado',
      description: 'Formación básica académica',
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 012.828 0l.172.172a2 2 0 010 2.828L12 17H9v-3zM19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
</svg>

      ),
      color: 'electric-violet-500'
    },
    {
      year: '2022',
      title: 'Técnico Auxiliar de Electrónica',
      institution: 'Cinar sistemas',
      status: 'Completado',
      description: 'Fundamentos en electrónica analógica y digital, circuitos integrados y sistemas de control.',
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'electric-violet-500'
    },
    {
      year: '2025',
      title: 'Técnico Auxiliar de Sistemas',
      institution: 'Cinar sistemas',
      status: 'Completado',
      description: 'Especialización en administración de sistemas, redes de computadores y soporte técnico.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'electric-violet-500'
    },
    {
      year: 'Presente',
      title: 'Ingeniería de Software',
      institution: 'Universidad Cooperativa de Colombia',
      status: 'En Proceso',
      description: 'Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'electric-violet-500'
    }
  ];

  return (
    <section id="academic-experience" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-electric-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-electric-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-electric-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-electric-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-6 animate-pulse delay-500"></div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
 
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-electric-violet-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-electric-violet-300 rounded-full animate-ping opacity-30 delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-electric-violet-500 rounded-full animate-ping opacity-35 delay-500"></div>
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-electric-violet-400 rounded-full animate-ping opacity-25 delay-1500"></div>
   
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
              Experiencia Académica
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Mi trayectoria educativa en tecnología y desarrollo de software
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-violet-500 via-electric-violet-400 to-electric-violet-600 transform md:-translate-x-0.5"></div>
          <div className="space-y-8 sm:space-y-12">
            {academicHistory.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-${item.color} border-4 border-black transform md:-translate-x-1/2 z-20 shadow-lg`}>
                  <div className={`absolute inset-0 rounded-full bg-${item.color} animate-ping opacity-20`}></div>
                </div>
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-8' : 'md:pl-8 md:ml-8'
                } max-w-lg ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="group relative p-6 bg-gradient-to-br from-electric-violet-900/10 to-black/40 rounded-2xl border border-electric-violet-500/20 hover:border-electric-violet-400/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">

                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.status === 'En Proceso' 
                        ? 'bg-electric-violet-500/20 text-electric-violet-300 border border-electric-violet-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {item.year}
                    </div>
                    <div className={`flex items-center gap-3 mb-2 ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''
                    }`}>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-${item.color}/20 text-${item.color} border border-${item.color}/30`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-electric-violet-300 font-medium mb-2">
                      {item.institution}
                    </p>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.status === 'En Proceso' 
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {item.status}
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white to-transparent transition-opacity duration-300 pointer-events-none"></div>
                    <div className="absolute top-3 right-3 w-2 h-2 bg-electric-violet-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-violet-500/10 border border-electric-violet-500/20 text-electric-violet-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium">
              Siempre en constante aprendizaje y crecimiento profesional
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
}