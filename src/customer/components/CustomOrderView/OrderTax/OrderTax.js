import React from 'react';
import './order-tax.scss';

var OrderTax = React.createClass({

    propTypes: {
        orderTax: React.PropTypes.number
    },

    render: function() {
        return (
                <tr className="order-total-tax">
                    <td className="title">Tax</td>
                    <td>SGST(2.5%) + CGST(2.5%)</td>
                </tr>
        )
    }
});

export default OrderTax
