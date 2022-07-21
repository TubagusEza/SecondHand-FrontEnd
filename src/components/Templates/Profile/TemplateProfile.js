/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateListProfile } from '../../../redux/actions/profile';
import NavbarProfile from '../../Organisms/Navbar/NavbarProfile';
import ProfileInput from '../../Moleculs/Form/ProfileInput';
import './TemplateProfile.Module.css';

function TemplateProfile() {
  // Data Input Profile
  const [inputName, setInputName] = useState('');
  const [cityId, setCityId] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  // Upload Image
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const dispatch = useDispatch();

  const {
    profileLoading,
    profileResult,
    profileError,
  } = useSelector((state) => { return state.getProfileReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: inputName,
      phoneNumber,
      address,
      cityId: parseInt(cityId),
    };
    await dispatch(updateListProfile(image, body));
  }

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    console.log(profileLoading, profileResult);
    if (profileLoading) {
      setLoading(true);
    } else if (profileResult) {
      setLoading(false);
      // window.location.reload();
      console.log(profileResult);
    } else if (profileError) {
      console.log(profileError);
    }
    let fileReader = false;
    let isCancel = false;
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setUploadedFileURL(result);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  });

  // if (profileResult) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <NavbarProfile />
      <div>
        <Container fluid className="profile p-0">
          <Row>
            <Col>
              <div style={{ paddingTop: '30px' }}>
                <Link to="/" style={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                {image && (
                  <img src={image} alt="" />
                )}
                {uploadedFileURL
                  ? (
                    <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" />
                  ) : null}
                <div className="avatar">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="avatar-image"
                  />
                </div>
                <ProfileInput
                  name={setInputName}
                  city={setCityId}
                  phoneNumber={setPhoneNumber}
                  address={setAddress}
                />
                <Button className="mt-3 mb-3 btn-profile" variant="custom" type="submit" style={{ width: '100%' }}>
                  Simpan
                  {loading && (
                  <span className="spinner-border spinner-border-sm me-2" />
                  )}
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default TemplateProfile;
