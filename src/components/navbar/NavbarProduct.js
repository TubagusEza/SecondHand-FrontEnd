import React, { Component } from 'react'
import { Navbar, Container,Nav,Offcanvas } from 'react-bootstrap'
import "./Navbar.Module.css";


export default class NavbarProfile extends Component {
    render() {
        return (
                <div>
                    <Navbar className="ms-auto "bg="white" expand="lg">
                        <Container fluid className='mt-3 mb-3'>
                            <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
                        </Container>
                            
                        
                    </Navbar>
                </div>

        )
    }
}