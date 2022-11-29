import React from 'react'
import "./nav.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from "../../images/eon8-logo.png"

const nav = () => {
    return (
        // <Navbar bg="light" expand="lg">
        //   <Container >
        //     <Navbar.Brand href="#">
        //         <img className='logo' src={LOGO}></img>
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="navbarScroll" />
        //     <Navbar.Collapse id="navbarScroll">
        //       <Nav
        //         className="me-auto my-3 my-lg-0 na "
        //         style={{ maxHeight: '100px' }}
        //         navbarScroll
        //       >
        //         <Nav.Link className='p-4' href="#action1">Our Services</Nav.Link>
        //         <Nav.Link href="#action2" className='p-4'>Digital Marketing</Nav.Link>
        //         <Nav.Link href="#action2" className='p-4'>About Us</Nav.Link>
                
               
        //       </Nav>
        //       <Button className='get-started'> Started</Button>
        //     </Navbar.Collapse>
        //   </Container>
        // </Navbar>

        <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="#"> <img className='logo' src={LOGO}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 na "
             
              navbarScroll
            >
              <Nav.Link className='p-4 ni' href="#action1">Our Services</Nav.Link>
                 <Nav.Link href="#action2" className='p-4 ni'>Digital Marketing</Nav.Link>
                 <Nav.Link href="#action2" className='p-4 ni'>About Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
            
            <Button className='get-started'> Started</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    }


export default nav