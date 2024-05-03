import { Box } from '@mui/material'


function ManageUsers() {
  return (
    <Box
    sx={{
      width: 'auto',
      mt: 7,
      p: 2,
      borderRadius: 5,
      bgcolor: "lightgrey"
    }}>
      <Box sx={{display:"flex",
      fontWeight:600,
      bgcolor:"white",
      p:2,
      borderRadius:2}}>จัดการผู้ใช้งาน
      </Box>
      <div><input type="text" /></div>
    </Box>
  )
}

export default ManageUsers