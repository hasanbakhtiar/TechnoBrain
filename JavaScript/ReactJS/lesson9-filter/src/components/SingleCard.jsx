import React from "react";

const SingleCard = ({title,photo,description,price}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card" >
        <img src={photo} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description.substr(0,30)}
          </p>
          <p>{price}</p>
         
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
