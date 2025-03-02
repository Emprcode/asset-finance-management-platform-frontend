import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand href='/dashboard'>
          <h2 className='p-3'>Asset Finance Specialists</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto gap-3 h5'>
            <Link className='nav-link' to='/add-application'>
              Add Application
            </Link>
            <Link className='nav-link' to='#'>
              Profile
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
