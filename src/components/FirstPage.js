import React from 'react'
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import img2 from "./images/img2.jpeg";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FirstPage() {
    return (
        <div>
          <div className="firstpage container-fluid">
            <Container>
                <Row>
                   <Col xs={6} md={6}>
                       <h3 className="heading"><a href="#" className="firstline"> Back to all course</a></h3>
                        <h1>Logic</h1>
                             <h5>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h5><br/><br/>
                             <p className="para">The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.<br/><br/>
                              You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!<a href="#" className="line"> Read more</a></p>
                            <h6><a href="#" className="line">View prerequisities and next steps</a></h6>
                   </Col>
                   <Col xs={6} md={6}>
                        <div className="img">
                          <Card style={{ width: '28rem' }}>
                              <Card.Img variant="top" src={img2} />
                               <Card.Body>
                                  <div className="d-grid gap-2">
                                      <Button variant="dark" size="lg" style={{ width: '25rem' }}>Start course</Button>
                                  </div>
                               </Card.Body>
                         </Card>
                       </div>
                   </Col>  
                </Row>
            </Container>
        </div>
     </div>
    )
}

export default FirstPage;
