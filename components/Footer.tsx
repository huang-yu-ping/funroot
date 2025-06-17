import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaLine } from 'react-icons/fa';
import LineQRCodeDialog from './Qrcode';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        color: 'white',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Grid container spacing={20}>
        {/* Logo區 */}
        <Grid size={{ xs: 12, md: 4 }}>
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
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              whiteSpace: 'nowrap',
              lineHeight: 1.8,
            }}
          >
            網頁設計｜網站建置｜系統規劃
            <br />
            企業輔導顧問｜數位轉型
          </Typography>
        </Grid>

        {/* 聯絡我們區 */}
        <Grid size={{ xs: 12, md: 4 }} mt={1.2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom mb={2}>
            聯絡我們
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: 'nowrap', lineHeight: 1.8 }}>
            Email｜yuping.funroot@gmail.com
            <br />
            <span style={{ visibility: 'hidden' }}>Email</span>｜jaitech.jaychen@gmail.com
            <br />
            Address｜33742桃園市大園區135號
          </Typography>
        </Grid>

        {/* 社群平台 */}
        <Grid
          size={{ xs: 12, md: 4 }}
          mt={1.2}
          display="flex"
          flexDirection="column"
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems="center"
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom mb={2}>
            社群平台
          </Typography>
          <LineQRCodeDialog />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
