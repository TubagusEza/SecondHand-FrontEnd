/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateListProduct } from '../../../redux/actions/updateProduct';
import NavbarProduct from '../../Organisms/Navbar/NavbarProduct';
import UpdateProduct from '../../Moleculs/Form/updateProduct';
import IsMobile from '../../../styles/IsMobile';
import './TemplateProduct.Module.css';

function TemplateUpdate() {
  // Data Input Product
  const [inputName, setInputName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  // Upload Image
  const [image, setImage] = useState([]);
  const [uploadedFileURL, setUploadedFileURL] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  let fileObj = [];

  const {
    productLoading,
    productResult,
    productError,
  } = useSelector((state) => { return state.updateProductReducer; });

  const getProduct = async () => {
    try {
      console.log(inputName);
      const token = localStorage.getItem('token');
      const getResponse = await axios.get(
        `https://second-hand-be.herokuapp.com/api/product/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(getResponse.data);
      setInputName(getResponse.data.name);
      setPrice(getResponse.data.price);
      setCategoryId(getResponse.data.category.name);
      setDescription(getResponse.data.description);
      console.log(inputName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: inputName,
      price: parseInt(price),
      description,
      categoryId: parseInt(categoryId),
    };
    await dispatch(updateListProduct(image, body, params.id));
  }

  const handleChangeImage = (e) => {
    fileObj.push(e.target.files);
    setMessage(false);
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < fileObj.length; i++) {
      sum += fileObj[i].length;
    }

    if (sum > 4) {
      setMessage(true);
      fileObj = [];
      setImage([]);
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < fileObj[0].length; i++) {
        image.push(fileObj[0][i]);
      }
      setImage(image);
    }
    console.log(fileObj);
    console.log(image);
    // setImage(e.target.value);
  };

  useEffect(() => {
    if (productLoading) {
      setLoading(true);
    } else if (productResult) {
      setLoading(false);
      window.location.reload();
      console.log(productResult);
    } else if (productError) {
      console.log(productError);
    }
  });

  if (productResult) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavbarProduct />
      <div>
        <Container fluid className="form-products p-0">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <div style={{ paddingTop: '30px' }}>
                  <Link to="/" style={{ color: 'black' }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Link>
                </div>
                <UpdateProduct
                  name={setInputName}
                  price={setPrice}
                  categoryId={setCategoryId}
                  description={setDescription}
                />
                <Form.Group className="mb-3" controlId="productPhoto">
                  <Form.Label>Foto Produk</Form.Label>
                  {image && image.map(({ images, index }) => {
                    return (
                      <img src={images} key={index} alt="" />
                    );
                  })}
                  <Form.Control
                    type="file"
                    accept=""
                    onChange={handleChangeImage}
                    className="upload-button"
                    multiple
                  />
                  {message && (
                    <div className="alert alert-danger" role="alert">
                      You can upload maximum 4 images!
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row className={`${IsMobile ? 'mb-1' : 'mx-5 mb-5'}`}>
              <Col xs={6}>
                <Link to={`/seller/product/${params.id}`}>
                  <Button variant="primary" className="preview-button" type="submit">
                    Preview
                  </Button>
                </Link>
              </Col>
              <Col xs={6}>
                <Button variant="primary" className="publish-button" type="submit">
                  Terbitkan
                  {loading && (
                    <span className="spinner-border spinner-border-sm" />
                  )}
                </Button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default TemplateUpdate;
