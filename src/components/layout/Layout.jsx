import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import MainNav from '../mainNav/MainNav';
import Sidebar from '../sidebar/Sidebar';
import "../../assets/css/layout.css"
import Dashboard from "../pages/Dashboard";
import Assets from "../pages/Assets"
import Booking from "../pages/Booking"
import SellCars from "../pages/SellCars"
import BuyCars from "../pages/BuyCars"
import Calender from "../pages/Calender"
import Messages from "../pages/Messages"
import Services from "../pages/Services"
import {
    Routes,
    Route
  } from "react-router-dom";

function Layout() {
  return (
    <Container fluid>
      <Row className='page'>
        <Col md={2} >
            <Sidebar/>
          {/* <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav> */}
        </Col>
        <Col >
        <Row>
        <MainNav/>
        </Row>
        <Row>
        <Routes>
    <Route exact path="/" element={<Dashboard/>} />
    <Route path="/assets" element={<Assets/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/sellsCars" element={<SellCars/>}/>
    <Route path="/buyCars" element={<BuyCars/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/calenders" element={<Calender/>}/>
    <Route path="/messages" element={<Messages/>}/>
</Routes>
        </Row>
          {/* <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">My Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;