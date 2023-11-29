// ... (existing imports)

const HomeScreen = () => {
  // ... (existing code)

  return (
    <>
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
    </>
  );
};

export default HomeScreen;
