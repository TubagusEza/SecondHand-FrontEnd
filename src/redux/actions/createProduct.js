/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
import axios from 'axios';

export const createProduct = 'createProduct';

export const createListProduct = (image, body) => {
  const url = [];
  return async (dispatch) => {
    // Loading
    console.log('lewat 13');
    dispatch({
      type: createProduct,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    console.log('lewat 22');
    // GET API USER
    const token = localStorage.getItem('token');
    await axios.get('https://second-hand-be.herokuapp.com/api/who-am-i', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (resultUser) => {
        // eslint-disable-next-line no-plusplus
        let cloudinaryUpload;
        for (let i = 0; i < image.length; i++) {
          cloudinaryUpload = new FormData();
          cloudinaryUpload.append('picture', image[i]);
          console.log(image[i]);
          const response = await axios.put(
            `https://second-hand-be.herokuapp.com/api/product/picture/${resultUser.data.id.toString()}/cloudinary`,
            cloudinaryUpload,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
            },
          );
          // console.log(response.data.url);
          url.push(response.data.url);
          // setUploadedFileURL = uploadedFileURL.push(response.data.url);
        }
        const bodyProduct = {
          name: body.name,
          images: url,
          price: body.price,
          description: body.description,
          categoryId: body.categoryId,
        };
        console.log(bodyProduct);
        await axios.post(
          'https://second-hand-be.herokuapp.com/api/products',
          bodyProduct,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        )
          .then(async (result) => {
            console.log(result.data);
            await dispatch({
              type: createProduct,
              payload: {
                loading: false,
                result: await result.data,
                error: false,
              },
            });
          })
          .catch((err) => {
            dispatch({
              type: createProduct,
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
          type: createProduct,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
