import React from 'react';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';

const NextSteps = (props) => {
    const {title, description, image} = props;
    return (
       
                
                <div className=" col-md-6 mt-5 mb-5">
                <div className="row">
                <div className="col-md-3 ">
                        <img src={image}  style={{height : '70%', width : '50%'}} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
              
                </div>

  
    );
};

export default NextSteps;