import {Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './component/SideBar';
import Contact from './pages/Contact';
import DashBoard from './pages/DashBoard';
import ManageBanners from './pages/ManageBanners';
import ManageNews from './pages/ManageNews';
import ManageOrders from './pages/ManageOrders';
import ManagePosts from './pages/ManagePosts';
import ManageSeo from './pages/ManageSeo';
import ManageShipings from './pages/ManageShipings';
import ManageTerm from './pages/ManageTerm';
import ManageTopups from './pages/ManageTopups';
import ManageUsers from './pages/ManageUsers';
import { Box, createTheme } from '@mui/material';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
        <Box sx={{ display: 'flex' }}>
          <SideBar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


            <Routes>

              <Route path="/" element={<DashBoard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/manage-banners" element={<ManageBanners />} />
              <Route path="/manage-news" element={<ManageNews />} />
              <Route path="/manage-orders" element={<ManageOrders />} />
              <Route path="/manage-posts" element={<ManagePosts />} />
              <Route path="/manage-seo" element={<ManageSeo />} />
              <Route path="/manage-shippings" element={<ManageShipings />} />
              <Route path="/manage-term" element={<ManageTerm />} />
              <Route path="/manage-topups" element={<ManageTopups />} />
              <Route path="/manage-users" element={<ManageUsers />} />
            </Routes>
          </Box>
        </Box>
    </>
  );
}

export default App;

