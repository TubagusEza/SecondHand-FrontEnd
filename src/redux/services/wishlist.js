import axios from 'axios';

const token = localStorage.getItem('token');

export default function getBookmarkService() {
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://second-hand-be.herokuapp.com/api/wishlist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
