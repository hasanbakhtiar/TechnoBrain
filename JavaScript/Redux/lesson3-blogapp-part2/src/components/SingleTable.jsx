import React from 'react'
import { Link } from 'react-router-dom'

const SingleTable = ({img,title,desc,id}) => {
  return (
    <tr>
    <th scope="row">1</th>
    <td><img width="50" src={img} alt={title} /></td>
    <td>{title}</td>
    <td>{desc}</td>
    <td><Link to="." className='btn btn-warning'>Edit </Link></td>
  </tr>
  )
}

export default SingleTable