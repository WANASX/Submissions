import React from "react";
import storm from "../img/weather-icons/storm.svg";
const Mainimg = props => {
  return (
    <div>
      <img src={storm} id="srcImagew" />
      <br />
      <p id="overcastCloud">overcast clouds</p>
      <br />
      <span className="temprature">
        <b>Temprature</b>
      </span>
      <span>10&deg; to 11&#8451;</span>
      <p id="HumidityPressure">
        <b>Humidity</b> {props.humidity}% <b>Pressure</b> {props.pressure}
      </p>
    </div>
  );
};

export default Mainimg;
