import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({title,price}) => {
  return (
   <Col sm={6} md={4}>
            <Card >
     
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {price}$
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
   </Col>
  )
}

export default SingleCard