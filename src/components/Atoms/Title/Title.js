/* eslint-disable react/prop-types */
import React from 'react';
// import './Label.Module.css';

function TitleList(props) {
  const { title } = props;

  return (
    <div className="mb-4 title-list">
      <h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</h5>
    </div>
  );
}

export default TitleList;
