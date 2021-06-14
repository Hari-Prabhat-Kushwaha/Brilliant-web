import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
	return (
		<div  className="container-fluid">
			 <Navbar bg="white" expand="lg" fixed="top" className="navbar">
			 <div  className="p-10 ml-5 mr-5">   
				 <Navbar.Brand href="#home">
							<img
									alt=""
										 src="https://cdn.onesearch.com/ib/th?id=OIP.1YmpeTB_uAzfazxzAu8MtwHaHa&pid=Api&P=0&w=300&h=300"
										 width="35"
										 height="35"
										 className="d-inline-block align-top font-weight-bold"
							/>{' '}
							 BRILLIANT
				 </Navbar.Brand>
			 </div>


				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
					className="mr-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
                    navbarScroll
                     >
                        <div className="nav">
                           <div  className="p-10 ml-5"> 
                             <Nav.Link href="#action1">
                             TODAY</Nav.Link>
                           </div>
                        <div  className=" w-auto p-10 ml-5"> 
                            <Nav.Link href="/Courses">
                            <b className="linkText">COURSES</b></Nav.Link>
                        </div>
                        <div  className="p-10 ml-5 item"> 
                            <Nav.Link  href="/">
                            PRACTICE</Nav.Link>
                        </div>
                     </div>
                  </Nav>
               </Navbar.Collapse>

              <div  className="w-auto p-10 ml-5 mr-5 lg-5">
                   <Button variant="outline-primary" style={{ width: '11rem' }}> Log in</Button>{' '}
              </div>
              <div  className="w-auto p-10 ml-5 mr-5 lg-5">
                    <Button variant="primary " style={{ width: '11rem' }}>
        			Sign up
            		</Button>{' '}
		      </div>
        </Navbar>
    </div>
		
	);
};





export default Header;
