import User_Icon from '../assets/icon/icon/User/User_Circle.svg'
import ClipBoard from '../assets/icon/icon/clipboard-notes.svg'
import Truck_icon from '../assets/icon/truck-delivery-outline.svg'
import Wallet_icon from '../assets/icon/icon/wallet-outline.svg'
import News_icon from '../assets/icon/icon/newspaper-folding.svg'
import Tv_icon from '../assets/icon/icon/tv.svg'
import Note_icon from '../assets/icon/icon/notebooks.svg'
import Check_icon from '../assets/icon/icon/Warning/Wavy_Check.svg'
import Chat_icon from '../assets/icon/icon/Communication/Chat_Circle_Dots.svg'
import Globe_icon from '../assets/icon/icon/Navigation/Globe.svg'
import Chart_Line from '../assets/icon/icon/Interface/Chart_Line.svg'

const menuItems = [
    { text: 'DashBoard', path: '/dashboard', icon: Chart_Line },
    { text: 'จัดการผู้ใช้งาน', path: '/users', icon: User_Icon },
    { text: 'จัดการคำสั่งซื้อ', path: '/orders', icon: ClipBoard },
    { text: 'จัดการขนส่ง', path: '/shippings', icon: Truck_icon },
    { text: 'จัดการเติมเงิน', path: '/topups', icon: Wallet_icon },
    { text: 'จัดการข่าว', path: '/news', icon: News_icon },
    { text: 'จัดการแบนเนอร์', path: '/banners', icon: Tv_icon },
    { text: 'จัดการโพสต์', path: '/posts', icon: Note_icon },
    { text: 'จัดการ Term', path: '/term', icon: Check_icon },
    { text: 'ติดต่อสอบถาม', path: '/contact', icon: Chat_icon },
    { text: 'จัดการ SEO', path: '/seo', icon: Globe_icon }
  ];

  export default menuItems;