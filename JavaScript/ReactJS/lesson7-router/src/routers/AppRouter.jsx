import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Nav from '../components/Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';

export class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
              <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route  component={NotFoundPage}></Route>
              </Switch>
        </BrowserRouter>
    )
  }
}

export default AppRouter