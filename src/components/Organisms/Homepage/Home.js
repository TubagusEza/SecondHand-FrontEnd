/* eslint-disable array-callback-return */
// import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../../../redux/actions/product';
import Carousel from '../../Moleculs/Carousel/CarouselHomepage';
import TitleList from '../../Atoms/Title/Title';
import ButtonCategory from '../../Atoms/Button/ButtonCategory';
import ItemCard from '../../Moleculs/Card/ItemCard';
import BtnAddProduct from '../../Atoms/Button/BtnAddProduct';
import IMAGES from '../../../data/data';
import './Home.Module.css';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const {
    productResult,
  } = useSelector((state) => state.getProductReducer);

  const fetchData = useCallback(async () => {
    const res = await axios.get('https://second-hand-be.herokuapp.com/api/products');
    console.log(res.data.data.data)
    // setProduct(productResult);
    setProduct(res.data.data.data);
  }, [])

  useEffect(() => {
    fetchData()
      .catch(console.error);;
  }, [fetchData]);

  return (
    <Container fluid>
      <div className="row mt-3">
        <div className="col">
          <Carousel images={IMAGES} />
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <div className="col-12">
          <TitleList title="Telusuri Kategori" />
        </div>
      </div>
      <div className="row mt-3 mx-5">
        <ButtonCategory />
      </div>
      <div className="row mt-3 mx-5">
        {product && product.map(({
          id, name, description, price, image,
        }) => {
          return (
            <Col key={id}>
              <ItemCard
                title={name}
                type={description}
                price={price}
                image={image}
                imageAlt="Gambar jam tangan"
              />
            </Col>
          );
        })}
      </div>
      <div className="row mt-3 mb-3 mx-5">
        <BtnAddProduct />
      </div>
      {/* <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><LoginForm /></Col>
        </Row> */}
    </Container>
  );
}

export default Home;
