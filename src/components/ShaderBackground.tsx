import React, { useState } from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

interface ShaderBackgroundProps {
  intensity?: number;
}

export const ShaderBackground: React.FC<ShaderBackgroundProps> = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  return (
    <>
      {/* Background Canvas Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundColor: '#fdfdfc',
          transition: 'opacity 0.6s ease',
        }}
      >
        {/* Subtle dot grid texture across the background */}
        {isEnabled && (
          <>
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage: 'radial-gradient(#e0e0d8 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Top-right corner architectural dot-grid accent */}
            <div
              className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none opacity-80"
              style={{
                backgroundImage: 'radial-gradient(#d4d4cc 1.2px, transparent 1.2px)',
                backgroundSize: '20px 20px',
                maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
              }}
            />
            {/* Subtle bottom-left warm ambient gradient */}
            <div
              className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-40 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #ecece4 0%, transparent 70%)',
              }}
            />
          </>
        )}
      </div>

      {/* Floating Canvas Effect Toggle control */}
      <div className="fixed bottom-4 right-4 z-40 no-print">
        <button
          id="toggle-shader-btn"
          type="button"
          onClick={() => setIsEnabled(!isEnabled)}
          className="flex items-center gap-2 text-xs font-mono-code px-3 py-1.5 rounded-full bg-[#fdfdfc]/90 border border-[#e0e0d8] text-[#888880] hover:text-[#121212] hover:border-[#121212] backdrop-blur-md transition-all shadow-sm"
          title={isEnabled ? 'Hide grid accents' : 'Show grid accents'}
        >
          <Sparkles className={`w-3.5 h-3.5 ${isEnabled ? 'text-[#121212]' : 'text-[#888880]'}`} />
          <span>Grid: {isEnabled ? 'Active' : 'Muted'}</span>
          {isEnabled ? <Eye className="w-3 h-3 text-[#121212]" /> : <EyeOff className="w-3 h-3 text-[#888880]" />}
        </button>
      </div>
    </>
  );
};

