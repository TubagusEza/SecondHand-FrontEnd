/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardProductBtn({ productById, categoryName }) {
  const [product, setProduct] = useState('');
  const params = useParams();

  const getProduct = async () => {
    try {
      const responseProduct = await axios.get(
        `https://second-hand-be.herokuapp.com/api/product/${params.id}`,
      );
      const dataProduct = await responseProduct;
      setProduct(dataProduct);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log('lewat sini');
  return (
    <Container>
      <Card className="card-product-btn" style={{ borderRadius: '16px' }}>
        <Card.Body>
					<h5 style={{ fontWeight: 'bold' }}>
            {productById.name}
          </h5>
          <p style={{ color: 'grey' }}>{categoryName.name}</p>
          <p>{priceFormat(productById.price)}</p>
          <Row>
            <Link to={`/seller/product/${params.id}/update`}>
              <Button
                variant="outline-primary"
                className="button-edit-preview"
                style={{
                  color: 'white',
                  backgroundColor: '#7126B5',
                  borderColor: '#7126B5',
                  borderRadius: '16px',
                }}
              >
                Edit
              </Button>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardProductBtn;
