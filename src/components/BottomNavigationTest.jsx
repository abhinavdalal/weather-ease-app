import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CottageIcon from '@mui/icons-material/Cottage';
import UpdateIcon from '@mui/icons-material/Update';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SosIcon from '@mui/icons-material/Sos';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ paddingBottom: '8px' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: '#3f8cdd',
          borderTop: '0.5px solid #ccc',
          display: 'flex',
        }}
      >
        <NavLink to="/Home" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Homescreen" showLabel icon={<CottageIcon />} sx={{ fontSize: '15px', color: '#111' }} />
        </NavLink>
        <NavLink to="/temp" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Updates" showLabel icon={<UpdateIcon />} sx={{ fontSize: '15px', color: '#111' }} />
        </NavLink>
        <NavLink to="/motiv" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Suggestions" showLabel icon={<FormatQuoteIcon />} sx={{ fontSize: '15px', color: '#111' }} />
        </NavLink>
        <NavLink to="/Help" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Help" showLabel icon={<SosIcon />} sx={{ fontSize: '15px', color: '#111' }} />
        </NavLink>
        <NavLink to="/Rec" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Recipe" showLabel icon={<SoupKitchenIcon />} sx={{ fontSize: '15px', color: '#111' }} />
        </NavLink>
        <NavLink to="/aware" style={{ textDecoration: 'none' }}>
          <BottomNavigationAction label="Awareness" showLabel icon={<HealthAndSafetyIcon />} sx={{ fontSize: '15px', color: '#111' }} />
        </NavLink>
      </BottomNavigation>
    </Box>
  );
}
