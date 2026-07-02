
function CityList ({cityList, setCurrentCity}) {

 const cities = Object.keys(cityList);  //returns array of keys
 const city = cities.map((city) => <li onClick = {() => setCurrentCity(city)}>{city}</li>)

   return (
  <div>
        <h3>Select a city:</h3>
         <ul>{city}</ul>
        


  </div>
)
}
export default CityList;