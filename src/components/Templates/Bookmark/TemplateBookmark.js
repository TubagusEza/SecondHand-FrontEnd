import { Container } from 'react-bootstrap';
import NavbarBookmark from '../../Organisms/Navbar/NavbarBookmark';
import Bookmark from '../../Organisms/Bookmark/Bookmark';

function TemplateBookmark({ wishlist }) {
  return (
    <>
      <NavbarBookmark />
      <Container fluid>
        <Bookmark wishlist={wishlist} />
      </Container>
    </>
  );
}

export default TemplateBookmark;
