import { useEffect, useState } from "react";

function Homescreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () =>  {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&hourly=temperature_2m");
    const dataFromApi = await res.json();
    console.log(dataFromApi);
    setData(dataFromApi.hourly.temperature_2m)
  }

  return (
    // !DOCTYPE html&gt;
    // <style
    //   dangerouslySetInnerHTML={{
    //     __html:
    //       "\n        body {\n            font-family: Arial, sans-serif;\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 20px;\n            text-align: center;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        .weather-block {\n            border: 3px solid;\n            border-radius: 5px;\n            padding: 120px;\n            margin: 120px;\n            width: 100px;\n            box-sizing: border-box;\n        }\n\n        .more-button {\n            text-align: center;\n            margin-top: 20px;\n        }\n\n        .more-button a {\n            font-weight: bold;\n        }\n    "
    //   }}
    // />
    <>
      <div className="container">
        {
          data.map((x, i) => (
            <div key={i} className="weather-block">
              <h2>Next {i+1} Hour Temp: {x} C</h2>
            </div>
          ))
        }
      </div>
      <div>{JSON.stringify(data)}</div>
      <div className="more-button">More</div>
    </>
  )
}

export default Homescreen;