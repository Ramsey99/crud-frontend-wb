'use client';

import { Suspense } from 'react';
import HomePageContent from '@/components/HomePageContent';

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
