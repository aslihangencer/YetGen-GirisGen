import React from 'react';

export const ProductLoop: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Sorun Bildirimi',
      desc: 'Tüketici yaşadığı sorunu marka ve şube belirterek sisteme iletir.',
      icon: '📢',
      color: 'border-blue-200 bg-blue-50/50'
    },
    {
      num: '02',
      title: 'Kanıtlı Veri',
      desc: 'Fiş, fatura veya görsel kanıt ile standartlaştırılmış doğrulama verisi oluşur.',
      icon: '📄',
      color: 'border-indigo-200 bg-indigo-50/50'
    },
    {
      num: '03',
      title: 'Şube Bazlı Analiz',
      desc: 'Şikayetler marka genelinde değil, sorunlu şube bazında kümelenir.',
      icon: '📍',
      color: 'border-cyan-200 bg-cyan-50/50'
    },
    {
      num: '04',
      title: 'Şeffaf Skorlama',
      desc: 'Tüketiciler şubelerin ve markaların gerçek şeffaf puanlarını canlı görür.',
      icon: '⭐',
      color: 'border-emerald-200 bg-emerald-50/50'
    },
    {
      num: '05',
      title: 'Marka İçgörüsü',
      desc: 'Markalar B2B SaaS paneli üzerinden tekrar eden kök nedenleri tespit eder.',
      icon: '💡',
      color: 'border-amber-200 bg-amber-50/50'
    },
    {
      num: '06',
      title: 'Operasyonel Çözüm',
      desc: 'Marka sorunlu şubede aksiyon alır, iade/kampanya sürecini iyileştirir.',
      icon: '⚙️',
      color: 'border-purple-200 bg-purple-50/50'
    },
    {
      num: '07',
      title: 'Daha İyi Deneyim',
      desc: 'Tüketici memnuniyeti artar, yüksek performanslı marka Tüketici Dostu sertifikası kazanır.',
      icon: '🏆',
      color: 'border-teal-200 bg-teal-50/50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-b border-navy-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/30">
            DÖNGÜSEL EKOSİSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            GüvenKarnesi <span className="bg-gradient-to-r from-brand-primary to-emerald-400 bg-clip-text text-transparent">Ürün Döngüsü</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            “Tüketicinin sesini veriye, veriyi içgörüye, içgörüyü daha iyi deneyime dönüştürüyoruz.”
          </p>
        </div>

        {/* Workflow steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border backdrop-blur-md bg-white/5 border-white/10 hover:border-brand-primary/50 transition-all duration-300 group hover:-translate-y-1 relative`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded bg-white/10 text-brand-primary">
                  ADIM {step.num}
                </span>
                <span className="text-3xl group-hover:scale-110 transition-transform">{step.icon}</span>
              </div>
              
              <h3 className="font-extrabold text-lg text-white mb-2 group-hover:text-brand-primary transition-colors">
                {step.title}
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

          {/* Core summary card */}
          <div className="rounded-2xl p-6 border border-emerald-500/40 bg-gradient-to-br from-emerald-950/80 to-navy-900 text-white flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl mb-3">
              🔄
            </div>
            <div className="font-extrabold text-base text-emerald-300 mb-1">
              Sürekli İyileşme Döngüsü
            </div>
            <p className="text-[11px] text-slate-300">
              Veri odaklı güven ekosistemi sayesinde markalar ve tüketiciler şeffaf bir platformda buluşur.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
