/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Card, Row, Col, Button,
} from 'react-bootstrap';
import {
  FaWhatsapp,
} from 'react-icons/fa';
import VerticalModals from '../Modal/ModalAccept';
import ModalStatus from '../Modal/ModalStatus';
import './Card.Module.css';
import { updateTransactionByID } from '../../../redux/actions/updateTransaction';
import offeringCardLayout from '../../../utils/offeringCardLayout';

function CardHistory(props) {
  const [modalShow, setModalShow] = useState(false);
  const [btnAccReject, setBtnAccReject] = useState(false);
  const [btnStatus, setBtnStatus] = useState(false);

  const {
    title, name, price, image, imageAlt, offering, buyerNumber,
  } = props;
  const dispatch = useDispatch();

  const {
    transactionLoading,
    transactionResult,
    transactionError,
  } = useSelector((state) => { return state.updateTransactionReducer; });

  const handleRejected = async (e) => {
    await dispatch(updateTransactionByID(props.buyerOrder.id, false));
    window.location.reload();
  };

  const offeringCardBtnHandler = () => {
    const setBtn = offeringCardLayout(props.buyerOrder);
    if (setBtn.btnAccReject) {
      setBtnAccReject(true);
    }

    if (setBtn.btnStatus) {
      setBtnStatus(true);
    }
  };

  useEffect(() => {
    offeringCardBtnHandler();
  }, []);

  return (
    <Container>
      <Card className="card-items-offering" style={{ borderRadius: '16px' }}>
        <Row>
          <Col xs={4}>
            <Card.Img src={image} className="mt-4 mx-3 card-img-top image-offering" alt={imageAlt} />
          </Col>
          <Col xs={8}>
            <Card.Body>
              <Card.Title style={{ fontSize: '10px', color: 'grey' }}>{title}</Card.Title>
              <Card.Title>{name}</Card.Title>
              <Card.Text className="mb-2">{price}</Card.Text>
              <Card.Text>{offering}</Card.Text>
            </Card.Body>
            <div className="justify-content-end button-align">
              {btnAccReject && (
                <>
                  <Button
                    variant="secondary"
                    className="button-deny"
                    onClick={handleRejected}
                    style={{
                      backgroundColor: 'white',
                      borderColor: '7126B5',
                      color: 'black',
                      borderRadius: '16px',
                    }}
                  >
                    Tolak

                  </Button>
                  <VerticalModals
                    buyerOrder={props.buyerOrder}
                    buyerInfo={props.buyerInfo}
                    buyerCity={props.buyerCity}
                    buyerImg={props.buyerImg}
                    show={modalShow}
                    buyerNumber={buyerNumber}
                    onHide={() => { return setModalShow(false); }}
                  />
                </>
              )}
            </div>
            {btnStatus && (
            <div className="justify-content-end button-align">
              <ModalStatus
                show={modalShow}
                onHide={(e) => { return setModalShow(false); }}
                buyerOrder={props.buyerOrder}
                buyerNumber={props.buyerNumber}
              />
              <Button href={`https://wa.me/${props.buyerNumber}`} target="_blank" variant="secondary" className="button-accept">
                Hubungi di
                {' '}
                <FaWhatsapp />
              </Button>
            </div>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default CardHistory;
