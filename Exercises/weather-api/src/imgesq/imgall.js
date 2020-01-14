import React from "react";
import imgFile1 from "../img/weather-icons/clear.svg";
import imgFile2 from "../img/weather-icons/cloudy.svg";
import imageFile3 from "../img/weather-icons/drizzle.svg";
import imageFile4 from "../img/weather-icons/fog.svg";
import imageFile5 from "../img/weather-icons/mostlycloudy.svg";
import imageFile6 from "../img/weather-icons/partlycloudy.svg";
import imageFile7 from "../img/weather-icons/rain.svg";
const imgw = props => {
  return (
    <div className="weatherImages">
      <div className="imageResize">
        <p>03:00</p>
        <img src={imageFile7} />
        <p>8&#8451;</p>
      </div>
      <div className="imageResize">
        <p>06:00</p>
        <img src={imageFile6} />
        <p>9&#8451;</p>
      </div>
      <div className="imageResize">
        <p>09:00</p>
        <img src={imageFile5} />
        <p>14&#8451;</p>
      </div>
      <div className="imageResize">
        <p>12:00</p>
        <img src={imageFile4} />
        <p>17&#8451;</p>
      </div>
      <div className="imageResize">
        <p>15:00</p>
        <img src={imageFile3} />
        <p>19&#8451;</p>
      </div>
      <div className="imageResize">
        <p>21:00</p>
        <img src={imgFile2} />
        <p>13 &#8451;</p>
      </div>
      <div className="imageResize">
        <p>22:00</p>
        <img src={imgFile1} />
        <p>14&#8451;</p>
      </div>
    </div>
  );
};

export default imgw;
