import './page2.css';
import '../../icons/css/weather-icons.css';
import moment from 'moment';
import Diagram from "../diagrams/Diagram";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toCelsius, toFahrenheit } from './tempConverter'
import { iconList } from '../../features/weather/iconConverter';
import { celsiusOff, celsiusOn } from '../../features/weather/weatherSlice';
import { Blurhash } from "react-blurhash";



export default function Page2() {

    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.weather.weatherData)
    const typeData = useSelector(state => state.celsiusType)
    const convertedData = moment(weatherData.dt * 1000, 'x').utcOffset(weatherData.timezone / 3600, false).format("dddd, hh:mm A")
    const celsius = toCelsius(weatherData.main.temp);
    const fahrenheit = toFahrenheit(weatherData.main.temp);
    const temp = typeData ? celsius : fahrenheit;
    const activeType = typeData ? '°C ' : '°F';
    const passiveType = typeData ? '°F' : '°C ';
    const [dayOrNight, setDayOrNight] = useState('');
    useEffect(() => {
        setDayOrNight(weatherData.dt > weatherData.sys.sunrise && weatherData.dt < weatherData.sys.sunset ? "day" : "night");
    }, [weatherData.dt, weatherData.sys.sunrise, weatherData.sys.sunset])
    let miniWeather = '';
    for (const key in iconList) {
        if (key === weatherData.weather[0].main) {
            miniWeather = key;
            break;
        }
    }
    console.log(weatherData.results[0]);
    const urlData1 = (weatherData.results.length >= 1 ? weatherData.results[0].urls.raw : 'https://demofree.sirv.com/nope-not-here.jpg');
    const urlData2 = (weatherData.results.length >= 2 ? weatherData.results[1].urls.raw : 'https://demofree.sirv.com/nope-not-here.jpg');

    const variableForClassName = "wi wi-owm-" + dayOrNight + '-' + iconList[miniWeather]
    function celsiusHandler() {
        return typeData ? celsiusOff() : celsiusOn()
    }
    return (
        <div className="page2">
          
            <div className="imageDiv">
                <img alt="img" src={urlData1} className="image1" />
            </div>
            <div className="sideText1">
                <div className="info1">
                    <div className="info1Texts">
                        <p className="city">{weatherData.name}</p>
                        <p className="data">{convertedData}</p>
                        <p className="sunny">{weatherData.weather[0].description}</p>
                    </div>
                    <div className="smallImg" style={{ backgroundImage: `url(${(urlData2)})` }} />
                </div>
                <div className="info2">
                    <i className={variableForClassName} id="icon"></i>
                    <p className="numberDegree">{temp}</p>
                    <div className="cf">
                        <span className="activeTemp">{activeType}</span>
                        <p className="line">|</p>
                        <span className="passiveTemp"
                            onClick={(e) => {
                                dispatch(celsiusHandler())
                            }}>{passiveType}</span>
                    </div>
                </div>
                <div className="info3">
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdLeft">
                                    <i className='wi wi-strong-wind' />
                                    {""} Wind
                                </td>
                                <td className="tdRight">{(Math.round(weatherData.wind.speed * 10) / 10)} km/h</td>
                            </tr>
                            <tr>
                                <td className="tdLeft">
                                    <i className='wi wi-humidity' />
                                    {""} Humidity
                                </td>
                                <td className="tdRight">{weatherData.main.humidity}%</td>
                            </tr>
                            <tr>
                                <td className="tdLeft">
                                    <i className='wi wi-barometer' />
                                    {""} Pressure
                                </td>
                                <td className="tdRight">{weatherData.main.pressure} hPa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Diagram />
            </div>
        </div>
    )
}






