import React from 'react';
import './Helpline.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";

const Helpline = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <div className="helpline-container">
        <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
          Emergency Helpline Numbers
        </Typography>
        <List sx={{ textAlign: 'center' }}>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of Fire: 101</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of you need Police: 100</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>If you need Ambulance: 102</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of a disaster: 1916</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>24×7 Helpline no. : 108</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>For Ambulance : 102</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>For Child Helpline : 1098</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case you need Police: 100</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>If you are stuck in Traffic: 1073</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of an accident: 108</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of emergency: 112</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of a fire: 101</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Fumigation Helpline number: 02223011958</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>To track your location: 1090</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Emergency operation centre [Mumbai]: 1916, 02222694725</ListItem>
        </List>
        <SimpleBottomNavigation />
      </div>
    </Container>
  );
}

export default Helpline;
