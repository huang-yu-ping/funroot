'use client';

import Footer from '@/components/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FreeMapWrapper2 from '@/components/FreeMapWrapper2';

export default function ContactPage() {
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
              準備好開始了嗎？
            </Typography>
            <Typography
              variant="subtitle1"
              fontStyle="italic"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              「歡迎與我們聯繫，一起實現下一個目標」
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={38} position="relative">
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              {/* 地圖 */}
              <Grid size={{ xs: 12, md: 8 }}>
                <FreeMapWrapper2 />
              </Grid>

              {/* 聯絡資訊 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Grid
                  container
                  direction="column-reverse"
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {[
                    {
                      icon: <FiMapPin size={30} color="#263e86" />,
                      title: '地址',
                      description: ['33742 桃園市大園區135號'],
                      // bg: 'linear-gradient(145deg, #fefcea, #f1da36)',
                    },
                    {
                      icon: <FiMail size={30} color="#263e86" />,
                      title: '電子郵件',
                      description: ['yuping.funroot@gmail.com', 'jaitech.jaychen@msa.hinet.net'],
                      // bg: 'linear-gradient(145deg, #fbd3e9, #bb377d)',
                    },
                    {
                      icon: <FiPhone size={30} color="#263e86" />,
                      title: '連絡電話',
                      description: ['+886 905 675 729', '+886 912 364 264'],
                      // bg: 'linear-gradient(145deg, #6ea8fe, #a1c4fd)',
                    },
                    {
                      icon: <FiClock size={30} color="#263e86" />,
                      title: '營業時間',
                      description: ['週一至週五：09:00 - 18:00', '週六日休息'],
                      // bg: 'linear-gradient(145deg, #b9f6ca, #69f0ae)',
                    },
                  ].map((item, index) => (
                    <Grid key={index}>
                      <Card
                        elevation={0}
                        sx={{
                          width: 260,
                          textAlign: 'center',
                          backgroundColor: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover .iconBox': {
                            transform: 'rotate(10deg) scale(1.2)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                          },
                          '&:hover': {
                            backgroundColor: '#e0ebff',
                          },
                        }}
                      >
                        <CardContent>
                          <Box
                            className="iconBox"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 64,
                              height: 64,
                              mx: 'auto',
                              borderRadius: '50%',
                              backgroundColor: '#ffffff',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                              transition: 'transform 0.3s ease',
                              mb: 1,
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography variant="h6" fontWeight="bold" color="#29293b" gutterBottom>
                            {item.title}
                          </Typography>
                          {item.description.map((line, i) => (
                            <Typography key={i} variant="body2" color="text.secondary">
                              {line}
                            </Typography>
                          ))}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
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
      </Box>
    </Box>
  );
}
