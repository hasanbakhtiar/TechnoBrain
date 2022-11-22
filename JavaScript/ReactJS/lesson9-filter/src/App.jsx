import React, { useState } from 'react'
import SingleCard from './components/SingleCard'
import product from './data/product'

const App = () => {
  const [filterdata,setFilterdata] = useState(product);
  
  
  const filterResult=(comingData)=>{
      const result = product.filter((fdata)=>{
          return fdata.category === comingData;
      })
      setFilterdata(result);
  }
  
  
  return (
    <div className='container mt-5'>
    <div className="my-3">
      <button onClick={()=>{filterResult('electronics')}} className='btn btn-primary ms-3'>electronics</button>
      <button onClick={()=>{filterResult('women')}} className='btn btn-warning ms-3'>women's clothing</button>
      <button onClick={()=>{filterResult('jewelery')}} className='btn btn-success ms-3'>jewelery</button>
    </div>
       <div className="row">
       {filterdata.map((fd,i)=>{
          return <SingleCard title={fd.title}
          description={fd.description}
          photo={fd.image}
          price={fd.price}
          key={i}
          />
        })}
       </div>
    </div>
  )
}

export default App