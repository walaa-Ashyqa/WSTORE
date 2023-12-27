import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Categories from '../categories/Categories';
function Home() {
  return (
    <>
    <div className='conatiner m-5 '>
      
      <Card className="text-center p-5 border-0 text-uppercase w-100">
     
      <Card.Body>
        <Card.Title><h1 >Everything you need</h1></Card.Title>
        <Card.Text className='p-2 text-gray '>
       Welcome to Washab, start your tour now and find what you want. 
        </Card.Text>
        <Button className='btn-lg' variant="warning">Explore Now</Button>
      </Card.Body>
     
    </Card>
    </div>
    <div className='conatiner m-5 '>
<Categories/>
    </div>
    </>
  )
}

export default Home