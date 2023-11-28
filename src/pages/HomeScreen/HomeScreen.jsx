import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useTheme from "@mui/system/useTheme";
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";
import "./Home.css";

const HomeScreen = () => {
  const theme = useTheme();

  const [temperature, setTemperature] = useState(0);
  const [pm25, setPm25] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res1 = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=18.95355&longitude=72.8275&current=apparent_temperature"
    );
    const res2 = await fetch(
      "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=18.95355&longitude=72.8275&hourly=pm2_5"
    );

    const data1 = await res1.json();
    const data2 = await res2.json();

    // Assuming data1.current.apparent_temperature is in Celsius
    setTemperature(data1.current.apparent_temperature);

    // Assuming data2.hourly.pm2_5 represents the hourly PM2.5
    setPm25(data2.hourly.pm2_5);
  };

  const getWeatherImage = () => {
    if (temperature > 30) {
      // Display sunny image URL
      return "/assets/sunny.jpeg";
    } else if (temperature < 15) {
      // Display snow image URL
     return "/assets/snowing.png"; 
    } else {
      // Display clear sky image URL
      return "/assets/clear.jpeg";
    }
  };

  return (
    <Container>
      <ResponsiveAppBar />
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <div className="weather-container">
            <div className="header">Current Weather</div>
            <img
              src={getWeatherImage()}
              alt="Weather Image"
              className="weather-image"
            />
            <div className="temperature">
              The Temperature is {temperature}°C
            </div>
            <div className="temperature">
              Air Quality Index is {pm25 <= 175 ? "Good" : "Bad"}
            </div>
            <SimpleBottomNavigation />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
