import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const init_URL = "https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=aLitgwfI8yTWUyHX8B80_w2MUsg8f8ieKmkk1UyMziM="
    const hot_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const cold_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rainy_URL="https://media.istockphoto.com/id/472784066/photo/monsoon-over-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=tBFS70k3IOnu9KTQpTvaX4YcYlAopW1McMzTh1IbQ-c=";

    return(
        <div className="infoBox">
        <div className = "cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80?rainy_URL:info.temp>15?hot_URL:cold_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{" "}
          {info.humidity>80?<ThunderstormIcon/>:info.temp>15? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
            <p>temperature:{info.temp}&deg; C</p>
            <p>humidity:{info.humidity}%</p>
            <p>temperature min:{info.tempMin}&deg; C</p>
            <p>temperature max:{info.tempMax}&deg; C</p>
            <p> The weather is described as :{info.weather} and feels like as :{info.feelsLike}&deg; C</p>
        </Typography>
      </CardContent>
    </Card>
  
     </div>
        </div>
    )
}