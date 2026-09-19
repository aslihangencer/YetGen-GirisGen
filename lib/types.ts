export type RiskLevel = 'dusuk' | 'orta' | 'yuksek';

export type ComplaintStatus = 'İnceleniyor' | 'Markaya İletildi' | 'Yanıt Bekleniyor' | 'Çözüldü';

export type ComplaintCategory = 
  | 'İade' 
  | 'Kampanya' 
  | 'Online Sipariş' 
  | 'Ürün' 
  | 'Fiyat' 
  | 'Personel' 
  | 'Teslimat' 
  | 'Diğer';

export interface Branch {
  id: string;
  brandId: string;
  name: string;
  city: string;
  district: string;
  score: number;
  complaintCount: number;
  resolutionRate: number; // e.g. 88 -> %88
  riskLevel: RiskLevel;
  topIssue: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  sector: string;
  overallScore: number;
  isConsumerFriendly: boolean;
  resolutionRate: number;
  avgResolutionDays: number;
  returnEaseScore: number;
  campaignTransparencyScore: number;
  totalComplaints: number;
  branchCount: number;
  branches: Branch[];
}

export interface Complaint {
  id: string;
  referenceNo: string;
  brandId: string;
  brandName: string;
  branchId: string;
  branchName: string;
  category: ComplaintCategory;
  title: string;
  description: string;
  date: string;
  status: ComplaintStatus;
  evidenceFiles?: string[];
  resolutionDays?: number;
}

export interface BrandMetrics {
  totalComplaints: number;
  openComplaints: number;
  resolutionRate: number;
  avgResolutionDays: number;
  returnEase: number;
  campaignTransparency: number;
  riskyBranchCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author: string;
}

export interface SdgGoal {
  code: string;
  title: string;
  description: string;
  iconName: string;
}
