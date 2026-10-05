import { useState } from "react"
import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 28.79,
        humidity: 56,
        temp: 27.82,
        tempMax: 27.82,
        tempMin: 27.82,
        weather: "clear sky"
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
         <h1>Weather App</h1>    
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    )
}