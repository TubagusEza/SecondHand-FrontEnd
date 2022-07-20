import React from 'react';
import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Navigation.Module.css';

function NavbarProfile() {
  return (
    <div>
      <Navbar className="ms-auto" bg="white" expand="lg">
        <Container fluid className="mt-3 mb-3">
          <Navbar.Brand href="../../" className="navbar-desktop logo" />
          <Navbar.Brand className="profile-logo-mobile"><p>Lengkapi Info Profile</p></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarProfile;
