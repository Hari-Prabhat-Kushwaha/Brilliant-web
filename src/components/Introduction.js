import React from 'react';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function Introduction() {
  return (
     <div>
        <div className="secondpage">
            <div className="circle">1</div>   
               <h3>Introduction</h3>
                  <p className="para">Put your logic to the test with these warmups!</p>
              </div>
              <Container >
                    <Row>
                       <Col xs={6} md={4}>

                         <Card className="card">
                            { <Card.Img variant="top" src={img3} /> }
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

       </div>
  )
}

export default Introduction
