import React from 'react'
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import mimg1 from "./images/mimg1.jpg";
import mimg2 from "./images/mimg2.jpg";
import mimg3 from "./images/mimg3.jpg";
import mimg4 from "./images/mimg4.jpg";
import mimg5 from "./images/mimg5.jpg";
import mimg6 from "./images/mimg6.jpg";
function MultiLevel() {
    return (
        <div className="introduction">
            <div className="secondpage">
                 <div className="circle">4</div>
                        <h3>Multi-Level Thinking</h3>
                             <p className="para">If you know that I know that you know... what then? Collapse</p>
                                  </div>
            <Container >
                   <Row>
                       <Col xs={6} md={4}>
   
                              <Card className="card">
                                     <Card.Img variant="top" src={mimg1} />
                                        <div className="text middle">Included with
                                            Brilliant Premium</div>
                                        <Card.Body>
                                             <Card.Title>Perfect Information</Card.Title>
                                             <Card.Text>
                                                    If everyone follows the same logic, can you find out what they know?
                                              </Card.Text>
                                        </Card.Body>
                               </Card>

                         </Col>
                         <Col xs={6} md={4}>
   
                             <Card className="card">
                               <Card.Img variant="top" src={mimg2} />
                                       <div className="text middle">Included with
                                          Brilliant Premium</div>
                                        <Card.Body>
                                           <Card.Title>Hat Colors</Card.Title>
                                           <Card.Text>
                                                 Can you figure out who can figure out the color of their hat?
                                            </Card.Text>
                                        </Card.Body>
                             </Card>

                          </Col>
                          <Col xs={6} md={4}>
   
                                <Card className="card">
                                     <Card.Img variant="top" src={mimg3} />
                                         <div className="text middle">Included with
                                            Brilliant Premium</div>
                                          <Card.Body>
                                                   <Card.Title>Hat Colors with More People</Card.Title>
                                                        <Card.Text>
                                                                What happens to hat puzzles when there are more hats and more people?
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
                                    <Card.Img variant="top" src={mimg4} />
                                            <div className="text middle">Included with
                                                   Brilliant Premium</div>
                                            <Card.Body>
                                                <Card.Title>Red-Eyed Dragons</Card.Title>
                                                <Card.Text>
                                                        Exactly how much can you learn from no one knowing anything?
                                                </Card.Text>
                                            </Card.Body>
                                 </Card>

                           </Col>
                           <Col xs={6} md={4}>
   
                              <Card className="card">
                                    <Card.Img variant="top" src={mimg5} />
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
                                   <Card.Img variant="top" src={mimg6} />
                                        <div className="text middle">Included with
                                                Brilliant Premium</div>
                                        <Card.Body>
                                                 <Card.Title>Strategic Deductions</Card.Title>
                                                 <Card.Text>
                                                      Solve classic truthteller-liar puzzles where someone else knows the answer.
                                                 </Card.Text>
                                        </Card.Body>
                              </Card>

                          </Col>
                  </Row>
           </Container>
       </div>
    )
}

export default MultiLevel;
