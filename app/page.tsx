'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FaIdeal } from 'react-icons/fa6';
// import FreeMap from '@/components/FreeMap';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { SiBmcsoftware } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import FreeMapWrapper from '@/components/FreeMapWrapper';
import Footer from '@/components/Footer';
import SimpleSlider from '@/components/Slider';
import Cooperation from '@/components/Cooperation';

// const FreeMap = dynamic(() => import('@/components/FreeMap'), {
//   ssr: false,
// });

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          background: `
            linear-gradient(145deg, #121220, #1c1c2e)
          `,
          color: 'white',
          borderRadius: '0 0 800px 0',
          pt: { xs: 10, md: 14 },
          pb: { xs: 7, md: 11 },
          height: 626,
          boxShadow: '30px 0px 0 #2bd4ee67',
          overflow: 'hidden',
        }}
      >
        {/* 背景圖片水平翻轉層 */}
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, top: 0 }}>
          {/* 背景圖層 */}
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

          {/* 遮罩層：由下往上漸變透明 */}
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
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
            mt: '30px',
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
              data-aos="fade-up"
              data-aos-delay="0"
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
              data-aos="fade-up"
              data-aos-delay="150"
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
              系統設計 × 軟硬整合，打造專屬智慧方案
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
              楓曜是一家設計與開發並重的網站公司，融合技術實力與實務經驗，打造兼具美感與效能的網頁系統，並提供軟硬體整合服務，協助企業推動品牌行銷與數位轉型
            </Box>
          </Box>

          {/* 右側圖片 */}
          <Box
            sx={{
              flex: 0.8,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              pt: 3,
            }}
            data-aos="zoom-in"
            data-aos-delay="500"
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
              src="/assets/header-bg2.png"
              alt="header-bg"
              sx={{
                display: isMobile ? 'none' : 'block',
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
      <Box mt={67} position="relative">
        <Container maxWidth="lg">
          {/* 第一列 */}
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mb={2}>
            {/* 左側主背景塊 */}
            <Box
              data-aos="fade-up"
              data-aos-delay={0}
              sx={{
                background: '#29293b',
                width: { xs: '100%', md: 500 },
                height: { xs: 'auto', md: 400 },
                minHeight: { xs: 300, md: 400 },
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                p: 4,
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={4}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <FaIdeal fontSize={32} />
                </Box>

                <Typography variant="h4" fontWeight={700}>
                  讓創意實現
                </Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom>
                我們致力於將前瞻性的想法轉化為可執行的成果
              </Typography>
              <Typography variant="body1">
                結合技術實力與市場洞察，打造具影響力的數位產品與服務。
                無論是新創構想還是企業轉型，我們都是您值得信賴的夥伴。
              </Typography>
            </Box>

            {/* 右側區塊 */}
            <Box
              data-aos="fade-left"
              data-aos-delay={200}
              flex={1}
              sx={{
                position: { xs: 'static', md: 'relative' },
                minHeight: { xs: 200, md: 400 },
              }}
            >
              {/* FreeMap - 小螢幕改為靜態顯示 */}
              <Box
                sx={{
                  position: { xs: 'static', md: 'absolute' },
                  bottom: { md: 0 },
                  left: { md: 0 },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <FreeMapWrapper />
              </Box>

              {/* 右上角的文字區塊 */}
              <Box
                sx={{
                  position: { xs: 'static', md: 'absolute' },
                  top: { md: 80 },
                  right: { md: 0 },
                  maxWidth: 360,
                  width: { xs: '100%', sm: '80%', md: '100%' },
                  p: 3,
                  borderRadius: 2,
                  // bgcolor: 'white',
                  textAlign: 'right',
                  boxShadow: { xs: 1, md: 0 },
                }}
              >
                <Box display="flex" justifyContent="end" mb={1}>
                  <Box display="flex" height="6px" width="80%" borderRadius="4px" overflow="hidden">
                    <Box
                      flex={1}
                      sx={{
                        background: 'linear-gradient(135deg, #29293b, #36365e, #2bd3ee10)',
                        boxShadow: '0 0 6px #444c',
                      }}
                    />
                    <Box
                      flex={1}
                      sx={{
                        background: 'linear-gradient(135deg, #2bd3ee, #42f8ff)',
                        boxShadow: '0 0 14px #2bd3ee',
                      }}
                    />
                    <Box
                      flex={2.5}
                      sx={{
                        background: 'linear-gradient(135deg, #36365e, #29293b)',
                        boxShadow: '0 0 8px #36365e',
                      }}
                    />
                  </Box>
                </Box>
                <Button
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                      boxShadow: '0px 6px 8px rgba(0,0,0,0.3)',
                    },
                    fontSize: 16,
                    mb: 3,
                  }}
                >
                  聯絡我們
                </Button>

                <Typography sx={{ mb: 1 }}>有個好點子想實現嗎？</Typography>
                <Typography>聯絡我們，一起開始動手做吧！</Typography>
              </Box>
            </Box>
          </Box>

          {/* 第二列 */}
          <Box
            data-aos="fade-right"
            data-aos-delay={0}
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
                      mt: 2.5,
                      color: '#363636',
                    }}
                  >
                    <Box display="flex" justifyContent="end" mb={1}>
                      <Box
                        display="flex"
                        height="6px"
                        width="80%"
                        borderRadius="4px"
                        overflow="hidden"
                      >
                        <Box
                          flex={1}
                          sx={{
                            background: 'linear-gradient(135deg, #29293b, #36365e, #2bd3ee10)',
                            boxShadow: '0 0 6px #444c',
                          }}
                        />
                        <Box
                          flex={1}
                          sx={{
                            background: 'linear-gradient(135deg, #2bd3ee, #42f8ff)',
                            boxShadow: '0 0 14px #2bd3ee',
                          }}
                        />
                        <Box
                          flex={2.5}
                          sx={{
                            background: 'linear-gradient(135deg, #36365e, #29293b)',
                            boxShadow: '0 0 8px #36365e',
                          }}
                        />
                      </Box>
                    </Box>
                    楓曜服務
                  </Box>
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 900,
                    letterSpacing: '0.3rem',
                    color: '#121220', // 呼應亮點藍
                  }}
                >
                  SERVICES
                </Box>
              </Box>
            </Box>

            {/* 第二列右邊兩塊 */}
            <Box
              data-aos="fade-up"
              data-aos-delay={100}
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              p={4}
              sx={{
                height: 300,
                // background: 'linear-gradient(to bottom left, #05319a, #e05171)',
                background: '#36365e',
                color: 'white',
              }}
            >
              <Box display="flex" alignItems="center" mb={3}>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <MdDesignServices fontSize={28} color="#ffffff" />
                </Box>
                <Typography variant="h5" fontWeight={700}>
                  UI/UX 設計
                </Typography>
              </Box>
              <Typography variant="subtitle2" gutterBottom>
                以使用者為核心的介面體驗
              </Typography>
              <Typography variant="body2">
                將設計美感與操作邏輯融合，打造直覺且易用的介面。從資訊架構、視覺呈現到互動細節，全面提升使用者體驗與產品價值。
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
                // background: 'linear-gradient(to top left, #31c9ce, #3e2c96)',
                // background: 'linear-gradient(to top left, #90e2f5, #8356c5)',
                // background: 'linear-gradient(to top left, #36365e, #90e2f5)',
                background: '#29293b',
                color: 'white',
              }}
            >
              <Box display="flex" alignItems="center" mb={3}>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <SiBmcsoftware fontSize={28} />
                </Box>
                <Typography variant="h5" fontWeight={700}>
                  軟體開發服務
                </Typography>
              </Box>
              <Typography variant="subtitle2" gutterBottom>
                穩定可靠的系統架構
              </Typography>
              <Typography variant="body2">
                彈性的設計賦予開發更大的自由度；嚴謹的程式碼規範確保品質一致。打造穩定、可擴展的系統，是我們對未來的承諾。
              </Typography>
            </Box>
          </Box>

          {/* 第三列 */}
          <Box
            data-aos="fade-right"
            data-aos-delay={0}
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={1}
            mt={1}
          >
            {/* 左側主背景塊 */}
            <Box
              sx={{
                background: 'linear-gradient(to top left, #90e2f5, #8356c5)',
                // background: '#29293b',
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
                交付不是結束，而是開始
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                不只完成專案，我們也在你身邊陪你一起成長。
              </Typography>
              <Typography variant="body2">
                不只是做出來，更要讓它持續發揮價值。從培訓到維護，我們提供一站式支援，讓平台走得更遠、更穩。
              </Typography>
            </Box>

            {/* 右側自適應塊 */}
            <Box
              data-aos="fade-left"
              data-aos-delay={100}
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
                  // background: '#21213a',
                  // background:
                  // 'linear-gradient(to bottom right, #e666a3 0%, #e666a3 70%, #fdfdbc 100%)',
                  background: '#36365e',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  p: 4,
                  color: 'white',
                }}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  從零開始架構，實現每一個想法
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  快速、安全、可擴展
                </Typography>
                <Typography variant="body2">
                  我們協助客戶從最初的想法出發，將創意轉化為具體可行的產品。從需求訪談、流程設計到技術選型與開發落實，陪伴客戶一步步構築理想中的系統架構。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container
          maxWidth={false}
          disableGutters
          // sx={{ background: 'linear-gradient(145deg, #f9f9f9 0%, #f0f4f8 50%, #dfe6ed 100%)' }}
        >
          <Cooperation />
        </Container>
        <Container maxWidth={false} disableGutters>
          <SimpleSlider />
        </Container>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(-145deg, #1e2a35, #2a3b4f)', // 更亮的藍灰色調
          //  background: 'linear-gradient(145deg, #121220, #1c1c2e)',
          color: 'white',
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          // borderRadius: '800px 0 0 0',
          // boxShadow: '-30px 0px 0 #2bd4ee55', // 淡一點的光感
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* 微光點綴：可選 */}
        {/* <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '20%',
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, #90e2f555 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        /> */}
        <Footer />
      </Box>
    </>
  );
}
