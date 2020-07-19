import React from 'react';
import './shop-details.scss';
import cookie from 'js-cookie';

var ShopDetails = React.createClass({

    propTypes: {
        selectedShop: React.PropTypes.object,
        distance: React.PropTypes.string
    },

    render: function () {

        console.log("prop", this.props.selectedShop)
        // let dining = JSON.parse(cookie.get("dining"))

        let shop = JSON.parse(cookie.get("shopDetails")).length != 0 ? JSON.parse(cookie.get("shopDetails"))[0] : {}


        // var selectedShop = this.props.selectedShop;


        return (
            <div className="shop-details-container">
                <h2>{shop.name}</h2>
                <p>{shop.vicinity}</p>

                <p>{shop.rating}</p>
                <img src={shop.icon} />
                <p>Distance: 0.5 mi</p>
            </div>
        )
    }
});

export default ShopDetails;
