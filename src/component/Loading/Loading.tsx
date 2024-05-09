
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/Harnkan logo 1.svg';

export default function Loading() {
    const theme = useTheme();
    return (
        <Box sx={containerStyles}>
            <Box sx={{ p: 5 }}>
                <CircularProgress sx={{
                    color: theme.palette.secondary.main
                }} />
            </Box>
            <Box>
                <img src={Logo} alt="" />
            </Box>
        </Box>
    );
}

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999
}