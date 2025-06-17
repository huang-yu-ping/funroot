'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, CardMedia } from '@mui/material';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    // 先初始化動畫，再等待結束過場
    const timer = setTimeout(() => {
      setShowOverlay(false);
      AOS.refresh();
    }, 1500); // 動畫結束時間

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 遮罩動畫 */}
      {showOverlay && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(145deg, #121220, #1c1c2e)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 0.4,
            color: 'white',
            letterSpacing: '0.25em',
            fontSize: '1.6rem',
            animation: 'fadeOutOverlay 1s ease 0.6s forwards',
          }}
        >
          <Box display="flex" gap={2}>
            <CardMedia
              component="img"
              src="/assets/logo-ho-white.png"
              alt="公司 Logo"
              sx={{
                height: 50,
                objectFit: 'contain',
                width: '200px',
                mb: 1,
              }}
            />
            <Box mt={1}>楓曜科技</Box>
          </Box>
          <Box fontSize={12} fontWeight="light">
            YOUR VISION, OUR INNOVATION.
          </Box>
        </Box>
      )}

      {/* 頁面內容 */}
      {children}

      {/* 全域動畫 CSS */}
      <style jsx global>{`
        @keyframes fadeOutOverlay {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
}
