import Box from '@mui/material/Box';
import Header from '../components/Header';
import ClientLayout from './ClientLayout';
import AOSProvider from '@/components/AOSProvider';

export const metadata = {
  title: '楓曜科技股份有限公司 - 系統設計 × 智慧應用開發',
  description:
    '系統設計 × 智慧應用開發。楓曜是一家設計與開發並重的網站公司，專注融合設計思維與技術實力，打造高品質網站系統，助力企業品牌行銷與數位轉型。',
  keywords: '品牌設計, 網站設計, 軟體開發, 楓曜科技, 桃園軟體公司',
  openGraph: {
    title: '楓曜科技股份有限公司',
    description:
      '系統設計 × 智慧應用開發。楓曜是一家設計與開發並重的網站公司，專注融合設計思維與技術實力，打造高品質網站系統，助力企業品牌行銷與數位轉型。',
    url: 'https://funroot-seven.vercel.app/',
    siteName: '楓曜科技股份有限公司',
    images: [
      {
        url: 'https://funroot-seven.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: '楓曜科技股份有限公司',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '楓曜科技股份有限公司',
    description:
      '系統設計 × 智慧應用開發。楓曜是一家設計與開發並重的網站公司，專注融合設計思維與技術實力，打造高品質網站系統，助力企業品牌行銷與數位轉型。',
    images: ['https://funroot-seven.vercel.app/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '楓曜科技股份有限公司',
              url: 'https://funroot-seven.vercel.app/',
              logo: 'https://funroot-seven.vercel.app/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+886-2-1234-5678',
                contactType: 'customer service',
                areaServed: 'TW',
                availableLanguage: ['Chinese', 'English'],
              },
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>
          <AOSProvider>
            <Box width="100%" bgcolor="#f9f9f9">
              <Header />
              <Box component="main" width="100%" letterSpacing={3} sx={{ overflowX: 'hidden' }}>
                {children}
              </Box>
            </Box>
          </AOSProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
