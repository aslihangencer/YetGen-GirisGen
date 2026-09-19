'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { BrandLogo } from '@/components/ui/BrandLogo';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <BrandLogo size="md" showTagline={true} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                    isActive ? 'text-brand-primary font-bold' : 'text-navy-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLoginModalOpen(true)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-navy-950 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Giriş Yap
            </button>
            <Link
              href="/sikayet-olustur"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-navy-900 to-brand-primary shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
            >
              Şikayet Oluştur
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy-950 hover:bg-slate-100"
              aria-label="Menü"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-navy-950 hover:text-brand-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setLoginModalOpen(true);
              }}
              className="w-full py-2.5 rounded-xl text-center font-semibold text-navy-950 border border-slate-200"
            >
              Giriş Yap
            </button>
            <Link
              href="/sikayet-olustur"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-center font-bold text-white bg-gradient-to-r from-navy-900 to-brand-primary"
            >
              Şikayet Oluştur
            </Link>
          </div>
        </div>
      )}

      {/* Quick Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-navy-950">Giriş Tipi Seçin</h3>
              <button onClick={() => setLoginModalOpen(false)} className="text-slate-400 hover:text-navy-950">✕</button>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              GüvenKarnesi platformuna tüketici veya marka yetkilisi olarak devam edebilirsiniz.
            </p>
            <div className="space-y-3">
              <Link
                href="/dashboard/tuketici"
                onClick={() => setLoginModalOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-slate-50 transition-all group"
              >
                <div>
                  <div className="font-bold text-navy-950 group-hover:text-brand-primary">Tüketici Portalı</div>
                  <div className="text-xs text-slate-500">Şikayetlerinizi ve durum güncellemelerini takip edin</div>
                </div>
                <span className="text-xl">➔</span>
              </Link>
              <Link
                href="/dashboard/marka"
                onClick={() => setLoginModalOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl border border-navy-800 bg-navy-900 text-white hover:bg-navy-950 transition-all group"
              >
                <div>
                  <div className="font-bold text-white">Kurumsal SaaS Portal (Marka)</div>
                  <div className="text-xs text-slate-300">Şube analitiği, risk haritası ve sertifika paneli</div>
                </div>
                <span className="text-xl">➔</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
