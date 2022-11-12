import { useState } from 'react'
import './search.css'
import { useDispatch, useSelector } from "react-redux"
import { getWeatherData } from '../../../features/weather/weatherSlice'
import Loader from '../Loader/Loader'
import searchIcon from './search.png'

export default function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const errdata = useSelector((state) => state.weather.error);
  const loader = useSelector((state) => state.weather.loading);

  return (
    <div className='search'>
      <div className="search-form">
        <input type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter City Name Here"
          className="search-input"
          onKeyDown={(e) => {
            if (e.keyCode === 13 && inputValue !== '') dispatch(getWeatherData(inputValue))
          }} />
        <button className='search-button' onClick={() => {
          if (inputValue !== '') dispatch(getWeatherData(inputValue))
        }}>
          <img style={{ width: 18, opacity: 0.9 }} src={searchIcon} alt='search' />
        </button>

      </div>
      {loader && <Loader />}
      {errdata && <p className="error">City Not Found !</p>}
    </div>
  )
}

