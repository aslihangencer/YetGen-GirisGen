import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { BrandLogo } from '@/components/ui/BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" className="text-white [&_span]:text-white" />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {siteConfig.narrative}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>📍 {siteConfig.address}</p>
              <p>✉️ {siteConfig.supportEmail} | {siteConfig.corporateEmail}</p>
              <p>📞 {siteConfig.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/nasil-calisir" className="hover:text-brand-primary transition-colors">Nasıl Çalışır?</Link></li>
              <li><Link href="/markalar" className="hover:text-brand-primary transition-colors">Marka Karneleri</Link></li>
              <li><Link href="/sikayet-olustur" className="hover:text-brand-primary transition-colors">Şikayet Oluştur</Link></li>
              <li><Link href="/metodoloji" className="hover:text-brand-primary transition-colors">Puanlama Metodolojisi</Link></li>
              <li><Link href="/blog" className="hover:text-brand-primary transition-colors">Blog & Haberler</Link></li>
            </ul>
          </div>

          {/* B2B & Portals */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">Kurumsal & Portallar</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/kurumsal" className="hover:text-brand-primary transition-colors">Markalar İçin (B2B SaaS)</Link></li>
              <li><Link href="/kurumsal#demo" className="hover:text-brand-primary transition-colors">Demo Talep Et</Link></li>
              <li><Link href="/dashboard/tuketici" className="hover:text-brand-primary transition-colors">Tüketici Portalı</Link></li>
              <li><Link href="/dashboard/marka" className="hover:text-brand-primary transition-colors">Marka SaaS Dashboard</Link></li>
              <li><Link href="/iletisim" className="hover:text-brand-primary transition-colors">İletişim & Destek</Link></li>
            </ul>
          </div>

          {/* SKA Badges */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">Sürdürülebilirlik (SKA)</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[11px] text-emerald-400 font-medium">SKA 8: İnsana Yakışır İş</span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[11px] text-emerald-400 font-medium">SKA 9: Yenilikçilik</span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[11px] text-emerald-400 font-medium">SKA 12: Sorumlu Tüketim</span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[11px] text-emerald-400 font-medium">SKA 16: Şeffaf Kurumlar</span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-[11px] text-emerald-400 font-medium">SKA 17: Ortaklıklar</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {siteConfig.currentYear} {siteConfig.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>KVKK Aydınlatma Metni</span>
            <span>Gizlilik Politikası</span>
            <span>Kullanım Koşulları</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
