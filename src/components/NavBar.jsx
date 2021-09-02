import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" className="w-100 mb-3">
    <Container>
      <Link to="/">
        <Navbar.Brand href="#home">🕮BookCastle🏰</Navbar.Brand>
      </Link>{" "}
      <Nav className="me-auto">
        <Link to="/Home">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/Login">
          <Nav.Link href="#features">Login</Nav.Link>
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
