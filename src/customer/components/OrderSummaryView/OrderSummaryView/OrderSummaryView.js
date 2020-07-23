import React from 'react';
import OrderTotal from '../../CustomOrderView/OrderTotal/OrderTotal';
import SpecialInstructionsOS from '../SpecialInstructionsOS/SpecialInstructionsOS';
// import Footer from '../../DashboardView/Footer/Footer';
import { Link } from 'react-router';
import '../../App/app.scss';
import './order-summary.scss';
import request from "superagent"
import _ from 'lodash';
import moment from "moment"
import axios from "axios"
import cookie from 'js-cookie';
import { json } from 'd3';

class OrderSummaryView extends React.Component {

    // propTypes: {
    //     items: React.PropTypes.array,
    //     handleDeleteItemFromOrder: React.PropTypes.func,
    //     specialInstructions: React.PropTypes.string,
    //     handleOrderSubmit: React.PropTypes.func
    // },

    state = {

        username: '',
        userLocation: {
            lat: '',
            lng: ''
        },
        shops: [],
        selectedShop: {},
        selectedShopLocation: {
            lat: '',
            lng: ''
        },
        distance: '',
        duration: '',
        durationSeconds: undefined,
        items: [],
        specialInstructions: '',
        notification: {
            add: false,
            delete: false,
            error: false,
            form: false,
            additionalInfo: false,
            userLocation: false
        },
        methodOfTrans: '',
        methodOfTransShow: true,
        pickupTime: true,
        expectedPickupTime: '',
        favorite: false,
        paymentInfo: {
            nameOnCard: '',
            cardNumber: undefined,
            expMonth: '',
            expYear: '',
            cvv: undefined
        },
        previousOrders: [],
        favoriteOrders: [],
        menuShow: false,
    }


    componentWillMount() {

        console.log("fsfsf", cookie.get("items"))

        this.setState({
            items: this.props.location.state ? this.props.location.state.items : []
        })

    }

    handleDeleteItemFromOrder = (index) => {
        var items = this.state.items;
        items.splice(index, 1);
        let arr = JSON.parse(cookie.get("addedOrder"));
        arr.splice(index, 1)
        cookie.set("addedOrder", arr)
        this.setState({
            items: items
        })
    }

    handleOrderSubmit = () => {

        if (this.state.pickupTime === true) {
            var expectedPickupTime = moment().add(this.state.durationSeconds, 's').format('LT');
        } else {
            var expectedPickupTime = '';
        }

        var date = moment().format('l');
        var time = moment().format('LT');



        let arr = []

        this.props.location.state.items.forEach(item => {
            let data = {}
            data.item = item.itemName
            data.quantity = item.quantity

            arr.push(data)
        })

        const data = {
            "price": parseInt(cookie.get("amount")),
            "isCashOnDelivery": true,
            "isPaymentReceived": false,
            "isDelivered": false,
            "noOfSeatsRequested": parseInt(cookie.get("seatNumber")),
            "userName": cookie.get("username"),
            "orders": arr,
            "noOfSeatsRequested": parseInt(cookie.get("seatNumber")),
            "orderType": cookie.get("type"),
            "instruction": cookie.get("specialInstrctions")

        }

        axios.post("https://scankar.herokuapp.com/api/v1/customer-order/create-order", data).then(res => {
            console.log("afeter submit", res)
            cookie.set("addedOrder" , null)
            cookie.remove("specialInstrctions")
            window.location.href = `/${this.props.params.id}/confirmation`
        })

        this._handleStateClear();
    }

    _handleStateClear = function () {
        this.setState({
            items: [],
            specialInstructions: '',
            methodOfTrans: '',
            favorite: false,
            paymentInfo: {
                nameOnCard: '',
                cardNumber: undefined,
                expMonth: '',
                expYear: '',
                cvv: undefined
            },
        })
    }


    render = function () {


        return (
            <div>
                <div className="main-wrap">
                    <div className="order-summary-container">
                        <div className="title-cover">
                            <h1>Order Summary</h1>
                            <div className="userProgress">
                                <div id="fourOfFive">
                                </div>
                            </div>
                        </div>

                        <div className="os-order-total-container">
                            <OrderTotal
                                orderItems={JSON.parse(cookie.get("addedOrder"))}
                                handleDeleteItemFromOrder={this.handleDeleteItemFromOrder} />
                        </div>

                        <SpecialInstructionsOS
                            specialInstructions={this.state.specialInstructions} />

                        {JSON.parse(cookie.get("addedOrder")).length != 0 &&

                            <div className="order-summary-link">
                                <button
                                    onClick={this.handleOrderSubmit}
                                    className="next-button order-summary-button">
                                    Submit Order
                            <i className="fa fa-check fa-lg" aria-hidden="true"></i>
                                </button>
                            </div>
                        }

                        <Link to={`/${this.props.params.id}/custom-order`}>
                            <button className="next-button order-summary-edit-button">
                                Edit my order
                        <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
};

export default OrderSummaryView;
