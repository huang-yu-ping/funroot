'use client';

import { Box, Grid, Typography, Stack, Paper, Container } from '@mui/material';
import {
  FaComments,
  FaFileInvoiceDollar,
  FaPencilRuler,
  FaLaptopCode,
  FaRocket,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaComments size={28} color='#263e86' />,
    title: '需求溝通',
    desc: '了解您的需求，攜手打造專屬的數位解決方案',
  },
  {
    icon: <FaFileInvoiceDollar size={28} color='#263e86' />,
    title: '專業報價',
    desc: '依據需求討論結果，呈現完整報價與合作計畫',
  },
  {
    icon: <FaPencilRuler size={28} color='#263e86' />,
    title: '專案規劃',
    desc: '依據討論內容，量身訂製專屬的專業解決方案',
  },
  {
    icon: <FaLaptopCode size={28} color='#263e86' />,
    title: '開發執行',
    desc: '專業團隊將方案落實成具體產品，保障品質與效能',
  },
  {
    icon: <FaRocket size={28} color='#263e86' />,
    title: '產品上線',
    desc: '品質驗收後，協助產品上線，並持續提供後續支援',
  },
];

export default function FlowSteps() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ px: 4, py: 8, mt: 6 }}>
        <Box width="16%" margin="auto">
          <Box display="flex" height="6px" borderRadius="4px" overflow="hidden">
            <Box
              flex={2.5}
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
              flex={1}
              sx={{
                background: 'linear-gradient(135deg, #36365e, #29293b)',
                boxShadow: '0 0 8px #36365e',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: { xs: '2.6rem', md: '3.7rem' },
            fontWeight: 'light',
            letterSpacing: '0.2rem',
            mt: 1,
            mb: 4,
            color: '#363636',
            textAlign: 'center',
          }}
        >
          合作流程
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 2.4 }}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              sx={{
                '&:hover': {
                  // 父層 hover 時放大自己
                  // transform: 'scale(1.05)',
                  // boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  // zIndex: 10,

                  // 讓子 Box 也動起來
                  '& .iconBox': {
                    transform: 'rotate(10deg) scale(1.2)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  },

                  // 讓子 Paper 變色
                  '& .descPaper': {
                    backgroundColor: '#f0f4ff',
                  },
                },
              }}
            >
              <Stack alignItems="center" spacing={2}>
                <Box
                  className="iconBox"
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    // border: '2px solid #2a2a40',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // bgcolor: '#fff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      position: 'absolute',
                      top: -16,
                      right: -46,
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#2223275c',
                    }}
                  >
                    STEP {index + 1}.
                  </Typography>
                  {step.icon}
                </Box>
                <Paper
                  className="descPaper"
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="#29293b">
                    {step.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" mt={2}>
                    {step.desc}
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
