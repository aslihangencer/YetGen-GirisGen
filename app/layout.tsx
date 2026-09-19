import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.narrative,
  keywords: ['şikayet', 'tüketici', 'mağaza', 'şube karnesi', 'marka puanı', 'b2b saas', 'tüketici dostu'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
