'use client';

import { AppBar, Toolbar, CardMedia, Button, Box } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const headerStyles = {
  appBar: {
    background: 'transparent',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: 6,
    px: 1,
    py: 1,
    top: '12px',
    mt: 2,
    width: '88%',
    justifyContent: 'center',
    mx: 'auto',
  },
  toolbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    objectFit: 'contain',
    width: '200px',
  },
  button: {
    fontSize: 18,
    letterSpacing: '0.3em',
    py: 1,
    px: 2,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 3,
    backgroundColor: 'rgba(122, 122, 122, 0.08)',
    backdropFilter: 'blur(5px)',
    '&:hover': {
      backgroundColor: 'rgba(197, 197, 197, 0.15)',
    },
  },
};

function Header() {
  const router = useRouter();

  const goToContact = () => {
    router.push('/contact');
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        ...headerStyles.appBar,
        background: scrolled
          ? 'linear-gradient(180deg, rgba(32,31,39,0.6), rgba(26,25,34,0.6))'
          : 'transparent',
        border: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        // transition: 'background 0.8s ease, border 0.8s ease',
      }}
      elevation={0}
    >
      <Toolbar sx={headerStyles.toolbar}>
        <CardMedia
          component="img"
          src="/assets/logo-ho-white.png"
          alt="公司 Logo"
          sx={headerStyles.logo}
        />
        <Button onClick={goToContact} color="inherit" variant="outlined" sx={headerStyles.button}>
          <LocalPhoneOutlinedIcon />
          我要做網站
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
