import React from 'react';
import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import './Navigation.Module.css';

function NavbarBookmark() {
  return (
    <div>
      <Navbar className="ms-auto" bg="white" expand="lg">
        <Container fluid className="mt-3 mb-3">
          <Navbar.Brand href="../../" className="navbar-desktop logo" />
          <Navbar.Brand className="profile-logo-mobile"><p>Daftar Simpan</p></Navbar.Brand>
          <Navbar.Offcanvas>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 NavLink mt-3 justify-content-center">
                <p>Daftar Simpan</p>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBookmark;
