'use client';

import dynamic from 'next/dynamic';

// 這裡的 ssr: false 是關鍵
const FreeMap = dynamic(() => import('./FreeMap'), {
  ssr: false,
});

export default FreeMap;
