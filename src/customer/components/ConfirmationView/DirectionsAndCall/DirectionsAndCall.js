import React from 'react';
import './directions-and-call.scss';

class  DirectionsAndCall extends React.Component{

  

    render = () =>{

        var callPhone = "tel: " + this.props.selectedShop.formatted_phone_number;

        // Example Google Maps Directions URL
        // 'http://maps.google.com/?saddr=34.1514058,-118.8042592&daddr=34.1482435,-118.7961565'

        var userLocation = this.props.userLocation;
        // var selectedShopAddress = this.props.selectedShop.formatted_address.split(' ').join('+');

        var directions = 'https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1wtdlAk8QjntMdXsQM1VzzPmQXTY&ll=37.99285953591594%2C-122.09891949999998&z=10'


        return (
            <div className="confirmation-button-wrap">
                <a href={directions} target="_blank">
                    <button className="next-button confirmation-button">
                        Directions
                        <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                    </button>
                </a>
                <a href={callPhone}>
                    <button className="next-button confirmation-button">
                        Call Shop
                        <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
                    </button>
                </a>
            </div>
        )
    }
}

export default DirectionsAndCall;
