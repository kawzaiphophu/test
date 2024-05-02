import React, { useState } from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';
import { SelectChangeEvent } from '@mui/material/Select';

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

const DashboardChart: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [chartData, setChartData] = useState(generateRandomData());

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedYear(event.target.value);
    setChartData(generateRandomData());
  };

  return (
    <Box sx={{margin: 2,bgcolor:"white"}}>
      <Box 
      sx={{ display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      margin: 2,
      padding:2 }}>
        <h4>ยอดขายรวม {selectedYear}</h4>
        <Select value={selectedYear} onChange={handleChange}>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
        </Select>
      </Box>
      <VictoryChart
        domainPadding={20}
        width={700}
        height={300}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
          style={{
            axisLabel: { padding: 30 }
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axisLabel: { padding: 50 }
          }}
        />
        <VictoryBar
          data={chartData}
          x="month"
          y="sales"
          barWidth={20}
          labels={({ datum }) => `$${datum.sales}`}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </Box>
  );
}

export default DashboardChart;