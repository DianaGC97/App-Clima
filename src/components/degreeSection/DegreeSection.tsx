import "./DegreeSection.css";
import { WeatherData } from "../interfaces/WeatherData";

export const DegreeSection = ({
  data: { temperature, description, icon },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <section className="seccion__one">
        <span className="span" id="temperature">
          {temperature}
        </span>
        °C
      </section>
      <section>
        <img id="icomImg" src={icon} />
      </section>
      <section className="seccion__two" id="description">
        {description}
      </section>
    </>
  );
};
