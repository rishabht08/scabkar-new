import React from 'react';
import { Link } from 'react-router';
import './previous-orders-view.scss';
import '../../App/app.scss';
import PreviousOrder from '../PreviousOrder/PreviousOrder';
import axios from "axios"
import cookie from 'js-cookie';

class PreviousOrdersView extends React.Component{

    getInitialState = function () {
        return {
            orders:[]
        }
    }

    componentWillMount = function() {
        // this.props.handlePreviousOrders();
        console.log("aaa",cookie.get("username"))
        axios.get(`http://gomocha.herokuapp.com/api/users/${cookie.get("username")}/orders/previous` , {headers:{crossorigin:true}}).then(res=>{
        console.log("ada",res)    
        this.setState({
                orders:res.data
            })
        })
    }

    render = function() {

        var previousOrders = this.state.orders ? this.state.orders.map(function(order, index) {
            return <PreviousOrder
                previousOrder={order}
                key={index} />
        }) : (<div></div>)

        return (
            <div className="previous-orders-container">
                <div className="title-cover">
                    <h1>Previous Orders</h1>
                </div>
                <div className="previous-orders-wrap">
                {previousOrders}
                </div>
            </div>
        )
    }
}

export default PreviousOrdersView;
