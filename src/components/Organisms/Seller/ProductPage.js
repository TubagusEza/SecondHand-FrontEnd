import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardProduct from '../../Moleculs/Card/CardProduct';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
import IsMobile from '../../../styles/IsMobile';
// import './Input.Module.css';

function ProductPage({
  productById, categoryName, productImage, seller, city, onClick, onPublish,
}) {
  console.log(categoryName);
  return (
    <Container className={`${IsMobile ? 'mt-2' : 'mt-5'}`}>
      <Row>
        <Col md={6}>
          <CarouselProduct productImage={productImage} />
        </Col>
        <Col md={6}>
          <CardProduct productById={productById} categoryName={categoryName} onClick={onClick} onPublish={onPublish} />
          <CardSeller seller={seller} city={city} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;
