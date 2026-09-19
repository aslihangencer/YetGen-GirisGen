import { Brand, Complaint, BlogPost, SdgGoal, BrandMetrics } from './types';

export const mockBrands: Brand[] = [
  {
    id: 'abc-market',
    name: 'ABC Market',
    logo: '🏬',
    sector: 'Süpermarket & Perakende',
    overallScore: 78,
    isConsumerFriendly: true,
    resolutionRate: 84,
    avgResolutionDays: 2.3,
    returnEaseScore: 81,
    campaignTransparencyScore: 76,
    totalComplaints: 1284,
    branchCount: 340,
    branches: [
      {
        id: 'abc-kadikoy',
        brandId: 'abc-market',
        name: 'İstanbul Kadıköy Şubesi',
        city: 'İstanbul',
        district: 'Kadıköy',
        score: 88,
        complaintCount: 42,
        resolutionRate: 92,
        riskLevel: 'dusuk',
        topIssue: 'Kasa Yoğunluğu'
      },
      {
        id: 'abc-cankaya',
        brandId: 'abc-market',
        name: 'Ankara Çankaya Şubesi',
        city: 'Ankara',
        district: 'Çankaya',
        score: 84,
        complaintCount: 35,
        resolutionRate: 89,
        riskLevel: 'dusuk',
        topIssue: 'Etiket-Kasa Fiyat Farkı'
      },
      {
        id: 'abc-seyhan',
        brandId: 'abc-market',
        name: 'Adana Seyhan Şubesi',
        city: 'Adana',
        district: 'Seyhan',
        score: 61,
        complaintCount: 112,
        resolutionRate: 68,
        riskLevel: 'yuksek',
        topIssue: 'İade Kabul Edilmemesi'
      },
      {
        id: 'abc-konak',
        brandId: 'abc-market',
        name: 'İzmir Konak Şubesi',
        city: 'İzmir',
        district: 'Konak',
        score: 74,
        complaintCount: 68,
        resolutionRate: 79,
        riskLevel: 'orta',
        topIssue: 'Stok Yetersizliği'
      },
      {
        id: 'abc-nilufer',
        brandId: 'abc-market',
        name: 'Bursa Nilüfer Şubesi',
        city: 'Bursa',
        district: 'Nilüfer',
        score: 82,
        complaintCount: 29,
        resolutionRate: 86,
        riskLevel: 'dusuk',
        topIssue: 'Kampanya Kasada Düşmedi'
      }
    ]
  },
  {
    id: 'teknoline',
    name: 'TeknoLine Mağazaları',
    logo: '💻',
    sector: 'Teknoloji & Elektronik',
    overallScore: 82,
    isConsumerFriendly: true,
    resolutionRate: 89,
    avgResolutionDays: 1.8,
    returnEaseScore: 85,
    campaignTransparencyScore: 80,
    totalComplaints: 890,
    branchCount: 115,
    branches: [
      {
        id: 'tekno-besiktas',
        brandId: 'teknoline',
        name: 'İstanbul Beşiktaş Şubesi',
        city: 'İstanbul',
        district: 'Beşiktaş',
        score: 91,
        complaintCount: 18,
        resolutionRate: 95,
        riskLevel: 'dusuk',
        topIssue: 'Personel İlgisizliği'
      },
      {
        id: 'tekno-karsiyaka',
        brandId: 'teknoline',
        name: 'İzmir Karşıyaka Şubesi',
        city: 'İzmir',
        district: 'Karşıyaka',
        score: 85,
        complaintCount: 24,
        resolutionRate: 88,
        riskLevel: 'dusuk',
        topIssue: 'Kutu Açılmış Ürün'
      },
      {
        id: 'tekno-yenimahalle',
        brandId: 'teknoline',
        name: 'Ankara Yenimahalle Şubesi',
        city: 'Ankara',
        district: 'Yenimahalle',
        score: 65,
        complaintCount: 78,
        resolutionRate: 71,
        riskLevel: 'yuksek',
        topIssue: 'Garanti Süreci Gecikmesi'
      }
    ]
  },
  {
    id: 'trend-giyim',
    name: 'TrendGiyim Mağazaları',
    logo: '🛍️',
    sector: 'Tekstil & Moda',
    overallScore: 69,
    isConsumerFriendly: false,
    resolutionRate: 71,
    avgResolutionDays: 3.8,
    returnEaseScore: 62,
    campaignTransparencyScore: 68,
    totalComplaints: 1640,
    branchCount: 210,
    branches: [
      {
        id: 'trend-sisli',
        brandId: 'trend-giyim',
        name: 'İstanbul Şişli AVM Şubesi',
        city: 'İstanbul',
        district: 'Şişli',
        score: 75,
        complaintCount: 54,
        resolutionRate: 78,
        riskLevel: 'orta',
        topIssue: 'Kasa Kuyruğu ve Fiş Hataları'
      },
      {
        id: 'trend-muratpasa',
        brandId: 'trend-giyim',
        name: 'Antalya Muratpaşa Şubesi',
        city: 'Antalya',
        district: 'Muratpaşa',
        score: 58,
        complaintCount: 142,
        resolutionRate: 59,
        riskLevel: 'yuksek',
        topIssue: 'Değişim Süresi Geçti Bahanesi'
      }
    ]
  },
  {
    id: 'hizli-kargo',
    name: 'HızlıLojistik Kargo',
    logo: '📦',
    sector: 'Kargo & Lojistik',
    overallScore: 64,
    isConsumerFriendly: false,
    resolutionRate: 66,
    avgResolutionDays: 4.2,
    returnEaseScore: 59,
    campaignTransparencyScore: 71,
    totalComplaints: 3410,
    branchCount: 450,
    branches: [
      {
        id: 'hizli-atasehir',
        brandId: 'hizli-kargo',
        name: 'İstanbul Ataşehir Dağıtım Şubesi',
        city: 'İstanbul',
        district: 'Ataşehir',
        score: 52,
        complaintCount: 230,
        resolutionRate: 54,
        riskLevel: 'yuksek',
        topIssue: 'Geldik Bulamadık Notu'
      },
      {
        id: 'hizli-odunpazari',
        brandId: 'hizli-kargo',
        name: 'Eskişehir Odunpazarı Şubesi',
        city: 'Eskişehir',
        district: 'Odunpazarı',
        score: 79,
        complaintCount: 42,
        resolutionRate: 83,
        riskLevel: 'dusuk',
        topIssue: 'Hasarlı Koli'
      }
    ]
  },
  {
    id: 'gurme-firin',
    name: 'Gurme Fırın & Kafe',
    logo: '☕',
    sector: 'Yiyecek & İçecek',
    overallScore: 86,
    isConsumerFriendly: true,
    resolutionRate: 91,
    avgResolutionDays: 1.2,
    returnEaseScore: 89,
    campaignTransparencyScore: 88,
    totalComplaints: 420,
    branchCount: 85,
    branches: [
      {
        id: 'gurme-bakirkoy',
        brandId: 'gurme-firin',
        name: 'İstanbul Bakırköy Şubesi',
        city: 'İstanbul',
        district: 'Bakırköy',
        score: 89,
        complaintCount: 12,
        resolutionRate: 94,
        riskLevel: 'dusuk',
        topIssue: 'Sipariş Gecikmesi'
      }
    ]
  }
];

export const mockComplaints: Complaint[] = [
  {
    id: 'GK-2026-001284',
    referenceNo: 'GK-2026-001284',
    brandId: 'abc-market',
    brandName: 'ABC Market',
    branchId: 'abc-seyhan',
    branchName: 'Adana Seyhan Şubesi',
    category: 'İade',
    title: 'Fişli ve ambalajlı ürün iadesi sebepsiz reddedildi',
    description: '18 Eylül 2026 tarihinde satın aldığım kapalı kutu mutfak gerecini ertesi gün fişiyle birlikte Seyhan şubesine götürdüm. Mağaza müdürü sebep göstermeksizin iade alamayacaklarını söyledi.',
    date: '19.09.2026',
    status: 'İnceleniyor',
    evidenceFiles: ['fatura_001284.pdf', 'urun_foto.jpg'],
    resolutionDays: undefined
  },
  {
    id: 'GK-2026-001280',
    referenceNo: 'GK-2026-001280',
    brandId: 'abc-market',
    brandName: 'ABC Market',
    branchId: 'abc-cankaya',
    branchName: 'Ankara Çankaya Şubesi',
    category: 'Kampanya',
    title: 'Raf etiketi 49 TL olan ürün kasada 79 TL basıldı',
    description: 'Çankaya şubesinde "2 Al 1 Öde" etiketi olan üründen 2 adet aldım, kasada kampanya düşmedi ve tam fiyat kesildi. Kasa görevlisi ilgilenmedi.',
    date: '18.09.2026',
    status: 'Markaya İletildi',
    evidenceFiles: ['raf_etiketi.jpg'],
    resolutionDays: undefined
  },
  {
    id: 'GK-2026-001275',
    referenceNo: 'GK-2026-001275',
    brandId: 'teknoline',
    brandName: 'TeknoLine Mağazaları',
    branchId: 'tekno-yenimahalle',
    branchName: 'Ankara Yenimahalle Şubesi',
    category: 'Ürün',
    title: 'Teşhir ürünü sıfır ambalajlı ürün olarak satıldı',
    description: 'Yenimahalle şubesinden aldığım kulaklığın kutusundaki güvenlik bandının kesilmiş olduğunu evde fark ettim. Ürün üzerinde parmak izleri vardı.',
    date: '16.09.2026',
    status: 'Yanıt Bekleniyor',
    evidenceFiles: ['kutu_gorsel.jpg', 'alisveris_fisi.png'],
    resolutionDays: undefined
  },
  {
    id: 'GK-2026-001190',
    referenceNo: 'GK-2026-001190',
    brandId: 'abc-market',
    brandName: 'ABC Market',
    branchId: 'abc-kadikoy',
    branchName: 'İstanbul Kadıköy Şubesi',
    category: 'Fiyat',
    title: 'Gramaj eksikliği bildirimi ve anında değişim',
    description: 'Paketli peynirde gramaj uyumsuzluğu tespit ettim. Kadıköy şubesi anında özür dileyerek yeni ürünle değişim sağladı.',
    date: '12.09.2026',
    status: 'Çözüldü',
    evidenceFiles: ['tartim_foto.jpg'],
    resolutionDays: 1
  },
  {
    id: 'GK-2026-001044',
    referenceNo: 'GK-2026-001044',
    brandId: 'trend-giyim',
    brandName: 'TrendGiyim Mağazaları',
    branchId: 'trend-muratpasa',
    branchName: 'Antalya Muratpaşa Şubesi',
    category: 'Personel',
    title: 'Kasa görevlisinin agresif tutumu ve hatalı çekim',
    description: 'Antalya şubesinde kasadaki görevli indirim kodunu tanımlamadı ve soru sorduğumda uygunsuz cevaplar verdi.',
    date: '10.09.2026',
    status: 'Çözüldü',
    evidenceFiles: ['pos_slipi.pdf'],
    resolutionDays: 3
  }
];

export const mockBrandMetrics: BrandMetrics = {
  totalComplaints: 1284,
  openComplaints: 42,
  resolutionRate: 84, // %84
  avgResolutionDays: 2.3,
  returnEase: 81,
  campaignTransparency: 76,
  riskyBranchCount: 3
};

export const mockCategoryDistribution = [
  { name: 'İade', value: 32, color: '#0ea5e9' },
  { name: 'Kampanya', value: 24, color: '#10b981' },
  { name: 'Fiyat / Etiket', value: 18, color: '#f59e0b' },
  { name: 'Online Sipariş', value: 12, color: '#8b5cf6' },
  { name: 'Personel', value: 9, color: '#ec4899' },
  { name: 'Diğer', value: 5, color: '#64748b' }
];

export const mockMonthlyTrend = [
  { month: 'Oca', sikayet: 140, cozuldu: 120, ortGun: 3.1 },
  { month: 'Şub', sikayet: 165, cozuldu: 145, ortGun: 2.9 },
  { month: 'Mar', sikayet: 190, cozuldu: 170, ortGun: 2.7 },
  { month: 'Nis', sikayet: 210, cozuldu: 192, ortGun: 2.5 },
  { month: 'May', sikayet: 185, cozuldu: 168, ortGun: 2.4 },
  { month: 'Haz', sikayet: 230, cozuldu: 205, ortGun: 2.3 },
  { month: 'Tem', sikayet: 260, cozuldu: 238, ortGun: 2.2 },
  { month: 'Ağu', sikayet: 240, cozuldu: 220, ortGun: 2.3 },
  { month: 'Eyl', sikayet: 280, cozuldu: 255, ortGun: 2.1 }
];

export const mockSdgs: SdgGoal[] = [
  {
    code: 'SKA 8',
    title: 'İnsana Yakışır İş ve Ekonomik Büyüme',
    description: 'Tüketici güvenini artırarak dijital ticarette sürdürülebilir ekonomik büyümeyi ve girişimciliği destekliyoruz.',
    iconName: 'TrendingUp'
  },
  {
    code: 'SKA 9',
    title: 'Sanayi, Yenilikçilik ve Altyapı',
    description: 'Şube bazlı veri analitiği altyapımızla perakende ve hizmet sektöründe yenilikçi çözüm mekanizmaları kuruyoruz.',
    iconName: 'Cpu'
  },
  {
    code: 'SKA 12',
    title: 'Sorumlu Üretim ve Tüketim',
    description: 'Markaların hatalı süreçlerini şeffaflıkla düzelterek bilinçli tüketimi ve kaliteli hizmet standartlarını teşvik ediyoruz.',
    iconName: 'ShieldCheck'
  },
  {
    code: 'SKA 16',
    title: 'Barış, Adalet ve Güçlü Kurumlar',
    description: 'Tüketici ile markalar arasında adil, şeffaf, kanıta dayalı ve hesap verilebilir bir hak arama kanalı sağlıyoruz.',
    iconName: 'Scale'
  },
  {
    code: 'SKA 17',
    title: 'Amaçlar İçin Ortaklıklar',
    description: 'Tüketiciler, zincir markalar, sivil toplum ve denetleyici mekanizmalar arasında ortak güven ekosistemi yaratıyoruz.',
    iconName: 'Users'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Şube Bazlı Tüketici Deneyimi Perakendede Neden Yeni Standart?',
    excerpt: 'Genel marka puanları yanıltıcı olabilir. Aynı markanın iki farklı şubesinde yaşadığınız deneyim neden gece ile gündüz kadar farklı?',
    category: 'Müşteri Deneyimi',
    date: '18 Eylül 2026',
    readTime: '4 dk okuma',
    slug: 'sube-bazli-tuketici-deneyimi',
    author: 'GüvenKarnesi Veri Ekibi'
  },
  {
    id: '2',
    title: 'İade ve Değişim Haklarında Tüketicinin Bilmesi Gereken 5 Altın Kuram',
    excerpt: 'Kutu açıldı bahanesiyle iadesi reddedilen ürünler, fiş zorunluluğu ve tüketici hakem heyeti süreçlerine dair pratik rehber.',
    category: 'Tüketici Hakları',
    date: '15 Eylül 2026',
    readTime: '6 dk okuma',
    slug: 'iade-degisim-haklari-rehberi',
    author: 'Av. Zeynep Kaya'
  },
  {
    id: '3',
    title: 'Veriden İçgörüye: B2B SaaS Dashboard İle Operasyonel Risk Yönetimi',
    excerpt: 'Zincir mağazalar kronikleşmiş şube sorunlarını veri analitiği ile nasıl tespit edip 48 saat içinde çözüme kavuşturuyor?',
    category: 'Veri Analitiği',
    date: '10 Eylül 2026',
    readTime: '5 dk okuma',
    slug: 'veriden-icgoruye-saas-dashboard',
    author: 'Caner Öztürk - Baş Analist'
  },
  {
    id: '4',
    title: 'Tüketici Dostu Sertifikası Nedir? Rozet Lisanslama Metodolojisi',
    excerpt: 'Markaların şeffaflık, hızlı çözüm ve yüksek memnuniyet oranlarına göre hak kazandığı Tüketici Dostu rozetinin standartları.',
    category: 'Şeffaflık',
    date: '04 Eylül 2026',
    readTime: '3 dk okuma',
    slug: 'tuketici-dostu-sertifikasi-standartlari',
    author: 'GüvenKarnesi Sertifikasyon Kurulu'
  }
];
