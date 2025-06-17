'use client';

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

const images = [
  '/assets/kan-all.png',
  '/assets/poyu-all.png',
  '/assets/house-all.png',
  '/assets/ycis-all.png',
  '/assets/hua-all.png',
];

export default function SimpleSlider() {
  const settings = {
    dots: true, // 底部圓點
    infinite: true, // 無限循環
    speed: 500, // 切換速度(ms)
    slidesToShow: 2, // 一次顯示幾張
    slidesToScroll: 1,
    autoplay: true, // 自動輪播
    autoplaySpeed: 2000, // 自動切換間隔(ms)
    centerMode: true, // 中間置中
    centerPadding: '10%',
  };

  return (
    <Box py={15} style={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <Box key={idx} px={6}>
            <img src={src} alt={`slide-${idx}`} style={{ width: '100%', borderRadius: 10 }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
