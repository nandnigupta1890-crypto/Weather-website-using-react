import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
export default function SearchBox({updateInfo}) {
    let[city, setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d41a6276fac4d75989fa35fda1593ed1";
    
    let weatherInfo = async()=>{
        try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city:city,
            temp : jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        };
        console.log(result);
        return result;

        }catch(err){
            throw(err);
        }
       
    }
    let  handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        try{
                e.preventDefault();
               console.log(city);
               setCity("");
                let newInfo = await weatherInfo();
                updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    
    }
    return (
        <div className = "searchBox">
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined" value = {city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            { error && <p style={{color:"red"}}>"No such place found!"</p>}
            </form>
        </div>
    )
}