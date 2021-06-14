import React from 'react'
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import limg1 from "./images/limg1.jpg";
import limg2 from "./images/limg2.jpg";
import limg3 from "./images/limg3.jpg";
import limg4 from "./images/limg4.jpg";
import limg5 from "./images/limg5.jpg";
import limg6 from "./images/limg6.jpg";

function Logic() {
    return (
        <div className="introduction">
            <div className="secondpage">
                <div className="circle">6</div>
                  <h3>Logic Machines</h3>
                    <p className="para">Turn logic into arithmetic machines. Collapse
                    </p>
                </div>
            <Container >
                <Row>
                   <Col xs={6} md={4}>
   
                       <Card className="card">
                            <Card.Img variant="top" src={limg1} />
                                  <div className="text middle">Included with
                                      Brilliant Premium</div>
                                  <Card.Body>
                                          <Card.Title>Truth Tables</Card.Title>
                                           <Card.Text>
                                                 Diagram out the meanings of each logical operator.
                                           </Card.Text>
                                   </Card.Body>
                            </Card>

                     </Col>
                     <Col xs={6} md={4}>
   
                         <Card className="card">
                           <Card.Img variant="top" src={limg2} />
                               <div className="text middle">Included with
                                       Brilliant Premium</div>
                                       <Card.Body>
                                            <Card.Title>Basic Logic Gates</Card.Title>
                                                <Card.Text>
                                                        How do AND, OR, and NOT gates work?
                                                </Card.Text>
                                       </Card.Body>
                          </Card>

                      </Col>
                      <Col xs={6} md={4}>
   
                          <Card className="card">
                            <Card.Img variant="top" src={limg3} />
                              <div className="text middle">Included with
                                  Brilliant Premium
                              </div>
                                  <Card.Body>
                                  <Card.Title>Combinations</Card.Title>
                                  <Card.Text>
                                         Combine gates together to make complex circuits.
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
                           <Card.Img variant="top" src={limg4} />
                              <div className="text middle">Included with
                                  Brilliant Premium
                              </div>
                                  <Card.Body>
                                      <Card.Title>Fredkin Gates</Card.Title>
                                      <Card.Text>
                                           Take a peek at a gate used in biological and quantum computing.
                                      </Card.Text>
                                  </Card.Body>
                    </Card>

                  </Col>
                  <Col xs={6} md={4}>
   
                       <Card className="card">
                          <Card.Img variant="top" src={limg5} />
                               <div className="text middle">Included with
                                          Brilliant Premium</div>
                                 <Card.Body>
                                     <Card.Title>Binary Numbers and Addition</Card.Title>
                                          <Card.Text>
                                                How does computer arithmetic work?
                                          </Card.Text>
                                 </Card.Body>
                       </Card>

                  </Col>
                 <Col xs={6} md={4}>
   
                    <Card className="card">
                          <Card.Img variant="top" src={limg6} />
                             <div className="text middle">Included with
                                      Brilliant Premium</div>
                               <Card.Body>
                                        <Card.Title>Creating a Mechanical Adder</Card.Title>
                                        <Card.Text>
                                            Use what you've learned about logic gates to create a circuit that adds numbers.
                                        </Card.Text>
                               </Card.Body>
                    </Card>

                   </Col>
    
             </Row>

          </Container>

      </div>
    )
}

export default Logic
