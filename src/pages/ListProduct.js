import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getSellerListProducts } from '../redux/actions/sellerProduct';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateListProduct from '../components/Templates/Seller/TemplateListProduct';
import getUser from '../utils/decodeToken';

function ListProduct() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [sellerPhoto, setSellerPhoto] = useState('');
  const [sellerCity, setSellerCity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({});

  if (!token || getUser().toLogin) {
    return (<Navigate to="/login" replace />);
  }
  const {
    notifLoading,
    notifResult,
    notifError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    productLoading,
    productResult,
    productError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getSellerProductReducer);

  const {
    productMetaLoading,
    productMetaResult,
    productMetaError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductMetaReducer);

  const fetchData = useCallback(async () => {
    await axios.get(
      'https://second-hand-be.herokuapp.com/api/who-am-i',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(async (res) => {
        setSellerName(res.data.name);
        setSellerCity(res.data.address);
        setSellerPhoto(res.data.photo);
      });
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getSellerListProducts(2));
  }, [dispatch]);

  useEffect(() => {
    if (productResult) {
      setProduct(productResult);
    }
  }, [productResult]);

  useEffect(() => {
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    if (productMetaResult) {
      setMeta(productMetaResult);
      console.log(meta);
    }
  });

  return (
    <>
      {!!product && (
        <div>
          <Container fluid className="p-0">
            <TemplateListProduct
              product={product}
              notif={notif}
              sellerName={sellerName}
              sellerCity={sellerCity}
              sellerPhoto={sellerPhoto}
              currentPage={currentPage}
              meta={meta}
            />
          </Container>
        </div>
      )}
      {product.length === 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default ListProduct;
