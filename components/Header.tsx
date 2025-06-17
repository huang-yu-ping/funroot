'use client';

import {
  AppBar,
  Toolbar,
  CardMedia,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FaComments } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi'; // 漢堡選單圖示，需先安裝 react-icons
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
  navBox: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
  },
  navButton: {
    fontSize: 16,
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
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
  const theme = useTheme();
  // 使用 MUI breakpoint 判斷是否小螢幕 (xs, sm)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const goToContact = () => {
    router.push('/consultation');
  };

  const navItems = [
    { label: '關於我們', path: '/' },
    { label: '服務項目', path: '/services' },
    { label: '聯絡我們', path: '/contact' },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          ...headerStyles.appBar,
          background: scrolled
            ? 'linear-gradient(180deg, rgba(32,31,39,0.6), rgba(26,25,34,0.6))'
            : 'transparent',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'background 0.8s ease, border 0.8s ease',
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

          {isMobile ? (
            // 手機版：漢堡選單 + 免費諮詢按鈕
            <Box display="flex" alignItems="center" gap={2}>
              <Button
                onClick={goToContact}
                color="inherit"
                variant="outlined"
                sx={headerStyles.button}
              >
                <FaComments size={24} style={{ marginRight: '4px' }} />
                免費諮詢
              </Button>

              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                size="large"
              >
                <HiOutlineMenu color='white' />
              </IconButton>
            </Box>
          ) : (
            // 桌面版：水平按鈕列 + 免費諮詢按鈕
            <Box display="flex" alignContent="center" gap={4}>
              <Box sx={headerStyles.navBox}>
                {navItems.map(({ label, path }) => (
                  <Button
                    key={label}
                    color="inherit"
                    sx={headerStyles.navButton}
                    onClick={() => router.push(path)}
                  >
                    {label}
                  </Button>
                ))}
              </Box>

              <Button
                onClick={goToContact}
                color="inherit"
                variant="outlined"
                sx={headerStyles.button}
              >
                <FaComments size={24} style={{ marginRight: '4px' }} />
                免費諮詢
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer 漢堡選單內容 */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map(({ label, path }) => (
              <ListItemButton
                key={label}
                onClick={() => {
                  router.push(path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
