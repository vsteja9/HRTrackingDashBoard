import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SelectedDataGrid from './DataGrid';

export default function BodyComponent(){

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(<Box sx={{ width: '100%', bgcolor: 'background.paper', display:'grid', gap:5}}>
        <Tabs value={value} onChange={handleChange} centered sx={{margin:5}}>
          <Tab label="Candidate Tracker" />
          <Tab label="Open Position Tracker" />
          <Tab label="New Joinee Tracker" />
        </Tabs>
        
        <SelectedDataGrid  />
      </Box>)
}