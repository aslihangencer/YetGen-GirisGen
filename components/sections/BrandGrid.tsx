'use client';

import React, { useState } from 'react';
import { mockBrands } from '@/lib/mockData';
import { Brand } from '@/lib/types';
import { Modal } from '@/components/ui/Modal';
import { RiskBadge } from '@/components/ui/RiskBadge';
import { CertificationBadge } from '@/components/ui/CertificationBadge';

export const BrandGrid: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Şeffaf Skorlar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-2">
              Öne Çıkan Marka Karneleri
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Markaları genel puanları ve şube detayları ile karşılaştırın.
            </p>
          </div>

          <a href="/markalar" className="text-sm font-bold text-brand-primary hover:underline flex items-center gap-1">
            <span>Tüm Marka Karnelerini Gör</span>
            <span>➔</span>
          </a>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBrands.slice(0, 3).map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl p-2 rounded-2xl bg-slate-100">{brand.logo}</span>
                    <div>
                      <h3 className="font-extrabold text-xl text-navy-950 group-hover:text-brand-primary transition-colors">
                        {brand.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">{brand.sector}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="px-3 py-1 rounded-xl bg-navy-950 text-white font-extrabold text-lg">
                      {brand.overallScore}<span className="text-xs opacity-75">/100</span>
                    </div>
                  </div>
                </div>

                {/* Badge if certified */}
                {brand.isConsumerFriendly && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <span>✓ Tüketici Dostu Certified</span>
                    </div>
                  </div>
                )}

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 mb-4 bg-slate-50/60 rounded-xl p-3">
                  <div>
                    <span className="text-slate-400 block">Çözüm Oranı</span>
                    <strong className="text-navy-950 text-sm">%{brand.resolutionRate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Ort. Çözüm</span>
                    <strong className="text-navy-950 text-sm">{brand.avgResolutionDays} gün</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">İade Kolaylığı</span>
                    <strong className="text-navy-950 text-sm">{brand.returnEaseScore}/100</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Kampanya Şeffaflığı</span>
                    <strong className="text-navy-950 text-sm">{brand.campaignTransparencyScore}/100</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedBrand(brand)}
                className="w-full py-3 rounded-xl font-bold text-sm text-navy-950 bg-slate-100 hover:bg-navy-900 hover:text-white transition-all text-center shadow-sm"
              >
                Karnesini ve Şubeleri İncele ➔
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Brand Detail Modal */}
      {selectedBrand && (
        <Modal
          isOpen={!!selectedBrand}
          onClose={() => setSelectedBrand(null)}
          title={`${selectedBrand.name} - Şube Bazlı Karne Detayı`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-navy-950 text-white">
              <div>
                <div className="text-xs text-brand-primary font-bold uppercase">{selectedBrand.sector}</div>
                <h4 className="text-2xl font-extrabold">{selectedBrand.name}</h4>
                <p className="text-xs text-slate-300">Toplam {selectedBrand.branchCount} Şube • {selectedBrand.totalComplaints} Şikayet Analizi</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-3xl font-black text-emerald-400">{selectedBrand.overallScore}/100</div>
                  <div className="text-[10px] text-slate-300">Genel Skor</div>
                </div>
              </div>
            </div>

            {selectedBrand.isConsumerFriendly && (
              <div className="flex justify-center">
                <CertificationBadge brandName={selectedBrand.name} size="md" />
              </div>
            )}

            {/* Branch Table */}
            <div>
              <h5 className="font-extrabold text-navy-950 text-base mb-3">Şube Performans Tablosu</h5>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden text-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold">
                    <tr className="border-b border-slate-200">
                      <th className="p-3">Şube</th>
                      <th className="p-3">Puan</th>
                      <th className="p-3">Çözüm Oranı</th>
                      <th className="p-3">Risk Düzeyi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedBrand.branches.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-navy-950">{b.name}</td>
                        <td className="p-3 font-mono font-bold text-brand-primary">{b.score}</td>
                        <td className="p-3 font-semibold">%{b.resolutionRate}</td>
                        <td className="p-3">
                          <RiskBadge level={b.riskLevel} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 text-center italic">
              * Bu veriler şeffaf GüvenKarnesi şikayet ve çözüm skorlama metodolojisi ile hesaplanmıştır.
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
