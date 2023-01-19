import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
const AddMovies = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [movies,setMovies] = useContext(MovieContext)
  const navigate = useNavigate();
  const addMovies = (e) => {
    e.preventDefault();
    setMovies(prevMovies=>[...prevMovies,{title:title,price:price}]);
    navigate('/movies')

  };
  return (
    <>
      <h1 className="my-5 text-center">Add Movie</h1>
      <div className="d-flex align-items-center justify-content-center">
        <Col md={6}>
          <Form onSubmit={addMovies}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Publish
            </Button>
          </Form>
        </Col>
      </div>
    </>
  );
};

export default AddMovies;
