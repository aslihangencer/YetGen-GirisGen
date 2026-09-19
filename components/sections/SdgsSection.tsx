import React from 'react';
import { mockSdgs } from '@/lib/mockData';

export const SdgsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span>🌱 Sosyal Etki & Sürdürülebilirlik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Tüketici deneyimini daha şeffaf hale getiriyoruz.
          </h2>
          <p className="text-slate-600 text-base">
            GüvenKarnesi, Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SKA) ile doğrudan uyumlu bir veri ve adalet ekosistemi sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSdgs.map((sdg) => (
            <div
              key={sdg.code}
              className="rounded-3xl p-6 border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-black text-xs px-3 py-1 rounded-lg bg-navy-950 text-emerald-400">
                    {sdg.code}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform">🌿</span>
                </div>
                <h3 className="font-extrabold text-lg text-navy-950 mb-2">
                  {sdg.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sdg.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <span>BM Hedefi Uyumlu</span>
                <span>✓</span>
              </div>
            </div>
          ))}

          {/* Investor / Impact Summary Card */}
          <div className="rounded-3xl p-6 border border-brand-primary/40 bg-gradient-to-br from-navy-900 to-navy-950 text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-primary uppercase">YATIRIMCI & SOSYAL ETKİ</span>
              <h3 className="font-extrabold text-xl text-white mt-2 mb-3">
                Sürdürülebilir Veri Altyapısı
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tüketici haklarını dijitalleştiren, perakendede şeffaflığı artıran ve sosyal etki fonları için ölçülebilir değer üreten yüksek büyüme potansiyelli SaaS platformu.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-400 flex items-center justify-between">
              <span>Etki Raporunu İncele</span>
              <span>➔</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
