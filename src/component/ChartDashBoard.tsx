import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';


const generateRandomData = () => {
  const data = [];
  const min = 400000;
  const max = 1000000;

  for (let i = 1; i <= 12; i++) {
    const sales = Math.floor(Math.random() * (max - min + 1)) + min;
    data.push({ month: i, sales });
  }

  return data;
};

const valueFormatter = (value: number | null) => `${value}$`;

export default function BarsDataset() {
  const theme = useTheme();
  const [dataset, setDataset] = React.useState(generateRandomData());

  const chartSetting = {
    height: 400,
    sx: {
      '& .MuiChartBar-root': {
        fill: theme.palette.text.primary,
      },
      p: 2,
      width: '100%', 
    },
  };

  return (
    <Box 
      sx={{
        m:1,
        p: 2,
        width: "100%",
        bgcolor: theme.palette.primary.main, 
        borderRadius: 5,
        color: theme.palette.primary.contrastText 
      }}
    >
      <Typography variant="h6" gutterBottom>
        Monthly Sales
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[{ dataKey: 'sales', valueFormatter ,color:theme.palette.text.primary}]}
        {...chartSetting}
      />
    </Box>
  );
}
