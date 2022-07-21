import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { getListNotifications } from '../redux/actions/getNotif';
import { getSoldProductByID } from '../redux/actions/soldProduct';
import TemplateHistorySeller from '../components/Templates/History/TemplateHistorySeller';
import getUser from '../utils/decodeToken';

function HistorySeller() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [sellerPhoto, setSellerPhoto] = useState('');
  const [sellerCity, setSellerCity] = useState('');
  const [sellerID, setSellerID] = useState(null);
  const [soldProductSeller, setSoldProductSeller] = useState([]);
  if (!token || getUser().toLogin) {
    return (<Navigate to="/login" replace />);
  }
  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    soldProductResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getSoldProductReducer);

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
        setSellerID(res.data.id);
        console.log(sellerID, res.data.id);
      });
  });
  useEffect(() => {
    fetchData();
    console.log('2');
  }, []);

  useEffect(() => {
    console.log('1');
    dispatch(getListNotifications());
    dispatch(getSoldProductByID());
  }, [dispatch]);

  console.log(soldProductResult);
  useEffect(() => {
    if (soldProductResult) {
      setSoldProductSeller(soldProductResult);
    }
  }, [soldProductResult]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  return (
    <div>
      <TemplateHistorySeller
        notif={notif}
        sellerName={sellerName}
        sellerCity={sellerCity}
        sellerPhoto={sellerPhoto}
        soldProductSeller={soldProductSeller}
      />
    </div>
  );
}

export default HistorySeller;
