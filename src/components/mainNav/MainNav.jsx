import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import user from "../../assets/images/user.jpeg"
import "./nav.css"
import { VscBellDot } from 'react-icons/vsc';

function MainNav() {
  return (
    <Navbar className='dashNav'>
      <Container>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search or type"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end icons">
            <a href='#' className='bellicon'><VscBellDot/></a>
          <Navbar.Text>
            <img src={user} alt="user" className='user'/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;