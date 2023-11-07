import * as React from 'react'
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CottageIcon from '@mui/icons-material/Cottage';
import UpdateIcon from '@mui/icons-material/Update';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
   
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <NavLink to="/Home" style={{ textDecoration: 'none' }}>
            <BottomNavigationAction label="Homescreen" icon={<CottageIcon />} />
          </NavLink>
          <NavLink to="/temp" style={{ textDecoration: 'none' }}>
            <BottomNavigationAction label="Updates" icon={<UpdateIcon />} />
          </NavLink>
          <NavLink to="/motiv" style={{ textDecoration: 'none' }}>
            <BottomNavigationAction label="Suggestions" icon={<FormatQuoteIcon />} />
          </NavLink>
        </BottomNavigation>
      </Box>

      
  );
}
