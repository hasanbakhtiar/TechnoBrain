import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import { addBlog } from '../../../actions/blogAction'
import { useNavigate } from 'react-router-dom'

const AddBlog = props => {
  const navigate = useNavigate();
  return (
    <>
        <h1 className='text-center my-5'>Add Blog</h1>
        <BlogForm blogSubmit={(fd)=>{
          props.dispatch(addBlog(fd));
          navigate('/blogs')
        }}/>
    </>
  )
}

export default connect()(AddBlog)