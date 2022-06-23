import React from 'react'
import { Navbar, Container,Nav, Form, input} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa';
import './Navbar.Module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins';
import {FaSignInAlt} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa';
import {FaListUl} from 'react-icons/fa';

export default function NavbarLogIn() {
       return (  
                 <Navbar className="ms-auto navbar"bg="white" expand="lg">
                    <Container fluid className='me-3'>
                    <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
                   
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-flex test">
                            <input
                                type="search"
                                placeholder="Cari di sini..."
                                className="me-2 searchBar"
                                aria-label="Search"
                                />
                            <i className='searchIcon' type='button'><FaSearch/></i>
                        </Form>
                        <Nav className="flex-grow-1 justify-content-end nav">
                        <Nav.Link href="#link"><FaListUl className='link'/></Nav.Link>
                            <Nav.Link href="#home" >
                                <FaBell className='link'/>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <FaRegUser className='link'/>
                                
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
             </Container>
            </Navbar>
        )
    
}