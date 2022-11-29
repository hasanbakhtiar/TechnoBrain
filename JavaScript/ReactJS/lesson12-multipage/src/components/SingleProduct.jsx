import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({id,photo,title,desc}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
        <div className="card" >
        <img height={400} src={photo} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc.substr(0,30)}...</p>
            <Link to={`/products/${id}`} className="btn btn-primary">Details</Link>
        </div>
        </div>

    </div>
  )
}

export default SingleProduct