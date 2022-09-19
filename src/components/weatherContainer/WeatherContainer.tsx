import { useEffect, useState } from "react";
import { DegreeSection } from "../degreeSection/DegreeSection";
import { DetailsTable } from "../detailsTable/DetailsTable";
import { Location } from "../location/Location";
import "./WeatherContainer.css";

export const WeatherContainer = ({
  fetchedData,
  error,
}: {
  fetchedData: any;
  error: string;
}) => {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    description: "",
    icon: "",
    humidity: "",
    feels: "",
    visibility: "",
    pressure: "",
    longitude: "",
    latitude: "",
    windSpeed: "",
  });

  useEffect(() => {
    if (fetchedData)
      setWeather({
        city: fetchedData.name,
        country: fetchedData.sys.country,
        temperature: Math.floor(fetchedData.main.temp - 273),
        description: fetchedData.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`,
        humidity: fetchedData.main.humidity + "%",
        feels: Math.floor(fetchedData.main.feels_like - 273) + "°C",
        visibility: fetchedData.visibility + "m",
        pressure: fetchedData.main.pressure + "hPa",
        longitude: fetchedData.coord.lon,
        latitude: fetchedData.coord.lat,
        windSpeed: fetchedData.wind.speed + "m/s",
      });
  }, [fetchedData]);

  return (
    <main className="container">
      {error === "" ? (
        <div className="container-two">
          <Location data={weather} />
          <DegreeSection data={weather} />
          <DetailsTable data={weather} />
        </div>
      ) : (
        <div className="error">{error} </div>
      )}
    </main>
  );
};
