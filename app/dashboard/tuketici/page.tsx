'use client';

import React from 'react';
import Link from 'next/link';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { MetricCard } from '@/components/ui/MetricCard';
import { DataTable, StatusPill } from '@/components/ui/DataTable';
import { mockComplaints } from '@/lib/mockData';
import { Complaint } from '@/lib/types';

export default function TuketiciDashboardPage() {
  const columns = [
    {
      header: 'Başvuru No',
      key: 'referenceNo',
      render: (item: Complaint) => (
        <span className="font-mono font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
          {item.referenceNo}
        </span>
      )
    },
    {
      header: 'Marka',
      key: 'brandName',
      render: (item: Complaint) => <span className="font-bold text-navy-950">{item.brandName}</span>
    },
    {
      header: 'Şube',
      key: 'branchName',
      render: (item: Complaint) => <span className="text-slate-600">{item.branchName}</span>
    },
    {
      header: 'Kategori',
      key: 'category',
      render: (item: Complaint) => <span className="font-medium text-slate-700">{item.category}</span>
    },
    {
      header: 'Durum',
      key: 'status',
      render: (item: Complaint) => <StatusPill status={item.status} />
    },
    {
      header: 'Tarih',
      key: 'date',
      render: (item: Complaint) => <span className="text-xs text-slate-400 font-mono">{item.date}</span>
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar type="tuketici" />

      <main className="flex-1 p-6 sm:p-10 max-w-7xl">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Hoş Geldin, Ahmet Yılmaz 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Şikayet durumlarınızı ve marka çözüm süreçlerinizi buradan takip edebilirsiniz.
            </p>
          </div>

          <Link
            href="/sikayet-olustur"
            className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-primary to-blue-600 shadow-md hover:shadow-lg transition-all text-center"
          >
            + Yeni Şikayet Bildir
          </Link>
        </div>

        {/* Dashboard Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <MetricCard
            title="AKTİF ŞİKAYETLER"
            value="3"
            subtext="Marka incelemesinde veya yanıt bekliyor"
            icon={<span className="text-xl">⏳</span>}
          />
          <MetricCard
            title="ÇÖZÜLEN ŞİKAYETLER"
            value="8"
            subtext="Tarafınızca onaylanarak kapatıldı"
            change="100%"
            isPositive={true}
            icon={<span className="text-xl">✓</span>}
          />
          <MetricCard
            title="YANIT BEKLEYENLER"
            value="2"
            subtext="Markadan resmi açıklama bekleniyor"
            icon={<span className="text-xl">📩</span>}
          />
        </div>

        {/* Complaints Table */}
        <div className="space-y-4" id="sikayetler">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-navy-950">
              Şikayet Geçmişim
            </h2>
            <span className="text-xs text-slate-500">Toplam {mockComplaints.length} Kayıt</span>
          </div>

          <DataTable
            columns={columns}
            data={mockComplaints}
            searchPlaceholder="Referans no, marka veya şube ara..."
          />
        </div>

      </main>
    </div>
  );
}
