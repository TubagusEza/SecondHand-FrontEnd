/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const setProducts = 'setProducts';
export const setProductsMeta = 'setProductsMeta';

export const getListProducts = ({
  page, category, search, buyer,
}) => {
  let buyerRequest;
  if (buyer) {
    buyerRequest = `?buyerId=${buyer}&`;
  }

  console.log(buyerRequest);
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    await dispatch({
      type: setProducts,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    await axios.get(`https://second-hand-be.herokuapp.com/api/products${buyerRequest || ''}?page=${page || 1}${category || ''}${search || ''}`)
      .then(async (res) => {
        console.log(res.data.products);
        await dispatch({
          type: await setProducts,
          payload: {
            loading: false,
            result: await res.data.products,
            error: false,
          },
        });
        await dispatch({
          type: await setProductsMeta,
          payload: {
            loading: false,
            result: await res.data.meta,
            error: false,
          },
        });
      })
      .catch(async (err) => {
        await dispatch({
          type: setProducts,
          payload: {
            loading: false,
            result: false,
            error: await err.message,
          },
        });
      });
  };
};
