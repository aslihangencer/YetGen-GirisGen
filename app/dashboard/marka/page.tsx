'use client';

import React from 'react';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { MetricCard } from '@/components/ui/MetricCard';
import { RiskBadge } from '@/components/ui/RiskBadge';
import { CertificationBadge } from '@/components/ui/CertificationBadge';
import { TrendChart } from '@/components/charts/TrendChart';
import { CategoryChart } from '@/components/charts/CategoryChart';
import { BranchPerformanceChart } from '@/components/charts/BranchPerformanceChart';
import { mockBrands, mockComplaints } from '@/lib/mockData';
import { DataTable, StatusPill } from '@/components/ui/DataTable';
import { Complaint } from '@/lib/types';

export default function MarkaDashboardPage() {
  const currentBrand = mockBrands[0]; // ABC Market

  const complaintColumns = [
    {
      header: 'Başvuru No',
      key: 'referenceNo',
      render: (item: Complaint) => (
        <span className="font-mono font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100 text-xs">
          {item.referenceNo}
        </span>
      )
    },
    {
      header: 'Şube',
      key: 'branchName',
      render: (item: Complaint) => <span className="font-bold text-navy-950 text-xs">{item.branchName}</span>
    },
    {
      header: 'Kategori',
      key: 'category',
      render: (item: Complaint) => <span className="text-xs font-semibold text-slate-700">{item.category}</span>
    },
    {
      header: 'Şikayet Başlığı',
      key: 'title',
      render: (item: Complaint) => <span className="text-xs text-slate-800 font-medium truncate max-w-xs block">{item.title}</span>
    },
    {
      header: 'Durum',
      key: 'status',
      render: (item: Complaint) => <StatusPill status={item.status} />
    },
    {
      header: 'Tarih',
      key: 'date',
      render: (item: Complaint) => <span className="text-[11px] text-slate-400 font-mono">{item.date}</span>
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar type="marka" />

      <main className="flex-1 p-6 sm:p-10 max-w-7xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{currentBrand.logo}</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
                {currentBrand.name} Kurumsal Yönetim Paneli
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              340 Mağazanıza ait canlı şikayet analitiği, risk haritası ve Tüketici Dostu sertifikasyon yönetimi.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-200">
              🟢 Sistem Canlı (340 Şube)
            </span>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard
            title="TOPLAM ŞİKAYET"
            value="1.284"
            subtext="Son 90 Günlük Kayıt"
            change="12%"
            isPositive={false}
            icon={<span className="text-xl">📊</span>}
          />
          <MetricCard
            title="AÇIK ŞİKAYET"
            value="42"
            subtext="İnceleme & Yanıt Aşamasında"
            icon={<span className="text-xl">⚠️</span>}
          />
          <MetricCard
            title="ÇÖZÜM ORANI"
            value="%84"
            subtext="Sektör Ortalaması: %72"
            change="5%"
            isPositive={true}
            icon={<span className="text-xl">🎯</span>}
          />
          <MetricCard
            title="ORT. ÇÖZÜM SÜRESİ"
            value="2.3 Gün"
            subtext="Hedef: < 3 Gün"
            change="0.4 gün"
            isPositive={true}
            icon={<span className="text-xl">⏱️</span>}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10" id="analizler">
          
          {/* Trend Chart */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-navy-950 text-base">Şikayet ve Çözüm Trendi</h3>
                <p className="text-xs text-slate-400">Aylık bazda şikayet hacmi vs çözülen başvuru sayısı</p>
              </div>
              <span className="text-xs font-bold text-brand-primary bg-blue-50 px-2.5 py-1 rounded-lg">Son 9 Ay</span>
            </div>
            <TrendChart />
          </div>

          {/* Category Distribution Chart */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="mb-4">
              <h3 className="font-extrabold text-navy-950 text-base">Kategori Dağılımı</h3>
              <p className="text-xs text-slate-400">Tekrarlayan sorun ana konuları</p>
            </div>
            <CategoryChart />
          </div>

        </div>

        {/* Branch Risk Map & Branch Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10" id="subeler">
          
          {/* Branch Performance Comparison Chart */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="mb-4">
              <h3 className="font-extrabold text-navy-950 text-base">Öne Çıkan Şubelerin Karşılaştırması</h3>
              <p className="text-xs text-slate-400">Şube Puanı vs Çözüm Oranı (%)</p>
            </div>
            <BranchPerformanceChart />
          </div>

          {/* Branch Risk Map List */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-navy-950 text-base">Şube Risk Haritası</h3>
                <p className="text-xs text-slate-400">Performansı düşük ve acil müdahale gereken mağazalar</p>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">3 Yüksek Riskli Şube</span>
            </div>

            <div className="space-y-2.5 max-h-72 overflow-y-auto">
              {currentBrand.branches.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-slate-100 transition-colors"
                >
                  <div>
                    <div className="font-bold text-sm text-navy-950">{b.name}</div>
                    <div className="text-xs text-slate-500">Ana Konu: <strong className="text-navy-900">{b.topIssue}</strong></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-navy-950">Puan: {b.score}</span>
                    <RiskBadge level={b.riskLevel} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tüketici Dostu Certification Section */}
        <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white rounded-3xl p-8 border border-white/10 mb-10" id="sertifika">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                AKTİF LİSANS
              </span>
              <h3 className="text-2xl font-extrabold">Tüketici Dostu Sertifika Paneli</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                Tüketici memnuniyeti puanınız <strong>78/100</strong> ile sertifikasyon eşiğinin (75) üzerindedir. Dijital rozetinizi pazarlama mecralarınızda kullanabilirsiniz.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <button className="px-4 py-2 rounded-xl bg-white text-navy-950 font-bold hover:bg-slate-100">
                  Rozet Kodunu Al (Embed HTML)
                </button>
                <button className="px-4 py-2 rounded-xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20">
                  Sertifika PDF İndir
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <CertificationBadge brandName={currentBrand.name} size="lg" />
            </div>

          </div>
        </div>

        {/* Complaints Table */}
        <div className="space-y-4" id="sikayetler">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-navy-950">
              Şubelerden Gelen Şikayet Akışı
            </h2>
            <span className="text-xs text-slate-500">Canlı Veri Takibi</span>
          </div>

          <DataTable
            columns={complaintColumns}
            data={mockComplaints}
            searchPlaceholder="Şube, başvuru no veya şikayet konusu ara..."
          />
        </div>

      </main>
    </div>
  );
}
