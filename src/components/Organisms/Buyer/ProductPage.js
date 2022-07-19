import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardBargain from '../../Moleculs/Card/CardBargain';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
// import './Input.Module.css';

function ProductPage({
  productById, categoryName, productImage, seller, city, active,
}) {
  console.log(active);
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <CarouselProduct productImage={productImage} />
        </Col>
        <Col md={6}>
          <CardBargain productById={productById} categoryName={categoryName} active={active} />
          <CardSeller seller={seller} city={city} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;
