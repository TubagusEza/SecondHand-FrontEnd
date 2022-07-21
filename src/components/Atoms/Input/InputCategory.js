/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCategory({ inputCategory }) {
  const [categoryId, setCategoryId] = useState([]);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: '',
  });

  const token = localStorage.getItem('token');

  axios.get(
    'https://second-hand-be.herokuapp.com/api/categories',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then((res) => {
      const state = res.data.data.data.map((listCategory) => {
        return {
          value: listCategory.id,
          label: listCategory.name,
        };
      });
      setCategoryId(state);
    })
    .catch((err) => {
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    });

  useEffect(() => {
  }, [categoryId]);

  const categoryStyles = {
    control: (styles) => { return { ...styles }; },
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        color: 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',
        borderRadius: '12px',
        zIndex: '2',
      };
    },
  };

  const handleGetValue = (e) => {
    console.log(e);
    inputCategory(e.value);
  };

  return (
    <div className="mb-3">
      <Form styles={{ borderRadius: '16px', zIndex: '2' }}>
        <Select options={categoryId} onChange={handleGetValue} styles={categoryStyles} />
      </Form>
    </div>
  );
}

export default InputCategory;
