import React from 'react';
import {weatherKey} from '../keys';

class Weather extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     temp: 0,
        //     city: 'San Francisco'
        // }
    }

    componentDidMount() {
        let that = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            // console.log(position);
            // http://api.openweather.map.org/data/2.5/weather?lat={lat}&lon={lon}
            let xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    if (xmlhttp.status === 200) {
                        const weatherData = JSON.parse(xmlhttp.responseText);
                        let temp = Math.floor((weatherData.main.temp - 273.15) * 9 / 5 + 32);

                        that.setState({ 
                            temp: temp, 
                            city: weatherData.name 
                        })

                    } else if (xmlhttp.status === 400) {
                        console.log('status 400');
                    } else {
                        console.log('not good');
                    }
                }
            }

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;


            xmlhttp.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&id=524901&APPID=${weatherKey.APIKEY}`, true);
            xmlhttp.send();
        });
    }

    render() {

        if (this.state === null) return null;

        return(
            <div className='weather-component'>Weather
                <div className='weather-container'>
                    <div className='temp-container'>
                        <div className='temp-label'>Temperature:</div>
                        <div className='temp'>{this.state.temp}&deg;F</div>
                    </div>
                    <div className='city-container'>
                        <div className='city-label'>City:</div>
                        <div className='city'>{this.state.city}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Weather;