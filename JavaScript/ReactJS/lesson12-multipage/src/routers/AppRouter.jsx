import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import ProductLists from '../pages/ProductLists'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <div className="container">
      <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={ProductLists}exact/>
            <Route path="/products/:comingdata" component={ProductDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter