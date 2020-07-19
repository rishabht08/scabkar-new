import React from 'react';
import MenuSection from '../MenuSection/MenuSection';
import './menu-form-container.scss';
import cookie from 'js-cookie';

var MenuFormContainer = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        handleAddItemToOrder: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        toggleErrorNotification: React.PropTypes.func,
        handleSpecialInstructions: React.PropTypes.func
    },

    render: function() {
        return (
            <div>
                <h2 style={{"margin-left":"35%"}}>{cookie.get("category")}</h2>
            <form>
                <MenuSection
                    data={this.props.data.slice(0,parseInt(this.props.data.length/2))}
               
                    slug="hot-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
                <MenuSection
                    data={this.props.data.slice(parseInt(this.props.data.length/2) , this.props.data.length)}
                    slug="cold-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
                {/* <MenuSection
                    data={this.props.data}
                    slug="tea"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="bakery"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} /> */}
            </form>
            </div>
        )
    }
});

export default MenuFormContainer;
