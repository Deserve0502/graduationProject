import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './antd.min.css'
import Index from './Pages/index'
import Admission from './Compontents/admission'
import { BrowserRouter, withRouter, Switch, Redirect, Route, Fragment,hashHistory } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from './store'
import Login from '../src/Pages/login'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  
    <Switch>
    {/* <Page /> */}
    {/* <Redirect exact from="/" to="/choose"></Redirect> */}
   
    <Route exact path='/' component={Admission} />
    <Route exact path='/index' component={Index} />
    <Route exact path='/login' component={Login} />
    </Switch>
    
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


