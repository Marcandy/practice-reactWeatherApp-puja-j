import { useEffect, useState, useRef } from 'react'
import CityList from './CityList';
import CityForecast from './CityForecast';
import weatherData from './WeatherData';
import './App.css'


function App() {
 
 const [currentCity, setCurrentCity] = useState("");
 const [curCityDetails, setDetails] = useState("");
 useEffect(() => {

  setDetails(weatherData[currentCity]);

 }, [currentCity]);

  return (

    <div>
      <h1>React Weather App</h1>
      <CityList cityList = {weatherData} setCurrentCity={setCurrentCity} />
      {currentCity && <h2>Current City: {currentCity}</h2>}
      {curCityDetails && <CityForecast curCityDetails={curCityDetails}/>}
    </div>
);
}

export default App;

  
 


 



  
 
    
    
    
    
    
   
        
      

