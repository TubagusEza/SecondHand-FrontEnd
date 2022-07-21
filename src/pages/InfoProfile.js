import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import TemplateProfile from '../components/Templates/Profile/TemplateProfile';

const token = localStorage.getItem('token');
function InfoProfile() {
  const [userToken, setUserToken] = useState(token);
  const { isMyTokenExpired } = useJwt(userToken);
  return (
    <div>
      {!isMyTokenExpired ? (
        <div>
          <TemplateProfile />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>

  );
}

export default InfoProfile;
