import React from "react";
import SingleProduct from "../components/SingleProduct";
import productdata from "../data/productdata";

const ProductLists = () => {
  return (
    <div className="row g-5">
      {productdata.map((fd, i) => (
        <SingleProduct 
         key={i}
         photo={fd.image} 
         title={fd.title}
         desc={fd.description}
         id={fd.id}
          />
      ))}
    </div>
  );
};

export default ProductLists;
