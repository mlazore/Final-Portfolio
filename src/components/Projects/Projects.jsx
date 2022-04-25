import React from 'react'
import './Projects.css'
import Netflix from "../../images/Netflix.png"
import HopeHack from "../../images/HopeHack.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Netlix from "../../images/Netflix.png"
import HopeHacks from "../../images/HopeHack.png"
import Ecomproject from "../../images/Ecomproject.png"
import HopeSanc from "../../images/HopeSanc.png"

const Projects = () => {
  return (
    <>
    <div className='Title'>
      <h1>Portfolio</h1>
    </div>
    <div className='card-position'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Netflix} />
  <Card.Body>
    <Card.Title>Netflix Redesign</Card.Title>
    <Card.Text>
      This project utilized |HTML | CSS | JS | API|
    </Card.Text>
    <a href='https://github.com/Santosisaac13690/netflix-redesign'target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
    <a href="https://r2h-netflix.herokuapp.com/"target="_blank" rel="noopener noreferrer"><Button variant="primary">Website</Button></a>

  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={HopeHacks} />
  <Card.Body>
    <Card.Title>HOPEHACKS</Card.Title>
    <Card.Text>
      This project utilized |HTML | CSS | JS | API
    </Card.Text>
    <a href='https://github.com/drewwoods55/HOPEhacks'target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
    <a href="http://theordermob.com/"target="_blank" rel="noopener noreferrer"><Button variant="primary">Website</Button></a>

  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Ecomproject} />
  <Card.Body>
    <Card.Title>Ecommerce</Card.Title>
    <Card.Text>
      This project utlizized |HTML | CSS | NODE | MySQL| JS|
    </Card.Text>
    <a href='https://github.com/mlazore/ecommerceVersion2'target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
    <a href="https://martin-ecomproject.herokuapp.com/products"target="_blank" rel="noopener noreferrer"><Button variant="primary">Website</Button></a>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={HopeSanc} />
  <Card.Body>
    <Card.Title>Social Injustice</Card.Title>
    <Card.Text>
      This project utlized |HTML | CSS|
    </Card.Text>
    <a href='https://github.com/TonyLee44/firstGroupProject'target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
    <a href="https://tonylee44.github.io/firstGroupProject/"target="_blank" rel="noopener noreferrer"><Button variant="primary">Website</Button></a>
  </Card.Body>
</Card>
</div>
</>
  )
}

export default Projects