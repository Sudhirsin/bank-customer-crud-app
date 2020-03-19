import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import AddNewStaff from '../components/common/AddNewUser'
import ViewAllStaff from '../components/common/ViewAllUser'
import Home from '../components/common/Home'
import Dashboard from '../components/common/Dashboard'
import Login from '../components/auth/Login'
import NotFound from '../components/common/NotFound'
import Edit from '../components/common/Edit'

function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/dashboard" component = {Dashboard} />
                <Route path="/addNewUser" component = {AddNewStaff} />
                <Route path="/login" component = {Login} />
                <Route path="/viewAllUser" exact component = {ViewAllStaff} />
                <Route path="/edit/:id" component = {Edit} />
                <Route component = {NotFound} />
            </Switch>  
        </React.Fragment>
    )
}

export default Routes
