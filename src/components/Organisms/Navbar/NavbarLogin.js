/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar, Container, Nav, Form, Row, Col, Toast, Button, ToastContainer, Dropdown, Offcanvas,
} from 'react-bootstrap';
import {
  FaSearch, FaBell, FaRegUser, FaListUl,
} from 'react-icons/fa';
import { logout } from '../../../redux/actions/auth';
import CardToast from '../../Moleculs/Card/CardToast';
import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarLogin({ notif }) {
  const [show, setShow] = useState(false);
  const userLogin = useSelector((state) => { return state.auth; });
  const { user } = userLogin;
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    window.location.href = '/';
  };

  return (
    <>
      <Navbar className="ms-auto navbar" bg="white" expand="lg">
        <Container fluid className="me-3">
          <Navbar.Brand href="../../../" className="navbar-desktop logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="d-flex test">
            <input
              type="search"
              placeholder="Cari di sini..."
              className="me-2 searchBar searchbar-desktop"
              aria-label="Search"
            />
            <i className="searchIcon" type="button"><FaSearch /></i>
          </Form>
          <Navbar.Collapse className="navbar-desktop" id="basic-navbar-nav">
            <Form className="d-flex test">
              <input
                type="search"
                placeholder="Cari di sini..."
                className="me-2 searchBar"
                aria-label="Search"
              />
              <i className="searchIcon" type="button"><FaSearch /></i>
            </Form>
            <Nav className="flex-grow-1 justify-content-end nav">
              <Dropdown className="mt-1">
                <Dropdown.Toggle
                  className="btn-toggle"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: 'none',
                    zIndex: '1',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faList}
                    style={{
                      zIndex: 2,
                    }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="../../../history/seller">History Seller</Dropdown.Item>
                  <Dropdown.Item href="../../../history/buyer">History Buyer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                onClick={() => { return setShow(true); }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  overflow: 'hidden',
                }}
              >
                <FaBell className="link" />
              </Button>
              <Dropdown className="mt-1">
                <Dropdown.Toggle
                  className="btn-toggle"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: 'none',
                    zIndex: '1',
                  }}
                >
                  <FaRegUser className="link" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="../../profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="../../../list/products">Daftar Jual Saya</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-mobile">
            <Navbar.Offcanvas style={{ width: '250px' }} id="basic-navbar-nav">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  SecondHand
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex justify-content-end nav">
                  <Nav.Link href="../../../list/notifications">Notifikasi</Nav.Link>
                  <Nav.Link href="../../../list/products">Daftar Jual</Nav.Link>
                  <Nav.Link href="../../profile">Akun Saya</Nav.Link>
                  {/* <Dropdown className="mt-1">
                    <Dropdown.Toggle
                      className="btn-toggle"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        border: 'none',
                        zIndex: '1',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faList}
                        style={{
                          zIndex: 2,
                        }}
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="../../../history/seller">History Seller</Dropdown.Item>
                      <Dropdown.Item href="../../../history/buyer">History Buyer</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                    onClick={() => { return setShow(true); }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      overflow: 'hidden',
                    }}
                  >
                    <FaBell className="link" />
                  </Button>
                  <Dropdown className="mt-1">
                    <Dropdown.Toggle
                      className="btn-toggle"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        border: 'none',
                        zIndex: '1',
                      }}
                    >
                      <FaRegUser className="link" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="../../profile">Profile</Dropdown.Item>
                      <Dropdown.Item href="../../../list/products">Daftar Jual Saya</Dropdown.Item>
                      <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
      <Row>
        <Col xs={10}>
          <ToastContainer position="top-end" className="notification p-3" limit={3}>
            <Toast position="top-end d-flex justify-content-right" onClose={() => { return setShow(false); }} show={show} delay={3000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-5 d-flex justify-content-right"
                  alt=""
                  style={{ marginLeft: '220px', textAlign: 'right' }}
                />
                {/* <small>08 Jul, 20.04</small> */}
              </Toast.Header>
              <Toast.Body>
                {notif && notif.slice(0, 3).map((result) => {
                  let result2;
                  if (result.msg === 'Berhasil Diterbitkan') {
                    result2 = (
                      <Col xs={12}>
                        <Link to={`/seller/product/${result.productId}/preview`} style={{ textDecoration: 'none', color: 'black' }}>
                          <CardToast
                            title={result.msg}
                            time={result.time}
                            name={result.name}
                            price={result.price}
                            image={result.image}
                          />
                        </Link>
                      </Col>
                    );
                  } else if (result.msg === 'Penawaran Produk') {
                    result2 = (
                      <Col xs={12}>
                        <Link to={`/offering/${result.buyerId}/info`} style={{ textDecoration: 'none', color: 'black' }}>
                          <CardToast
                            title={result.msg}
                            time={result.time}
                            name={result.name}
                            price={result.price}
                            offering={result.bargainPrice}
                            image={result.image}
                          />
                        </Link>
                      </Col>
                    );
                  }
                  return result2;
                })}
                <Link to="/list/notifications" style={{ textDecoration: 'none' }}>
                  <div className="d-grid gap-2">
                    <Button size="lg" style={{ color: 'white', backgroundColor: '#7126B5', borderColor: '#FFFFFF' }}>
                      Lihat Semua
                    </Button>
                  </div>
                </Link>
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </>
  );
}

export default NavbarLogin;
