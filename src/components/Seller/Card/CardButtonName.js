import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardButtonName.Module.css';

function ButtonName() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={11} className='mt-5'>
            <h5 className='mb-4'>Daftar Jual Saya</h5>
            <Card className='cards-button'>
            <Card.Body >
                <Row>
                  <Col xs={1}>
                    <img src={process.env.PUBLIC_URL + '/images/seller_pic.png'} className='seller px-1 ' alt='' />
                  </Col>
                  <Col xs={10} >
                    <h5>Safira</h5>
                    <p>Jakarta</p>
                  </Col>
                  <Col xs={1} className='py-2'>
                    <Button className='button-name py-1'>
                      Edit
                    </Button>
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
export default ButtonName;