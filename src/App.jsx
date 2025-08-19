import React from "react";                  
import React , {useEffect , useState} from "react";

function App () {

        const[data ,setdata ] = useState([]);
    useEffect ( ()=>{
        fetch( 'https://goweather.xyz/weather/taxila')
        .then( response => response.json )
        .then( data ,  setdata(data))
        .catch( error=> console.error("data in fetching",error))
    },[] )
}

const App = () => {
  return (
   
    <>
    {
    data.map((temperature)=>(
        <h1>"Temperature :"{temperature.wind}</h1>
    ))
    }
    </>
  )
}

export default App

