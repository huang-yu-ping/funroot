import { createTheme } from '@mui/material/styles'; // 使用 @mui/material/styles 来创建主题

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // 自定义主色
    },
    secondary: {
      main: '#ff4081', // 自定义次色
    },
  },
});

export default theme;
