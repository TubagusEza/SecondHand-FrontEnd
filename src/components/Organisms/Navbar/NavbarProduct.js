import React from 'react';
import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import './Navigation.Module.css';

function NavbarProduct() {
  return (
    <div>
      <Navbar className="ms-auto" bg="white" expand="lg">
        <Container fluid className="mt-3 mb-3">
          <Navbar.Brand href="../../" className="navbar-desktop logo" />
          <Navbar.Brand className="profile-logo-mobile"><p>Lengkapi Detail Produk</p></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarProduct;
