'use client';

import React, { useState } from 'react';
import { mockBrands } from '@/lib/mockData';
import { Brand } from '@/lib/types';
import { Modal } from '@/components/ui/Modal';
import { RiskBadge } from '@/components/ui/RiskBadge';
import { CertificationBadge } from '@/components/ui/CertificationBadge';
import { ScoreCard } from '@/components/ui/ScoreCard';

export default function MarkalarPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('Hepsi');
  const [onlyCertified, setOnlyCertified] = useState(false);
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);

  const sectors = ['Hepsi', ...Array.from(new Set(mockBrands.map((b) => b.sector)))];

  const filteredBrands = mockBrands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          brand.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'Hepsi' || brand.sector === selectedSector;
    const matchesCertified = !onlyCertified || brand.isConsumerFriendly;
    return matchesSearch && matchesSector && matchesCertified;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Zincir Marka Karneleri
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            Türkiye genelindeki zincir mağazaların şeffaf tüketici puanlarını ve şube performanslarını sorgulayın.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Search input */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Marka Ara</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Marka adı giriniz..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Sector select */}
            <div>
              <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Sektör Filtresi</label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              >
                {sectors.map((sec) => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
              </select>
            </div>

            {/* Certified Only Checkbox */}
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer p-2.5 rounded-xl border border-slate-200 w-full hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={onlyCertified}
                  onChange={(e) => setOnlyCertified(e.target.checked)}
                  className="rounded text-brand-primary"
                />
                <span className="text-xs font-bold text-navy-950">
                  Sadece "Tüketici Dostu" Sertifikalılar
                </span>
              </label>
            </div>

          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl p-2 rounded-2xl bg-slate-100">{brand.logo}</span>
                    <div>
                      <h3 className="font-extrabold text-xl text-navy-950">
                        {brand.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">{brand.sector}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="px-3 py-1.5 rounded-xl bg-navy-950 text-white font-extrabold text-lg">
                      {brand.overallScore}<span className="text-xs opacity-75">/100</span>
                    </div>
                  </div>
                </div>

                {brand.isConsumerFriendly && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-200">
                      ✓ Tüketici Dostu Certified
                    </span>
                  </div>
                )}

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
                    <span className="text-slate-400 block">Şube Sayısı</span>
                    <strong className="text-navy-950 text-sm">{brand.branchCount} Şube</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveBrand(brand)}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-950 transition-colors text-center shadow-md"
              >
                Karnesini ve Şubeleri İncele ➔
              </button>
            </div>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-navy-950 mt-2">Aramanıza Uygun Marka Bulunamadı</h3>
            <p className="text-xs text-slate-500 mt-1">Lütfen arama terimlerinizi veya filtrelerinizi değiştirip tekrar deneyin.</p>
          </div>
        )}

      </div>

      {/* Brand Detail Modal */}
      {activeBrand && (
        <Modal
          isOpen={!!activeBrand}
          onClose={() => setActiveBrand(null)}
          title={`${activeBrand.name} - Detaylı İnceleme`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            
            <ScoreCard
              type="brand"
              title={activeBrand.name}
              subtitle={`${activeBrand.sector} • ${activeBrand.branchCount} Aktif Şube`}
              score={activeBrand.overallScore}
              metrics={[
                { label: 'Çözüm Oranı', value: `%${activeBrand.resolutionRate}` },
                { label: 'Ortalam Çözüm', value: `${activeBrand.avgResolutionDays} Gün` },
                { label: 'İade Kolaylığı', value: `${activeBrand.returnEaseScore}/100` },
                { label: 'Kampanya Şeffaflığı', value: `${activeBrand.campaignTransparencyScore}/100` }
              ]}
            />

            {activeBrand.isConsumerFriendly && (
              <div className="flex justify-center">
                <CertificationBadge brandName={activeBrand.name} size="md" />
              </div>
            )}

            {/* Top 5 Topics */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h5 className="font-extrabold text-navy-950 text-xs uppercase mb-2">Öne Çıkan Şikayet Konuları</h5>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-medium">Fişli İade Reddi (%32)</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-medium">Kampanya Kasada Düşmedi (%24)</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-medium">Etiket Fiyat Uyumsuzluğu (%18)</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-medium">Kasa Yoğunluğu (%12)</span>
              </div>
            </div>

            {/* Branch Breakdown Table */}
            <div>
              <h5 className="font-extrabold text-navy-950 text-base mb-3">Şube Performans & Risk Tablosu</h5>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden text-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold">
                    <tr className="border-b border-slate-200">
                      <th className="p-3">Şube Adı</th>
                      <th className="p-3">Puan</th>
                      <th className="p-3">Çözüm Oranı</th>
                      <th className="p-3">Risk Düzeyi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeBrand.branches.map((b) => (
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

          </div>
        </Modal>
      )}
    </div>
  );
}
