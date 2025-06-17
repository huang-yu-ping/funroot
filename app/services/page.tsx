'use client';

import Footer from '@/components/Footer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  Web,
  Restaurant,
  School,
  TrackChanges,
  Palette,
  HealthAndSafety,
  ShoppingCart,
  CloudDone,
  BusinessCenter,
} from '@mui/icons-material';

export default function Services() {
  const features = [
    {
      icon: <Palette fontSize="large" />,
      title: 'UI/UX設計',
      subtitle: 'UIUX DESIGN',
      description: ['介面視覺設計', '使用者體驗優化', '多裝置響應式設計'],
    },
    {
      icon: <Web fontSize="large" />,
      title: '系統架構設計',
      subtitle: 'WEB DESIGN',
      description: ['高可用性與擴展性設計', '微服務與模組化架構', '資料庫與API整合策略'],
    },
    {
      icon: <ShoppingCart fontSize="large" />,
      title: '電子商務平台',
      subtitle: 'E-COMMERCE PLATFORM',
      description: ['多元商品與庫存管理', '金流與物流整合', '會員系統與行銷工具'],
    },
    {
      icon: <CloudDone fontSize="large" />,
      title: '雲端解決方案',
      subtitle: 'CLOUD SOLUTION',
      description: ['彈性部署與自動擴展', '資料備份與安全防護', '整合API與第三方服務'],
    },
    {
      icon: <TrackChanges fontSize="large" />,
      title: 'BPM企業效能優化',
      subtitle: 'BUSINESS PROCESS MANAGEMENT',
      description: ['流程自動化與標準化', '跨部門協作優化', '數據驅動決策分析'],
    },
    {
      icon: <BusinessCenter fontSize="large" />,
      title: '營運顧問服務',
      subtitle: 'BUSINESS CONSULTING SERVICE',
      description: ['營運流程診斷與優化', '數位轉型策略規劃', '管理制度與組織健檢'],
    },
    {
      icon: <School fontSize="large" />,
      title: '教育平台',
      subtitle: 'DIGITAL LEARNING SOLUTION',
      description: ['線上課程管理', '學習進度追蹤', '互動教學設計'],
    },
    {
      icon: <HealthAndSafety fontSize="large" />,
      title: '銀髮族健康管理',
      subtitle: 'SENIOR HEALTH MANAGEMENT APP',
      description: ['日常健康數據追蹤', '服藥提醒與紀錄', '健康報告與醫療建議'],
    },

    {
      icon: <Restaurant fontSize="large" />,
      title: '線上點餐系統',
      subtitle: 'ONLINE ORDERING',
      description: ['多樣化點餐機制', '支付功能整合', '後台數據分析'],
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: { xs: 240, md: 300 },
          pt: { xs: 10, md: 14 },
          pb: { xs: 7, md: 11 },
          borderRadius: '0 0 800px 0',
          color: 'white',
          overflow: 'hidden',
          zIndex: 1,
          boxShadow: '30px 0px 0 #2bd4ee67',
        }}
      >
        <Box
          sx={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(145deg, #121220cc, #1c1c2ecc),
              url('/assets/consultation-img.jpg')
            `,
            backgroundSize: {
              xs: 'auto 600%',
              sm: 'auto 500%',
              md: 'auto 550%',
            },
            backgroundPosition: '0 center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'multiply',
            filter: 'saturate(60%) brightness(85%)',
            transform: 'scaleX(-1)',
            zIndex: 0,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'left' },
              gap: 2,
              px: { xs: 2, md: 16 },
              textAlign: { xs: 'center', md: 'left' },
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom data-aos="fade-right">
              滿足您的商業挑戰
            </Typography>
            <Typography
              variant="subtitle1"
              fontStyle="italic"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              「從深入溝通到精準執行，我們與您同行」
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={30} position="relative">
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                data-aos-once={true}
              >
                <Card sx={{ height: '100%', p: 2 }} elevation={2}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: '#B0845C' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      {feature.subtitle}
                    </Typography>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                      {feature.description.map((point, i) => (
                        <li key={i}>
                          <Typography variant="body2">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ mt: 2, cursor: 'pointer', fontWeight: 500 }}
                    >
                      了解更多 »
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(-145deg, #1e2a35, #2a3b4f)',
          color: 'white',
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          px: { xs: 2, md: 6 },
          pt: { xs: 4, md: 6 },
        }}
      >
        <Footer />
        <Box fontSize={12} sx={{ opacity: 0.8, zIndex: 1, textAlign: 'center' }} mt={1.6}>
          Copyright © 2025 楓曜科技股份有限公司 - FUNRoot Technology Co. 版權所有.
        </Box>
      </Box>
    </Box>
  );
}
