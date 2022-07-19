/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal, Button, Row, Col, Container, Form,
} from 'react-bootstrap';
import {
  FaWhatsapp,
} from 'react-icons/fa';
import { updateTransactionByID } from '../../../redux/actions/updateTransaction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.Module.css';
import priceFormat from '../../../utils/priceFormat';

function VerticalModals(props) {
  const [offering, setOffering] = useState('');
  const {
    transactionLoading,
    transactionResult,
    transactionError,
  } = useSelector((state) => { return state.updateTransactionReducer; });

  async function handleSubmit(e) {
    e.prevent.default();
  }

  useEffect(() => {
    if (transactionResult) {
      window.location.reload();
    }
  }, [offering]);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="card-modal"
      style={{ borderRadius: '100px' }}
    >
      <Modal.Header style={{ borderBottom: 'none' }} closeButton />
      <Modal.Body>
        <p style={{ fontWeight: 'bold' }}>
          Yeay kamu berhasil mendapat harga yang sesuai
        </p>
        <p style={{ color: 'grey' }}>
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>
        <Container className="product">
          <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Product Match
          </p>
          <Row>
            <Col xs={4}>
              <img src={props.buyerImg} className="seller mb-3" alt="" />
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>{props.buyerInfo}</p>
              <p>{props.buyerCity}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <img src={props.buyerOrder.product.images[0]} className="seller" alt="" />
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>{props.buyerOrder.product.name}</p>
              <p style={{ textDecoration: 'line-through' }}>{priceFormat(props.buyerOrder.product.price)}</p>
              <p>{`Ditawar ${priceFormat(props.buyerOrder.bargainPrice)}`}</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Button href={`https://wa.me/${props.buyerNumber}`} target="_blank" onClick={props.onHide} className="modal-button">
              Hubungi via Whatsapp
              {' '}
              <FaWhatsapp />
            </Button>
          </Form>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function Modals(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();

  async function handleAccept() {
    await dispatch(updateTransactionByID(props.buyerOrder.id, true));
  }
  return (
    <>
      <Button variant="primary" className="mt-3 mb-3 button-accept" onClick={(e) => { handleAccept(); return setModalShow(true); }}>
        Terima
      </Button>
      <VerticalModals
        buyerInfo={props.buyerInfo}
        buyerCity={props.buyerCity}
        buyerImg={props.buyerImg}
        buyerOrder={props.buyerOrder}
        buyerNumber={props.buyerNumber}
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  );
}

export default Modals;
