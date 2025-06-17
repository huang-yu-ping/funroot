'use client';

import Footer from '@/components/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function ConsultationPage() {
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
              從對話開始
            </Typography>
            <Typography
              variant="subtitle1"
              fontStyle="italic"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              「與我們聯繫，打造你的專屬方案」
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={30} position="relative" height={3100}>
        <Container maxWidth="lg">
          <Box
            component="iframe"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfnNqtiIeDAkHTbznya63aiOq6Pbin3T1HeTVCwhJpBqNegBg/viewform?embedded=true"
            width="100%"
            height="3100px"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            載入中…
          </Box>
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
