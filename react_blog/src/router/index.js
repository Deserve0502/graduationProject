import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Index from '../pages/index'
import Admission from '../common/admission'
import { BrowserRouter, withRouter, Switch, Redirect, Route, Fragment,hashHistory } from 'react-router-dom'
import ScrollToTop from '../common/scrollToTop'
import { Provider } from 'mobx-react'
import store from '../store'
import Login from '../pages/login'
import Found from '../pages/found'

import { observer } from 'mobx-react'
@observer
export default class Router extends Component {
  
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
            <ScrollToTop>
              <Switch>
              
              <Route exact path='/' component={Admission} />
              <Route exact path='/index' component={Index} />
              <Route path='/login' component={Login} />
              <Route exact path='/found' component={Found} />
              </Switch>
              </ScrollToTop>
            </BrowserRouter>
            </Provider>
)
}
}