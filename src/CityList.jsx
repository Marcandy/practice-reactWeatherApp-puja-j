import weatherData from "./WeatherData";

function CityList ({cities, selectedCity, setSelectedCity}) {


   return (
    <section>
          <h3>Select a city:</h3>

          { cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={selectedCity === city ? "active" : ""}>
                {city}

              </button>
              
          ))
        }
          


    </section>
)
}
export default CityList;