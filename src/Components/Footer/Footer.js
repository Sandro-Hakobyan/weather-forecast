import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";

export default function Footer() {
  const info = useSelector((state) => state.weather.info);
  return (
    <div className="footer" style={info ? { top: 3100 } : { top: 1100 }}>
      <div className="leftContactInfo">
        <p className="footerText"> Images Sponsor : Unsplash.com</p>
        <p className="footerText"> Forecast Sponsor : OpenWeatherMap.com</p>
        <p className="footerText">
          {" "}
          &copy;2022 Weather Forecast, All Rights Reserved
        </p>
      </div>
      <div className="rightContactInfo">
        <p className="footerText">Creator : Sandro Hakobyan</p>
        <p className="footerText">Phone Number : +374 91 64-64-30</p>
        <p className="footerText">Gmail : sandro.hakobyan.work@gmail.com</p>
      </div>
    </div>
  );
}
