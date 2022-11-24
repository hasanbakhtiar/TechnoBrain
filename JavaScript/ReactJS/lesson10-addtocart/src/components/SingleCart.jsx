import React from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleCart = ({ img, title, auther, color, price, cartdata }) => {
  const { addItem } = useCart();
  const notify = () => toast("Add to card success");
  return (
    <div className="col-12 col-sm-12 col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{auther}</p>
          <p className="card-text">{color}</p>
          <p className="card-text">{price}$</p>
          <button
            onClick={() => notify(addItem(cartdata))}
            className="btn btn-primary"
          >
            Add to cart
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
