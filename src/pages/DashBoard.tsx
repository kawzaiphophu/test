import Box from '@mui/material/Box';
import BoxDashBoard from '../component/BoxDashBoard';
import ChartDashBoard from '../component/ChartDashBoard';
import Buttons from '../component/Button';
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
      <Buttons Text={"test"} Style={"contained"} Size={"large"} Color='primary'/>
      <Buttons Text={"test"} Style={"contained"} Size={"medium"} Color='secondary'/>
      <Buttons Text={"test"} Style={"text"} Size={"small"} Color='secondary'/>
      <Buttons Text={"test"} Style={"outlined"} Size={"small"} Color='primary'/>
      <Buttons Text={"test"} Style={"outlined"} Size={"medium"} Color='secondary'/>
      <Buttons Text={"test"} Style={"text"} Size={"large"} Color='primary'/>
    </div>
  );
}

export default DashBoard;
