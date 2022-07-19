import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Title from '../../Atoms/Title/Title';
import ItemCard from '../../Moleculs/Card/ItemCard';
// import './Product.Module.css';

function Bookmark() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div style={{ paddingLeft: '10px' }}>
            <Link to="/" style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
        </Col>
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <Col>
              <ItemCard
                title="Jam Tangan Casio"
                type="Aksesoris"
                price="Rp. 250.000"
                description="Sudah Dibeli"
                image="https://placeimg.com/165/100/any"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Bookmark;
