import React from 'react';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import rimg1 from "./images/rimg1.jpg";
import rimg2 from "./images/rimg2.jpg";
import rimg3 from "./images/rimg3.jpg";
import rimg4 from "./images/rimg4.jpg";
import rimg5 from "./images/rimg5.jpg";
import rimg6 from "./images/rimg6.jpg";

function TheRational() {
    return (
        <div className="introduction">
           <div className="secondpage">
           <div className="circle">2</div>
    <h3>The Rational Detective</h3>
        <p className="para">Eliminate the impossible and uncover the truth! Collapse</p>
        </div>
    <Container >
  <Row>
    <Col xs={6} md={4}>
  
    <Card className="card">
   
   <Card.Img className="image" variant="top" src={rimg1} />
   
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Riddles of Order</Card.Title>
    <Card.Text>
    What order do these racers finish in?
    </Card.Text>
  </Card.Body>
</Card>



    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img className="image" variant="top" src={rimg2} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Crafty Counting</Card.Title>
    <Card.Text>
    Learn strategies for counting that go far beyond just counting.
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
    <Card.Img className="image" variant="top" src={rimg3}  />
  <div  className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Mystery Containers</Card.Title>
    <Card.Text>
    What's in each of these mystery boxes?
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
  </Row>

</Container> 
<Container >
<Row>
<Col xs={6} md={4}>

<Card className="card">
<Card.Img variant="top" src={rimg4} />
<div className="text middle">Included with
Brilliant Premium</div>
<Card.Body>
<Card.Title>Futoshiki</Card.Title>
<Card.Text>
Arrange the numbers to match the inequalities
</Card.Text>
</Card.Body>
</Card>

</Col>
<Col xs={6} md={4}>

<Card className="card">
<Card.Img variant="top" src={rimg5} />
<div className="text middle">Included with
Brilliant Premium</div>
<Card.Body>
<Card.Title>Shuffles</Card.Title>
<Card.Text>
Where did everything get shuffled to?
</Card.Text>
</Card.Body>
</Card>

</Col>
<Col xs={6} md={4}>

<Card className="card">
<Card.Img variant="top" src={rimg6} />
<div className="text middle">Included with
Brilliant Premium</div>
<Card.Body>
<Card.Title>False Information</Card.Title>
<Card.Text>
Solve problems where the people giving you hints might be lying.
</Card.Text>
</Card.Body>
</Card>

</Col>
</Row>

</Container>
        </div>
    )
}

export default TheRational
