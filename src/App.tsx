import { WeatherContainer } from "./components/weatherContainer/WeatherContainer";
import { FormEvent, useEffect, useState } from "react";
import { getWaetherByCoords, getWeatherBySearch } from "./api/FetchWeather";
import { SearchBox } from "./components/searchBox/SearchBox";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LONG = position.coords.longitude;

      try {
        const data = await getWaetherByCoords(LAT, LONG);
        setFetchedData(data);
      } catch (err) {
        setError("Por favor revise su conexion a internet");
      }
    });
  }, []);

  //Buscador
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");
    try {
      const data = await getWeatherBySearch(CITY);

      if (data === "404") {
        setError("No se encontro la ciudad");
      } else if (data === "400") {
        setError("Por favor ingrese una ciudad");
      } else {
        setFetchedData(data);
        console.log(data);
      }
    } catch (err) {
      setError("Por favor revise su conexion a internet");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </div>
  );
}

export default App;
