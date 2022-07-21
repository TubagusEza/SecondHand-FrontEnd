import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { wishlistBuyer } from '../redux/actions/wishlist';
import TemplateBookmark from '../components/Templates/Bookmark/TemplateBookmark';
import getUser from '../utils/decodeToken';

const token = localStorage.getItem('token');
function ListBookmark() {
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState([]);
  if (!token || getUser().toLogin) {
    return (<Navigate to="/login" replace />);
  }
  const {
    wishlistResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getWishlistReducer);

  useEffect(() => {
    dispatch(wishlistBuyer());
  }, [dispatch]);

  useEffect(() => {
    if (wishlistResult) {
      setWishlist(wishlistResult);
    }
  }, [wishlistResult]);
  console.log(wishlistResult);
  return (
    <div>
      <TemplateBookmark wishlist={wishlist} />
    </div>
  );
}

export default ListBookmark;
