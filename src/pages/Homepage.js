import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../redux/actions/product';
import { getListNotifications } from '../redux/actions/getNotif';
import { getListUser } from '../redux/actions/listUser';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';

function Homepage() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [user, setUser] = useState([]);
  const [active, setActive] = useState([]);

  const {
    userResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    productResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductReducer);

  const {
    productMetaResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductMetaReducer);

  const getLoginUser = async () => {
    dispatch(getListUser());
  };

  useEffect(() => {
    if (userResult) {
      setUser(userResult);
    }
  }, [userResult]);

  useEffect(() => {
    getLoginUser();
  }, []);

  useEffect(() => {
    dispatch(getListProducts({
      buyer: userResult.id,
    }));
    dispatch(getListNotifications());
  }, [userResult]);

  useEffect(() => {
    if (productResult) {
      setProduct(productResult);
    }
  }, [productResult]);

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
      {product.length >= 0 && (
      <div>
        <Container fluid className="p-0">
          <TemplateHome
            product={product}
            notif={notif}
            currentPage={currentPage}
            meta={meta}
            productResult={productResult}
          />
        </Container>
      </div>
      )}
      {product.length <= 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default Homepage;
