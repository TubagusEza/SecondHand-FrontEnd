import axios from 'axios';
import { Navigate } from 'react-router-dom';
import checkUser from '../../utils/decodeToken';

const token = localStorage.getItem('token');

export default function getUser() {
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://second-hand-be.herokuapp.com/api/who-am-i', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
