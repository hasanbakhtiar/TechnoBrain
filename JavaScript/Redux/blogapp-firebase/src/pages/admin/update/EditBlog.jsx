import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import {  editBlogFromDatabase, removeBlogFromDatabase } from '../../../actions/blogaction'

const EditBlog = props => {
  return (
    <div>
      <h1 className='text-center my-5'>EditBlog</h1>
      <BlogForm editblog={props.pvalue} 
      blogSubmit={(fd)=>{
        props.dispatch(editBlogFromDatabase(props.pvalue.id,fd));
        props.history.push('/admin')
      }}
      />
      <button className='btn btn-danger' onClick={()=>{
        props.dispatch(removeBlogFromDatabase(props.pvalue.id))
        props.history.push('/admin')
      }}>Delete</button>
    </div>
  )
}


const mapStateToProps =(state,props)=>{
  return({
      pvalue: state.br.find((b)=>{
        return b.id === props.match.params.id
      })
  })
}


export default connect(mapStateToProps)(EditBlog)