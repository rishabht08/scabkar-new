import React from 'react';
import ShopList from '../ShopList/ShopList';
// import Footer from '../../DashboardView/Footer/Footer';
import shops from "../../../../dummy-shop-data.json";
import { Link } from 'react-router';
import '../../App/app.scss';
import './select-shop-view.scss';
var QRCode = require('qrcode.react');

class SelectShopView extends React.Component{

    // propTypes: {
    //     shops: React.PropTypes.arrayOf(React.PropTypes.object),
    //     handleSelectedShop: React.PropTypes.func,
    //     notification: React.PropTypes.object
    // },
    state = {
  

            shop:null

        
    }

    componentWillMount(){

        const shopIndex = Math.floor(Math.random() * shops.length); 
        this.setState({
            shop:shops[shopIndex]
        })

    }

    render = function () {

        // var loadingIcon;
        // if (this.props.shops.length === 0) {
        //     loadingIcon = <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>;
        // } else if (this.props.shops.length > 0) {
        //     loadingIcon = <i className="hide fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>;
        // }

        var content;
        // if (!this.props.notification.userLocation) {
        //     content = <div>
        //                 <div className="loading-icon">{loadingIcon}</div>
        //                 <ShopList
        //                     shops={this.props.shops}
        //                     handleSelectedShop={this.props.handleSelectedShop} />
        //               </div>;
        // } else {
        //     content =
        //     <div className="location-notification-container">
        //     <h2>You must allow access to your location to use this app.</h2>
        //     <i className="fa fa-location-arrow fa-5x" aria-hidden="true"></i>
        //     </div>;
        // }

        return (
            <div className="select-shop-container">

                {/* <div className="title-cover">
                    <h1>Select a Shop</h1>
                    <div className="userProgress">
                        <div id="oneOfFive">
                        </div>
                    </div>
                </div> */}

                <div className="random" style={{width:"100%" , "text-align":"center" , "marginTop":"2%"}}>
                    {/* <QRCode value="http://13.233.233.253/" size={700} /> */}
                    <QRCode value={`https://scankar.netlify.app/${this.state.shop.id}`} size={700} />
                </div>

                {/* <div className="main-wrap">
                    <div>
                        <div className="loading-icon">{loadingIcon}</div>
                        <ShopList
                            shops={this.props.shops}
                            handleSelectedShop={this.props.handleSelectedShop} />
                    
                    </div>;
                </div> */}
                {/* <Footer /> */}
            </div>
        )
    }
};

export default SelectShopView;
