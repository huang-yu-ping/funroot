import { Box, Grid } from '@mui/material';

const cellSize = 100;
const columns = 6;
const rows = 1;

export default function Diamond() {
  const diamonds = [];
  const imageSizeX = columns * cellSize;
  const imageSizeY = rows * cellSize;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      diamonds.push(
        <Box
          key={`${x}-${y}`}
          sx={{
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            transform: 'rotate(45deg)',
            overflow: 'hidden',
            backgroundImage: 'url(/assets/water.jpg)',
            backgroundSize: `${imageSizeX}px ${imageSizeY}px`,
            backgroundPosition: `${-x * cellSize}px ${-y * cellSize}px`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      );
    }
  }

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: 5 }}
    >
      {diamonds.map((diamond, index) => (
        <Grid key={index}>{diamond}</Grid>
      ))}
    </Grid>
  );
}
