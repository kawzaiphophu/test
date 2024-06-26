import Box from '@mui/material/Box';

import ChartDashBoard from '../components/Dashboard/ChartDashBoard';
import BoxdashBoard from '../components/Dashboard/BoxDashboard';

export default function Dashboard() {

  return (
    <div >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <BoxdashBoard title="ยอดขายวันนี้" date="24-10-42" sum={20000} />
          <BoxdashBoard title="ยอดขายเดือนนี้" date="24-10-42" sum={300000} />
          <BoxdashBoard title="ยอดขายปีนี้" date="24-10-42" sum={4000000} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ChartDashBoard /> <ChartDashBoard />
        </Box>

      </Box>
    </div>
  );
}


