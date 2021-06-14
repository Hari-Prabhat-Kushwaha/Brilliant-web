import React from 'react'
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import pimg1 from "./images/pimg1.jpg";
import pimg2 from "./images/pimg2.jpg";
import pimg3 from "./images/pimg3.jpg";
import pimg4 from "./images/pimg4.jpg";
import pimg5 from "./images/pimg5.jpg";
function Puzzles() {
    return (
        <div className="introduction">
            <div className="secondpage">
            <div className="circle">3</div>
    <h3>Puzzles and Riddles</h3>
        <p className="para">Even trickier puzzles and the tools you need to solve them.</p>
        </div>
    <Container >
  <Row>
    <Col xs={6} md={4}>
   
    <Card className="card">
  <Card.Img variant="top" src={pimg1} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Werewolves</Card.Title>
    <Card.Text>
    Who's a werewolf?
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
   <Card className="card">
 <Card.Img variant="top" src={pimg2} />
 <div className="text middle">Included with
Brilliant Premium</div>
 <Card.Body>
   <Card.Title>Logical Language</Card.Title>
   <Card.Text>
   Explore the logical use of the words "and", "or", and "not".
   </Card.Text>
 </Card.Body>
</Card>

   </Col>
   <Col xs={6} md={4}>
   
   <Card className="card">
 <Card.Img variant="top" src={pimg3} />
 <div className="text middle">Included with
Brilliant Premium</div>
 <Card.Body>
   <Card.Title>If A, then B.</Card.Title>
   <Card.Text>
   If you do this quiz, you will learn about sentences like this one
   </Card.Text>
 </Card.Body>
</Card>

   </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img variant="top" src={pimg4} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Elimination Grids</Card.Title>
    <Card.Text>
    Solve classic logic elimination puzzles.
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img variant="top" src={pimg5} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Jigsaw Map</Card.Title>
    <Card.Text>
    Where do the pieces go on the map?
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
  </Row>

</Container>
        </div>
    )
}

export default Puzzles
