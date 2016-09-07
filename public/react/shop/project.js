import React from "react";
import {
    render
    } from "react-dom";

import {
    Router,
    Route,
    Link,
    hashHistory
    } from 'react-router';

import Login from "./login/login.js";
import Reg from "./reg/reg.js";
import Shopcar from "./shopcar/shopcar.js";
import Pagemain from "./pagemain/pagemain.js";
import Homepage from "./homepage/homepage.js";
import Order from "./order/order.js"

render((
    <Router history={ hashHistory }>
        <Route path="/" component={ Homepage } />
        <Route path="/homepage" component={ Homepage} />
        <Route path="/order" component={ Order } />
        <Route path="/pagemain/:id" component={ Pagemain } />
        <Route path="/reg" component={ Reg }/>
        <Route path="/shopcar/:id" component={ Shopcar}/>
        <Route path="/login" component={ Login }/>
    </Router>
), project);