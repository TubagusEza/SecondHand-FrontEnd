import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import './Navigation.Module.css';

function NavbarOffering() {
  return (
    <div>
      <Navbar className="ms-auto" bg="white" expand="lg">
        <Container fluid className="mt-3 mb-3">
          <Navbar.Brand href="../../" className="logo" />
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 NavLink mt-3 justify-content-center">
                <p>Info Penawaran</p>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarOffering;
