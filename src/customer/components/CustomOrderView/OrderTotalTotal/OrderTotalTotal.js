import React from 'react';
import './order-total-total.scss';

var OrderTotalTotal = React.createClass({

    propTypes: {
        orderTotal: React.PropTypes.node,
        orderItems: React.PropTypes.array
    },

    render: function() {
        return (
                <tr>
                    <td className="order-total-total">Total</td>
                    <td>Rs. {this.props.orderTotal}</td>
                </tr>
        )
    }
});

export default OrderTotalTotal;
