import React from 'react'
import { connect } from 'react-redux'
import SingleTable from '../../components/SingleTable'

const Dashboard = props => {
  return (
    <>
    <h1 className='text-center my-5'>Blog Admin Dashboard</h1>
    <button className='btn btn-dark'>Add</button>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Blog Img</th>
      <th scope="col">Blog Title</th>
      <th scope="col">Blog description</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
  {props.pvalue.map((fd,i)=>(
   <SingleTable key={i} {...fd}/>
   ))}
  </tbody>
</table>
    </>
  )
}

const mapStateToProps=(state)=>{
    return{
        pvalue:state
    }
}
export default connect(mapStateToProps)(Dashboard)
