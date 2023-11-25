import * as React from 'react'
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CottageIcon from '@mui/icons-material/Cottage';
import UpdateIcon from '@mui/icons-material/Update';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SosIcon from '@mui/icons-material/Sos';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: '#3f8cdd', 
          borderTop: '1px solid #ccc', 
        }}
      >
        <NavLink to="/Home" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Homescreen" showLabel icon={<CottageIcon />} sx={{ fontSize: '14px', color: '#111' }} />
        </NavLink>
        <NavLink to="/temp" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Updates" showLabel icon={<UpdateIcon />} sx={{ fontSize: '14px', color: '#111' }} />
        </NavLink>
        <NavLink to="/motiv" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Suggestions" showLabel icon={<FormatQuoteIcon />} sx={{ fontSize: '14px', color: '#111' }} />
        </NavLink>
        <NavLink to="/Help" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Help" showLabel icon={<SosIcon/>} sx={{ fontSize: '14px', color: '#111' }} />
        </NavLink>
        <NavLink to="/Rec" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Recipe" showLabel icon={<SoupKitchenIcon/>} sx={{ fontSize: '14px', color: '#111' }} />
        </NavLink>
      </BottomNavigation>
    </Box>
  );
}
