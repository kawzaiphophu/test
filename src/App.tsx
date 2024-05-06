// App.tsx
import { Routes, Route } from 'react-router-dom';
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
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#F37F3D',
    },
    text: {
      primary: '#333',
    }
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#333333', 
    },
    secondary: {
      main: '#666666',
    },
    text:{
      primary:'#ffffff'
    }
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <Box sx={{ display: 'flex' }}>
        <SideBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Box component="main" sx={{ flexGrow: 1,p:3,bgcolor:'#DEDEDE',height:'100vh'}}>
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
    </ThemeProvider>
  );
}

export default App;

