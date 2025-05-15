'use client';

import { AppBar, Toolbar, CardMedia, Button, Box } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useRouter } from 'next/navigation';

const headerStyles = {
  appBar: {
    width: 100, // 側邊欄寬度
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 4,
    background: '#201F27',
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    padding: 0,
    minHeight: 'unset', // 移除預設高度
  },
};

function Header() {
  const router = useRouter();
  const goToContact = () => {
    router.push('/contact');
  };
  return (
    <AppBar position="sticky" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <CardMedia
          component="img"
          src="/assets/logo-white-verticle.png"
          alt="公司 Logo"
          sx={{ objectFit: 'contain', height: 200 }}
        />
      </Toolbar>
      <Box>
        <Button
          onClick={goToContact}
          color="primary"
          variant="outlined"
          sx={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: 16,
            fontWeight: 'light',
            letterSpacing: '0.3em',
            width: 40,
            minWidth: 'unset',
            py: 2,
            px: 3,
            lineHeight: 1.2,
          }}
        >
          <LocalPhoneOutlinedIcon sx={{ mb: 1 }} />
          我要做網站
        </Button>
      </Box>
    </AppBar>
  );
}

export default Header;
