import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './component/SideBar';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Banners from './pages/Banners';
import News from './pages/News';
import Orders from './pages/Orders';
import Posts from './pages/Posts';
import Seo from './pages/Seo';
import Shippings from './pages/Shippings';
import Term from './pages/Term';
import Topups from './pages/Topups';
import Users from './pages/Users';
import LoginPage from './pages/LoginPage'; // Import your LoginPage component
import { Box, createTheme, ThemeProvider } from '@mui/material';
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
      main: '#F37F3D',
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
            <Route path="/login" element={<LoginPage />} /> {/* New login route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/news" element={<News />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/shippings" element={<Shippings />} />
            <Route path="/term" element={<Term />} />
            <Route path="/topups" element={<Topups />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
