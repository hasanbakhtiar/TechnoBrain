import React, { Component } from "react";
import product from "../data/product";
import Card from "./Card";

class CardList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row g-3">
          {product.map((fd,i) => (
            <Card
              key={i}
              brandtitle={fd.brandname}
              modeltitle={fd.model}
              color={fd.color}
              image={fd.photo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
