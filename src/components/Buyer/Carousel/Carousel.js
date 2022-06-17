import React from 'react';
import "@fontsource/poppins";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from '../Card/CardProduct'
import CardDescription from '../Card/CardDescription'
import '../../../styles/Carousel.Module.css';

function Carousel() {
  const options = {
    loop: true,
    margin: 10,
    height: 100,
    items: 1,
    lazyLoad: true,
    dots: true,
    nav: true,
    navClass: ['owl-prev', 'owl-next'],
    navText: [
      "<img src='/images/left-button.png' style='width: 32px; margin-right: 50px'>",
      "<img src='/images/right-button.png' class='next-prev' style='width: 32px;'>",

    ]
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
              <OwlCarousel className="owl-theme" {...options}>
                <div className="card-carousel">
                  <img
                    className="owl-lazy"
                    data-src='https://images.unsplash.com/photo-1615368144592-44708889c926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&w=1000&q=80'
                    alt="road"
                  />
                </div>
                <div className="card-carousel">
                  <img
                    className="owl-lazy"
                    data-src='https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&w=1000&q=80'
                    alt="sunrise"
                  />
                </div>
                <div className="card-carousel">
                  <img
                    className="owl-lazy"
                    data-src='https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                    alt="road2"
                  />
                </div>
                <div className="card-carousel">
                  <img
                    className="owl-lazy"
                    data-src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt="road2"
                  />
                </div>
                <div className="card-carousel">
                  <img
                    className="owl-lazy"
                    data-src='https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                    alt="road2"
                  />
                </div>
              </OwlCarousel>
          </Col>
          <Col xs={6}>
            <CardProduct />
          </Col>
          <Row>
            <CardDescription />
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default Carousel;
