import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: '聯絡我們 - 楓曜科技股份有限公司 | 桃園軟體開發公司',
  description: '楓曜科技位於桃園市大園區，提供專業的軟體開發服務。聯絡電話：+886-905-675-729、+886-912-364-264，電子郵件：yuping.funroot@gmail.com。',
  keywords: '楓曜科技聯絡方式, 桃園軟體公司, 楓曜科技地址, 楓曜科技電話, 楓曜科技信箱',
  openGraph: {
    title: '聯絡我們 - 楓曜科技股份有限公司',
    description: '楓曜科技位於桃園市大園區，提供專業的軟體開發服務。聯絡電話：+886-905-675-729、+886-912-364-264。',
    url: 'https://funroot-seven.vercel.app/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
