import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const Movies = () => {
    const [movies,setMovies] = useContext(MovieContext)
  return (
    <Row className='g-5'>
        {movies.map(data=>(
            <SingleCard title={data.title} price={data.price} key={data.id}/>

        ))}
    </Row>
  )
}

export default Movies