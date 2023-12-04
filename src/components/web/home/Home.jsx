import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <div className='conatiner m-5'>
      
      <Card className="text-center p-5 border-0 text-uppercase">
     
      <Card.Body>
        <Card.Title><h1 >Everything you need</h1></Card.Title>
        <Card.Text>
        Welcome to Washab, start your tour now and find what you want.
        </Card.Text>
        <Button variant="warning">Explore Now</Button>
      </Card.Body>
     
    </Card>
    </div>
  )
}

export default Home