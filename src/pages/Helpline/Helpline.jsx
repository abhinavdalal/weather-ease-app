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
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of Fire (आग लगने की स्थिति में): 101</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of you need Police (यदि आपको पुलिस की आवश्यकता है): 100</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>If you need Ambulance (अगर आपको एम्बुलेंस की जरूरत है): 102</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of a disaster (किसी आपदा की स्थिति में): 1916</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>24×7 Helpline no. : 108</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>For Ambulance (एम्बुलेंस): 102</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>For Child Helpline (चाइल्ड हेल्पलाइन के लिए) : 1098</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case you need Police (यदि आपको पुलिस की आवश्यकता है): 100</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>If you are stuck in Traffic (अगर आप ट्रैफिक में फंसे हैं): 1073</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of an accident (किसी दुर्घटना की स्थिति में): 108</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of emergency (आपात्कालीन स्थिति में): 112</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>In case of a fire (आग लगने की स्थिति में): 101</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Fumigation Helpline number (धूमन हेल्पलाइन नंबर): 02223011958</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>To track your location (अपना स्थान ट्रैक करने के लिए): 1090</ListItem>
          <ListItem sx={{ fontSize: '1.2rem', textAlign: 'center' }}>Emergency operation centre [Mumbai] (आपातकालीन संचालन केंद्र): 1916, 02222694725</ListItem>
        </List>
        <SimpleBottomNavigation />
      </div>
    </Container>
  );
}

export default Helpline;
