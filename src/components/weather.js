import React from 'react';

class Weather extends React.Component{


    render(){
        return(
            <div>
                {this.props.city &&
                
                    <div>
                        <p>Местоположения:{this.props.city}, {this.props.country}</p>
                        <p>Местоположения:{this.props.temp}</p>
                        <p>Местоположения:{this.props.sunrise}</p>
                    </div>
                
                }
            </div>
        );
    }
}


export default Weather;