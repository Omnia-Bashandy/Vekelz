import React, { useState, useEffect } from "react";
import "../../assets/css/pages.css";
import "../../assets/css/booking.css";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { RxDashboard } from "react-icons/rx";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import MyCard from "../card/MyCard";
import booking from "../../assets/JsonData/cars.json"

function Booking() {
    const cars = booking.booking
    console.log(cars);
  const apiUrl = "https://8yz5q.mocklab.io/cars/booking";
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (json) => {
          setProducts(json.data.booking);
          console.log(products);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getProducts();
  }, []);
//   const imgs = [car1 , car2 , car3 ,car4 , car5 , car6 ,car7 , car8 , car9 ]
  return (
    <div className="r">
      <Container>
        <h2>Booking</h2>
        <Navbar>
          <Navbar.Collapse className="db">
            <DropdownButton
              id="dropdown-basic-button"
              title="new"
              variant=""
              className="border-0 drobd1"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              title="Toyata"
              variant=""
              className="border-0 drobd2"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text className="endicon">
              <RxDashboard />
            </Navbar.Text>
            <Navbar.Text className="endicon">
              <TbAdjustmentsHorizontal />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
  <Row>
    <Col className="cars">
        {
        products.map((car)=>{
                return(
                    <div className="col-sm" key={car.id}>
                        <MyCard product={car}/>
                    </div>
                    
            )
        })
        
    }
    
    
    </Col>
  </Row>

      </Container>
    </div>
  );
}

export default Booking;
