
import { useEffect, useRef, useState } from "react";


function CityForecast ({selectedCity, weatherData, onBack }) {

    const [ forecast, setForeCast ] = useState(null);
    const detailsRef = useRef(null);

    useEffect(() => {
        // run everytime selected city changes
        const timerId = setTimeout(() => {
            const data = weatherData[selectedCity];

            setForeCast(data || null);
        }, 400)
        

        return function cleanup() {
            clearTimeout(timerId);
        }
    }, [selectedCity, weatherData])


    function handleViewDetails() {
        console.log('here view', detailsRef.current)
        // detail.ref point to the detail div

        detailsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    if(!forecast) {
        return (
            <section>
                <p>Weahter Data could not be found</p>
                <button onClick={onBack}>Back</button>
            </section>
        )
    }

return (
        <section className="forecast">

            <h3>{forecast.name} Forecast</h3>

            <p>{forecast.summary}</p>

            <button onClick={handleViewDetails}>View Details</button>
            <button onClick={onBack}>Back</button>


            <div ref={detailsRef} className="details">
                <h4>Detail Weather</h4>
                <p> {forecast.details} </p>
            </div>
         
        </section>
    );

}
export default CityForecast;
    
    


