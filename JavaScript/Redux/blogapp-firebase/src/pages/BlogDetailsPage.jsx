import React from 'react'
import BlogDetailsItem from '../components/BlogDetailsItem'
import { connect } from 'react-redux'

const BlogDetailsPage = props => {
    
  return (
      <BlogDetailsItem {...props.pvalue}/>
  )
}

const mapStateToProps = (state,props) =>{
  return{
    pvalue: state.br.find((q)=>{
      return q.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(BlogDetailsPage)