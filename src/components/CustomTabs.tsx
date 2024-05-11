import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function CustomTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={styleTabs}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}


const styleTabs = {
    borderBottom: 1,
    borderColor: 'divider',
    '& .MuiTab-textColorPrimary ': {
        color: '#B8B8B6 !important ',
        fontWeight: 500
    },
    '& .Mui-selected': {
        color: '#F39B49 !important ',
        backgroudColor: 'red !important',
        borderBottom: '2px solid '

    },
    '& .css-wv7abh-MuiTabs-indicator': {
        BackgroudColor: 'red'
    }
}