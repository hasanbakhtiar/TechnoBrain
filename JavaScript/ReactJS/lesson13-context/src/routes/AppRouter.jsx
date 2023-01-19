import React from "react";
import Header from "../components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import AddMovies from "../pages/AddMovies";
import { Container } from "react-bootstrap";
import { MovieProvider } from "../context/MovieContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
            <MovieProvider>
            <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/add" element={<AddMovies />}></Route>
        </Routes>
      </Container>
            </MovieProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
