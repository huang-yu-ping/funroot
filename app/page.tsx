'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FaIdeal } from 'react-icons/fa6';
// import FreeMap from '@/components/FreeMap';
import { Button } from '@mui/material';
import { SiBmcsoftware } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import FreeMapWrapper from '@/components/FreeMapWrapper';
import Footer from '@/components/Footer';

// const FreeMap = dynamic(() => import('@/components/FreeMap'), {
//   ssr: false,
// });

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
          borderRadius: '0 0 800px 0',
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
              系統設計 × 軟硬整合，打造專屬智慧方案
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
              楓曜是一家設計與開發並重的網站公司，融合技術實力與實務經驗，打造兼具美感與效能的網頁系統，並提供軟硬體整合服務，協助企業推動品牌行銷與數位轉型
            </Box>
          </Box>

          {/* 右側圖片 */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              pt: 2,
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
              src="/assets/header-bg2.png"
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
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mb={2}>
            {/* 左側主背景塊 */}
            <Box
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
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    boxShadow: '0 0 6px rgba(0, 255, 255, 0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 12px rgba(0, 255, 255, 0.4)',
                    },
                  }}
                >
                  <FaIdeal fontSize={32} color="#00f0ff" />
                </Box>

                <Typography variant="h4" fontWeight={700}>
                  讓
                  <Box component="span" ml={0.5}>
                    創意
                  </Box>
                  實現
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
                  了解更多
                </Button>

                <Typography sx={{ mb: 1 }}>了解我們的服務據點</Typography>
                <Typography>方便您快速找到所需協助</Typography>
              </Box>
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
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(190, 120, 255, 0.418)', // 微霓虹藍邊框
                    boxShadow: '0 0 10px rgba(212, 120, 255, 0.1)', // 柔和科技感光暈
                    mr: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 16px rgba(212, 120, 255, 0.25)',
                    },
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
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    boxShadow: '0 0 6px rgba(0, 255, 255, 0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 12px rgba(0, 255, 255, 0.4)',
                    },
                    mr: 2,
                  }}
                >
                  <SiBmcsoftware fontSize={28} color="#00f0ff" />
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
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1} mt={1}>
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
                  // background: '#21213a',
                  // background:
                  // 'linear-gradient(to bottom right, #e666a3 0%, #e666a3 70%, #fdfdbc 100%)',
                  background: '#36365e',
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
        <Box fontSize={12} sx={{ opacity: 0.8, zIndex: 1, textAlign: 'center' }} mt={1.6}>
          Copyright © 2025 楓曜科技股份有限公司 - FUNRoot Technology Co. 版權所有.
        </Box>
      </Box>
    </>
  );
}
