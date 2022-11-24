import React from "react";
import SingleCart from "../components/SingleCart";
import product from "../data/product";
const Products = () => {
  return (
    <div className="container mt-5">
      <h1 className="my-5 text-center">Book Shop</h1>
     <div className="row g-5">
     {product.map((fd,i) => {
       return <SingleCart
       img={fd.photo}
          title={fd.title}
          auther={fd.auther}
          color={fd.color}
          price={fd.price}
          cartdata ={fd}
          key={i}
        />;
      })}
     </div>
    </div>
  );
};

export default Products;
