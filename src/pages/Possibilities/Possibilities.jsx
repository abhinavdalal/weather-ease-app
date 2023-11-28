import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import SimpleBottomNavigation from '../../components/BottomNavigationTest';
import ResponsiveAppBar from '../../components/OpenBar';

function Possibilities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m'
    );
    const dataFromApi = await res.json();
    setData(dataFromApi.hourly.temperature_2m);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <CardContent>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" sx={{ color: '#000', fontFamily: 'Arial, sans-serif' }}>Next 5 Hours</Typography>
            </Box>
            {data.slice(0, 5).map((x, i) => (
              <Card key={i} sx={{ backgroundColor: '#5d9cec', mb: 2, borderRadius: '8px', width: '300px' }}>
                <CardContent>
                  <Box className="temperature-container">
                    <Typography variant="h4" sx={{ mb: 1, color: '#000', fontFamily: 'Arial, sans-serif' }}>Next {i + 1} Hour Temp:</Typography>
                    <Typography variant="h5" className="temperature-data" sx={{ color: '#000', fontFamily: 'Arial, sans-serif' }}>{x}°C</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </CardContent>
      </Container>
      <SimpleBottomNavigation />
    </>
  );
}

export default Possibilities;
