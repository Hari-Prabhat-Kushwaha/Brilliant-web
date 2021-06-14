import React from 'react';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function Knights() {
    return (
        
             <div className="introduction">
            <div className="secondpage">
            <div className="circle">7</div>
    <h3>Advanced Knights and Knaves</h3>
        <p className="para">Uncover liars on this island of logic! Collapse
</p>
        </div>
    <Container >
  <Row>
    <Col xs={6} md={4}>
   
    <Card className="card">
  <Card.Img variant="top" src={img3} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Warmup Puzzles</Card.Title>
    <Card.Text>
    Get started with some logic warmups.
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img variant="top" src={img4} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Truth-Seeking</Card.Title>
    <Card.Text>
    Who or what is telling the truth?
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img variant="top" src={img5} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Strategic Deductions</Card.Title>
    <Card.Text>
    Stretch the information you're given as far as it can go!
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
  <Card.Img variant="top" src={img3} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Warmup Puzzles</Card.Title>
    <Card.Text>
    Get started with some logic warmups.
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img variant="top" src={img4} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Truth-Seeking</Card.Title>
    <Card.Text>
    Who or what is telling the truth?
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    <Col xs={6} md={4}>
   
     <Card className="card">
  <Card.Img variant="top" src={img4} />
  <div className="text middle">Included with
Brilliant Premium</div>
  <Card.Body>
    <Card.Title>Truth-Seeking</Card.Title>
    <Card.Text>
    Who or what is telling the truth?
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    
  </Row>

</Container>
        </div>
    )
}

export default Knights
