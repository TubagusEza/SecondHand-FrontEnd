import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import TemplateNotification from '../components/Templates/Notification/TemplateNotification';
import { getListNotifications } from '../redux/actions/getNotif';
import getUser from '../utils/decodeToken';

function Notification() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);

  if (!token || getUser().toLogin) {
    return (<Navigate to="/login" replace />);
  }
  const {
    notifLoading,
    notifResult,
    notifError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  useEffect(() => {
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  return (
    <div>
      <TemplateNotification notif={notif} />
    </div>
  );
}

export default Notification;
