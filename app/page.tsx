import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ValueCards } from '@/components/sections/ValueCards';
import { BrandGrid } from '@/components/sections/BrandGrid';
import { ProductLoop } from '@/components/sections/ProductLoop';
import { RevenueModel } from '@/components/sections/RevenueModel';
import { SdgsSection } from '@/components/sections/SdgsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueCards />
      <BrandGrid />
      <ProductLoop />
      <RevenueModel />
      <SdgsSection />
    </>
  );
}
