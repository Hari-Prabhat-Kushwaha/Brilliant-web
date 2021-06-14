import React from "react";
import data from "../data";



import FirstPage from "../comp/FirstPage";
import Introduction from "../comp/Introduction";
import TheRational from "../comp/TheRational";
import Puzzles from "../comp/Puzzles";
import MultiLevel from "../comp/MultiLevel";
import Competitive from "../comp/Competitive";
import Logic from "../comp/Logic";
import Knights from "../comp/Knights";
import Next from "../comp/Next";
import Courses from "../comp/Courses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';

import CourseHeader from '../comp/CourseHeader.js';



const Practice = () => {
  return (
    <>
      
      <div>
      
      <FirstPage/>
      <Introduction/>
      <TheRational/>
      <Puzzles/>
      <MultiLevel/>
      <Competitive/>
      <Logic/>
      <Knights/>
      <Container>
      <Row className="justify-content-center">
      
      <CourseHeader title="Next Steps" description=""></CourseHeader>
        
          
          <Next title="Mathematical Fundamentals" description="Essential tools for mastering algebra" image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png"></Next>
         
          <Next title="Computer Science Fundamentals" description="Essential tools for mastering computer" image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png"></Next>
         
     
     </Row>
      </Container>
    
    </div> 
    </>
  );
};

export default Practice;
