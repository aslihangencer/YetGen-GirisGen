import React from 'react';

export const ValueCards: React.FC = () => {
  const cards = [
    {
      badge: 'TÜKETİCİ İÇİN',
      title: 'Şikayetini kolayca oluştur.',
      text: 'Kanıtını ekle, başvuru numaranı al ve sürecini adım adım takip et.',
      icon: '📝',
      gradient: 'from-blue-50 to-indigo-50 border-blue-200/80',
      badgeStyle: 'bg-blue-100 text-blue-800'
    },
    {
      badge: 'ŞUBE BAZLI VERİ',
      title: 'Sorunun nerede tekrar ettiğini gör.',
      text: 'Markaları yalnızca genel puanlarıyla değil, şube bazında incele ve doğru alışveriş kararları ver.',
      icon: '📍',
      gradient: 'from-emerald-50 to-teal-50 border-emerald-200/80',
      badgeStyle: 'bg-emerald-100 text-emerald-800'
    },
    {
      badge: 'MARKALAR İÇİN',
      title: 'Şikayetleri içgörüye dönüştür.',
      text: 'Tekrarlayan sorunları, çözüm sürelerini ve riskli şubeleri tek dashboard’da analiz et.',
      icon: '📊',
      gradient: 'from-amber-50 to-orange-50 border-amber-200/80',
      badgeStyle: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Neden GüvenKarnesi?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Şikayetten Veriye, Veriden Çözüme
          </h2>
          <p className="text-slate-600 text-base">
            Geleneksel şikayet sitelerinin ötesinde; hem tüketiciye şeffaflık hem de markalara operasyonel güç sağlayan veri ekosistemi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border bg-gradient-to-br ${card.gradient} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                  <span className="text-4xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-extrabold text-navy-950 mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 text-xs font-bold text-navy-900 flex items-center gap-1">
                <span>Daha Fazla Keşfet</span>
                <span>➔</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
