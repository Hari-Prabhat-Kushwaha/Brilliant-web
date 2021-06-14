import React from "react";
import FirstPage from "../components/FirstPage";
import Introduction from "../components/Introduction";
import TheRational from "../components/TheRational";
import Puzzles from "../components/Puzzles";
import MultiLevel from "../components/MultiLevel";
import Competitive from "../components/Competitive";
import Logic from "../components/Logic";
import Knights from "../components/Knights";
import Next from "../components/Next";
import Courses from "../components/Courses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import CourseHeader from '../components/CourseHeader.js';



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
