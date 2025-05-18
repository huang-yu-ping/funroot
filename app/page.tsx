'use client';

import FreeMap from '@/components/FreeMap';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          background: 'linear-gradient(145deg, #121220, #1c1c2e)',
          color: 'white',
          borderRadius: '0 0 800px 200px',
          pt: { xs: 10, md: 14 },
          pb: { xs: 7, md: 11 },
          height: 626,
          boxShadow: '30px 0px 0 #2bd4ee67',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* 左側文字內容 */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3.5rem',
                },
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              YOUR VISION, OUR INNOVATION.
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: '1.2rem',
                  sm: '1.4rem',
                  md: '1.6rem',
                },
                color: '#cccccc',
                mb: 3,
              }}
            >
              你的想像，我們的創新！
            </Box>
            <Box
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
              夏木樂是"設計"與"開發"並重的網站公司 以堅實的技術實力，替您打造優質的網站系統Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s...
            </Box>
          </Box>

          {/* 右側圖片 */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* 背後發光層 */}
            <Box
              sx={{
                position: 'absolute',
                width: { xs: '100%', sm: '80%', md: '100%' },
                height: 600,
                background: 'radial-gradient(circle, rgba(43, 211, 238, 0.6) 0%, transparent 70%)',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />
            <Box
              component="img"
              src="/assets/header-bg.png"
              alt="header-bg"
              sx={{
                width: { xs: '100%', sm: '80%', md: '100%' },
                maxWidth: 600,
                height: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>
        </Container>
      </Box>
      <Box mt={62} position="relative">
        <Container maxWidth="lg">
          {/* 第一列 */}
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1} mb={1}>
            {/* 左側主背景塊 */}
            <Box
              sx={{
                background: '#36365e', // 主色
                // background: 'linear-gradient(145deg, #121220, #2a2a44)', // 主色
                width: { xs: '100%', md: 500 },
                height: 400,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                p: 4,
              }}
            >
              <Typography variant="h4" fontWeight={700} gutterBottom>
                讓
                <Box component="span" color="#2bd3ee">
                  創意
                </Box>
                實現
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                我們致力於將前瞻性的想法轉化為可執行的成果
              </Typography>
              <Typography variant="body1">
                結合技術實力與市場洞察，打造具影響力的數位產品與服務。
                無論是新創構想還是企業轉型，我們都是您值得信賴的夥伴。
              </Typography>
            </Box>

            {/* 右側次主色區塊 */}
            <Box
              flex={1}
              sx={{
                // color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'end',
                // p: 4,
              }}
            >
              <FreeMap />
              {/* <Typography variant="h4" fontWeight={700} gutterBottom>
                Digital Excellence
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                We Code the Future
              </Typography>
              <Typography variant="body1">
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </Typography> */}
            </Box>
          </Box>

          {/* 第二列 */}
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={1}
            alignItems="flex-start"
          >
            {/* 左邊文字區 */}
            <Box
              sx={{
                width: { xs: '100%', md: 500 },
                height: 300,
                pl: { xs: 4, md: 16 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: '#263e86',
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              {/* O UR SERVICES */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  lineHeight: 1,
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Box
                      sx={{
                        fontSize: { xs: '3rem', md: '4rem' },
                        fontWeight: 900,
                        letterSpacing: '0.2rem',
                        mb: 0.5,
                      }}
                    >
                      O
                    </Box>
                    <Box
                      sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 700,
                        letterSpacing: '0.2rem',
                        mb: 0.5,
                      }}
                    >
                      UR
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      fontSize: { xs: '2.6rem', md: '3.7rem' },
                      fontWeight: 'light',
                      letterSpacing: '0.2rem',
                      mt: 4.5,
                      color: '#363636',
                    }}
                  >
                    楓曜服務
                  </Box>
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 900,
                    letterSpacing: '0.3rem',
                    color: '#2bd3ee', // 呼應亮點藍
                  }}
                >
                  SERVICES
                </Box>
              </Box>
            </Box>

            {/* 第二列右邊兩塊 */}
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              p={4}
              sx={{
                height: 300,
                background: 'linear-gradient(to bottom left, #05319a, #e05171)',
                color: 'white',
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Strategic Design
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Purpose-Driven User Experience
              </Typography>
              <Typography variant="body2">
                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              </Typography>
            </Box>
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              p={4}
              sx={{
                height: 300,
                background: 'linear-gradient(to top left, #31c9ce, #4520fe)',
                color: 'white',
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Scalable Development
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Robust and Reliable Code
              </Typography>
              <Typography variant="body2">
                Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
                Pellentesque nibh. Aenean quam.
              </Typography>
            </Box>
          </Box>

          {/* 第三列 */}
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1} mt={1}>
            {/* 左側主背景塊 */}
            <Box
              sx={{
                background: 'linear-gradient(to top left, #90e2f5, #8356c5)',
                width: { xs: '100%', md: 500 },
                height: 400,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                p: 4,
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                UI/UX Craftsmanship
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Elegant Interfaces That Convert
              </Typography>
              <Typography variant="body2">
                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                ligula vel nunc egestas porttitor.
              </Typography>
            </Box>

            {/* 右側自適應塊 */}
            <Box
              flex={1}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 700,
                flexDirection: 'column',
              }}
            >
              <Box height="20%"></Box>
              <Box
                height="80%"
                sx={{
                  width: '100%',
                  background:
                    'linear-gradient(to bottom right, #e666a3 0%, #e666a3 70%, #fdfdbc 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  p: 4,
                }}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Performance Optimized
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Fast, Secure, and Scalable
                </Typography>
                <Typography variant="body2">
                  Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec,
                  blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Box p={10}>
            Why do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(145deg, #9666de 0%, #1c1c2e 70%, #1c1c2e)',
          color: 'white',
          borderRadius: '800px 0 0 0',
          pt: { xs: 10, md: 14 },
          pb: { xs: 7, md: 11 },
          height: 326,
          boxShadow: '-30px 0px 0 #2bd4ee67',
        }}
      ></Box>
    </>
  );
}
