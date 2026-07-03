import { useEffect, useState, useRef } from 'react'
import CityList from './CityList';
import CityForecast from './CityForecast';
import weatherData from './WeatherData';
import './App.css'


function App() {
 const [ selectedCity, setSelectedCity] = useState(null);


 // keep weatherData as the single source of truth
 const cities = [];

 for (const city in weatherData) {
  cities.push(city);
 }


  return (
    <main className='app'>
        <h1>React Weather App</h1>

        <CityList 
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity} />

        
        {selectedCity && 
          <CityForecast 
            selectedCity={selectedCity}
            weatherData={weatherData}
            onBack={() => setSelectedCity(null)}/>}
    </main>
);
}

export default App;

  
 


 



  
 
    
    
    
    
    
   
        
      

