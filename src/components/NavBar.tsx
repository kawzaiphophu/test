import Logo from '../assets/Harnkan logo 1.svg';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomSwitch from './CustomSwitch';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}))

export default function NavBar({ toggleDarkMode, darkMode }: { toggleDarkMode: any, darkMode: boolean }) {
    return (

        <AppBar position="fixed" color='inherit'>
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
                                <CustomSwitch checked={darkMode} onChange={toggleDarkMode} />
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
    )
}
