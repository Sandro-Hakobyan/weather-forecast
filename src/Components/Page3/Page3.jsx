import React from "react";
import './page3.css'
import '../Page2/page2.css'
import { useSelector } from "react-redux";
import { DiagramHourly } from "../diagrams/Diagram";
import { toCelsius, toFahrenheit } from '../Page2/tempConverter';
import moment from 'moment';

export default function Page3() {
    const weatherData = useSelector(state => state.weather.weatherData);
    const typeData = useSelector(state => state.celsiusType);
    const temp = typeData ? toCelsius(weatherData.main.feels_like) : toFahrenheit(weatherData.main.feels_like);
    const minTemp = typeData ? toCelsius(weatherData.main.temp_min) : toFahrenheit(weatherData.main.temp_min);
    const maxTemp = typeData ? toCelsius(weatherData.main.temp_max) : toFahrenheit(weatherData.main.temp_max);
    const activeType = typeData ? '°C ' : '°F';
    const iconTemp = 'wi wi-' + (typeData ? 'celsius' : 'fahrenheit');
    const sunriseData = moment(weatherData.sys.sunrise * 1000, 'x').utcOffset(weatherData.timezone / 3600, false).format("hh:mm A");
    const sunsetData = moment(weatherData.sys.sunset * 1000, 'x').utcOffset(weatherData.timezone / 3600, false).format("hh:mm A")
    const urlData3 = (weatherData.results.length >= 3 ? weatherData.results[2].urls.raw : 'https://demofree.sirv.com/nope-not-here.jpg');
    const urlData4 = (weatherData.results.length >= 4 ? weatherData.results[3].urls.raw : 'https://demofree.sirv.com/nope-not-here.jpg');
    return (
        <div className="page3">
            <div className="imageDiv1">
                <img alt="alt1" src={urlData3} className="image2" />
            </div>
            <div className="sideText2">
                <div className="mediumImg" style={{ backgroundImage: `url(${urlData4})` }} />
                <p className="data">More Detailed</p>
                <div className="restInfo">
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdLeft">
                                    <i className={iconTemp} />
                                    {""} Feels Like
                                </td>
                                <td className="tdRight">{temp}{activeType}</td>
                            </tr>
                            <tr>
                                <td className="tdLeft">
                                    <i className={iconTemp} />
                                    {""} Max Temperature
                                </td>
                                <td className="tdRight">{maxTemp}{activeType}</td>
                            </tr>
                            <tr>
                                <td className="tdLeft">
                                    <i className={iconTemp} />
                                    {""} Min Temperature
                                </td>
                                <td className="tdRight">{minTemp}{activeType}</td>
                            </tr><tr>
                                <td className="tdLeft">
                                    <i className='wi wi-sunrise' />
                                    {""} Sunrise
                                </td>
                                <td className="tdRight">{sunriseData}</td>
                            </tr>
                            <tr>
                                <td className="tdLeft">
                                    <i className='wi wi-sunset' />
                                    {""} Sunset
                                </td>
                                <td className="tdRight">{sunsetData}</td>
                            </tr>
                            <tr>
                                <td className="tdLeft">
                                    <i className='wi wi-windy' />
                                    {""} Visibility
                                </td>
                                <td className="tdRight">{weatherData.visibility / 1000} km</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <DiagramHourly />
            </div>
        </div>
    )
}

