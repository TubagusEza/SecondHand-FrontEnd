/* eslint-disable react/jsx-no-bind */
/* eslint-disable radix */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Modal, Button, Row, Col, Form, Container,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionProducts } from '../../../redux/actions/createTransaction';
import TitleList from '../../Atoms/Title/Title';
import InputList from '../../Atoms/Input/Input';
import priceFormat from '../../../utils/priceFormat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.Module.css';

function VerticalModals(props) {
  console.log(props.productById.id);
  const params = useParams();
  const [inputBargain, setInputBargain] = useState('');
  const dispatch = useDispatch();
  const {
    productLoading,
    productResult,
    productError,
  } = useSelector((state) => { return state.getTransactionProductReducer; });

  async function handleSubmit(e) {
    console.log('lewat 34');
    e.preventDefault();
    const body = {
      productId: props.productById.id,
      inputBargain: parseInt(inputBargain),
    };

    console.log(body);
    await dispatch(getTransactionProducts(body));
  }

  const handleChangeBargain = (e) => {
    setInputBargain(parseInt(e));
  };

  useEffect(() => {
    if (productResult) {
      window.location.reload();
    }
  }, [inputBargain]);
  console.log(inputBargain);

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
        <TitleList title="Masukkan Harga Tawarmu" />
        <p style={{ color: 'grey' }}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok, kamu akan segera dihubungi penjual.
        </p>
        <Container className="product">
          <Row>
            <Col xs={4}>
              {props.productById.images && (
                <img src={props.productById.images[0]} className="seller" alt="" />
              )}
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>{props.productById.name}</p>
              <p>{priceFormat(props.productById.price)}</p>
            </Col>
          </Row>
        </Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label className="label">Harga Tawar</Form.Label>
              <InputList
                type="text"
                placeholder="Masukkan harga tawarmu disini"
                onChange={handleChangeBargain}
                value={props.productById.price}
              />
            </Form.Group>
          </Row>
          <Row>
            <Button className="modal-button" type="submit">Kirim</Button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Modals({ productById }) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log({ productById });
  console.log(productById.images);

  return (
    <>
      <Button variant="primary" className="mt-3 button-product" onClick={() => { return setModalShow(true); }}>
        Saya Tertarik dan Ingin Nego
      </Button>
      <VerticalModals
        productById={productById}
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  );
}

export default Modals;
