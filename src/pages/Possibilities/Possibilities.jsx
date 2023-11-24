import { useEffect, useState } from "react";
import "./Possibilities.css"; 
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";

function Possibilities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m"
    );
    const dataFromApi = await res.json();
    setData(dataFromApi.hourly.temperature_2m);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="container">
        {data.slice(0, 5).map((x, i) => ( // Only the next 5 hours
          <div key={i} className="weather-block">
            <div className="temperature-container">
              <h2>Next {i + 1} Hour Temp:   </h2>
              <div className="temperature-data">{x}°C</div>
            </div>
          </div>
        ))}
      </div>

      <SimpleBottomNavigation />
    </>
  );
}

export default Possibilities;
