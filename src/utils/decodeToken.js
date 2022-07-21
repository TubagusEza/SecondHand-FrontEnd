import axios from 'axios';
import { isExpired, decodeToken } from 'react-jwt';

const token = localStorage.getItem('token');

export default function getUser() {
  const result = {
    data: null,
    toLogin: false,
  };
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);

  if (!token || isMyTokenExpired) {
    result.toLogin = true;
  }

  return result;
}
