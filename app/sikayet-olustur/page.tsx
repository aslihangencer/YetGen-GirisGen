import React from 'react';
import { ComplaintWizard } from '@/components/forms/ComplaintWizard';

export default function SikayetOlusturPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Standartlaştırılmış Başvuru
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Şikayet Oluştur
          </h1>
          <p className="text-slate-600 text-sm">
            Sorun yaşadığınız zincir mağazayı ve şubeyi seçerek kanıtlı şikayetinizi dakikalar içinde iletin.
          </p>
        </div>

        {/* Wizard Form */}
        <ComplaintWizard />

      </div>
    </div>
  );
}
