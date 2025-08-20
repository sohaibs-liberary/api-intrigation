import React, { useEffect, useState } from "react";

function App() {
  
  const [data, setData] = useState({});

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
          </div>
          
      </>
    );
}

export default App;