import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const API_key="389b6125cad44d5cb7e211518212812";
const Weather= props =>
{  
    
    const {Name}= useParams();
    const [location, SetLocation ]=useState(Name);
      const [weatherr,setWeatherr]=useState({
         name : location,
        tempreture : 10 ,
          icon : '//cdn.weatherapi.com/weather/64x64/night/116.png'
      });
   
        const newloc =() =>
        {
            return({Name});
        }
    const update= async () =>
    {
        const waitres= await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${location}&aqi=no`)
         const data= await waitres.json();
         const newweather= 
         {
             name : data.location.name ,
             icon : data.current.condition.icon ,
             tempreture : data.current.temp_c
             
         }
         setWeatherr(newweather);
    }
    useEffect(update, [Location]);
   return(

<div className='weather-page'>
    <h1>WEATHER FORECAST</h1>
    <h4>{weatherr.name}</h4>
    <h2>{weatherr.tempreture} C°</h2>
    <img src={weatherr.icon} alt='help'/>
    </div>
    )
}
export default Weather