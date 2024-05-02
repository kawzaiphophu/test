import Box from '@mui/material/Box';
import BoxDashBoard from '../component/BoxDashBoard';
import ChartDashBoard from '../component/ChartDashBoard';

function DashBoard() {

  return (
    <div >
      <Box
        sx={{
          width: 'auto',
          mt: 7,
          p: 2,
          borderRadius: 5,
          bgcolor: "lightgrey"
        }}>
        <Box className="top-dashBoard" sx={{ display: "flex", justifyContent: "space-between" }}>
          <BoxDashBoard title="ยอดขายวันนี้" date="24-10-42" sum={20000} />
          <BoxDashBoard title="ยอดขายเดือนนี้" date="24-10-42" sum={300000} />
          <BoxDashBoard title="ยอดขายปีนี้" date="24-10-42" sum={4000000} />
        </Box>
        <Box className="top-dashBoard" sx={{ display: "flex", justifyContent: "space-between" }}>
        <ChartDashBoard/><ChartDashBoard/>
        </Box>

      </Box>
    </div>
  );
}

export default DashBoard;
