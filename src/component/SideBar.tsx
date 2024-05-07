import { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Switch, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/Harnkan logo 1.svg'
import menuItems from '../data/MenuLists';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar({ toggleDarkMode, darkMode }: { toggleDarkMode: any, darkMode: boolean }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='inherit'>
        <Toolbar>
          <div style={{ width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 1,
              }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                px: 2
              }}>
                <Typography variant="h6" component="div" >
                  <img src={Logo} alt="" />
                </Typography>
              </Box>
              <Box sx={{
                display: "flex "
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LightModeIcon />
                  <Switch checked={darkMode} onChange={toggleDarkMode} />
                  <DarkModeIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2
                }}>
                  <AccountCircleIcon />
                  <Box px={2}>
                    <div>Name</div>
                    <div>Status</div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, path, icon }, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2,
                  backgroundColor: path === location.pathname ? '#F39B49' : 'inherit',
                  color: path === location.pathname ? 'white' : 'inherit',
                  '&:hover': {
                    backgroundColor: '#CF7827',
                    color: 'white',
                  },
                }}
                component={Link}
                to={path}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    filter:path === location.pathname ? `invert(1)` : theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)',
                  }}
                >
                  <img src={icon}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box sx={{ display: "flex" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            position: 'absolute',
            zIndex: 1,
            bgcolor: theme.palette.primary.main, 
            borderRadius: "0 10px 10px 0",
            mt: 8.3,
            width: "30px",
            height: "55px",
            pl: 2
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton></Box>
    </Box>
  );
}
