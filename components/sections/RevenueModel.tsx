import React from 'react';
import Link from 'next/link';

export const RevenueModel: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-950 bg-slate-200 px-3 py-1 rounded-full">
            İş Modeli & Sürdürülebilirlik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Şeffaf Gelir Modeli
          </h2>
          <p className="text-slate-600 text-sm">
            Platform bağımsızlığını koruyarak sürdürülebilir B2B SaaS ve lisanslama modeli ile büyür.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Revenue 1 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center text-2xl font-bold mb-5">
              💼
            </div>
            <h3 className="font-extrabold text-xl text-navy-950 mb-2">
              B2B SaaS Abonelikleri
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Zincir markalar aylık/yıllık aboneliklerle şube bazlı analytics, kök neden analizi ve risk haritası panellerine erişir.
            </p>
            <div className="text-xs font-bold text-brand-primary">Aylık / Yıllık Paketler</div>
          </div>

          {/* Main Revenue 2 */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              PREMIUM
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-5">
              🏆
            </div>
            <h3 className="font-extrabold text-xl text-navy-950 mb-2">
              Sertifika & Rozet Lisansı
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Puanlama kriterlerini başarıyla geçen markalar "Tüketici Dostu" dijital ve fiziki rozet kullanım lisansı edinir.
            </p>
            <div className="text-xs font-bold text-emerald-600">Yıllık Rozet Lisanslama</div>
          </div>

          {/* Future Revenue */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold mb-5">
              🔌
            </div>
            <h3 className="font-extrabold text-xl text-navy-950 mb-2">
              API & Özel Veri Raporları
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Kurumsal ERP/CRM entegrasyonları için API erişimi, perakende sektör raporları ve operasyonel danışmanlık hizmetleri.
            </p>
            <div className="text-xs font-bold text-purple-600">Gelecek Dönem Gelir Kalemleri</div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/kurumsal"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-950 transition-colors"
          >
            Kurumsal SaaS Paketlerini İnceleyin ➔
          </Link>
        </div>

      </div>
    </section>
  );
};
