import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

const BlogDetailsPage = props => {
    const {id} = useParams();
    const detailsItem = props.pvalue.find(p=>p.id == id)
    
  return (
    <div>
        <img src={detailsItem.img} alt="" />
        <h4>{detailsItem.title}</h4>
        <p>{detailsItem.desc}</p>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        pvalue:state
    }
}
export default connect(mapStateToProps)(BlogDetailsPage)