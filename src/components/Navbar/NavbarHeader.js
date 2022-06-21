import React from 'react'
import { Navbar, Container,Nav,NavDropdown, Form, FormControl,Button} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa';
import './Navbar.Module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';
import {FaSignInAlt} from 'react-icons/fa'


export default function NavbarHeader() {
       return (  
                 <Navbar Navbar className="ms-auto navbar"bg="white" expand="lg">
                    <Container fluid className='me-3'>
                    <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
                   
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-flex test">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 searchBar"
                                aria-label="Search"
                                />
                            <i className='searchIcon' type='button'><FaSearch/></i>
                        </Form>
                        <Nav className="flex-grow-1 justify-content-end">
                            <Nav.Link href="#home" >
                                <Button className='menu py-1 '> <FaSignInAlt className='mt-1'/>Masuk</Button>
                            </Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
             </Container>
            </Navbar>


                    
                

        )
    
}