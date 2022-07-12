/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable array-callback-return */
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import Carousel from '../../Moleculs/Carousel/CarouselHomepage';
import TitleList from '../../Atoms/Title/Title';
import ButtonCategory from '../../Atoms/Button/ButtonCategory';
import ItemCard from '../../Moleculs/Card/ItemCard';
import BtnAddProduct from '../../Atoms/Button/BtnAddProduct';
import IMAGES from '../../../data/data';
import PaginatedItems from '../../Moleculs/Pagination/Pagination';
import './Home.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ productAll }) {
  // const [user, setUser] = useState('');
  const [userData, setUserData] = useState('');

  const priceFormat = (data) => {
    const priceStr = data.toString();
    let i = priceStr.length;
    let renderPrice = '';
    let counter = 0;

    while (i > 0) {
      renderPrice = priceStr[i - 1] + renderPrice;
      i -= 1;
      counter += 1;
      if (counter === 3 && i !== 0) {
        renderPrice = `.${renderPrice}`;
        counter = 0;
      }
    }

    return `Rp ${renderPrice}`;
  };

  const token = localStorage.getItem('token');

  const getUsers = async () => {
    try {
      const responseUsers = await axios.get(
        'https://second-hand-be.herokuapp.com/api/who-am-i',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const dataUsers = await responseUsers;
      setUserData(dataUsers);
      console.log(dataUsers.data.id, 'line 55');
    } catch (err) {
      console.log(err);
    }
  };

  // for (let i = 0; i < userData.data.length; i++) {
  //   console.log(userData.data[i].id);
  // }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container fluid>
        <div className="row mt-3">
          <div className="col">
            <Carousel images={IMAGES} />
          </div>
        </div>
        <div className="row mt-5 mx-5">
          <div className="col-12">
            <TitleList title="Telusuri Kategori" />
            {/* <PaginatedItems /> */}
          </div>
        </div>
        <div className="row mt-3 mx-5">
          <ButtonCategory />
        </div>
        <div className="row mt-3 mx-5">
          {(productAll && productAll).map((result) => {
            let user = 'buyer';
            let preview = '';
            if (!!userData && (userData.data.id.toString() === result.sellerId.toString())) {
              user = 'seller';
              preview = '/preview';
            }
            console.log(userData);
            return (
              <Col key={result.id} md={2}>
                <Link to={`${user}/product/${result.id}${preview}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <ItemCard
                    title={result.name}
                    type={result.category.name}
                    price={priceFormat(result.price)}
                    image={result.images[0]}
                    imageAlt="Category of Different Pics"
                  />
                </Link>
              </Col>
            );
          })}
          {/* {product.length === 0 && setProduct(productAll)} */}
        </div>
        <div className="row mt-3 mb-3 mx-5">
          {/* <BtnAddProduct /> */}
          <PaginatedItems />
        </div>
        <div className="row mt-3 mb-3 mx-5">
          <BtnAddProduct />
        </div>
      </Container>
    </>
  );
}

export default Home;
