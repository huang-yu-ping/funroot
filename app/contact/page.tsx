import Box from '@mui/material/Box';
import { PiPhoneCallThin } from 'react-icons/pi';
import { PiMailboxThin } from 'react-icons/pi';
import { PiMapPinLineThin } from 'react-icons/pi';

export default function ContactPage() {
  return (
    <Box width="100%" color="white" minHeight="100%" justifyContent="center">
      <Box sx={{ flex: 1 }}>
        <Box fontSize={72} fontWeight="bold">
          Contact Us.
        </Box>
        <Box component="span" color="#17d2eb" letterSpacing={4} fontSize={20}>
          聯絡我們
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          mt={4}
          justifyContent="space-between"
          minHeight="60%"
        >
          <Box display="flex" gap={2} alignItems="center">
            <Box color="#17d2eb">
              <PiPhoneCallThin fontSize={52} />
            </Box>
            <Box>
              <Box fontSize={20} mb={1} fontWeight="bold">
                PHONE NUMBER
              </Box>
              <Box fontSize={16}>+886 905 675 729 (黃小姐)</Box>
              <Box fontSize={16}>+886 912 364 264 (陳先生)</Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} alignItems="center">
            <Box color="#17d2eb">
              <PiMailboxThin fontSize={52} />
            </Box>
            <Box>
              <Box fontSize={20} mb={1}>
                EMAIL ADDRESS
              </Box>
              <Box fontSize={16}>yuping.funroot@gmail.com (黃小姐)</Box>
              <Box fontSize={16}>jaitech.jaychen@gmail.com (陳先生)</Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} alignItems="center">
            <Box color="#17d2eb">
              <PiMapPinLineThin fontSize={52} />
            </Box>
            <Box>
              <Box fontSize={20} mb={1}>
                ADDRESS
              </Box>
              <Box fontSize={16}>33742 桃園市大園區還區中路135號</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            // background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid #dfdfdf',
            background:
              'radial-gradient(circle at top right, #7a7a7a, #384344, #201F27, #201F27, #201F27)',
            padding: '30px',
            borderRadius: '12px',
            height: '100%',
            width: '100%',
            // boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
            opacity: 0.3,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
