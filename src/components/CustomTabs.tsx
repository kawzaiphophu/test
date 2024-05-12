import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface CustomTabsProps {
  tabs: string[];
  components: JSX.Element[];
}

export default function CustomTabs({ tabs, components }: CustomTabsProps) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={styleTabs}>
          <TabList onChange={handleChange} aria-label="Tabs">
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab} value={index.toString()} />
            ))}
          </TabList>
        </Box>
        {components.map((component, index) => (
          <TabPanel key={index} value={index.toString()}>
            {component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}


const styleTabs = {

  '& .MuiTab-textColorPrimary': {
    color: '#B8B8B6',
    fontWeight: 600,
    borderBottom: 'solid 1px #DEDEDE'
  },
  '& .Mui-selected': {
    color: '#F39B49 !important ',
    backgroundColor: '#FFEDDC66 !important',
    borderRadius: '10px 10px 0px 0px ',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#F39B49'
  }
}