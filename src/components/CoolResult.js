import React from "react";
import "../styles/CoolResult.css";

const CoolResults = props => {
  const {
    city,
    date,
    time,
    temp,
    pressure,
    wind,
    sunrise,
    sunset,
    clouds
  } = props.conditions;
  let txt = [...city];
  txt.splice(0, 1);
  return (
    <div className={`coolResult ${props.conditions.active}`}>
      <h1>
        {city.length > 12 ? (
          <span className="last">This city</span>
        ) : (
          <>
            <span>{city[0]}</span>
            <span className="last">{txt}</span>
          </>
        )}
        {"  "}
        {clouds > 85 ? (
          <i className="fas fa-cloud"></i>
        ) : clouds > 25 ? (
          <i className="fas fa-cloud-sun"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </h1>

      <span>
        Date: <strong>{date}</strong>
      </span>
      <span>
        Time: <strong>{time}</strong>
      </span>
      <span>
        Temperature:{" "}
        <strong>
          {Math.round(temp - 273.15)} <i className="fas fa-genderless"></i>C
        </strong>
      </span>
      <span>
        Pressure: <strong>{pressure} hPa</strong>
      </span>
      <span>
        Wind speed: <strong>{wind} m/s</strong>
      </span>
      <span>
        Sunrise:{" "}
        <strong>{new Date(sunrise * 1000).toLocaleTimeString()}</strong>
      </span>
      <span>
        Sunset: <strong>{new Date(sunset * 1000).toLocaleTimeString()}</strong>
      </span>
    </div>
  );
};

export default CoolResults;
