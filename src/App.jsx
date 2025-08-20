import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://goweather.xyz/weather/taxila')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error in fetching data:", error));
  }, []);


  return (
    <>
      <div className="cards">
        <h1 className="weather">Weather App</h1>
        <h1>temperature:{data.temperature}</h1>
        <h1>wind:{data.wind}</h1>
        

        <h1>forecast data</h1>
        {
          Array.isArray(data.forecast) && data.forecast.map((item , index)=>
          (
            <div key={index} >
              <h3>day:{item.day}</h3>
              <h3>temperature:{item.temperature}</h3>
              <h3>wind:{item.wind}</h3>
            </div>
          ))
        }

      </div>

    </>
  );
}

export default App;