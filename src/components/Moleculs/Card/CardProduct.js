/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getUser from '../../../utils/decodeToken';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardProduct(props) {
  const params = useParams();

  const [productById, setProductById] = useState([]);

  const token = localStorage.getItem('token');
  if (getUser().toLogin) {
    <Navigate to="/login" replace />;
  }

  useEffect(() => {
    document.title = 'Produk Pembeli';
  }, []);
  console.log(props.onPublish);
  return (
    <Container>
      <Card className="card-product" style={{ borderRadius: '16px' }}>
        <Card.Body>
					<h5 style={{ fontWeight: 'bold' }}>
            {props.productById.name}
          </h5>
          <p>{props.categoryName}</p>
          <p>{priceFormat(props.productById.price)}</p>
          <Row>
            <Button variant="primary" className="button-seller" style={{ borderRadius: '16px', backgroundColor: '#7126B5', width: '90%' }} onClick={props.onPublish}>Terbitkan</Button>
          </Row>
          <Row>
            <Button variant="outline-primary" className="button-seller-outline" style={{ borderRadius: '16px', width: '90%' }} onClick={props.onClick}>Edit</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardProduct;
