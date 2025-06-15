import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';
import { FaLine } from 'react-icons/fa';

export default function LineQRCodeDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lineQRCodeUrl = '/assets/iqrcode.jpg';

  return (
    <>
      <Typography variant="body2">
        <FaLine fontSize={40} style={{ cursor: 'pointer' }} onClick={handleOpen} />
      </Typography>
      <Typography variant="body2">加入 LINE</Typography>
      {/* <Button variant="contained" color="primary">
        加入我的 LINE
      </Button> */}

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>加入我的 LINE</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
        >
          <img src={lineQRCodeUrl} alt="LINE QR Code" style={{ width: 200, height: 200 }} />
          <Typography variant="body1" align="center">
            用 LINE 掃描 QR Code 加我好友
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
