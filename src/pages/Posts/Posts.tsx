import { Box } from '@mui/material'
import CustomTabs from '@components/CustomTabs'
import PostProduct from './PostProduct'
import Categories from './Categories'
import Market from './Market'
import Product from './Product'

export default function Posts() {
  return (
    <Box>
      <Box className="title">จัดการโพสต์</Box>
      <CustomTabs
        tabs={['โพสต์สินค้า', 'หมวดหมู่', 'ร้านค้า', 'สินค้า']}
        components={[
          <PostProduct />,
          <Categories />,
          <Market />,
          <Product />
        ]}
      />
    </Box>
  )
}

