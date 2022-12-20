import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BlogsList from "../pages/BlogsList";
import Nav from "../components/Nav";
import NotFoundPage from "../pages/NotFoundPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import Dashboard from "../pages/admin/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<BlogsList />}></Route>
          <Route path="/blogs/:id" element={<BlogDetailsPage />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
