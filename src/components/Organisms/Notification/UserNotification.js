import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardNotification from '../../Moleculs/Card/CardNotification';
// import './Input.Module.css';

function UserNotification({ notif }) {
  console.log(notif);
  return (
    <Container>
      <Row className="mt-5">
        <Title title="Daftar Notifikasi" />
      </Row>
      <Row>
        {/* <CardSeller /> */}
      </Row>
      <Row md={1} className="">
        {notif && notif.map((result) => {
          console.log(result);
          let result2;
          if (result.msg === 'Berhasil Diterbitkan') {
            result2 = (
              <Col xs={12}>
                <Link to={`/seller/product/${result.productId}/preview`} style={{ textDecoration: 'none', color: 'black' }}>
                  <CardNotification
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
                  <CardNotification
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
      </Row>
    </Container>
  );
}

export default UserNotification;
