import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
  return (
   <div className='col-12 col-sm-6 col-md-4'>
        <div className="card" >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="." className="btn btn-primary">Read more</Link>
        </div>
        </div>

   </div>
  )
}

export default SingleBlog