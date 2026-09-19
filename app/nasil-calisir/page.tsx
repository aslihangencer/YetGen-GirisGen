import React from 'react';
import Link from 'next/link';

export default function NasilCalisirPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Adım Adım Süreç
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            GüvenKarnesi Nasıl Çalışır?
          </h1>
          <p className="text-slate-600 text-lg">
            Tüketiciler için hak arama ve şeffaflık, markalar için operasyonel mükemmellik kanalı.
          </p>
        </div>

        {/* Consumer vs Brand Dual Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Consumer Flow */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="text-3xl">👤</span>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-950">Tüketiciler İçin Akış</h2>
                <p className="text-xs text-slate-500">4 adımda şeffaf şikayet yönetimi</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-brand-primary font-black flex items-center justify-center text-lg shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-navy-950">Marka ve Şube Seçimi</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Sorun yaşadığınız zincir mağazayı ve tam olarak olayın gerçekleştiği şubeyi seçin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-brand-primary font-black flex items-center justify-center text-lg shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-navy-950">Kanıt Yükleme & Detaylandırma</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fiş, fatura, fotoğraf veya sipariş numaranızı ekleyerek standart başvuru formunu doldurun.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-brand-primary font-black flex items-center justify-center text-lg shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-navy-950">Referans Numarası & Takip</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Tarafınıza üretilen <strong>GK-2026-XXXXXX</strong> referans koduyla şikayetin durumunu canlı takip edin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-brand-primary font-black flex items-center justify-center text-lg shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-navy-950">Çözüm ve Puan Güncellemesi</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Marka sorununuzu çözdüğünde bildirim alın ve şube puanının güncellenmesine katkıda bulunun.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/sikayet-olustur"
                className="w-full block py-3.5 rounded-xl font-bold text-center text-white bg-brand-primary hover:bg-blue-600 transition-colors shadow-md"
              >
                Hemen Şikayet Oluştur ➔
              </Link>
            </div>
          </div>

          {/* Brand Flow */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 border border-navy-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-navy-900">
              <span className="text-3xl">🏢</span>
              <div>
                <h2 className="text-2xl font-extrabold text-white">Markalar İçin Akış</h2>
                <p className="text-xs text-slate-400">Veri analitiği ve B2B SaaS süreci</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-navy-900 text-emerald-400 border border-navy-800 font-black flex items-center justify-center text-lg shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">SaaS Dashboard Erişimi</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Markanızın tüm şubelerdeki canlı şikayet akışını ve performans grafiklerini görün.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-navy-900 text-emerald-400 border border-navy-800 font-black flex items-center justify-center text-lg shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">Kök Neden & Risk Haritası</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Tekrarlayan sorunları (iade reddi, etiket farkı) ve yüksek riskli şubeleri tespit edin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-navy-900 text-emerald-400 border border-navy-800 font-black flex items-center justify-center text-lg shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">Hızlı Çözüm & İletişim</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Tüketiciyle doğrudan iletişim kurarak ortalama çözüm sürenizi düşürün.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-navy-900 text-emerald-400 border border-navy-800 font-black flex items-center justify-center text-lg shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">Tüketici Dostu Sertifikasyon</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Skor eşiğini aşan markalar dijital ve basılı mecralarda rozet lisanslama hakkı kazanır.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/kurumsal"
                className="w-full block py-3.5 rounded-xl font-bold text-center text-navy-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
              >
                Kurumsal SaaS İncele ➔
              </Link>
            </div>
          </div>

        </div>

        {/* Scoring Methodology Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 text-white rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-brand-primary font-bold">PUANLAMA METODOLOJİSİ</span>
            <h3 className="text-2xl font-extrabold mt-1">Puanlar Nasıl Hesaplanır?</h3>
            <p className="text-xs text-slate-300 max-w-xl mt-1">
              Puanlama; çözüm süresi, çözüm oranı, iade kolaylığı ve kampanya şeffaflığı kriterlerinin ağırlıklı ortalamasıyla bağımsız olarak hesaplanır.
            </p>
          </div>
          <Link
            href="/metodoloji"
            className="px-6 py-3 rounded-xl font-bold text-xs text-navy-950 bg-white hover:bg-slate-100 shrink-0"
          >
            Detaylı Metodoloji Sayfası ➔
          </Link>
        </div>

      </div>
    </div>
  );
}
