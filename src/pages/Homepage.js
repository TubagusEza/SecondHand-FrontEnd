import Carousel from "../components/Homepage/Carousel";
import Category from "../components/Homepage/Category";
import ItemCard from "../components/Homepage/ItemCard";
import BtnAddProduct from "../components/Homepage/BtnAddProduct";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarHeader from "../components/Navbar/NavbarHeader";

import { IMAGES } from "../data/data"
const Homepage = () => {
  useEffect(() => {
    document.title = "SecondHand";
  }, []);

  return (
    <>
    <NavbarHeader/>
      <Container fluid>
        <div className="row mt-3">
          <div className="col">
            <Carousel images={IMAGES} />
          </div>
        </div>
        <div className="row mt-5 mx-5">
          <div className="col-12">
            <h5 style={{ textAlign: "left" }}>Telusuri Kategori</h5>
          </div>
        </div>
        <div className="row mt-3 mx-5">
          <Category />
        </div>
        <div className="row mt-3 mx-5">
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
        </div>
        <div className="row mt-3 mx-5">
          <BtnAddProduct />
        </div>

        {/* <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><LoginForm /></Col>
        </Row> */}
      </Container>
    </>
  )
};

export default Homepage;