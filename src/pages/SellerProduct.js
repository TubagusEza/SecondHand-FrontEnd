import { React, useEffect }  from 'react';
import "@fontsource/poppins";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/Seller/Carousel/Carousel';
import NavbarLogIn from '../components/Navbar/NavbarLogIn';

function BuyerProduct() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Seller Product Page";
  }, []);

  return (
    <>
    <NavbarLogIn/>
    <Container>
      <Row>
        <Carousel />
      </Row>
    </Container>
    </>
  )
}

export default BuyerProduct;