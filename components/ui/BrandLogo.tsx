import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  showTagline = false,
  size = 'md' 
}) => {
  const textSizeClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const iconSizeClass = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-9 h-9' : 'w-7 h-7';

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <div className={`${iconSizeClass} bg-gradient-to-tr from-navy-900 via-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform duration-200`}>
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`${textSizeClass} font-bold text-navy-950 tracking-tight group-hover:text-brand-primary transition-colors`}>
          {siteConfig.name}
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase font-semibold tracking-wider text-navy-500 -mt-1">
            Şeffaf Tüketici Verisi
          </span>
        )}
      </div>
    </Link>
  );
};
