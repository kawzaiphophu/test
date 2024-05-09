import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles'; 

interface BoxDashBoardProps {
  title: string;
  date: string;
  sum: number;
}

const BoxdashBoard: React.FC<BoxDashBoardProps> = ({ title, date, sum }) => {
  const theme = useTheme(); 
  const formattedSum = sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        width: "33%",
        bgcolor:theme.palette.primary.main, 
        borderRadius: 5,
        color: theme.palette.primary.contrastText 
      }}
    >
      <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>{title}</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>{date.toString()}</Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", fontSize: "1.2rem", fontWeight: "bold" }}>{formattedSum}</Box>
      </Box>
    </Box>
  );
}

export default BoxdashBoard;
