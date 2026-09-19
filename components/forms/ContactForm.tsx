'use client';

import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center animate-in zoom-in-95">
        <div className="text-4xl mb-3">📩</div>
        <h3 className="text-xl font-extrabold text-navy-950">Mesajınız Alındı!</h3>
        <p className="text-sm text-slate-600 mt-2">
          En kısa sürede e-posta adresiniz üzerinden sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Adınız Soyadınız</label>
        <input
          type="text"
          required
          placeholder="Ahmet Yılmaz"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase mb-1">E-Posta Adresiniz</label>
        <input
          type="email"
          required
          placeholder="ornek@domain.com"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Konu</label>
        <input
          type="text"
          required
          placeholder="Soru / Öneri / İş Birliği"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Mesajınız</label>
        <textarea
          rows={4}
          required
          placeholder="Bize iletmek istediğiniz detayları buraya yazınız..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-extrabold text-white bg-navy-900 hover:bg-navy-950 transition-colors shadow-md"
      >
        Mesajı Gönder ✉️
      </button>
    </form>
  );
};
