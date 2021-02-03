import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './antd.min.css'
import Index from './pages/index'
import Admission from './common/admission'
import { BrowserRouter, withRouter, Switch, Redirect, Route, Fragment,hashHistory } from 'react-router-dom'
import Regist from './pages/regist'
import { Provider } from 'mobx-react'
import store from './store'
import Login from './pages/login'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  
    <Switch>
    
    <Route exact path='/' component={Admission} />
    <Route exact path='/index' component={Index} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/regist' component={Regist} />
    </Switch>
    
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


