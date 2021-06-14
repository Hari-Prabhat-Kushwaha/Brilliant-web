import React from 'react'
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import cimg1 from "./images/cimg1.jpg";
import cimg2 from "./images/cimg2.jpg";
import cimg3 from "./images/cimg3.jpg";
import cimg4 from "./images/cimg4.jpg";
import cimg5 from "./images/cimg5.jpg";
function Competitive() {
    return (
        <div className="introduction">
            <div className="secondpage">
            <div className="circle">5</div>
              <h3>Competitive Games</h3>
               <p className="para">What will your opponent do? Logic it out! Collapse</p>
             </div>
             <Container >
               <Row>
                <Col xs={6} md={4}>
                  <Card className="card">
                    <Card.Img variant="top" src={cimg1} />
                        <div className="text middle">Included with
                             Brilliant Premium
                         </div>
                        <Card.Body>
                        <Card.Title>Poisoned Chocolate</Card.Title>
                          <Card.Text>
                            Don't take the last chocolate!
                          </Card.Text>
                         </Card.Body>
                     </Card>

                 </Col>
                 <Col xs={6} md={4}>
                     <Card className="card">
                        <Card.Img variant="top" src={cimg2} />
                          <div className="text middle">Included with
                             Brilliant Premium</div>
                            <Card.Body>
                             <Card.Title>Luk Tsut K'i</Card.Title>
                                    <Card.Text>
                                          Find the complete solution to a classic game.
                                    </Card.Text>
                            </Card.Body>
                        </Card>

                  </Col>
                  <Col xs={6} md={4}>
                     <Card className="card">
                        <Card.Img variant="top" src={cimg3} />
                          <div className="text middle">Included with
                                   Brilliant Premium</div>
                              <Card.Body>
                               <Card.Title>Puppies and Kittens</Card.Title>
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
                      <Card.Img variant="top" src={cimg4} />
                          <div className="text middle">Included with
                              Brilliant Premium</div>
                             <Card.Body>
                                <Card.Title>Poisoned Chocolate II</Card.Title>
                                  <Card.Text>
                                      What happens when the chocolate comes in rectangles?
                                  </Card.Text>
                             </Card.Body>
                      </Card>
                 </Col>
                 <Col xs={6} md={4}>
                    <Card className="card">
                      <Card.Img variant="top" src={cimg5} />
                             <div className="text middle">Included with
                                 Brilliant Premium</div>
                              <Card.Body>
                              <Card.Title>Game Search Algorithms</Card.Title>
                              <Card.Text>
                                     Learn how simple AI systems approach game strategy.
                              </Card.Text>
                              </Card.Body>
                      </Card>
                  </Col>
             </Row>
          </Container>
      </div>
    )
}

export default Competitive
