import { Metadata } from 'next';
import ConsultationClient from './ConsultationClient';

export const metadata: Metadata = {
  title: '免費諮詢 - 楓曜科技股份有限公司 | 系統設計與開發諮詢',
  description: '楓曜科技提供免費諮詢服務，協助您規劃系統設計、網站開發、UI/UX設計、電子商務平台等專案。立即填寫諮詢表單，與我們的專業團隊討論您的需求。',
  keywords: '免費諮詢, 系統設計諮詢, 網站開發諮詢, UI/UX設計諮詢, 電子商務平台諮詢, 楓曜科技諮詢',
  openGraph: {
    title: '免費諮詢 - 楓曜科技股份有限公司',
    description: '楓曜科技提供免費諮詢服務，協助您規劃系統設計、網站開發、UI/UX設計、電子商務平台等專案。',
    url: 'https://funroot-seven.vercel.app/consultation',
    type: 'website',
  },
  alternates: {
    canonical: '/consultation',
  },
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}
