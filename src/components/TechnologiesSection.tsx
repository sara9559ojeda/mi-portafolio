'use client';

import { useEffect, useState } from 'react';

export default function TechnologiesSection() {
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

    const section = document.getElementById('technologies');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      name: 'React',
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          <path d="M12 7.5c2.995 0 5.25.756 5.25 1.5S14.995 10.5 12 10.5 6.75 9.744 6.75 9s2.255-1.5 5.25-1.5zM12 16.5c-2.995 0-5.25-.756-5.25-1.5S9.005 13.5 12 13.5s5.25.756 5.25 1.5-.755 1.5-5.25 1.5z"/>
          <ellipse cx="12" cy="12" rx="7.5" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="3" ry="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="3" ry="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)"/>
        </svg>
      ),
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      hoverColor: 'hover:border-cyan-400',
      description: 'Frontend Library'
    },
    {
      name: 'Python',
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V3.23l.03-.21.07-.28.12-.32.18-.35.26-.36.36-.36.46-.35.59-.32.73-.28.88-.21 1.05-.14 1.23-.05 1.22.06 1.04.16.87.24.71.32.57.36.44.4.33.42.24.42.16.4.1.36.05.32.02.26.01.21v5.84l.05.69.14.59.21.5.28.41.32.33.35.27.36.2.36.15.35.1.32.07.28.04.21.02h3.06l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.26.02-.21.01h-5.84l-.69.05-.59.14-.5.21-.41.28-.33.32-.27.35-.2.36-.15.36-.1.35-.07.32-.04.28-.02.21v3.23l-.03.21-.07.28-.12.32-.18.35-.26.36-.36.36-.46.35-.59.32-.73.28-.88.21-1.05.14-1.23.05-1.22-.06-1.04-.16-.87-.24-.71-.32-.57-.36-.44-.4-.33-.42-.24-.42-.16-.4-.1-.36-.05-.32-.02-.26-.01-.21V15.5l-.05-.63-.14-.55-.21-.46-.28-.38-.32-.31-.35-.25-.36-.19-.35-.14-.32-.1-.3-.07-.26-.04-.21-.02H8.83z"/>
        </svg>
      ),
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      hoverColor: 'hover:border-yellow-400',
      description: 'Backend & AI'
    },
    {
      name: 'Java',
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      ),
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      hoverColor: 'hover:border-red-400',
      description: 'Enterprise Development'
    }
  ];

  return (
    <section id="technologies" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
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
              Tecnologías
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Las herramientas y tecnologías en aprendizaje para crear soluciones innovadoras
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`relative p-6 sm:p-8 rounded-2xl border ${tech.bgColor} ${tech.borderColor} ${tech.hoverColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg backdrop-blur-sm`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${tech.bgColor} border ${tech.borderColor} mb-4 sm:mb-6 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {tech.name}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  {tech.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-300 pointer-events-none"></div>

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