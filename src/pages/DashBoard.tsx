import Box from '@mui/material/Box';

import ChartDashBoard from '../component/ChartDashBoard';
import BoxdashBoard from '../component/BoxdashBoard';

export default function Dashboard() {

  return (
    <div >
      <Box
        sx={{
          width: 'auto',
          mt: 7,
          p: 2,
          borderRadius: 5,
        }}>
        <Box className="top-dashBoard"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <BoxdashBoard title="ยอดขายวันนี้" date="24-10-42" sum={20000} />
          <BoxdashBoard title="ยอดขายเดือนนี้" date="24-10-42" sum={300000} />
          <BoxdashBoard title="ยอดขายปีนี้" date="24-10-42" sum={4000000} />
        </Box>
        <Box className="top-dashBoard" sx={{ display: "flex", justifyContent: "space-between" }}>
          <ChartDashBoard /> <ChartDashBoard />
        </Box>

      </Box>
    </div>
  );
}


