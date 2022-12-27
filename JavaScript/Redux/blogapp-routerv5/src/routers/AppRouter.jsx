import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import BlogsList from "../pages/BlogsList";
import Nav from "../components/Nav";
import NotFoundPage from "../pages/NotFoundPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";
import Login from "../pages/auth/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home }></Route>
          <Route path="/blogs" exact component={BlogsList }></Route>
          <Route path="/blogs/:id"  component={BlogDetailsPage }></Route>
          <Route path="/login" component={Login }></Route>
          <Route path="/admin" exact component={Dashboard }></Route>
          <Route path="/add" component={AddBlog }></Route>
          <Route path="/edit/:url" component={EditBlog }></Route>
          <Route component={NotFoundPage }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
