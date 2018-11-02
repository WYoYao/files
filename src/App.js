import React, { Component } from 'react';
import {Route,HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore,combineReducers } from 'redux';
import * as redux from 'redux';
import * as router from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import Home from './components/home/index';
import About from './components/about/index';
import NotFound from './components/notfound/index';
import Menus from './components/menus/index';

console.log(redux);
console.log(router);




// const os = window.require('os') // not be : var os = require('os')
// console.log("got:", os.cpus())

let store = createStore(combineReducers({
  a:()=>({})
}));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Route exact path="/" component={Menus}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </HashRouter>
    </Provider>
    )
  }
}

export default Root;
