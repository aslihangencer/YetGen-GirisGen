import React from 'react';
import { siteConfig } from '@/lib/config';

interface CertificationBadgeProps {
  brandName: string;
  year?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'emerald' | 'dark';
  className?: string;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  brandName,
  year = siteConfig.currentYear,
  size = 'md',
  variant = 'emerald',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'p-2 text-xs max-w-[160px]',
    md: 'p-3 text-sm max-w-[220px]',
    lg: 'p-5 text-base max-w-[280px]'
  };

  const variantClasses = {
    emerald: 'bg-gradient-to-br from-emerald-950 via-navy-900 to-emerald-900 text-white border-emerald-500/40 shadow-emerald-900/20',
    gold: 'bg-gradient-to-br from-amber-950 via-navy-950 to-amber-900 text-amber-100 border-amber-400/40 shadow-amber-900/20',
    dark: 'bg-navy-900 text-white border-navy-700 shadow-navy-950/40'
  };

  return (
    <div className={`relative rounded-2xl border backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-[1.02] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      <div className="absolute top-2 right-2 text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-sm text-emerald-300">
        VERIFIED
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center text-navy-950 font-black text-lg shadow-md shrink-0">
          ✓
        </div>
        <div className="flex flex-col min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            {siteConfig.name} Sertifikalı
          </div>
          <div className="font-extrabold text-white truncate text-base leading-tight">
            {siteConfig.badgeName}
          </div>
          <div className="text-xs font-medium text-slate-300 truncate">
            {brandName} • {year}
          </div>
        </div>
      </div>
      
      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
        <span>Şeffaflık Puanı &gt; 75</span>
        <span className="font-semibold text-emerald-400">Doğrulanmış Marka</span>
      </div>
    </div>
  );
};
