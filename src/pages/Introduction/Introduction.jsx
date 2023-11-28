import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../../components/OpenBar';

function Introduction() {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 4, backgroundColor: '#ADD8E6', padding: '20px', borderRadius: '10px' }}>
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#000' }}>
            Dear Families, we are here to empower our communities with weather updates, words of encouragement, and crucial recommendations. Weathering storms together because every forecast deserves hope and support.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" sx={{ color: '#000' }}>
            Select an Option
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} to="/home" variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Students
          </Button>
          <Button component={Link} to="/home" variant="contained" color="primary">
            Parents
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Introduction;
