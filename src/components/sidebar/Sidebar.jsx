

 import React from 'react';
 import "bootstrap/dist/css/bootstrap.min.css"
 import "bootstrap-icons/font/bootstrap-icons.css"
 import { Link } from 'react-router-dom';
 import {RxDashboard} from "react-icons/rx"
 import {HiOutlineUserCircle} from "react-icons/hi"
 import {BsBag , BsCalendar3Range } from "react-icons/bs"
 import {FiShoppingCart , FiSettings} from "react-icons/fi"
 import {RiScissors2Line} from "react-icons/ri"
 import {AiOutlineCar} from "react-icons/ai"
 import {BiMessageDetail , BiLogOut} from "react-icons/bi"
import logo from "../../assets/images/logo.jpeg"
import "../../assets/css/sidebar.css"

 import SidebarMenu from 'react-bootstrap-sidebar-menu';
 function Sidebar() {
     return (
         <>

 <SidebarMenu className='sidebar'>
     <SidebarMenu.Header className='head'>
        <img src={logo} alt="logo" className='navLogo'/>
     <SidebarMenu.Brand className='logo'>
       Motiv.
     </SidebarMenu.Brand>
     </SidebarMenu.Header>
     <SidebarMenu.Body className='links'>
      <div className='top'>
     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/">
         <SidebarMenu.Nav.Icon>
         <RxDashboard/>
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Dashboard
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>

     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/assets">
         <SidebarMenu.Nav.Icon>
         <HiOutlineUserCircle/>
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Assets
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>

     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/booking">
         <SidebarMenu.Nav.Icon>
            <AiOutlineCar />
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Bookink
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>
 
     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/sellsCars">
         <SidebarMenu.Nav.Icon>
         <BsBag />
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
            Sell Cars
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>

    
     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/buyCars">
         <SidebarMenu.Nav.Icon>
                  <FiShoppingCart/>
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Buy Cars
            
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>

    
    
     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/services">
         <SidebarMenu.Nav.Icon>
         <RiScissors2Line/>
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Services
            
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>

    
     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/calenders">
         <SidebarMenu.Nav.Icon>
         <BsCalendar3Range/>
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Calenders
            
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>
    

     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/messages">
         <SidebarMenu.Nav.Icon>
         <BiMessageDetail />
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Messages
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>
     </div>
     <div className='end'>

     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/calenders">
         <SidebarMenu.Nav.Icon>
         <FiSettings/>
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Settings
            
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>
    

     <SidebarMenu.Nav>
       <SidebarMenu.Nav.Link as={Link} to="/messages">
         <SidebarMenu.Nav.Icon>
         <BiLogOut />
         </SidebarMenu.Nav.Icon>
         <SidebarMenu.Nav.Title>
         Log Out
         </SidebarMenu.Nav.Title>
       </SidebarMenu.Nav.Link>
     </SidebarMenu.Nav>
     </div>

         </SidebarMenu.Body>
 </SidebarMenu> 
        </>
     );
 }

 export default Sidebar;