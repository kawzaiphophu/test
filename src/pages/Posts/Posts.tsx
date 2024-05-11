import { Box } from '@mui/material'
import CustomTabs from '@components/CustomTabs'

export default function Posts() {
  return (
    <Box
      sx={{
        width: 'auto',
        mt: 7,
        p: 2,
        borderRadius: 5,
        bgcolor: "lightgrey"
      }}>
      Posts
      <CustomTabs />
    </Box>
  )
}

