import { Box } from '@mui/material';
import React from 'react';


interface BoxDashBoardProps {
  title: string;
  date: string;
  sum: number;
}

const BoxDashBoard: React.FC<BoxDashBoardProps> = ({ title, date, sum }) => {
  const formattedSum = sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        width: "33%",
        bgcolor: "white",
        borderRadius: 5
      }}>
        <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>{title}</Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>{date.toString()}</Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", fontSize: "1.2rem", fontWeight: "bold" }}>{formattedSum}</Box>
        </Box>
      </Box>
  );
}

export default BoxDashBoard;
