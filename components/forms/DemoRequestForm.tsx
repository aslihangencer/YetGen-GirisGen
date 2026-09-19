'use client';

import React, { useState } from 'react';

export const DemoRequestForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    branchCount: '1-10',
    sector: 'Süpermarket / Perakende',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 bg-emerald-50/30 text-center animate-in zoom-in-95">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h3 className="text-2xl font-extrabold text-navy-950 mb-2">Demo Talebiniz Alındı!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
          Kurumsal müşteri temsilcimiz 24 saat içinde <strong>{formData.company}</strong> ekibinizle iletişime geçecektir.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-white border border-slate-200"
        >
          Formu Sıfırla
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Ad Soyad</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ahmet Yılmaz"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Şirket / Marka Adı</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="ABC Perakende A.Ş."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Kurumsal E-Posta</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ahmet@sirketiniz.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Telefon</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="0532 000 00 00"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Toplam Şube Sayısı</label>
          <select
            value={formData.branchCount}
            onChange={(e) => setFormData({ ...formData, branchCount: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 bg-white"
          >
            <option value="1-10">1 - 10 Şube</option>
            <option value="11-50">11 - 50 Şube</option>
            <option value="51-200">51 - 200 Şube</option>
            <option value="200+">200+ Şube</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Sektör</label>
          <select
            value={formData.sector}
            onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 bg-white"
          >
            <option value="Süpermarket / Perakende">Süpermarket / Perakende</option>
            <option value="Teknoloji / Elektronik">Teknoloji / Elektronik</option>
            <option value="Tekstil / Moda">Tekstil / Moda</option>
            <option value="Kargo / Lojistik">Kargo / Lojistik</option>
            <option value="Yiyecek / İçecek">Yiyecek / İçecek</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Not / İhtiyaç Özeti</label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Şube bazlı şikayet analitiği ve Tüketici Dostu rozeti hakkında bilgi almak istiyoruz..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-navy-900 via-brand-primary to-blue-600 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 transition-all"
      >
        Ücretsiz Kurumsal Demo Talep Et 🚀
      </button>
    </form>
  );
};
