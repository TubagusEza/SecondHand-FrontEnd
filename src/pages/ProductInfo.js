import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Container
} from 'react-bootstrap';
import ProductInfo from '../components/Seller/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Profile/Form.Module.css';
import '../styles/App.css';
import NavbarProduct from '../components/Navbar/NavbarProduct';

function ProfileUser() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Product Info";
  }, []);

  return (
    <>
    <NavbarProduct/>
      <Container>
      <div style={{ paddingTop: '30px' }}>
        <Link to='/seller/product/:id' style={{ color: 'black' }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
        <ProductInfo />
      </Container>
    </>
  )
}

export default ProfileUser;