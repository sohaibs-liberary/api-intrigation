import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://goweather.xyz/weather/wah')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error in fetching data:", error));
    }, []);

    return (
      <>
      <div className="cards">
        <h1 className="weather">Weather App</h1>

        {
          data.map((e ,index)=>{

            <p key={index}>Temperature:{e.temperature}</p> 
          })
         }
          </div>
          
      </>
    );
}

export default App;