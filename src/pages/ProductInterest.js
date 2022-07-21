import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListNotifications } from '../redux/actions/getNotif';
import { getListProductInterest } from '../redux/actions/productInterest';
import TemplateProductInterest from '../components/Templates/Seller/TemplateProductInterest';

function ProductInterest() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const [interest, setInterest] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [sellerPhoto, setSellerPhoto] = useState('');
  const [sellerCity, setSellerCity] = useState('');
  const {
    notifLoading,
    notifResult,
    notifError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    interestLoading,
    interestResult,
    interestError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductInterestReducer);

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
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    console.log(notifResult);
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    dispatch(getListProductInterest());
  }, [dispatch]);

  useEffect(() => {
    console.log(interestResult);
    if (interestResult) {
      setInterest(interestResult);
    }
  }, [interestResult]);

  return (
    <div>
      <Container fluid className="p-0">
        <TemplateProductInterest
          notif={notif}
          sellerName={sellerName}
          sellerCity={sellerCity}
          sellerPhoto={sellerPhoto}
          interest={interest}
        />
      </Container>
    </div>
  );
}

export default ProductInterest;
