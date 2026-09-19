'use client';

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const branchData = [
  { name: 'Kadıköy', score: 88, resolution: 92 },
  { name: 'Çankaya', score: 84, resolution: 89 },
  { name: 'Nilüfer', score: 82, resolution: 86 },
  { name: 'Konak', score: 74, resolution: 79 },
  { name: 'Seyhan', score: 61, resolution: 68 },
];

export const BranchPerformanceChart: React.FC = () => {
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
        <BarChart data={branchData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 100]} tickLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0b1d2e', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px' }} 
          />
          <Bar dataKey="score" fill="#0ea5e9" name="Şube Puanı" radius={[6, 6, 0, 0]} />
          <Bar dataKey="resolution" fill="#10b981" name="Çözüm Oranı (%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
