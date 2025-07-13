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

  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        {
          name: 'React',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <g stroke="currentColor" fill="none">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
              </g>
            </svg>

          ),
          color: 'text-cyan-400',
          bgColor: 'bg-cyan-500/10',
          borderColor: 'border-cyan-500/20',
          hoverColor: 'hover:border-cyan-400'
        },
        {
          name: 'Angular',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 6.5 4 18.5 12 22 20 18.5 22 6.5 12 2zm0 2.18l6.84 2.97L17.5 17.25 12 19.82 6.5 17.25 4.84 7.15 12 4.18z" />
              <path d="M12 6.4l4.2 9.6h-1.6L13.8 14H10.2L9.4 16H7.8L12 6.4z" />
              <path d="M12 9.4L10.8 12h2.4L12 9.4z" />
            </svg>
          ),
          color: 'text-red-500',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/20',
          hoverColor: 'hover:border-red-400'
        },
        {
          name: 'Svelte',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className='p-2' width="1702.000000pt" height="2048.000000pt" viewBox="0 0 1702.000000 2048.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)" fill="#ff550b" stroke="none">
                <path d="M10375 20470 c-950 -59 -1870 -336 -2645 -795 -116 -69 -4885 -3118 -5080 -3248 -774 -517 -1427 -1264 -1844 -2112 -303 -614 -481 -1273 -548 -2025 -18 -209 -15 -762 6 -970 74 -738 249 -1362 557 -1985 43 -88 79 -164 79 -167 0 -4 -28 -51 -62 -105 -111 -176 -188 -314 -288 -518 -284 -580 -444 -1153 -522 -1868 -29 -269 -32 -870 -5 -1122 47 -437 117 -786 233 -1169 334 -1100 1035 -2137 1964 -2907 906 -752 2026 -1246 3185 -1408 502 -70 1062 -79 1545 -25 831 93 1639 360 2330 771 69 41 1247 789 2618 1661 2496 1588 2670 1703 2922 1917 593 503 1058 1102 1391 1789 315 653 491 1342 540 2111 14 230 6 674 -16 895 -68 680 -244 1306 -536 1909 l-99 204 78 126 c459 739 708 1488 807 2426 22 207 31 707 16 920 -71 1032 -384 1960 -946 2805 -412 620 -848 1100 -1380 1521 -979 775 -2153 1242 -3405 1354 -210 19 -700 27 -895 15z m890 -2335 c448 -50 834 -162 1240 -359 594 -289 1062 -687 1459 -1243 364 -510 571 -1050 640 -1668 44 -387 22 -801 -59 -1130 -30 -122 -168 -582 -178 -591 -2 -2 -102 66 -223 152 -362 257 -613 409 -949 574 -350 172 -670 297 -1053 411 -66 19 -73 24 -68 43 3 11 9 84 13 161 5 110 2 163 -11 243 -76 455 -386 795 -834 914 -96 25 -343 36 -450 19 -84 -13 -235 -60 -326 -101 -36 -15 -570 -351 -1188 -746 -617 -394 -1528 -976 -2023 -1292 -495 -316 -1073 -686 -1284 -821 -212 -135 -417 -271 -456 -303 -156 -124 -271 -303 -325 -503 -28 -102 -38 -312 -20 -423 86 -537 556 -932 1110 -932 180 0 359 44 530 129 41 20 476 293 965 606 1073 686 1060 678 1260 775 474 231 915 341 1435 359 820 28 1569 -184 2245 -634 433 -288 774 -635 1090 -1110 315 -472 498 -986 560 -1570 29 -276 16 -685 -31 -965 -134 -799 -609 -1564 -1280 -2062 -56 -41 -1228 -792 -2605 -1669 -2030 -1291 -2536 -1609 -2674 -1679 -503 -255 -961 -370 -1535 -387 -888 -26 -1761 270 -2468 836 -418 336 -794 803 -1032 1286 -179 363 -278 685 -337 1105 -14 99 -18 193 -18 455 0 389 8 458 91 820 45 196 123 476 141 507 2 4 81 -48 176 -116 331 -236 533 -364 803 -510 370 -200 817 -383 1237 -506 l79 -23 -9 -91 c-4 -50 -8 -131 -7 -181 7 -615 518 -1115 1139 -1115 231 0 441 68 672 217 94 60 2567 1640 3838 2451 909 580 888 566 976 649 161 152 255 329 294 557 43 253 -19 528 -172 765 -58 89 -236 260 -332 319 -177 109 -351 161 -561 169 -205 8 -357 -24 -555 -117 -44 -20 -492 -300 -995 -621 -1029 -658 -1039 -664 -1205 -747 -372 -185 -800 -304 -1270 -353 -155 -16 -556 -16 -710 0 -1111 115 -2080 675 -2726 1576 -373 519 -586 1076 -661 1720 -16 141 -16 558 1 700 51 450 159 816 347 1185 236 466 609 897 1030 1192 93 65 4966 3166 5069 3225 197 114 457 227 715 312 256 84 497 126 885 155 97 7 462 -4 590 -19z" />
              </g>
            </svg>


          ),
          color: 'text-orange-500',
          bgColor: 'bg-orange-500/10',
          borderColor: 'border-orange-500/20',
          hoverColor: 'hover:border-orange-400'
        },
        {
          name: 'JavaScript',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.529-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
            </svg>
          ),
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-500/10',
          borderColor: 'border-yellow-500/20',
          hoverColor: 'hover:border-yellow-400'
        },
        {
          name: 'Next.js',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Next.js Logo">
              <title>Next.js Logo</title>
              <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256c141.162 0 256-114.836 256-256S397.164 0 256 0Zm113.958 360.349h-42.642l-98.385-146.47v146.47h-38.038V151.651h42.802l98.225 146.312V151.651h38.038v208.698Z" />
            </svg>


          ),
          color: 'text-gray-200',
          bgColor: 'bg-gray-500/10',
          borderColor: 'border-gray-500/20',
          hoverColor: 'hover:border-gray-400'
        }
      ]
    },
    {
      title: "Backend",
      technologies: [
        {
          name: 'Python',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Python logo">
              <path fill="#306998" d="M126.9 0c-6.3.1-12.4.6-17.8 1.5-15.8 2.6-18.7 8-18.7 18V41h37v4H73.2c-10.1 0-18.9 6.1-22.3 17.6-3.3 11.1-3.4 18-3.4 29.6 0 11.5.2 18.2 3.4 29.2 2.6 9 8.8 17.6 19.6 17.6h18.6v-25.2c0-12.6 10.9-23.9 23.4-23.9H143c10.3 0 18.6-8.5 18.6-18.9V19c0-10-8.5-17.3-18.6-18.8-6.4-1.1-13.1-1.4-19.1-1.2zm-24.4 20.7c3.9 0 7.1 3.3 7.1 7.3s-3.2 7.3-7.1 7.3c-4 0-7.2-3.3-7.2-7.3s3.2-7.3 7.2-7.3z" />
              <path fill="#FFD43B" d="M129.1 254.6c6.3-.1 12.4-.6 17.8-1.5 15.8-2.6 18.7-8 18.7-18v-21.5h-37v-4h54.2c10.1 0 18.9-6.1 22.3-17.6 3.3-11.1 3.4-18 3.4-29.6 0-11.5-.2-18.2-3.4-29.2-2.6-9-8.8-17.6-19.6-17.6h-18.6v25.2c0 12.6-10.9 23.9-23.4 23.9H113c-10.3 0-18.6 8.5-18.6 18.9v45.6c0 10 8.5 17.3 18.6 18.8 6.4 1.1 13.1 1.4 19.1 1.2zm24.4-20.7c-3.9 0-7.1-3.3-7.1-7.3s3.2-7.3 7.1-7.3c4 0 7.2 3.3 7.2 7.3s-3.2 7.3-7.2 7.3z" />
            </svg>


          ),
          color: 'text-blue-400',
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20',
          hoverColor: 'hover:border-blue-400'
        },
        {
          name: 'Django',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142z" />
              <path d="M21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924z" />
              <path d="M17.39 0h3.924v4.026H17.39V0z" />
            </svg>
          ),
          color: 'text-green-500',
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20',
          hoverColor: 'hover:border-green-400'
        },
        {
          name: 'Java',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
            </svg>
          ),
          color: 'text-red-400',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/20',
          hoverColor: 'hover:border-red-400'
        },
        {
          name: 'Spring Boot',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="2216" className='p-2' viewBox="-2.1 0 514.3 457.8" width="2500">
              <path d="m503.5 201.4-100.5-173.9c-8.7-15.1-30.1-27.5-47.6-27.5h-200.8c-17.4 0-38.9 12.4-47.6 
              27.5l-100.4 173.9c-8.7 15.1-8.7 39.8 0 54.9l100.4 174c8.7 15.1 30.1 27.5 47.6 27.5h200.9c17.4 0 38.8-12.4 47.6-27.5l100.4-174c8.7-15.1 8.7-39.8 0-54.9zm-270.2-105.2c0-11.4 9.3-20.7 20.7-20.7s20.7 9.3 20.7 20.7v123.7c0 11.4-9.3 20.7-20.7 20.7s-20.7-9.3-20.7-20.7zm20.7 264.1c-77.4 0-140.4-63-140.4-140.4.1-44.4 21.1-86.1 56.7-112.7 8.2-6.1 19.7-4.4 25.8 3.8s4.4 19.7-3.8 25.8c-45.9 34.1-55.5 99-21.4 144.9s99 55.5 144.9 21.4c26.3-19.5 41.8-50.4 41.8-83.2-.1-32.9-15.7-63.8-42.2-83.4-8.2-6-9.9-17.6-3.9-25.8s17.6-9.9 25.8-3.9c35.9 26.5 57 68.5 57.1 113.1 0 77.5-63 140.4-140.4 140.4z" fill="#6db33f" />
            </svg>
          ),
          color: 'text-green-400',
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20',
          hoverColor: 'hover:border-green-400'
        },
        {
          name: 'Node.js',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm-6.8 6.1l6.8-3.9 6.8 3.9-6.8 3.9-6.8-3.9zm8.93 5.25v6.2L12 20.35l-2.13-1.25v-6.2l2.13 1.25 2.13-1.25z" />
            </svg>
          ),
          color: 'text-green-500',
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20',
          hoverColor: 'hover:border-green-400'
        }
      ]
    },
    {
      title: "Bases de Datos",
      technologies: [
        {
          name: 'PostgreSQL',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="221.000000pt" height="228.000000pt" viewBox="0 0 221.000000 228.000000" className='p-2' preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)" fill="#3789ff" stroke="none">
                <path d="M1497 2201 l-38 -6 76 -50 c98 -63 201 -172 259 -272 70 -118 80 -159 70 -267 -9 -95 -9 -192 -3 -386 4 -108 2 -119 -23 -172 -38 -81 -20 -72 30 15 183 320 297 743 243 899 -17 52 -120 144 -206 185 -116 55 -272 76 -408 54z" />
                <path d="M370 2166 c-217 -47 -326 -242 -291 -520 29 -229 136 -605 221 -774 50 -99 120 -182 155 -182 28 0 69 27 101 66 17 22 61 72 97 112 l66 74 -38 51 c-49 67 -73 130 -73 198 0 242 12 523 26 585 28 130 68 217 151 331 16 21 15 21 -53 37 -162 37 -266 43 -362 22z" />
                <path d="M1033 2170 c-177 -42 -303 -217 -339 -472 l-6 -48 55 25 c31 15 84 28 121 32 174 16 239 -81 240 -357 0 -132 -6 -158 -67 -305 -44 -105 -44 -110 2 -123 47 -15 88 -60 95 -105 3 -18 7 -149 10 -292 4 -282 11 -326 61 -392 47 -61 117 -77 220 -49 94 25 141 60 169 128 17 39 46 232 75 483 9 88 22 169 28 180 7 12 24 27 40 35 15 8 30 15 32 17 2 1 -7 17 -21 35 -14 18 -62 103 -107 189 -120 230 -153 342 -130 434 23 90 95 135 217 135 l61 0 -19 45 c-83 194 -268 354 -462 400 -66 15 -220 18 -275 5z" />
                <path d="M1653 1639 c-74 -21 -93 -109 -52 -232 32 -96 161 -339 174 -326 6 6 10 98 10 252 0 133 4 259 9 280 l8 37 -58 -1 c-33 0 -73 -5 -91 -10z m84 -34 c8 -23 -26 -55 -58 -55 -27 0 -59 22 -59 40 0 29 106 42 117 15z" />
                <path d="M782 1611 c-46 -16 -85 -31 -86 -33 -2 -1 -6 -100 -10 -218 l-6 -216 30 -61 c17 -34 46 -73 66 -88 36 -28 116 -59 135 -53 6 2 21 33 34 68 13 36 35 93 49 126 47 113 53 273 16 415 -24 87 -97 107 -228 60z m166 -12 c39 -13 47 -34 22 -59 -24 -24 -58 -26 -88 -4 -27 18 -30 61 -4 67 29 8 38 7 70 -4z" />
                <path d="M1770 840 c-11 -11 -20 -33 -20 -49 0 -27 3 -29 42 -33 76 -7 177 10 244 41 35 16 64 32 64 34 0 2 -42 2 -94 -1 -71 -3 -106 -1 -142 12 -61 21 -70 20 -94 -4z" />
                <path d="M951 800 c-50 -59 -74 -73 -167 -97 l-69 -17 40 -12 c116 -36 249 3 299 86 15 26 15 34 4 57 -23 48 -57 42 -107 -17z" />
              </g>
            </svg>
          ),
          color: 'text-blue-500',
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20',
          hoverColor: 'hover:border-blue-400'
        },
        {
          name: 'MySQL',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className='p-2' width="226.000000pt" height="223.000000pt" viewBox="0 0 226.000000 223.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,223.000000) scale(0.100000,-0.100000)" fill="#ff502a" stroke="none">
                <path d="M83 2219 c-35 -10 -66 -48 -77 -92 -12 -48 12 -101 94 -213 69 -95 84 -124 116 -219 46 -139 94 -241 139 -295 25 -30 33 -46 26 -58 -4 -10 -19 -60 -32 -112 -19 -74 -24 -121 -23 -210 0 -162 36 -273 112 -352 40 -42 76 -54 115 -39 34 13 52 54 69 156 l14 80 43 -82 c46 -88 114 -164 251 -283 l75 -65 -55 61 c-96 105 -204 282 -276 453 -21 49 -42 87 -46 85 -4 -3 -21 -25 -38 -49 -32 -47 -55 -123 -65 -222 -4 -35 -10 -63 -14 -63 -21 0 -56 39 -76 84 -64 145 -67 314 -10 478 33 95 32 120 -8 165 -51 58 -74 105 -122 243 -52 153 -67 184 -136 275 -73 97 -89 126 -89 157 0 34 31 52 75 45 48 -8 177 -72 225 -112 33 -28 51 -35 83 -35 99 -1 172 -19 272 -69 260 -130 496 -382 610 -653 64 -153 172 -384 199 -426 32 -51 38 -55 146 -92 52 -18 111 -41 130 -51 57 -29 263 -173 268 -186 3 -10 -13 -13 -58 -13 -73 0 -193 -24 -255 -50 -43 -19 -44 -19 -32 -51 28 -75 147 -175 287 -241 41 -19 109 -60 151 -90 97 -70 92 -48 -14 63 -55 57 -116 108 -184 152 -86 55 -135 101 -121 111 3 2 87 20 242 50 43 9 81 18 84 21 7 7 -54 82 -97 120 -78 69 -221 167 -295 202 -174 83 -154 64 -227 210 -37 73 -93 195 -125 270 -102 242 -258 442 -465 598 -185 139 -286 184 -451 200 -54 5 -75 12 -105 37 -52 41 -141 85 -210 103 -64 17 -74 17 -120 4z" />
                <path d="M471 1841 c-11 -7 -8 -17 17 -47 16 -22 33 -49 37 -61 8 -28 21 -29 35 -4 17 33 11 61 -19 92 -31 30 -46 35 -70 20z" />
              </g>
            </svg>
          ),
          color: 'text-orange-500',
          bgColor: 'bg-orange-500/10',
          borderColor: 'border-orange-500/20',
          hoverColor: 'hover:border-orange-400'
        },
        {
          name: 'MongoDB',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
            </svg>
          ),
          color: 'text-green-600',
          bgColor: 'bg-green-600/10',
          borderColor: 'border-green-600/20',
          hoverColor: 'hover:border-green-500'
        }
      ]
    },
    {
      title: "Control de Versiones",
      technologies: [
        {
          name: 'Git',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
            </svg>
          ),
          color: 'text-red-500',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/20',
          hoverColor: 'hover:border-red-400'
        },
        {
          name: 'GitHub',
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          ),
          color: 'text-gray-300',
          bgColor: 'bg-gray-600/10',
          borderColor: 'border-gray-600/20',
          hoverColor: 'hover:border-gray-500'
        }
      ]
    },
    {
      title: "Herramientas y Otros",
      technologies: [
        {
          name: 'WordPress',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#003ed6" stroke="none">
                <path d="M986 1895 c-233 -44 -442 -198 -549 -402 -66 -127 -89 -220 -90 -363 -1 -90 4 -133 21 -198 59 -218 197 -393 390 -495 125 -66 219 -89 362 -90 142 -1 244 23 375 91 127 66 251 190 317 317 66 128 92 233 92 370 0 358 -235 664 -580 755 -106 28 -238 33 -338 15z m292 -34 c407 -84 668 -479 584 -884 -65 -310 -294 -533 -607 -592 -393 -75 -784 190 -865 585 -25 119 -25 190 -1 305 61 297 285 523 578 585 114 24 196 24 311 1z" />
                <path d="M1015 1786 c-91 -18 -176 -50 -245 -93 -58 -37 -147 -118 -182 -167 l-21 -28 118 3 c102 3 119 2 128 -13 17 -26 -8 -48 -54 -48 -22 0 -39 -3 -39 -7 0 -24 236 -699 241 -690 4 7 37 101 73 211 l67 198 -52 144 -52 144 -37 0 c-44 0 -69 23 -54 48 9 13 37 15 205 14 107 0 197 -1 200 -1 4 -1 9 -8 13 -16 9 -23 -22 -45 -64 -45 l-39 0 116 -342 c64 -189 118 -346 122 -350 3 -4 31 75 61 175 75 252 73 301 -15 447 -40 66 -55 123 -43 166 10 38 54 84 79 84 78 0 -121 122 -251 153 -96 24 -195 28 -275 13z" />
                <path d="M1725 1338 c-7 -66 -27 -131 -169 -541 -97 -283 -98 -281 40 -143 45 46 94 106 112 139 69 130 100 282 82 407 -9 66 -46 200 -55 200 -2 0 -6 -28 -10 -62z" />
                <path d="M487 1328 c-55 -176 -40 -345 46 -513 47 -91 173 -227 245 -264 23 -12 42 -20 42 -18 0 11 -303 833 -309 840 -4 4 -15 -16 -24 -45z" />
                <path d="M1038 768 c-71 -205 -94 -284 -85 -290 38 -23 214 -28 307 -9 81 17 84 20 66 67 -8 21 -52 140 -97 264 -44 124 -84 230 -88 237 -3 7 -50 -114 -103 -269z" />
              </g>
            </svg>
          ),
          color: 'text-blue-600',
          bgColor: 'bg-blue-600/10',
          borderColor: 'border-blue-600/20',
          hoverColor: 'hover:border-blue-500'
        },
        {
          name: 'Arduino',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className='p-2' width="272.000000pt" height="134.000000pt" viewBox="0 0 272.000000 134.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#37cfff" stroke="none">
                <path d="M1887 1324 c-38 -8 -93 -26 -124 -39 -116 -52 -268 -183 -358 -309 -22 -30 -43 -55 -46 -53 -4 1 -34 37 -68 79 -104 129 -228 229 -342 275 -114 46 -173 55 -323 51 -131 -4 -146 -6 -216 -36 -290 -124 -463 -450 -395 -741 97 -410 616 -618 1005 -403 77 42 202 165 275 270 28 39 53 71 56 72 4 0 18 -17 32 -38 121 -183 308 -322 507 -378 88 -24 244 -24 325 0 177 53 341 186 423 342 55 107 75 187 75 299 -2 272 -192 503 -488 595 -93 28 -246 35 -338 14z m-1115 -215 c128 -27 275 -136 386 -287 83 -113 83 -99 6 -215 -93 -141 -220 -267 -299 -297 -82 -32 -238 -39 -321 -15 -175 51 -296 174 -325 331 -34 184 106 410 294 475 60 21 179 25 259 8z m1389 -5 c276 -82 409 -328 301 -558 -20 -42 -55 -91 -94 -132 -253 -264 -630 -156 -861 247 l-27 45 58 84 c107 158 232 270 344 310 68 25 203 26 279 4z" />
                <path d="M450 715 l0 -45 225 0 225 0 0 45 0 45 -225 0 -225 0 0 -45z" />
                <path d="M1960 835 l0 -65 -60 0 -60 0 0 -55 0 -55 60 0 60 0 0 -65 0 -65 60 0 60 0 0 65 0 65 65 0 65 0 0 55 0 55 -65 0 -65 0 0 65 0 65 -60 0 -60 0 0 -65z" />
                <path d="M2556 1282 c7 -4 14 -18 17 -32 l4 -25 2 27 c0 14 7 29 14 31 6 3 -1 6 -18 6 -16 0 -25 -3 -19 -7z" />
                <path d="M2610 1261 c0 -17 2 -31 4 -31 8 0 13 51 5 56 -5 3 -9 -9 -9 -25z" />
              </g>
            </svg>


          ),
          color: 'text-teal-400',
          bgColor: 'bg-teal-500/10',
          borderColor: 'border-teal-500/20',
          hoverColor: 'hover:border-teal-400'
        },
        {
          name: 'Axios',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="352.000000pt" height="352.000000pt" viewBox="0 0 352.000000 352.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,352.000000) scale(0.100000,-0.100000)" fill="#8b00d6" stroke="none">
                <path d="M1501 2688 c-10 -24 -64 -146 -120 -271 -55 -126 -101 -230 -101 -232 0 -3 -16 -38 -35 -79 -19 -41 -66 -146 -104 -233 -38 -87 -124 -282 -191 -433 -186 -417 -240 -541 -240 -546 0 -2 109 -3 242 -2 l242 3 122 275 c67 151 132 298 144 325 12 28 39 88 60 135 21 47 82 184 135 305 54 121 100 223 104 227 4 5 135 -281 292 -635 l286 -642 241 -3 c192 -2 242 0 242 10 0 8 -59 146 -131 308 -71 162 -184 417 -249 565 -66 149 -188 425 -272 615 l-153 345 -248 3 -248 2 -18 -42z" />
              </g>
            </svg>
          ),
          color: 'text-purple-400',
          bgColor: 'bg-purple-500/10',
          borderColor: 'border-purple-500/20',
          hoverColor: 'hover:border-purple-400'
        }
      ]
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
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-violet-400 via-electric-violet-500 to-electric-violet-600 bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Stack tecnológico completo para desarrollo full-stack moderno
          </p>
        </div>

        {/* Technologies by Categories */}
        <div className="space-y-12 sm:space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${categoryIndex * 300}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-electric-violet-300 to-electric-violet-500 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className={`group relative transition-all duration-700 ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                      }`}
                    style={{ transitionDelay: `${(categoryIndex * 300) + (techIndex * 100)}ms` }}
                  >
                    <div className={`relative p-4 sm:p-6 rounded-xl border ${tech.bgColor} ${tech.borderColor} ${tech.hoverColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg backdrop-blur-sm`}>
                      <div className={`flex flex-col items-center justify-center mb-3 ${tech.color}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${tech.bgColor} border ${tech.borderColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          {tech.icon}
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-white text-center">
                          {tech.name}
                        </h4>
                      </div>

                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-300 pointer-events-none"></div>

                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-electric-violet-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-electric-violet-300 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 delay-100"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}