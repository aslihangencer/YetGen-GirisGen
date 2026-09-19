import React from 'react';
import Link from 'next/link';
import { ScoreCard } from '@/components/ui/ScoreCard';
import { RiskBadge } from '@/components/ui/RiskBadge';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-navy-900">
      
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Tüketici Şikayeti + Şube Analitiği SaaS Platformu
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Zincir mağazaların <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-primary via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                gerçek tüketici karnesi.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Yaşadığın sorunu kolayca bildir, markaların ve şubelerin tüketici deneyimini gör. Markalar ise tekrar eden sorunları veriye dayalı olarak keşfetsin.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/sikayet-olustur"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-white bg-gradient-to-r from-brand-primary via-blue-600 to-emerald-500 shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                Şikayet Oluştur 🚀
              </Link>
              <Link
                href="/markalar"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all text-center"
              >
                Marka Karnelerini İncele
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl font-black text-white">%84</div>
                <div className="text-xs text-slate-400">Ort. Çözüm Oranı</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">2.3 Gün</div>
                <div className="text-xs text-slate-400">Ort. Çözüm Süresi</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-primary">1.200+</div>
                <div className="text-xs text-slate-400">Takip Edilen Şube</div>
              </div>
            </div>

          </div>

          {/* Right Hero SaaS Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-navy-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">GüvenKarnesi Analytics v2.6</span>
              </div>

              {/* Mock Score Display */}
              <ScoreCard
                type="brand"
                title="ABC Market Genel Karnesi"
                subtitle="340 Şube • Sektör Lideri"
                score={78}
                metrics={[
                  { label: 'Çözüm Oranı', value: '%84' },
                  { label: 'Ort. Çözüm', value: '2.3 Gün' },
                  { label: 'İade Kolaylığı', value: '81/100' },
                  { label: 'Kampanya Şeffaflığı', value: '76/100' }
                ]}
              />

              {/* Branch Score Comparison snippet */}
              <div className="bg-navy-950/80 rounded-2xl p-4 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                  <span>Şube Bazlı Puan Ayrışması</span>
                  <span className="text-brand-primary">Detaylı Gör</span>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
                    <div>
                      <div className="font-bold text-white">İstanbul Kadıköy</div>
                      <div className="text-[10px] text-slate-400">Çözüm: %92</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-emerald-400 text-sm">88</span>
                      <RiskBadge level="dusuk" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
                    <div>
                      <div className="font-bold text-white">Adana Seyhan</div>
                      <div className="text-[10px] text-slate-400">Çözüm: %68</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-rose-400 text-sm">61</span>
                      <RiskBadge level="yuksek" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
