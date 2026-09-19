import React from 'react';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/lib/config';

export default function IletisimPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            İletişim & Destek
          </h1>
          <p className="text-slate-600 text-sm">
            Sorularınız, kurumsal talepleriniz veya iş birliği fikirleriniz için ekibimizle iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info & Map placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-navy-950">İletişim Bilgilerimiz</h2>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="block text-navy-950">Genel Merkez</strong>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <strong className="block text-navy-950">E-Posta Adresleri</strong>
                    <div className="text-xs space-y-0.5">
                      <div>Tüketici Desteği: <a href={`mailto:${siteConfig.supportEmail}`} className="text-brand-primary font-bold">{siteConfig.supportEmail}</a></div>
                      <div>Kurumsal SaaS: <a href={`mailto:${siteConfig.corporateEmail}`} className="text-brand-primary font-bold">{siteConfig.corporateEmail}</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <strong className="block text-navy-950">Telefon</strong>
                    <span>{siteConfig.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-navy-800 text-white h-56 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="text-4xl mb-2">🗺️</div>
              <h3 className="font-bold text-base">Maslak Teknoloji Kampüsü</h3>
              <p className="text-xs text-slate-400 mt-1">Sarıyer / İstanbul</p>
              <div className="mt-3 text-[10px] font-mono text-emerald-400">Harita Konumu Aktif</div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
