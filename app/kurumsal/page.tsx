import React from 'react';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';

export default function KurumsalPage() {
  const features = [
    {
      title: 'Şube Analitiği & Kök Neden',
      desc: 'Tüm mağaza ağınızdaki şikayetleri şube, şehir ve bölge kırılımında anlık izleyin.',
      icon: '📍'
    },
    {
      title: 'Risk Haritası (🟢 🟡 🔴)',
      desc: 'Performansı düşen ve kronikleşmiş şikayet biriktiren şubeleri otomatik renk uyarısıyla tespit edin.',
      icon: '🗺️'
    },
    {
      title: 'Tekrarlayan Sorun Analizi',
      desc: 'İade kabulü, etiket uyumsuzluğu veya kasa yoğunluğu gibi kronikleşen kök nedenleri ortaya çıkarın.',
      icon: '📊'
    },
    {
      title: 'Çözüm Süresi & Benchmark',
      desc: 'Sektör ortalamalarıyla kendi markanızın çözüm sürelerini ve memnuniyet puanını karşılaştırın.',
      icon: '⏱️'
    },
    {
      title: 'Yönetim Raporlaması',
      desc: 'Üst yönetim ve saha müdürleri için haftalık/aylık otomatik PDF ve Excel rapor çıktısı alın.',
      icon: '📄'
    },
    {
      title: 'Tüketici Dostu Sertifikasyonu',
      desc: 'Skor standartlarını sağlayan mağazalarınız için Tüketici Dostu rozeti kullanım lisansı edinin.',
      icon: '🏆'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
              KURUMSAL B2B SaaS PLATFORMU
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
              Şikayet verilerinizin <br className="hidden sm:inline" />
              <span className="text-brand-primary">nerede tekrar ettiğini</span> görün.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Şube bazlı şikayetleri analiz edin, operasyonel sorunları henüz büyük krizlere dönüşmeden tespit edin ve müşteri deneyimini veriye dayalı olarak iyileştirin.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">✓ Anlık Şube Uyarısı</span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">✓ Kök Neden Yapay Zeka Özeti</span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">✓ Tüketici Dostu Rozet Etiketi</span>
            </div>
          </div>

          <div className="lg:col-span-5" id="demo">
            <DemoRequestForm />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-navy-950">
              Markanız İçin Güçlü Analitik Özellikleri
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Geleneksel müşteri ilişkileri süreçlerini dijital veri altyapısıyla yenileyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="font-extrabold text-lg text-navy-950 mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
