import React from 'react';

export default function LotusLogo({ className = "w-8 h-8", textClassName = "text-xl", showText = true }) {
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <div className={`relative ${className} transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-md`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Real Lotus Petal Gradients */}
            <linearGradient id="centerPetalGrad" x1="50" y1="8" x2="50" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF1CF" />
              <stop offset="25%" stopColor="#ECC265" />
              <stop offset="65%" stopColor="#C5963E" />
              <stop offset="100%" stopColor="#8C611D" />
            </linearGradient>

            <linearGradient id="innerPetalLeft" x1="32" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EED28B" />
              <stop offset="40%" stopColor="#D4A747" />
              <stop offset="100%" stopColor="#966B24" />
            </linearGradient>

            <linearGradient id="innerPetalRight" x1="68" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF4D6" />
              <stop offset="40%" stopColor="#DEB456" />
              <stop offset="100%" stopColor="#A07228" />
            </linearGradient>

            <linearGradient id="midPetalLeft" x1="20" y1="30" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DFBA67" />
              <stop offset="50%" stopColor="#BA8A30" />
              <stop offset="100%" stopColor="#6C4912" />
            </linearGradient>

            <linearGradient id="midPetalRight" x1="80" y1="30" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5DC96" />
              <stop offset="50%" stopColor="#C99B3D" />
              <stop offset="100%" stopColor="#7E5616" />
            </linearGradient>

            <linearGradient id="outerPetalLeft" x1="8" y1="46" x2="50" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7564" />
              <stop offset="45%" stopColor="#335A4B" />
              <stop offset="100%" stopColor="#1E392F" />
            </linearGradient>

            <linearGradient id="outerPetalRight" x1="92" y1="46" x2="50" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#558572" />
              <stop offset="45%" stopColor="#3A6353" />
              <stop offset="100%" stopColor="#223F34" />
            </linearGradient>

            <linearGradient id="bottomPetalGrad" x1="50" y1="65" x2="50" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E2B755" />
              <stop offset="100%" stopColor="#8A5E1C" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="lotusGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sacred Outer Aura Ring */}
          <circle cx="50" cy="50" r="47" stroke="#C5963E" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.45" />
          <circle cx="50" cy="50" r="43" stroke="#3D6858" strokeWidth="0.5" opacity="0.25" />

          {/* 1. LOWER BACKGROUND SPREADING PETALS (Sage & Forest Green accents) */}
          {/* Far Left Bottom Blooming Petal */}
          <path
            d="M 50 78 C 32 76 10 68 6 48 C 16 46 32 58 50 78 Z"
            fill="url(#outerPetalLeft)"
            opacity="0.95"
          />
          {/* Far Right Bottom Blooming Petal */}
          <path
            d="M 50 78 C 68 76 90 68 94 48 C 84 46 68 58 50 78 Z"
            fill="url(#outerPetalRight)"
            opacity="0.95"
          />

          {/* 2. MID BLOOMING PETALS (Wide arched organic petals) */}
          {/* Mid Left Blooming Petal */}
          <path
            d="M 50 79 C 32 75 14 54 18 32 C 28 38 42 58 50 79 Z"
            fill="url(#midPetalLeft)"
          />
          <path
            d="M 18 32 C 28 42 40 60 48 76"
            stroke="#FFF2D1"
            strokeWidth="0.6"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Mid Right Blooming Petal */}
          <path
            d="M 50 79 C 68 75 86 54 82 32 C 72 38 58 58 50 79 Z"
            fill="url(#midPetalRight)"
          />
          <path
            d="M 82 32 C 72 42 60 60 52 76"
            stroke="#FFF2D1"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            fill="none"
          />

          {/* 3. INNER CUP PETALS (Softly curving towards center) */}
          {/* Inner Left Petal */}
          <path
            d="M 50 80 C 38 72 26 48 31 20 C 41 28 47 54 50 80 Z"
            fill="url(#innerPetalLeft)"
          />
          <path
            d="M 31 20 C 38 34 45 56 48 76"
            stroke="#FFFFFF"
            strokeWidth="0.7"
            strokeOpacity="0.45"
            fill="none"
          />

          {/* Inner Right Petal */}
          <path
            d="M 50 80 C 62 72 74 48 69 20 C 59 28 53 54 50 80 Z"
            fill="url(#innerPetalRight)"
          />
          <path
            d="M 69 20 C 62 34 55 56 52 76"
            stroke="#FFFFFF"
            strokeWidth="0.7"
            strokeOpacity="0.6"
            fill="none"
          />

          {/* 4. CENTRAL CROWN PETAL (Authentic realistic pointed lotus bud petal) */}
          <path
            d="M 50 8 C 41 24 40 56 50 81 C 60 56 59 24 50 8 Z"
            fill="url(#centerPetalGrad)"
            filter="url(#lotusGlow)"
          />
          {/* Center Petal Spine highlight */}
          <path
            d="M 50 10 Q 50 46 50 76"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* 5. FOREGROUND CRADLE PETALS (Base natural opening petals) */}
          {/* Lower Left Cradle Petal */}
          <path
            d="M 50 80 C 34 82 22 72 24 60 C 32 62 44 70 50 80 Z"
            fill="url(#bottomPetalGrad)"
            opacity="0.9"
          />
          {/* Lower Right Cradle Petal */}
          <path
            d="M 50 80 C 66 82 78 72 76 60 C 68 62 56 70 50 80 Z"
            fill="url(#bottomPetalGrad)"
            opacity="0.95"
          />

          {/* 6. SACRED LOTUS SEED RECEPTACLE / PERICARP JEWEL */}
          <ellipse cx="50" cy="76" rx="6" ry="3.5" fill="#7A4E10" />
          <ellipse cx="50" cy="75" rx="5" ry="2.8" fill="#F0C35B" />
          {/* Center jewel spark */}
          <circle cx="50" cy="74.5" r="1.8" fill="#FFFFFF" />
          <circle cx="47" cy="75" r="0.8" fill="#FFF6D6" />
          <circle cx="53" cy="75" r="0.8" fill="#FFF6D6" />

          {/* 7. WATER RIPPLE / CALYX BASE ACCENT */}
          <path
            d="M 36 84 C 44 87 56 87 64 84 C 58 86 42 86 36 84 Z"
            fill="#C5963E"
            opacity="0.7"
          />
          <path
            d="M 42 88 C 47 90 53 90 58 88 C 54 89.5 46 89.5 42 88 Z"
            fill="#3D6858"
            opacity="0.5"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-semibold tracking-wide text-sage-900 leading-tight ${textClassName}`}>
            Vastu <span className="text-gold-600 font-normal">Harmony</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-earth-500 font-medium -mt-0.5">
            Spiritual Living
          </span>
        </div>
      )}
    </div>
  );
}
