import React from 'react';

interface ScoreCardProps {
  type: 'brand' | 'branch';
  title: string;
  subtitle?: string;
  score: number;
  maxScore?: number;
  metrics?: { label: string; value: string | number }[];
  className?: string;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  type,
  title,
  subtitle,
  score,
  maxScore = 100,
  metrics,
  className = ''
}) => {
  const isBrand = type === 'brand';
  
  // Color palette based on score range
  const getScoreColor = (val: number) => {
    if (val >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (val >= 65) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (val >= 50) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  const getProgressColor = (val: number) => {
    if (val >= 80) return 'bg-emerald-500';
    if (val >= 65) return 'bg-blue-500';
    if (val >= 50) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div 
      className={`rounded-2xl p-5 border transition-all shadow-sm ${
        isBrand 
          ? 'bg-gradient-to-br from-navy-900 to-navy-950 text-white border-navy-800 shadow-navy-950/20' 
          : 'bg-white text-navy-950 border-slate-200 shadow-slate-100'
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider mb-1 ${
            isBrand ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30' : 'bg-slate-100 text-slate-600 border border-slate-200'
          }`}>
            {isBrand ? '🏢 GENEL MARKA KARNESİ' : '📍 ŞUBE PERFORMANSI'}
          </span>
          <h4 className="font-bold text-lg leading-snug">{title}</h4>
          {subtitle && <p className={`text-xs ${isBrand ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>}
        </div>

        <div className="flex flex-col items-end">
          <div className={`px-3 py-1.5 rounded-xl border text-center font-extrabold ${
            isBrand ? 'bg-white/10 text-white border-white/20' : getScoreColor(score)
          }`}>
            <span className="text-2xl leading-none">{score}</span>
            <span className="text-xs opacity-75">/{maxScore}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-slate-200/40 overflow-hidden my-3">
        <div 
          className={`h-full transition-all duration-500 rounded-full ${isBrand ? 'bg-gradient-to-r from-brand-primary to-brand-accent' : getProgressColor(score)}`} 
          style={{ width: `${(score / maxScore) * 100}%` }}
        />
      </div>

      {/* Additional Metrics grid if present */}
      {metrics && metrics.length > 0 && (
        <div className={`grid grid-cols-2 gap-2 mt-4 pt-3 border-t text-xs ${isBrand ? 'border-white/10 text-slate-300' : 'border-slate-100 text-slate-600'}`}>
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="opacity-75 text-[11px]">{m.label}</span>
              <span className={`font-bold ${isBrand ? 'text-white' : 'text-navy-950'}`}>{m.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className={`mt-3 text-[10px] text-right italic ${isBrand ? 'text-slate-400' : 'text-slate-400'}`}>
        * Gösterilen puanlar demo verisidir.
      </div>
    </div>
  );
};
