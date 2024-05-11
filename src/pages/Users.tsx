import { Box } from '@mui/material'
import CustomButton from '@components/Button/CustomButton';
import CustomInput from '@components/input/CustomInput';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function Users() {
  const theme = useTheme();

  function createData(
    id: number,
    img: string,
    name: string,
    gender: string,
    email: string,
    phone: string,
    shopName: string,
    amount: number,

  ) {
    return { id, img, name, gender, email, phone, shopName, amount };
  }

  const rows = [
    createData(1, 'https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151241135.jpg?size=626&ext=jpg', 'test 1', 'male', 'test@gmail.com', '0232530464', 'testshop', 2000,),
    createData(1, 'https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151241135.jpg?size=626&ext=jpg', 'test 1', 'male', 'test@gmail.com', '0232530464', 'testshop', 2000,),
    createData(1, 'https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151241135.jpg?size=626&ext=jpg', 'test 1', 'male', 'test@gmail.com', '0232530464', 'testshop', 2000,),
    createData(1, 'https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151241135.jpg?size=626&ext=jpg', 'test 1', 'male', 'test@gmail.com', '0232530464', 'testshop', 2000,),
  ];

  return (
    <Box
      sx={{
        width: 'auto',
        mt: 7,
        ml: 1,
        p: 4,
        borderRadius: 3,
        bgcolor: theme.palette.primary.main,
      }}>
      <Box sx={{
        display: "flex",
        fontWeight: 600,
        color: '#F37F3D',
        borderRadius: 2
      }}>จัดการผู้ใช้งาน

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomInput label='ค้นหา' disabled={false} placeholder='ค้นหาชื่อ อีเมล เบอร์โทรศัพท์' />
        <CustomButton text={"ค้นหา"} style={"contained"} size={"large"} color='primary' />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ลำดับ</StyledTableCell>
              <StyledTableCell align="center">รูปภาพ</StyledTableCell>
              <StyledTableCell align="center">ชื่อ-สกุล</StyledTableCell>
              <StyledTableCell align="center">เพศ</StyledTableCell>
              <StyledTableCell align="center">อีเมล</StyledTableCell>
              <StyledTableCell align="center">เบอร์โทรศัพท์</StyledTableCell>
              <StyledTableCell align="center">ชื่อร้าน</StyledTableCell>
              <StyledTableCell align="center">ยอดเงิน</StyledTableCell>
              <StyledTableCell align="center">จัดการ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <img style={{ maxWidth: '5rem', maxHeight: '5ren' }} src={row.img} alt="" />
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="center">{row.shopName}</StyledTableCell>
                <StyledTableCell align="center">{row.amount}</StyledTableCell>
                <StyledTableCell align="center">edit</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


