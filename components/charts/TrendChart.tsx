'use client';

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { mockMonthlyTrend } from '@/lib/mockData';

export const TrendChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-64 bg-slate-50 animate-pulse rounded-xl flex items-center justify-center text-xs text-slate-400">Grafik Yükleniyor...</div>;
  }

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={mockMonthlyTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSikayet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="colorCozuldu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0b1d2e', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px' }} 
            formatter={(value: any, name: any) => [value, name === 'sikayet' ? 'Toplam Şikayet' : 'Çözülen Şikayet']}
          />
          <Area type="monotone" dataKey="sikayet" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorSikayet)" name="sikayet" />
          <Area type="monotone" dataKey="cozuldu" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCozuldu)" name="cozuldu" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
