import React from 'react';
import {weatherKey} from '../keys';

class Weather extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            // http://api.openweather.map.org/data/2.5/weather?lat={lat}&lon={lon}
            let xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    if (xmlhttp.status === 200) {


                    } else if (xmlhttp.status === 400) {
                        console.log('status 400');
                    } else {

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
        return(
            <div className='weather-component'>
                <div>This is weather</div>
            </div>
        )
    }
}

export default Weather;