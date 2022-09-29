
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'




export const NavBar = () => {
  return (

      <Navbar bg="dark" variant="dark" >
      <Container fluid >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ display:"flex" , justifyContent: "center"}}
            navbarScroll
          >
            <Nav.Item >
              <Link className='link' to={"/"}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='link' to={"/Fav"}>Fav</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

  );
}

