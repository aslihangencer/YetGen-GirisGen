export const siteConfig = {
  name: "GüvenKarnesi",
  shortName: "GüvenKarnesi",
  legalName: "GüvenKarnesi Teknolojileri A.Ş.",
  tagline: "Zincir mağazaların gerçek tüketici karnesi.",
  narrative: "Tüketicinin sesini veriye, veriyi içgörüye, içgörüyü daha iyi deneyime dönüştürüyoruz.",
  primarySlogan: "Şikayetleri sadece toplama. Nerede tekrar ettiğini gör, çöz ve güven oluştur.",
  secondarySlogan: "Tüketici için şeffaflık, markalar için içgörü.",
  badgeName: "Tüketici Dostu",
  currentYear: 2026,
  supportEmail: "destek@guvenkarnesi.com",
  corporateEmail: "kurumsal@guvenkarnesi.com",
  phone: "+90 (212) 850 48 00",
  address: "Maslak Mah. Büyükdere Cad. No:145, Sarıyer / İstanbul",
  navLinks: [
    { name: "Nasıl Çalışır?", href: "/nasil-calisir" },
    { name: "Marka Karneleri", href: "/markalar" },
    { name: "Şikayet Oluştur", href: "/sikayet-olustur" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Metodoloji", href: "/metodoloji" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ],
  dashboardLinks: {
    tuketici: [
      { name: "Genel Bakış", href: "/dashboard/tuketici", icon: "LayoutDashboard" },
      { name: "Şikayetlerim", href: "/dashboard/tuketici#sikayetler", icon: "FileText" },
      { name: "Yeni Şikayet", href: "/sikayet-olustur", icon: "PlusCircle" },
      { name: "Marka Karneleri", href: "/markalar", icon: "Award" },
    ],
    marka: [
      { name: "Genel Bakış", href: "/dashboard/marka", icon: "LayoutDashboard" },
      { name: "Şikayetler", href: "/dashboard/marka#sikayetler", icon: "FileText" },
      { name: "Şubeler & Risk", href: "/dashboard/marka#subeler", icon: "MapPin" },
      { name: "Analizler", href: "/dashboard/marka#analizler", icon: "BarChart3" },
      { name: "Tüketici Dostu Sertifika", href: "/dashboard/marka#sertifika", icon: "BadgeCheck" },
    ]
  }
};
