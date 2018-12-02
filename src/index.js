import React from 'react';
import ReactDOM from 'react-dom';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import store from './store.js'
import {Provider,connect} from 'react-redux'

import './asset/css/swiper.css'
import './asset/css/index.css'


import App from './view/App';
const Basic = () =>{
    return (
    <Router>
      <div className='router'>
        <Route exact path="/" component={App}/>
      </div>
    </Router>
  )}




ReactDOM.render(
    <Provider store={store}>
      <Basic />
    </Provider>,
    document.getElementById('root')
  )
