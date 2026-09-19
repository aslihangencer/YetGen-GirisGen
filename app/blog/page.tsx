'use client';

import React, { useState } from 'react';
import { mockBlogPosts } from '@/lib/mockData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');

  const categories = ['Hepsi', 'Müşteri Deneyimi', 'Tüketici Hakları', 'Veri Analitiği', 'Şeffaflık'];

  const filteredPosts = mockBlogPosts.filter(
    (post) => selectedCategory === 'Hepsi' || post.category === selectedCategory
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            İçgörü & Rehberler
          </span>
          <h1 className="text-4xl font-extrabold text-navy-950 tracking-tight">
            GüvenKarnesi Blog
          </h1>
          <p className="text-slate-600 text-sm">
            Tüketici hakları, perakende analitiği ve şeffaf müşteri deneyimine dair en güncel makaleler.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-bold text-brand-primary bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                    {post.category}
                  </span>
                  <span>{post.date} • {post.readTime}</span>
                </div>

                <h2 className="text-xl font-extrabold text-navy-950 mb-3 hover:text-brand-primary cursor-pointer transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">Yazar: {post.author}</span>
                <span className="font-bold text-brand-primary flex items-center gap-1 hover:underline cursor-pointer">
                  Devamını Oku ➔
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
