import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardPreviewSeller({ city, seller }) {
  return (
    <Container>
      <Card className="mt-4 mb-5 seller-card" style={{ borderRadius: '16px' }}>
        <Card.Body>
          <Row>
            <Col md={2} xs={3}>
              <img src={seller.photo} className="seller-picture" alt="" />
            </Col>
            <Col md={10} xs={9}>
              <h5 style={{ fontWeight: 'bold' }}>{seller.name}</h5>
              <p>{city.name}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardPreviewSeller;
