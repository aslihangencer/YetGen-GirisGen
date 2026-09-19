'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { BrandLogo } from '@/components/ui/BrandLogo';

interface DashboardSidebarProps {
  type: 'tuketici' | 'marka';
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ type }) => {
  const pathname = usePathname();
  const links = type === 'tuketici' ? siteConfig.dashboardLinks.tuketici : siteConfig.dashboardLinks.marka;

  return (
    <aside className="w-64 bg-navy-950 text-white border-r border-navy-900 min-h-screen p-5 flex flex-col justify-between shrink-0">
      <div>
        <div className="pb-6 mb-6 border-b border-navy-900">
          <BrandLogo size="sm" className="[&_span]:text-white" />
          <div className="mt-3 px-2 py-1 rounded bg-navy-900 text-[11px] font-semibold text-emerald-400 inline-block">
            {type === 'tuketici' ? '👤 Tüketici Paneli' : '🏢 B2B SaaS Marka Paneli'}
          </div>
        </div>

        <nav className="space-y-1.5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-primary to-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-navy-900 text-xs text-slate-400 space-y-3">
        <div className="p-3 rounded-xl bg-navy-900 border border-navy-800">
          <div className="font-bold text-white mb-1">Destek Hattı</div>
          <p className="text-[11px] text-slate-300">Sorularınız veya yardım talepleriniz için bize ulaşın.</p>
          <a href="mailto:destek@guvenkarnesi.com" className="text-brand-primary font-bold mt-2 inline-block">
            destek@guvenkarnesi.com
          </a>
        </div>
        <Link href="/" className="block text-center py-2 text-slate-300 hover:text-white font-semibold">
          ← Ana Sayfaya Dön
        </Link>
      </div>
    </aside>
  );
};
