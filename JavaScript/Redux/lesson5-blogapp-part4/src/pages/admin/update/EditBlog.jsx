import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'
import { editBlog, removeBlog } from '../../../actions/blogAction'

const EditBlog = props => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-center my-5'>EditBlog</h1>
      <BlogForm editblog={props.pvalue} 
      blogSubmit={(fd)=>{
        props.dispatch(editBlog(props.pvalue.id,fd));
        navigate('/admin')

      }}
      />
      <button className='btn btn-danger' onClick={()=>{
        props.dispatch(removeBlog({id:props.pvalue.id}))
      }}>Delete</button>
    </div>
  )
}


const MapStateToProps =(state)=>{
  const {url} = useParams();
  return({
    pvalue:state.find(p=>p.id === url)
  })
}


export default connect(MapStateToProps)(EditBlog)