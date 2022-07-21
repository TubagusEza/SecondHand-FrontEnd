import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import Title from '../../Atoms/Title/Title';
import BtnProductStatus from '../../Atoms/Button/BtnProductStatus';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import ItemCard from '../../Moleculs/Card/ItemCard';
import './Product.Module.css';

function ProductInterest({
  sellerName, sellerCity, sellerPhoto, interest,
}) {
  console.log(interest);

  return (
    <Container className="mt-5">
      <Row>
        <Title title="Daftar Produk Yang Diminati" />
      </Row>
      <Row>
        <CardSellerBtn
          sellerName={sellerName}
          sellerCity={sellerCity}
          sellerPhoto={sellerPhoto}
        />
      </Row>
      <Row>
        <BtnProductStatus />
      </Row>
      <Row>
        <Col className="card-sidebar" xs={3}>
          <Sidebar />
        </Col>
        {!interest && (
        <Col>
          <img src={`${process.env.PUBLIC_URL}/images/best_interest.png`} style={{ width: '50%' }} alt="" />
        </Col>
        )}
        {interest && interest.map((product) => {
          console.log(product);
          return (
            <Col md={3} xs={6}>
              <ItemCard
                title={product.name}
                type={product.description}
                price={product.price}
                image={product.images[0]}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductInterest;
