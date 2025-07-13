import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服務項目 - 楓曜科技股份有限公司 | UI/UX設計、系統開發、電子商務平台',
  description: '楓曜科技提供專業的UI/UX設計、系統架構設計、電子商務平台、雲端解決方案、BPM企業效能優化、營運顧問服務、教育平台開發、銀髮族健康管理、線上點餐系統等服務。',
  keywords: 'UI/UX設計, 系統架構設計, 電子商務平台, 雲端解決方案, BPM企業效能優化, 營運顧問服務, 教育平台開發, 銀髮族健康管理, 線上點餐系統, 楓曜科技',
  openGraph: {
    title: '服務項目 - 楓曜科技股份有限公司',
    description: '楓曜科技提供專業的UI/UX設計、系統架構設計、電子商務平台、雲端解決方案、BPM企業效能優化、營運顧問服務、教育平台開發、銀髮族健康管理、線上點餐系統等服務。',
    url: 'https://funroot-seven.vercel.app/services',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

import ServicesClient from './ServicesClient';

export default function Services() {
  return <ServicesClient />;
}
