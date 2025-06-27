import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

export default function HeroSection() {
  const theme = useTheme();
  // 使用 MUI breakpoint 判斷是否小螢幕 (xs, sm)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLGMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* 背景區塊，含圓角 */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 600,
          background: 'linear-gradient(145deg, #121220, #1c1c2e)',
          color: 'white',
          borderRadius: '0 0 800px 0',
          overflow: 'hidden',
        }}
      >
        {/* 背景圖片層（水平翻轉 + 遮罩） */}
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, zIndex: 0 }}>
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: "url('/assets/mountain.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center -10px',
              transform: 'scaleX(-1)',
              backgroundBlendMode: 'multiply',
              filter: 'grayscale(100%) brightness(15%)',
              opacity: 0.8,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: `
                linear-gradient(to bottom, rgba(18, 18, 32, 0.8) 20%, transparent 70%),
                linear-gradient(to top, rgba(18, 18, 32, 0.8) 20%, transparent 40%), 
                linear-gradient(to left, rgba(18, 18, 32, 0.8) 20%, transparent 60%)`,
              zIndex: 1,
            }}
          />
        </Box>

        {/* 中間 Container 文字區 */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
            pt: { xs: 10, md: 14 },
            pb: { xs: 7, md: 11 },
          }}
        >
          {/* 左側文字 */}
          <Box
            sx={{
              mt: 1,
              flex: { xs: '1 1 100%', md: '0 0 50%' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              data-aos="fade-up"
              data-aos-delay="0"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              YOUR VISION, OUR INNOVATION.
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay="150"
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                color: '#cccccc',
                mb: 3,
              }}
            >
              系統設計 × 智慧應用開發
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay="300"
              borderLeft="5px solid #2bd3ee"
              pl={2}
              fontSize={16}
              sx={{
                color: '#dddddd',
                lineHeight: 1.6,
                maxWidth: 500,
                margin: { xs: '0 auto', md: 0 },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              楓曜是一家設計與開發並重的網站公司，專注於融合設計思維與技術實力，打造高品質網站系統，並透過整合策略與技術應用，助力企業品牌行銷與數位轉型布局
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ✅ 圖片浮層：放在背景圓角之外、上層顯示 */}
      <Box
        sx={{
          display: isMobile ? 'none' : 'block',
          position: 'absolute',
          top: '112px',
          // padding-top: 112px;
          left: '55%',
          // bottom: 0,
          // right: { xs: '-5%', sm: '0%', md: '5%' }, // 小螢幕可微微靠右
          zIndex: 3,
          width: '28%',
          minWidth: isLGMobile ? '400px' : '500px',
          maxWidth: 600,
          pointerEvents: 'none',
        }}
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        {/* 背後發光層 */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: 600,
            background: 'radial-gradient(circle, rgba(43, 211, 238, 0.6) 0%, transparent 70%)',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            filter: 'blur(40px)',
          }}
        />
        {/* 主圖片 */}
        <Box
          component="img"
          src="/assets/header-bg2.png"
          alt="header-bg"
          sx={{
            width: '100%',
            height: 'auto',
            zIndex: 1,
            position: 'relative',
          }}
        />
      </Box>
    </Box>
  );
}
