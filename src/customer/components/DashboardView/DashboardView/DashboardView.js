import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';
import '../../App/app.scss';
import './dashboard-view.scss';
import Swal from "sweetalert2"
import axios from "axios";
import cookie from 'js-cookie';
class DashboardView extends React.Component{

    // propTypes = {
    //     username: React.PropTypes.string,
    //     handleClearItemsFromOrder: React.PropTypes.func
    // }

    startButton = function () {
        Swal.fire({
            title: 'What you want?',
            text: "Welcome, with your digital waiter!",
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Take away',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Dine In'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    input: 'number',
                    inputPlaceholder: 'Members?',
                    inputValue: 1,
                    title: 'How many member?',
                    text: "Availability",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Confirm',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33'

                }).then((result) => {
                    if (result.value) {

                        axios.get("http://13.233.233.253:5000/api/v1/info").then(res => {
                            console.log("response", res.data.data.details[2])
                            const seatsAvailable = res.data.data.details[2].seats.seatsAvailable;
                            if (seatsAvailable < result.value) {
                                Swal.fire(
                                    'Sorry',
                                    'Please Wait for some time for the seats to be available',
                                    'warning',

                                )

                            }
                            else {
                                cookie.set("type", "Dine In")
                                cookie.set('dining', res.data.data.details[2])
                                cookie.set("seatNumber", result.value)
                           
                                let table = Math.floor(Math.random() * 25);
                            


                                Swal.fire(
                                    `Booked Table: ${table}`,
                                    `Click Ok to Proceed`,
                                    'success',

                                ).then(() => {
                                    window.location.href = `/${this.props.params.id}/custom-order`

                                })




                            }
                        })




                    }
                })

            } else if ('Take away!') {
                axios.get("http://13.233.233.253:5000/api/v1/info").then(res => {
                    cookie.set('dining', res.data.data.details[2])
                    cookie.set("type", "Take Home")
                    window.location.href = `/${this.props.params.id}/custom-order`

                })

            }
        })
    }

    render= function () {
        return (
            <div className="dashboard-container">
                <div className="title-cover">
                    <h1>Hey {this.props.username}!</h1>
                    <h1>Your coffee is just minutes away.</h1>
                </div>

                <div className="main-wrap">
                    <Link to={`/${this.props.params.id}/category-menu`} className="start-button-wrap">
                        <button
                            // onClick={this.startButton}
                            className="next-button start-button">
                            <i className="fa fa-coffee" aria-hidden="true"></i>
                                    Menu
                            </button></Link>
                </div>
                {/* <div className="dash-landing-icon-wrap">
                    <div className="dash-landing-icon dash-landing-icon-1">
                        <img src="/img/landing-icon-1.png" />
                        <h2>Select a shop</h2>
                    </div>
                    <div className="dash-landing-icon dash-landing-icon-2">
                        <img src="/img/landing-icon-2.png" />
                        <h2>Place your order</h2>
                    </div>
                    <div className="dash-landing-icon dash-landing-icon-3">
                        <img src="/img/landing-icon-3.png" />
                        <h2>Ready when you arrive!</h2>
                    </div>
                </div>
                <Footer /> */}
            </div>
        )
    }
};

export default DashboardView;
