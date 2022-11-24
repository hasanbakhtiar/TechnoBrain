import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    cartTotal
    ,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)  return (
    <div className="d-flex align-items-center justify-content-center">
      <img
        src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"
        alt="err"
      />
    </div>
  );
  return (
<div className="container ">
  <h1 className='text-center my-5'>Cart List</h1>
<div className="col-12">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
{items.map((fd,i)=>{
 return <tr key={i}>
  <th scope="row">{i+1}</th>
  <td><img width={70} src={fd.photo} alt={fd.title} /></td>
  <td>{fd.title}</td>
  <td>{fd.price*fd.quantity}$</td>
  <td><button className='btn btn-primary' onClick={()=>{updateItemQuantity(fd.id,fd.quantity-1)}}>-</button>
  <span className='mx-2'>{fd.quantity}</span>
  <button className='btn btn-primary' onClick={()=>{updateItemQuantity(fd.id,fd.quantity+1)}}>+</button>
  </td>
  <td><button className='btn btn-danger' onClick={()=>{removeItem(fd.id)}}>delete</button></td>
</tr>
})}

  
 
  </tbody>
</table>
<h3>Total Price: {cartTotal}$</h3>
</div>
</div>

  )
}

export default Cart