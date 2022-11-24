import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
import { CartProvider } from "react-use-cart";
const AppRouter = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
