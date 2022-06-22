import { useEffect } from "react";
import '@fontsource/poppins';
import NavbarLogIn from "../components/Navbar/NavbarLogIn";
import { 
  Container, 
  Row, 
  Col 
} from "react-bootstrap";
import ButtonName from "../components/Seller/Card/CardButtonName";
import CardListProduct from "../components/Seller/Card/CardListProduct";
import SidebarProducts from "../components/Seller/Sidebar/SIdebarProducts";

const ListSell = () => {
  useEffect(() => {
    document.title = "Dafftar Jual";
  }, []);

  return (
    <>
    <NavbarLogIn/>
      <Container >
        <Row >
        
      <ButtonName/>
        <Container className='mt-5'>
          <Row>
            <Col xs={3}>
             <SidebarProducts/>
            </Col>
            <CardListProduct/>
          </Row>
        </Container>
        </Row>
      </Container>
    </>
  )
};

export default ListSell;