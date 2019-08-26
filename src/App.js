import React, {Component} from 'react'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

import Home from './pages/Home/Home'
import User from './pages/User/User'



/* 
应用的根组件
 */
export default class App extends Component {


    render () {
        return (
          
            <BrowserRouter>
            <Switch> {/*只匹配其中一个*/}
              <Route path='/home' component={Home}></Route>
              <Route path='/user' component={User}></Route>
              <Redirect to='/home'/>
            </Switch>
          </BrowserRouter>
        )
    }
  }