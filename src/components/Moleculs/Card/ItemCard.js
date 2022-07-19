/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Button,
} from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import './Card.Module.css';

function ItemCard(props) {
  const {
    title, type, price, image, imageAlt, active,
  } = props;

  return (
    <Card className="card-items">
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }} className="item-card-title">{title}</Card.Title>
        <Card.Text className="item-card-type">{type}</Card.Text>
        <Row>
          <Col xs={9}>
            <Card.Text style={{ fontWeight: '400' }}>{price}</Card.Text>
          </Col>
          <Col xs={3}>
            {/* <Link to="/list/bookmark"> */}
            {!active ? (
              <BsBookmark className="icon-bookmark" />
            ) : (
              <FaBookmark className="icon-bookmark" />
            )}
            {/* </Link> */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
