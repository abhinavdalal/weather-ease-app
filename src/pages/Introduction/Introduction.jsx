import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Introduction({ currentLanguage }) {
  // const [language, setLanguage] = useState('English'); // Language state

  // const toggleLanguage = () => {
  //   setLanguage((prev) => (prev === 'English' ? 'Hindi' : 'English'));
  // };

  return (
    <>
      <Container
        sx={{
          mt: 4,
          backgroundColor: '#ADD8E6',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        {/* Language Toggle Button
        <Box sx={{ textAlign: 'right', mb: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={toggleLanguage}
          >
            {language === 'English' ? 'Switch to Hindi' : 'अंग्रेज़ी में बदलें'}
          </Button>
        </Box> */}

        {/* Introduction Message */}
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.2rem', color: '#000' }}
          >
            {currentLanguage === 'English'
              ? 'Dear Community Members, With every update, We bring hope and awareness—because after every storm, the sky always clears!'
              : 'प्रिय समुदाय के सदस्य, हर अपडेट के साथ हम आशा और जागरूकता लाते हैं—क्योंकि हर तूफान के बाद आकाश हमेशा साफ होता है!'}
          </Typography>
        </Box>

        {/* "Let's Start" Button */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            component={Link}
            to="/home"
            variant="contained"
            color="primary"
            sx={{ marginTop: 4 }}
          >
            { currentLanguage === 'English' ? "Let's Start" : 'आओ शुरू करें'}
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Introduction;
