import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Toast,
} from 'react-bootstrap';
import { BsBookmark, BsTropicalStorm } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { createWishlistBuyer } from '../../../redux/actions/createWishlist';
import VerticalModals from '../Modal/Modal';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardBargain({ productById, categoryName, active }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [showBtn, setShowBtn] = useState(null);
  const [add, setAdd] = useState(false);
  const [unassign, setUnassign] = useState(false);

  const activeButton = () => {
    setShowBtn(active);
  };

  useEffect(() => {
    activeButton();
  }, [active]);

  const handleWhiteBookmark = (e) => {
    setShowBtn(true);
    dispatch(createWishlistBuyer(productById, false));
  };

  const handleBlackBookmark = (e) => {
    setShowBtn(false);
    dispatch(createWishlistBuyer(productById, true));
  };

  return (
    <>
      <Container>
        <Card className="card-bargain" style={{ borderRadius: '16px' }}>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <h5 style={{ fontWeight: 'bold' }}>{productById.name}</h5>
              </Col>
              <Col xs={2}>
                {!showBtn ? (
                  <Button className="btn-bookmark" onClick={handleWhiteBookmark}>
                    <BsBookmark className="icon-bookmark" />
                  </Button>
                ) : (
                  <Button className="btn-bookmark" onClick={handleBlackBookmark}>
                    <FaBookmark className="icon-bookmark" />
                  </Button>
                )}
              </Col>
            </Row>
            <p style={{ color: 'grey' }}>{categoryName.name}</p>
            <p>{priceFormat(productById.price)}</p>
            <Row>
              <VerticalModals
                productById={productById}
                show={modalShow}
                onHide={() => { return setModalShow(false); }}
              />
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Col md={6} className="mb-2">
        <BsTropicalStorm>
          <Row>
            <Col>
              <Toast.Body>Berhasil Menambahkan Daftar Simpan</Toast.Body>
            </Col>
            <Col>
              <Link to="/">Lihat</Link>
            </Col>
          </Row>
        </BsTropicalStorm>
      </Col>
    </>
  );
}
export default CardBargain;
