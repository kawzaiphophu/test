import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material';

import SideBar from '@components/SideBar';
import Loading from '@components/Loading/Loading';
import NavBar from '@components/NavBar';

import Dashboard from '@pages/DashBoard';
import Contact from '@pages/Contact';
import Banners from '@pages/Banners';
import News from '@pages/News/News';
import Orders from '@pages/Orders';
import Posts from '@pages/Posts/Posts';
import Seo from '@pages/Seo';
import Shippings from '@pages/Shippings';
import Term from '@pages/Term';
import Topups from '@pages/Topups';
import Users from '@pages/Users';
import LoginPage from '@pages/LoginPage';

import useAuthCheck from '@hooks/useAuthCheck';


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
    text: {
      primary: '#ffffff'
    }
  },
});

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();


  useEffect(() => {

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  useAuthCheck(setAuthenticated);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!authenticated) {
    return <LoginPage />;
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={globalStyles}
      />
      {loading && <Loading />}
      <Box >
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box sx={bgStyle}>
          <Box sx={displayStyle}>
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
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
              <Route path="/*" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

const globalStyles = {
  '.title': {
    fontWeight: 600,
    color: '#F37F3D',
    padding: '1rem',
  },
}

const bgStyle = {
  bgcolor: '#efefef',
  height: '100vh',
  width: '100vw',
  overflowY: 'auto',
}

const displayStyle = {
  flexGrow: 1,
  m: '5rem 2rem',
  p: 3,
  borderRadius: 3,
  bgcolor: 'primary.main',
}
