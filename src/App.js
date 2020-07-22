import { IndexRoute ,Route, Router } from 'react-router'

import React from 'react'
import App from './customer/components/App/App'
import DashboardView from './customer/components/DashboardView/DashboardView/DashboardView'
import CustomOrderView from './customer/components/CustomOrderView/CustomOrderView/CustomOrderView'
import SelectShopView from './customer/components/SelectShopView/SelectShopView/SelectShopView'
import AdditionalInfoView from './customer/components/AdditionalInfoView/AdditionalInfoView/AdditionalInfoView'
import OrderSummaryView from './customer/components/OrderSummaryView/OrderSummaryView/OrderSummaryView'
import ConfirmationView from './customer/components/ConfirmationView/ConfirmationView/ConfirmationView'
import PreviousOrdersView from './customer/components/PreviousOrdersView/PreviousOrdersView/PreviousOrdersView'
import FavoriteOrdersView from './customer/components/FavoriteOrdersView/FavoriteOrdersView/FavoriteOrdersView'
// import AppBusiness from './business-admin/components/App'
// import BusinessAdminView from './business-admin/components/BusinessAdminView/BusinessAdminView/BusinessAdminView'
import CategoryManuOrdersView from './customer/components/CategoryManuOrdersView/CategoryManuOrdersView'



var Routes = <Router>
    
        <Route path="/:id" component={App}>
            <IndexRoute component={DashboardView} />

            <Route path="/:id/previous-orders" component={PreviousOrdersView} />
            <Route path="/:id/favorite-orders" component={FavoriteOrdersView} />
            <Route path="/:id/custom-order" component={CustomOrderView} />
            <Route path="/:id/additional-info" component={AdditionalInfoView} />
            <Route path="/:id/order-summary" component={OrderSummaryView} />
            <Route path="/:id/confirmation" component={ConfirmationView} />
            <Route path="/:id/category-menu" component={CategoryManuOrdersView} />


        </Route>

        {/* <Route path="/admin" component={AppBusiness}>
        <IndexRoute component={BusinessAdminView} />
    </Route> */}

        <Route path="showcode/select-shop" component={SelectShopView} />



  

</Router>

export default Routes;
