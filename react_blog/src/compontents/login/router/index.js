import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import { BrowserRouter, withRouter, Switch, Redirect, Route, Fragment,hashHistory } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '../../../store'
import { observer } from 'mobx-react'
import LoginUser from '../loginUser.jsx'
import Regist from '../regist.jsx'
@observer
export default class LoginRouter extends Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
              <Switch>
              <Route exact path='/login' component={LoginUser} />
              <Route  path='/login/regist' component={Regist} /> 
              </Switch>  
            </BrowserRouter>
            </Provider>
)
}
}