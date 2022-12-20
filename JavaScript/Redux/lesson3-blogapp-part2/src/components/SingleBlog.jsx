import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlog = ({title,desc,id,img}) => {
  return (
   <div className='col-12 col-sm-6 col-md-4'>
        <div className="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <Link to={`/blogs/${id}`} className="btn btn-primary">Read more</Link>
        </div>
        </div>

   </div>
  )
}

export default SingleBlog