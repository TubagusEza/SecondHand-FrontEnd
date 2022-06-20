import React from 'react';
import '@fontsource/poppins';
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/Modal.Module.css';

function VerticalModals(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName='card-modal'
      style={{ borderRadius: '100px' }}
    >
      <Modal.Header style={{ borderBottom: 'none' }} closeButton>
      </Modal.Header>
      <Modal.Body>
        <h5>Masukkan Harga Tawarmu</h5>
        <p style={{ color: 'grey' }}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok, kamu akan segera dihubungi penjual.
        </p>
        <Container className='product'>
          <Row>
            <Col xs={4}>
              <img src={process.env.PUBLIC_URL + '/images/first_watch.png'} className='seller' alt='' />
            </Col>
            <Col xs={8}>
              <h5>Jam Tangan Casio</h5>
              <p>Rp.250.000</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Form.Group className="mb-3" controlId="form">
            <Form.Label className='label'>Harga Tawar</Form.Label>
            <Form.Control type="text" placeholder="Rp 0,00" style={{ color: 'grey', fontSize: '14px' }} />
          </Form.Group>
        </Row>
        <Row>
          <Button onClick={props.onHide} className='modal-button'>Kirim</Button>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant='primary' className='button-product' onClick={() => setModalShow(true)}>
        Saya Tertarik dan Ingin Nego
      </Button>
      <VerticalModals
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;