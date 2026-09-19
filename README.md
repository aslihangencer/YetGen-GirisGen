# 🛡️ GüvenKarnesi

> **Tüketici odaklı şikayet + marka içgörü platformu**

“Tüketicinin sesini veriye, veriyi içgörüye, içgörüyü daha iyi deneyime dönüştürüyoruz.”

**GüvenKarnesi**, zincir mağazalarda yaşanan tüketici sorunlarını (iade kabul edilmemesi, kampanya uyumsuzluğu, etiket farkı, personel ilgisizliği vb.) standartlaştırılmış ve kanıtlı veriye dönüştürerek şube bazında skorlayan; zincir markalara ise operasyonel B2B SaaS içgörüleri sunan ve yüksek performanslı markaları "Tüketici Dostu" sertifikası ile ödüllendiren platformdur.

---

## 🚀 Öne Çıkan Özellikler

- **Tüketici Şikayet Sihirbazı**: Marka → Şube → Kategori → Kanıt Yükleme adımlarıyla 5 aşamalı başvuru ve otomatik referans numarası (`GK-2026-XXXXXX`) üretimi.
- **Marka vs. Şube Puan Ayrışması**: Markaların genel puanı ile şube bazlı performansının şeffaf olarak ayrıştırılması (örn. *ABC Market Genel: 78/100*, *Kadıköy Şubesi: 88/100*, *Seyhan Şubesi: 61/100*).
- **Kurumsal B2B SaaS Dashboard**: Şube bazlı risk haritası (🟢 Düşük, 🟡 Orta, 🔴 Yüksek), kök neden analitiği, trend grafikleri ve çözüm süresi takibi.
- **Tüketici Dostu Dijital Sertifikasyon**: Skor kriterlerini sağlayan markalar için doğrulanmış dijital rozet lisanslama sistemi.
- **Sosyal Etki & BM SKA Uyumu**: BM Sürdürülebilir Kalkınma Amaçları (SKA 8, SKA 9, SKA 12, SKA 16, SKA 17) ile tam uyumlu veri altyapısı.

---

## 🛠️ Kullanılan Teknolojiler

- **Framework**: Next.js 14 (App Router)
- **Dil**: TypeScript
- **Stil & Tasarım**: Tailwind CSS, CSS Modules
- **Grafik & Veri Görselleştirme**: Recharts
- **Bileşen Mimarisi**: Component-driven (shadcn/ui standartlarında modüler mimari)
- **İkonlar**: Lucide React & Custom SVG System

---

## 💻 Yerel Kurulum & Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Depoyu bilgisayarınıza indirin ve klasöre girin**:
   ```bash
   cd YetGen-GirisGen
   ```

2. **Bağımlılıkları yükleyin**:
   ```bash
   npm install
   ```

3. **Geliştirici sunucusunu başlatın**:
   ```bash
   npm run dev
   ```

4. Tarayıcınızda `http://localhost:3000` adresini açarak uygulamayı görüntüleyin.

---

## 📦 Mevcut Script'ler

- `npm run dev`: Geliştirme sunucusunu başlatır (`http://localhost:3000`).
- `npm run build`: Üretim (production) derlemesini oluşturur.
- `npm run start`: Derlenmiş uygulamayı sunucuda başlatır.
- `npm run lint`: Kod kalitesini ve TypeScript türlerini denetler.

---

## 📤 GitHub'a Yükleme (Deployment / Push) Rehberi

Bu proje GitHub'a yüklenmeye hazır şekilde yapılandırılmıştır. GitHub hesabınız (`https://github.com/aslihangencer`) altında yeni bir repository oluşturduktan sonra komut satırından aşağıdaki adımları sırasıyla çalıştırabilirsiniz:

```bash
# 1. YetGen-GirisGen klasörüne girin
cd YetGen-GirisGen

# 2. Git deposunu başlatın
git init

# 3. GitHub uzak deposunu ekleyin (örnek repo adıyla)
git remote add origin https://github.com/aslihangencer/YetGen-GirisGen.git

# 4. Tüm dosyaları sahneye ekleyin
git add .

# 5. İlk commit'i oluşturun
git commit -m "İlk commit: GüvenKarnesi platformu"

# 6. Ana dala gönderin
git branch -M main
git push -u origin main
```

---
