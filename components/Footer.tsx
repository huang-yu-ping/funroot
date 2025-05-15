import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2025 My MUI Next App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;