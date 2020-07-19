import React from 'react';
import './order-ready-time.scss';
import cookie from 'js-cookie';

var OrderReadyTime = React.createClass({

    propTypes: {
        methodOfTrans: React.PropTypes.string,
        pickupTime: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        duration: React.PropTypes.string,
        expectedPickupTime: React.PropTypes.string
    },

    render: function () {
        let type = cookie.get("type")

        var pickupTime;
        if (this.props.pickupTime === true) {
            pickupTime = <div className="order-ready-time-container">
                {type=="Dine In" ? 
                <h2 className="order-ready-time-pickup">Your order is being prepared, 
                and we will serve you soon at your table!
                </h2> : 
                 <h2 className="order-ready-time-pickup">Your order is being prepared, 
                 Pick it up after 20 Minutes!
                 </h2>}
            </div>
        } else {
            pickupTime = <div className="order-ready-time-container">
                <h2>Your order will be ready at {this.props.pickupTime}</h2>
                <div className="order-ready-time-divider"></div>
            </div>
        }


        return (
            <div>
                {pickupTime}
            </div>
        )
    }
});

export default OrderReadyTime;
