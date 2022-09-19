import { WeatherData } from "../interfaces/WeatherData";
import "./DetailsTable.css";

export const DetailsTable = ({
  data: {
    humidity,
    feels,
    visibility,
    pressure,
    longitude,
    latitude,
    windSpeed,
  },
}: {
  data: WeatherData;
}) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Humedad:</th>
          <th id="humidity">{humidity}</th>
        </tr>
        <tr>
          <th>Grados:</th>
          <th id="feels">{feels}</th>
        </tr>
        <tr>
          <th>Visibilidad:</th>
          <th id="visibility">{visibility}</th>
        </tr>
        <tr>
          <th>Presión:</th>
          <th id="pressure">{pressure}</th>
        </tr>
        <tr>
          <th>Longitud:</th>
          <th id="longitude">{longitude}</th>
        </tr>
        <tr>
          <th>Latitud:</th>
          <th id="latitude">{latitude}</th>
        </tr>
        <tr>
          <th>Vientos:</th>
          <th id="windSpeed">{windSpeed}</th>
        </tr>
      </tbody>
    </table>
  );
};
