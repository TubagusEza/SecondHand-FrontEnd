import React from 'react';
import '@fontsource/poppins';
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';
import VerticalModals from '../Modal/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/CardProduct.Module.css';

function Product() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className='card-product-buyer'>
              <Card.Body>
                <h5>Jam Tangan Casio</h5>
                <p style={{ color: 'grey' }}>Aksesoris</p>
                <p>Rp.250.000</p>
                <Row>
                  <VerticalModals
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                </Row>
              </Card.Body>
            </Card>
            <Card className='card-seller'>
              <Card.Body>
                <Row>
                  <Col xs={2}>
                    <img src={process.env.PUBLIC_URL + '/images/seller_pic.png'} className='seller' alt='' />
                  </Col>
                  <Col xs={10}>
                    <h5>Safira</h5>
                    <p>Jakarta</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Product;