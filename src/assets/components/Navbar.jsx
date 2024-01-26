import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="sm" bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none text-white p-2">
              🏠 Home
            </Link>
            <Link
              to="/contacto"
              className="text-decoration-none text-white p-2"
            >
              📙 Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white p-2">
            Happy Cake🍰
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
