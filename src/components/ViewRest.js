import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Operatingtime from './Operatingtime';
import Review from './Review';


function ViewRest() {

  const params=useParams()

    const [allrestaurent, setallrestaurent] = useState([])
  
    
    const restaurentdata = async () => {
      await fetch('/restaurants.json').then(data => {
        data.json().then(result => {
          // console.log(result);
          setallrestaurent(result.restaurants)
        })
      })
    }

    //using find to  get object which statisfies the condition first
    const restData= allrestaurent.find(item=>item.id==params.id)
    console.log(restData);
 

    useEffect(() => {
      restaurentdata()
    }, [])


  return (
    <>
    {restData?(
      <Row>
        <Col>
        <Image className='p-5' src={restData.photograph} fluid/></Col>
        <Col>
        <h1 className='mt-5'>{restData.name}</h1>
        <h2>{restData.neighborhood}</h2>
        <h3>ADD:{restData.address}</h3>
        <h4>{restData.cuisine_type}</h4>
        <Operatingtime timedata={restData.operating_hours} className='mt-5'></Operatingtime>
        
        <Review reviewdata={restData.reviews} className='mt-5'></Review>

        </Col>
      </Row>
    ):'null'}
        
    </>
  )
}

export default ViewRest

{/* <Container>
<Card className='mt-4 text-center mb-2' style={{ width: '100%' }}>
    <Card.Img className='p-3 ' variant="top" src={restData.photograph} />
    <Card.Body>
        <Card.Title>{restData.name}</Card.Title>
        <Card.Text>
           {restData.address}
        </Card.Text>
        <Card.Text>
           NEIGHBORHOOD: {restData.neighborhood}
        </Card.Text>
        <Card.Text>
           CUISINE_TYPE: {restData.cuisine_type}
        </Card.Text>

        {/* <Button className='mt-2'>Operating Hours</Button>
<Button className='mt-4'>Customer Reviews</Button>
       
    </Card.Body>
</Card>
</Container> */}