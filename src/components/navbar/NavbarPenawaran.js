import React, { Component } from 'react'
import { Navbar, Container,Nav,Offcanvas } from 'react-bootstrap'
import './Navbar.Module.css'


export default class NavbarProfile extends Component {
    render() {
        return (
                <div>
                    <Navbar className="ms-auto "bg="white" expand="lg">
                        <Container fluid className='mt-3 mb-3'>
                            <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                            <Navbar.Offcanvas>
                            <Offcanvas.Body>
                                <Nav className="flex-grow-1 mt-3 NavLink justify-content-center">
                                    <p >Info Penawaran</p>
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                            
                        
                    </Navbar>
                </div>

        )
    }
}