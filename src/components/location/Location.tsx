import { WeatherData } from "../interfaces/WeatherData";
import "./Location.css";

export const Location = ({
  data: { city, country },
}: {
  data: WeatherData;
}) => {
  return (
    <header className="ciudad">
      <p className="parrafo" id="city">
        {city}
      </p>
      <span className="country" id="country">
        {country}
      </span>
    </header>
  );
};
