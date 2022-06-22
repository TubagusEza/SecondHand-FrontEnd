    
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
import ItemCard from './ItemCard'
import './CardListProduct.Module.css'
import {FaPlus} from 'react-icons/fa'

function CardListProduct(){
    return(
      <>
          <Col xs={8}>
            <Row> 
              <Col xs={4} >
              <div className='card content' type='button'>
                <FaPlus /> <p className='pt-2'>Tambah Produk</p>
              </div>
              <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
              </Col>
              <Col xs={4}>
              <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
              </Col>
              <Col xs={4}>
              <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
              </Col>
              
              
              </Row>
              </Col>             
              </>
              
              
    )
 } 
 export default CardListProduct;
