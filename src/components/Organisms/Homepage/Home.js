/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable array-callback-return */
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { Container, Col, Button } from 'react-bootstrap';
import Carousel from '../../Moleculs/Carousel/CarouselHomepage';
import TitleList from '../../Atoms/Title/Title';
import ButtonCategory from '../../Atoms/Button/ButtonCategory';
import ItemCard from '../../Moleculs/Card/ItemCard';
import BtnAddProduct from '../../Atoms/Button/BtnAddProduct';
import IMAGES from '../../../data/data';
import PaginatedItems from '../../Moleculs/Pagination/Pagination';
import priceFormat from '../../../utils/priceFormat';
import IsMobile from '../../../styles/IsMobile';
import './Home.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({
  productAll, currentPage, meta, productResult,
}) {
  const [userData, setUserData] = useState('');
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
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className={`${IsMobile ? 'row mt-2' : 'row mt-5 mx-5'}`}>
          <div className="col-12">
            <TitleList title="Telusuri Kategori" />
          </div>
        </div>
        <div className={`${IsMobile ? 'row mt-1' : 'row mt-1 mx-5'}`}>
          <ButtonCategory />
        </div>
        <div className="row mt-3 mx-5">
          {productAll.length <= 0 && productResult && <p>Maaf Produk Tidak Ditemukan</p>}
        </div>
        <div className={`${IsMobile ? 'row mt-3' : 'row mt-3 mx-5'}`}>
          {(productAll && productAll).map((result) => {
            let user = 'buyer';
            let preview = '';
            if (!!userData && (userData.data.id.toString() === result.sellerId.toString())) {
              user = 'seller';
              preview = '/preview';
            }
            return (
              <>
                <Col key={result.id} md={2}>
                  <Link to={`${user}/product/${result.id}${preview}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <ItemCard
                      title={result.name}
                      type={result.category.name}
                      price={priceFormat(result.price)}
                      image={result.images[0]}
                      imageAlt="Category of Different Pics"
                      active={result.markedByUser}
                    />
                  </Link>
                  {/* <Button className="btn-bookmark">
                    <BsBookmark style={{ zIndex: '2', color: 'black', paddingBottom: '2px' }} />
                  </Button> */}
                </Col>
              </>
            );
          })}
        </div>
        <div className="row mb-5 mx-5">
          <PaginatedItems currentPage={currentPage} meta={meta} />
        </div>
        <div className="row mt-5 mb-3 mx-5 button-sell">
          <BtnAddProduct />
        </div>
      </Container>
    </>
  );
}

export default Home;
