interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = '', variant = 'dark', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';

  // If explicit image is desired
  if (variant === 'image') {
    const heights = {
      sm: 'h-10',
      md: 'h-13 sm:h-15',
      lg: 'h-18 sm:h-22',
      xl: 'h-26 sm:h-32'
    };
    return (
      <img
        src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.48.29_6bc0f575.jpeg"
        alt="Eneclim Climatização"
        className={`${heights[size]} w-auto object-contain rounded-xl shadow-xs ${className}`}
      />
    );
  }

  // Vector rendition matching the official Eneclim brand geometry with ultra-bold, encorpada typography
  const config = {
    sm: {
      titleSize: 'text-xl sm:text-2xl',
      subSize: 'text-[11px] sm:text-[12px] tracking-[0.20em]',
      boltW: 'w-4 h-6',
      bracketH: 'h-2',
      bracketStroke: 3.5,
      strokeText: '0.4px',
      gap: 'mt-0.5',
      bracketMargin: 'mt-1',
    },
    md: {
      titleSize: 'text-2xl sm:text-[2rem]',
      subSize: 'text-[13px] sm:text-[14px] tracking-[0.22em]',
      boltW: 'w-5 h-7.5',
      bracketH: 'h-2.5',
      bracketStroke: 4.2,
      strokeText: '0.6px',
      gap: 'mt-0.5',
      bracketMargin: 'mt-1.5',
    },
    lg: {
      titleSize: 'text-4xl sm:text-5xl md:text-6xl',
      subSize: 'text-base sm:text-lg md:text-xl tracking-[0.22em]',
      boltW: 'w-8 h-12',
      bracketH: 'h-3.5',
      bracketStroke: 5.5,
      strokeText: '0.9px',
      gap: 'mt-1',
      bracketMargin: 'mt-2',
    },
    xl: {
      titleSize: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
      subSize: 'text-xl sm:text-2xl md:text-3xl tracking-[0.22em]',
      boltW: 'w-11 h-16 md:w-14 md:h-20',
      bracketH: 'h-4 md:h-6',
      bracketStroke: 7.5,
      strokeText: '1.2px',
      gap: 'mt-1.5',
      bracketMargin: 'mt-2.5',
    },
  }[size];

  const primaryTextColor = isLight ? 'text-white' : 'text-[#171717]';
  const goldColor = '#F59E0B'; // Eneclim Official Brand Gold
  const goldStrokeColor = '#D97706';

  return (
    <div className={`inline-flex flex-col items-center select-none leading-none ${className}`}>
      {/* Row 1: ENECL + Chunky Heavy Lightning Bolt + M */}
      <div
        className={`flex items-center ${config.titleSize} ${primaryTextColor}`}
        style={{
          fontFamily: "'Archivo Black', 'Montserrat', sans-serif",
          fontWeight: 900,
          WebkitTextStroke: `${config.strokeText} currentColor`,
          letterSpacing: '-0.03em',
        }}
      >
        <span>ENECL</span>

        {/* Chunky, robust stylized lightning bolt replacing "I" */}
        <span className="inline-flex items-center justify-center mx-1 relative -top-0.5 shrink-0">
          <svg
            className={`${config.boltW} overflow-visible`}
            viewBox="0 0 28 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Solid, thick, dynamic lightning bolt with high visual density */}
            <path
              d="M20 0.5L3 22H15L7 41.5L26 17.5H13.5L20 0.5Z"
              fill={goldColor}
              stroke={goldStrokeColor}
              strokeWidth="1.6"
              strokeLinejoin="miter"
              className="drop-shadow-xs"
            />
          </svg>
        </span>

        <span>M</span>
      </div>

      {/* Row 2: CLIMATIZAÇÃO - Solid, heavy-weight typography */}
      <div
        className={`uppercase font-black ${config.gap} ${config.subSize} ${primaryTextColor}`}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          WebkitTextStroke: `${config.strokeText} currentColor`,
        }}
      >
        CLIMATIZAÇÃO
      </div>

      {/* Row 3: Heavy-weight golden bracket underline |————| */}
      <div className={`w-full ${config.bracketMargin} flex items-center justify-center`}>
        <svg
          className={`w-full ${config.bracketH} overflow-visible`}
          viewBox="0 0 100 12"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left vertical bracket cap */}
          <line
            x1="1.5"
            y1="0"
            x2="1.5"
            y2="12"
            stroke={goldColor}
            strokeWidth={config.bracketStroke}
            strokeLinecap="square"
          />
          {/* Main horizontal underline */}
          <line
            x1="1.5"
            y1="6"
            x2="98.5"
            y2="6"
            stroke={goldColor}
            strokeWidth={config.bracketStroke}
          />
          {/* Right vertical bracket cap */}
          <line
            x1="98.5"
            y1="0"
            x2="98.5"
            y2="12"
            stroke={goldColor}
            strokeWidth={config.bracketStroke}
            strokeLinecap="square"
          />
        </svg>
      </div>
    </div>
  );
}
