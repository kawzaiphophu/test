import { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


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

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, path, icon }) => (
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
                    filter: path === location.pathname ? `invert(1)` : theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)',
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
