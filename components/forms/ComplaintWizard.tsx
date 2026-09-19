'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockBrands } from '@/lib/mockData';
import { ComplaintCategory } from '@/lib/types';
import { StatusPill } from '@/components/ui/DataTable';

const categories: ComplaintCategory[] = [
  'İade',
  'Kampanya',
  'Online Sipariş',
  'Ürün',
  'Fiyat',
  'Personel',
  'Teslimat',
  'Diğer'
];

export const ComplaintWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedBrandId, setSelectedBrandId] = useState<string>('');
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [category, setCategory] = useState<ComplaintCategory>('İade');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [refNo, setRefNo] = useState<string>('');

  const selectedBrand = mockBrands.find((b) => b.id === selectedBrandId);
  const branches = selectedBrand ? selectedBrand.branches : [];
  const selectedBranch = branches.find((br) => br.id === selectedBranchId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const generatedRef = `GK-2026-${randomDigits}`;
    setRefNo(generatedRef);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-2xl mx-auto text-center animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
          ✓
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-wider mb-2">
          ŞİKAYET BAŞARIYLA OLUŞTURULDU
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mb-3">
          Şikayetin Oluşturuldu!
        </h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Şikayetiniz standart doğrulama sürecimize alınmıştır. Markaya şube bazlı veri olarak iletilecektir.
        </p>

        {/* Reference Number Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 text-left space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs text-slate-500 font-semibold">Başvuru Referans Numarası</span>
            <span className="text-base font-extrabold font-mono text-brand-primary bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              {refNo}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs text-slate-500 font-semibold">Mevcut Durum</span>
            <StatusPill status="İnceleniyor" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs pt-1 text-slate-600">
            <div><strong className="text-navy-950">Marka:</strong> {selectedBrand?.name}</div>
            <div><strong className="text-navy-950">Şube:</strong> {selectedBranch?.name}</div>
            <div><strong className="text-navy-950">Kategori:</strong> {category}</div>
            <div><strong className="text-navy-950">Tarih:</strong> {date}</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 text-left mb-8 flex items-start gap-3">
          <span className="text-lg leading-none">⚠️</span>
          <div>
            <strong>Yasal Bildirim & Sorumluluk Reddi:</strong> Bu bir hukuki tavsiye veya tüketici hakem heyeti başvurusu değildir; şikayetiniz doğrulama sürecinden geçecek ve şeffaf platform kurallarına göre işlenecektir.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard/tuketici"
            className="px-6 py-3 rounded-xl font-bold text-white bg-navy-900 hover:bg-navy-950 transition-colors shadow-md"
          >
            Tüketici Dashboard'unda Takip Et
          </Link>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setSelectedBrandId('');
              setSelectedBranchId('');
              setTitle('');
              setDescription('');
              setFiles([]);
            }}
            className="px-6 py-3 rounded-xl font-semibold text-navy-950 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Yeni Şikayet Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto">
      {/* Wizard Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
          <span className={step >= 1 ? 'text-brand-primary' : ''}>1. Marka</span>
          <span className={step >= 2 ? 'text-brand-primary' : ''}>2. Şube</span>
          <span className={step >= 3 ? 'text-brand-primary' : ''}>3. Kategori</span>
          <span className={step >= 4 ? 'text-brand-primary' : ''}>4. Detay & Kanıt</span>
          <span className={step >= 5 ? 'text-brand-primary' : ''}>5. Onay</span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-brand-primary to-brand-accent h-full transition-all duration-300 rounded-full"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Select Brand */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-extrabold text-navy-950">Adım 1: Sorun Yaşadığın Markayı Seç</h3>
            <p className="text-sm text-slate-500">Listeden sorun yaşadığınız zincir mağazayı veya markayı seçiniz.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockBrands.map((brand) => (
                <button
                  type="button"
                  key={brand.id}
                  onClick={() => {
                    setSelectedBrandId(brand.id);
                    setSelectedBranchId('');
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                    selectedBrandId === brand.id
                      ? 'border-brand-primary bg-blue-50/70 ring-2 ring-brand-primary/30 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-3xl">{brand.logo}</span>
                  <div>
                    <div className="font-bold text-navy-950">{brand.name}</div>
                    <div className="text-xs text-slate-500">{brand.sector} • {brand.branchCount} Şube</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                disabled={!selectedBrandId}
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl font-bold text-white bg-navy-900 hover:bg-navy-950 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Devam Et ➔
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Branch */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-extrabold text-navy-950">Adım 2: Şube Seç</h3>
            <p className="text-sm text-slate-500">
              Sorunun meydana geldiği <strong className="text-navy-950">{selectedBrand?.name}</strong> şubesini seçiniz.
            </p>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {branches.map((branch) => (
                <button
                  type="button"
                  key={branch.id}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                    selectedBranchId === branch.id
                      ? 'border-brand-primary bg-blue-50/70 ring-2 ring-brand-primary/30 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="font-bold text-navy-950">{branch.name}</div>
                    <div className="text-xs text-slate-500">{branch.city} / {branch.district}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      Puan: {branch.score}/100
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
              >
                ← Geri
              </button>
              <button
                type="button"
                disabled={!selectedBranchId}
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-xl font-bold text-white bg-navy-900 hover:bg-navy-950 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Devam Et ➔
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Select Issue Category */}
        {step === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-extrabold text-navy-950">Adım 3: Sorun Kategorisi</h3>
            <p className="text-sm text-slate-500">Yaşadığınız sorunun ana temasını seçin.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`p-4 rounded-2xl border font-bold text-sm text-center transition-all ${
                    category === cat
                      ? 'border-brand-primary bg-brand-primary text-white shadow-md'
                      : 'border-slate-200 text-navy-950 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
              >
                ← Geri
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-6 py-3 rounded-xl font-bold text-white bg-navy-900 hover:bg-navy-950 transition-colors"
              >
                Devam Et ➔
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Details & File Upload */}
        {step === 4 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-extrabold text-navy-950">Adım 4: Açıklama ve Kanıt Ekleyin</h3>
            <p className="text-sm text-slate-500">
              Sorun detayını açıkça yazın ve fiş/fatura/ekran görüntüsü kanıtınızı yükleyin.
            </p>

            <div>
              <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Şikayet Başlığı</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Örn: Fişli iadem sebepsiz reddedildi"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Olay Tarihi</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-950 uppercase mb-1">Detaylı Açıklama</label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ne zaman, hangi koşulda ne yaşandığını net bir şekilde yazınız..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-950 uppercase mb-1">
                Kanıt Yükle (Fiş, Fatura, Ekran Görüntüsü, Fotoğraf)
              </label>
              <div className="border-2 border-dashed border-slate-200 hover:border-brand-primary rounded-2xl p-6 text-center bg-slate-50/50 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  id="file-upload"
                  className="hidden"
                />
                <label htmlFor="file-upload" className="cursor-pointer space-y-2 block">
                  <div className="text-3xl">📎</div>
                  <div className="text-sm font-semibold text-navy-950">
                    Dosya seçmek için tıklayın veya sürükleyin
                  </div>
                  <div className="text-xs text-slate-400">
                    PNG, JPG, PDF (Maks. 10MB)
                  </div>
                </label>
                {files.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-emerald-600">
                    Yüklenen dosyalar: {files.map((f) => f.name).join(', ')}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
              >
                ← Geri
              </button>
              <button
                type="button"
                disabled={!title || !description}
                onClick={() => setStep(5)}
                className="px-6 py-3 rounded-xl font-bold text-white bg-navy-900 hover:bg-navy-950 disabled:opacity-50 transition-colors"
              >
                Özet ve Gönder ➔
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Summary & Final Submit */}
        {step === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-xl font-extrabold text-navy-950">Adım 5: Başvuru Özeti ve Onay</h3>
            <p className="text-sm text-slate-500">Lütfen göndermeden önce başvuru bilgilerinizi kontrol ediniz.</p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">Marka</span>
                  <strong className="text-navy-950 text-base">{selectedBrand?.name}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">Şube</span>
                  <strong className="text-navy-950 text-base">{selectedBranch?.name}</strong>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">Kategori</span>
                  <span className="font-bold text-navy-950">{category}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">Olay Tarihi</span>
                  <span className="font-bold text-navy-950">{date}</span>
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-semibold">Başlık</span>
                <span className="font-bold text-navy-950">{title}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-semibold">Detay</span>
                <p className="text-slate-700 text-xs leading-relaxed mt-1">{description}</p>
              </div>
              {files.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs text-slate-500 block font-semibold">Ekli Kanıtlar</span>
                  <span className="text-xs text-brand-primary font-bold">{files.length} adet dosya eklendi</span>
                </div>
              )}
            </div>

            {/* Disclaimer check */}
            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
              <input type="checkbox" required id="disclaimer-check" className="mt-0.5 rounded border-amber-300" defaultChecked />
              <label htmlFor="disclaimer-check" className="cursor-pointer">
                Şikayetimin gerçek deneyimime dayandığını, verdiğim bilgilerin doğruluğunu ve verilerimin şeffaflık kuralları çerçevesinde işlenmesini kabul ediyorum.
              </label>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
              >
                ← Düzenle
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-brand-primary via-blue-600 to-navy-900 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all"
              >
                Şikayeti Tamamla ve Gönder 🚀
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
