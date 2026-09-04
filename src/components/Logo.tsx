import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = 36,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon */}
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(0,220,130,0.4)] transition-transform duration-300 hover:scale-105"
        >
          {/* Outer angled roof frame / growth chevron */}
          <path
            d="M24 4L40 18V42H32V23L24 16L16 23V42H8V18L24 4Z"
            fill="url(#moore-emerald-grad)"
          />
          {/* Inner 3 growth bars ascending */}
          <rect
            x="14"
            y="26"
            width="4.5"
            height="16"
            rx="1.5"
            fill="#05df85"
            className="opacity-90"
          />
          <rect
            x="21.75"
            y="21"
            width="4.5"
            height="21"
            rx="1.5"
            fill="#10b981"
            className="opacity-95"
          />
          <rect
            x="29.5"
            y="16"
            width="4.5"
            height="26"
            rx="1.5"
            fill="#34d399"
          />

          <defs>
            <linearGradient
              id="moore-emerald-grad"
              x1="8"
              y1="4"
              x2="40"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00DC82" />
              <stop offset="0.6" stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex items-center tracking-tight font-sans">
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Moore<span className="text-[#00DC82]">Revenue</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
