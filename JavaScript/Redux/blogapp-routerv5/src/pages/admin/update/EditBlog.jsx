import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../../actions/blogAction'

const EditBlog = props => {
  return (
    <div>
      <h1 className='text-center my-5'>EditBlog</h1>
      <BlogForm editblog={props.pvalue} 
      blogSubmit={(fd)=>{
        props.dispatch(editBlog(props.pvalue.id,fd));
        props.history.push('/admin')
      }}
      />
      <button className='btn btn-danger' onClick={()=>{
        props.dispatch(removeBlog({id:props.pvalue.id}))
        props.history.push('/admin')
      }}>Delete</button>
    </div>
  )
}


const mapStateToProps =(state,props)=>{
  return({
      pvalue: state.find((b)=>{
        return b.id === props.match.params.id
      })
  })
}


export default connect(mapStateToProps)(EditBlog)