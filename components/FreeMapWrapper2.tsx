'use client';

import dynamic from 'next/dynamic';

// 這裡的 ssr: false 是關鍵
const FreeMap2 = dynamic(() => import('./FreeMap2'), {
  ssr: false,
});

export default FreeMap2;
