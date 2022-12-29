import React from 'react'
import SingleBlog from '../components/SingleBlog'
import { connect } from 'react-redux'

const BlogsList = props => {
  return (
  <>
  <h1 className='text-center my-5'>Blog Page</h1>
    <div className='row g-5'>
        {props.pvalue.map((fd,i)=>(

        <SingleBlog key={i} {...fd}/>
        ))}
    </div>
  </>
  )
}

const mapStateToProps=(state)=>{
    return{
        pvalue:state.br
    }
}

export default connect(mapStateToProps)(BlogsList)