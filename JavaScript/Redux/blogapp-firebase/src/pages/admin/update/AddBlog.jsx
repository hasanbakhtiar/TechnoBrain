import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import { addBlogToDatabase } from '../../../actions/blogaction'

const AddBlog = props => {
  return (
    <>
        <h1 className='text-center my-5'>Add Blog</h1>
        <BlogForm blogSubmit={(fd)=>{
          props.dispatch(addBlogToDatabase(fd));
          props.history.push('/admin')
        }}/>
    </>
  )
}

export default connect()(AddBlog)