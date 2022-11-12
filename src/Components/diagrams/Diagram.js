import React from 'react'
import { useSelector } from "react-redux";
import moment from 'moment';
import { Line } from "react-chartjs-2";
import { toCelsius, toFahrenheit } from "../Page2/tempConverter"
import "./diagram.css"
import 'chart.js/auto';

function getRandomCelsius(num) {
  return Math.floor(num * 10 - 5)
}
function getRandomFahrenheit(num) {
  return Math.floor(num * 20 - 10)
}

export default function Diagram() {
  const weatherData = useSelector(state => state.weather.weatherData);
  const typeData = useSelector(state => state.celsiusType);
  const labelData = [
    moment(weatherData.dt * 1000, 'x').subtract(2, 'd').format("DD.MM"),
    moment(weatherData.dt * 1000, 'x').subtract(1, 'd').format("DD.MM"),
    moment(weatherData.dt * 1000, 'x').format("DD.MM"),
    moment(weatherData.dt * 1000, 'x').add(1, 'd').format("DD.MM"),
    moment(weatherData.dt * 1000, 'x').add(2, 'd').format("DD.MM"),
    moment(weatherData.dt * 1000, 'x').add(3, 'd').format("DD.MM"),
    moment(weatherData.dt * 1000, 'x').add(4, 'd').format("DD.MM")
  ];

  const celsiusData = [
    toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
    toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
    toCelsius(weatherData.main.temp),
    toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
    toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
    toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
    toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random())
  ];
  
  const fahrenheitData = [
    toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
    toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
    toFahrenheit(weatherData.main.temp),
    toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
    toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
    toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
    toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random())
  ];

  const data = {
    labels: labelData,
    datasets: [{
      label: 'Temperature In' + (typeData ? '°C ' : '°F'),
      data: typeData ? celsiusData : fahrenheitData,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      tension: 0.5
    }],
    options: {
      animation: {
        duration: 1000
      }
    }
  };

  return (
    <div className='diagram'>
      <Line data={data} />
    </div>
  )
}

export function DiagramHourly() {
  const weatherData = useSelector(state => state.weather.weatherData);
  const typeData = useSelector(state => state.celsiusType);
  const labelData = [
    moment(weatherData.dt * 1000, 'x').subtract(2, 'h').format("h A"),
    moment(weatherData.dt * 1000, 'x').subtract(1, 'h').format("h A"),
    moment(weatherData.dt * 1000, 'x').format("h A"),
    moment(weatherData.dt * 1000, 'x').add(1, 'h').format("h A"),
    moment(weatherData.dt * 1000, 'x').add(2, 'h').format("h A"),
    moment(weatherData.dt * 1000, 'x').add(3, 'h').format("h A"),
    moment(weatherData.dt * 1000, 'x').add(4, 'h').format("h A")
  ];
  
const celsiusData = [
  toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
  toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
  toCelsius(weatherData.main.temp),
  toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
  toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
  toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random()),
  toCelsius(weatherData.main.temp) + getRandomCelsius(Math.random())
];

const fahrenheitData = [
  toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
  toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
  toFahrenheit(weatherData.main.temp),
  toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
  toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
  toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random()),
  toFahrenheit(weatherData.main.temp) + getRandomFahrenheit(Math.random())
];

  const data = {
    labels: labelData,
    datasets: [{
      label: 'Temperature In' + (typeData ? '°C ' : '°F'),
      data: typeData ? celsiusData : fahrenheitData,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      tension: 0.5
    }],
    options: {
      animation: {
        duration: 1000
      }
    }
  }

  return (
    <div className='diagram'>
      <Line data={data} />
    </div>
  )
}






