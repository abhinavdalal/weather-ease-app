import { useEffect, useState } from "react";
import SimpleBottomNavigation from "../../components/BottomNavigationTest";
import ResponsiveAppBar from "../../components/OpenBar";


const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current=apparent_temperature")
    const dataFromApi = await res.json();
    console.log(dataFromApi);
    setData(dataFromApi.current.apparent_temperature);
  };

  const weatherImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQw4EqKeoPBmWzEJxh1hnQmKw12ePTW9isQQ&usqp=CAU";
  return (
    <div className="weather-container">
      <ResponsiveAppBar /> 
      <div className="header">
        Current Weather
      </div>
      <img src={weatherImage} alt="Weather Image" className="weather-image" />
      <div className="header">
        The Temperature is {data}
      </div>
       <SimpleBottomNavigation />
    </div>
  );
}

export default HomeScreen;
