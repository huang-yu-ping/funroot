import Box from '@mui/material/Box';
import Header from '../components/Header';
import ClientLayout from './ClientLayout';
// import { Raleway } from 'next/font/google';

// const raleway = Raleway({
//   subsets: ['latin'],
//   // weight: ['100', '200', '300', '400'], // 你可以依需要加上其他字重
//   // variable: '--font-raleway', // optional: 使用 CSS 變數
//   // display: 'swap',
// });

export const metadata = {
  title: '品牌形象網站',
  description: '展示你的品牌價值與服務。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <ClientLayout>
          <Box
            width="100%"
            bgcolor="#f9f9f9"
          >
            <Header />
            <Box component="main" width="100%" letterSpacing={3}>
              {children}
            </Box>
          </Box>
        </ClientLayout>
      </body>
    </html>
  );
}
