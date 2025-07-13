import Box from '@mui/material/Box';
import Header from '../components/Header';
import ClientLayout from './ClientLayout';
import AOSProvider from '@/components/AOSProvider';

export const metadata = {
  title: '楓曜科技股份有限公司 - 系統設計 × 智慧應用開發 | 桃園軟體公司',
  description:
    '楓曜科技是桃園專業的軟體開發公司，專精於系統設計、網站開發、UI/UX設計、電子商務平台、雲端解決方案。提供企業數位轉型、BPM流程優化、教育平台開發等服務。',
  keywords: '楓曜科技, 桃園軟體公司, 系統設計, 網站開發, UI/UX設計, 電子商務平台, 雲端解決方案, BPM流程優化, 企業數位轉型, 教育平台開發, 銀髮族健康管理, 線上點餐系統',
  authors: [{ name: '楓曜科技股份有限公司' }],
  creator: '楓曜科技股份有限公司',
  publisher: '楓曜科技股份有限公司',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://funroot-seven.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '楓曜科技股份有限公司 - 系統設計 × 智慧應用開發',
    description:
      '楓曜科技是桃園專業的軟體開發公司，專精於系統設計、網站開發、UI/UX設計、電子商務平台、雲端解決方案。提供企業數位轉型、BPM流程優化、教育平台開發等服務。',
    url: 'https://funroot-seven.vercel.app/',
    siteName: '楓曜科技股份有限公司',
    images: [
      {
        url: 'https://funroot-seven.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: '楓曜科技股份有限公司 - 系統設計與智慧應用開發',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '楓曜科技股份有限公司 - 系統設計 × 智慧應用開發',
    description:
      '楓曜科技是桃園專業的軟體開發公司，專精於系統設計、網站開發、UI/UX設計、電子商務平台、雲端解決方案。',
    images: ['https://funroot-seven.vercel.app/og-image.png'],
    creator: '@funroot_tech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Google Search Console */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Yandex Webmaster */}
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* 額外的SEO meta標籤 */}
        <meta name="author" content="楓曜科技股份有限公司" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* 本地化 */}
        <meta name="geo.region" content="TW" />
        <meta name="geo.placename" content="桃園市大園區" />
        <meta name="geo.position" content="25.0330;121.5654" />
        <meta name="ICBM" content="25.0330, 121.5654" />
        
        {/* 社交媒體優化 */}
        <meta property="og:site_name" content="楓曜科技股份有限公司" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:site" content="@funroot_tech" />
        <meta name="twitter:creator" content="@funroot_tech" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '楓曜科技股份有限公司',
              alternateName: 'Funroot Technology',
              url: 'https://funroot-seven.vercel.app/',
              logo: 'https://funroot-seven.vercel.app/logo.png',
              description: '楓曜科技是桃園專業的軟體開發公司，專精於系統設計、網站開發、UI/UX設計、電子商務平台、雲端解決方案。',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '135號',
                addressLocality: '大園區',
                addressRegion: '桃園市',
                postalCode: '33742',
                addressCountry: 'TW'
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+886-905-675-729',
                  contactType: 'customer service',
                  areaServed: 'TW',
                  availableLanguage: ['Chinese', 'English'],
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+886-912-364-264',
                  contactType: 'customer service',
                  areaServed: 'TW',
                  availableLanguage: ['Chinese', 'English'],
                }
              ],
              email: 'yuping.funroot@gmail.com',
              sameAs: [
                'https://www.facebook.com/funroottech',
                'https://www.linkedin.com/company/funroot-technology'
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 25.0330,
                  longitude: 121.5654
                },
                geoRadius: '50000'
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: '服務項目',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'UI/UX設計',
                      description: '介面視覺設計、使用者體驗優化、多裝置響應式設計'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '系統架構設計',
                      description: '高可用性與擴展性設計、微服務與模組化架構、資料庫與API整合策略'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '電子商務平台',
                      description: '多元商品與庫存管理、金流與物流整合、會員系統與行銷工具'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '雲端解決方案',
                      description: '彈性部署與自動擴展、資料備份與安全防護、整合API與第三方服務'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'BPM企業效能優化',
                      description: '流程自動化與標準化、跨部門協作優化、數據驅動決策分析'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '營運顧問服務',
                      description: '營運流程診斷與優化、數位轉型策略規劃、管理制度與組織健檢'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '教育平台',
                      description: '線上課程管理、學習進度追蹤、互動教學設計'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '銀髮族健康管理',
                      description: '日常健康數據追蹤、服藥提醒與紀錄、健康報告與醫療建議'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '線上點餐系統',
                      description: '多樣化點餐機制、支付功能整合、後台數據分析'
                    }
                  }
                ]
              }
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
