import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateTransactionConfirmation(id, request) {
  console.log(id, request);
  const requestBody = {
    isCanceled: request,
  };
  return axios
    // eslint-disable-next-line prefer-template
    .put(
      `https://second-hand-be.herokuapp.com/api/transaction/${id}/confirmation`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
