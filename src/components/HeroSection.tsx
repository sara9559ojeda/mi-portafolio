'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16 md:pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-electric-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
          <div className={`text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-4 mt-4 sm:mt-0">
              <span className="inline-block px-3 py-2 sm:px-4 rounded-full bg-electric-violet-500/10 border border-electric-violet-500/20 text-electric-violet-300 text-xs sm:text-sm font-medium">
                👋 Hola, soy
              </span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mr-0 sm:mr-40 sm:pr-20  mr-30 ">
              <span className="bg-gradient-to-r  from-white to-gray-300 bg-clip-text text-transparent font-[family-name:var(--font-rock3d)]">
                Sara Maria Ojeda Lopez
              </span>
            </h1>

            {/* Title/Role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-electric-violet-400 via-electric-violet-500 to-electric-violet-600 bg-clip-text text-transparent">
                Estudiante de ingeriería de software
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Apasionado por crear experiencias digitales excepcionales. 
              Especializado en desarrollo web moderno con tecnologías de vanguardia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-gradient-to-r  from-electric-violet-500 to-electric-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:from-electric-violet-600 hover:to-electric-violet-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-electric-violet-500/25 text-sm sm:text-base">
                Ver Proyectos
              </button>
              <button className="border border-electric-violet-500/50 text-electric-violet-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-electric-violet-500/10 hover:border-electric-violet-400 transition-all duration-300 text-sm sm:text-base">
                Descargar CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-6 sm:mt-8">
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - 3D Design Container */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-electric-violet-900/20 to-black/40 rounded-2xl border border-electric-violet-500/20 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-electric-violet-500/30 to-electric-violet-600/30 rounded-full flex items-center justify-center border border-electric-violet-400/30">
                    <svg className="w-16 h-16 text-electric-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <p className="text-electric-violet-300/70 text-sm">
                    Diseño 3d en rpoceso
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-violet-500 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-violet-400 rounded-full animate-pulse opacity-40 delay-700"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-electric-violet-600 rounded-full animate-pulse opacity-50 delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}