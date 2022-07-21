/* eslint-disable no-undef */
import axios from 'axios';
// import { useRoute } from '@react-navigation/native';

export const updateProfile = 'updateProfile';

export const updateListProfile = (image, body) => {
  return async (dispatch) => {
  // Loading
    console.log('lewat 10');
    dispatch({
      type: updateProfile,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    console.log('lewat 19');
    // GET API USER
    const token = localStorage.getItem('token');
    await axios.get('https://second-hand-be.herokuapp.com/api/who-am-i', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (resultUser) => {
        const cloudinaryUpload = new FormData();
        cloudinaryUpload.append('picture', image);
        console.log(cloudinaryUpload, image);
        await axios.put(
          `https://second-hand-be.herokuapp.com/api/user/picture/${resultUser.data.id.toString()}/cloudinary`,
          cloudinaryUpload,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          },
        )
          .then(async (resultCloudinary) => {
            const bodyUser = {
              name: body.name,
              photo: resultCloudinary.data.url,
              phoneNumber: body.phoneNumber,
              address: body.address,
              cityId: body.cityId,
            };
            await axios.put(
              `https://second-hand-be.herokuapp.com/api/users/${resultUser.data.id.toString()}/detail`,
              bodyUser,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              },
            )
              .then(async (result) => {
                console.log(result);
                await dispatch({
                  type: updateProfile,
                  payload: {
                    loading: false,
                    result: await result.data,
                    error: false,
                  },
                });
              })
              .catch((err) => {
                dispatch({
                  type: updateProfile,
                  payload: {
                    loading: false,
                    result: false,
                    error: err.message,
                  },
                });
              });
          })
          .catch((err) => {
            dispatch({
              type: updateProfile,
              payload: {
                loading: false,
                result: false,
                error: err.message,
              },
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: updateProfile,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
