import React from 'react'
import {Switch, Route } from "react-router-dom";
import Settings from '../../Views/Settings/Settings';
import Profile from '../../Views/Profile/Profile';
import Dashboard from '../../Views/Dashboard/Dashboard';
import Products from '../../Views/Products/Products';
import Login from '../../Views/Login/Login';

export default function Switches(props) {
    return (
        <Switch>
          <Route path="/admin/products"                  component={Products} />
          <Route path="/admin/settings"                  component={Settings}/>
          <Route path="/admin/profile"                   component={Profile} />
          <Route path="/admin/dashboard"                 component={Dashboard}/>
          <Route path="/"                                component={Login}/>
       </Switch>
    )
}
