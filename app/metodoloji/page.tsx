import React from 'react';

export default function MetodolojiPage() {
  const criteria = [
    {
      title: '1. Çözüm Süresi (%25)',
      desc: 'Şikayetin oluşturulmasından markanın çözüm sunmasına kadar geçen sürenin hızı.',
      weight: 'Ağırlık: %25'
    },
    {
      title: '2. Çözüm Oranı (%30)',
      desc: 'Toplam şikayetler içinde tüketicinin rızasıyla çözüme kavuşturulan başvuruların yüzdesi.',
      weight: 'Ağırlık: %30'
    },
    {
      title: '3. İade ve Değişim Kolaylığı (%20)',
      desc: 'Tüketicinin kanuni iade hakkının zorlaştırılmadan şubede uygulanma başarısı.',
      weight: 'Ağırlık: %20'
    },
    {
      title: '4. Kampanya Şeffaflığı (%15)',
      desc: 'Raf etiketi, kasa fiyatı ve duyurulan indirimlerin tutarlılığı.',
      weight: 'Ağırlık: %15'
    },
    {
      title: '5. Tüketici Geri Bildirim Memnuniyeti (%10)',
      desc: 'Çözüm sonrası tüketicinin markaya verdiği değerlendirme puanı.',
      weight: 'Ağırlık: %10'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Şeffaf ve Bağımsız Standartlar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Puanlarımız Nasıl Hesaplanıyor?
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            GüvenKarnesi skorları tamamen tarafsız, kanıta dayalı ve algoritmik metodoloji ile üretilir.
          </p>
        </div>

        {/* Central Narrative Disclaimer */}
        <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white rounded-3xl p-8 shadow-xl mb-12 border border-white/10">
          <div className="flex items-center gap-3 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">
            <span>🛡️ MİSYONUMUZ</span>
          </div>
          <h2 className="text-2xl font-extrabold mb-3">
            “Amacımız markaları cezalandırmak değil, tüketici deneyimini ölçülebilir ve iyileştirilebilir hale getirmek.”
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Platformumuz markalar ve tüketiciler arasındaki veri boşluğunu doldurarak şeffaf, adil ve yapıcı bir perakende ekosistemi inşa etmeyi hedefler.
          </p>
        </div>

        {/* Scoring Breakdown Criteria */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-4">5 Ana Puan Kriterimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteria.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-base text-navy-950">{item.title}</h3>
                  <span className="text-[11px] font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {item.weight}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology QA Sections */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8 text-sm">
          <div>
            <h3 className="font-extrabold text-lg text-navy-950 mb-2">Sahte Şikayet Engelleme & Kanıt Doğrulama</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Her başvuru fiş, fatura veya görsel kanıt denetiminden geçer. Asılsız veya bot kaynaklı şikayetler algoritmalarımız ve moderasyon ekibimiz tarafından elenerek marka puanına dahil edilmez.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-extrabold text-lg text-navy-950 mb-2">Marka İtiraz Süreci (Appeal Process)</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Markalar, gerçeği yansıtmadığını düşündükleri şikayetlere kurumsal panel üzerinden kanıt sunarak itiraz edebilirler. İtiraz edilen kayıtlar 48 saat içinde bağımsız hakem heyetimizce değerlendirilir.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-extrabold text-lg text-navy-950 mb-2">KVKK ve Gizlilik Yaklaşımı</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Tüketicilerin kişisel verileri 6698 sayılı KVKK mevzuatına tam uyumlu olarak anonimleştirilir. Kanıt belgelerindeki T.C. Kimlik ve kredi kartı bilgileri otomatik sansürlenir.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
