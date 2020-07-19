import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import _ from 'lodash';
import './menu-section.scss';

var MenuSection = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        slug: React.PropTypes.string,
        handleAddItemToOrder: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        toggleErrorNotification: React.PropTypes.func
    },

    render: function() {
        // var menuSection = _.find(this.props.data.shops[0].menu, {"slug": this.props.slug});
        var menuSection = this.props.data;
        var sectionTitle = "menuSection.displayName;";
        var options = ["quantity"]
        var menuItems = menuSection.map(
            (item, index) => {
                return <MenuItem
                    itemName={item.name}
                    price={item.price}
                    options={options}
                    key={item._id}
                    image={item.photo}
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    calculateTotalAndTax={this.props.calculateTotalAndTax}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
            });

        return (
            <section className="menu-section">
                {/* <h2>{sectionTitle}</h2> */}
                    {menuItems}
                <div className="divider"></div>
            </section>
        )
    }
});


export default MenuSection;
