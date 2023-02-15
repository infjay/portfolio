import React from 'react'
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"


import { Container, Nav, Navbar,NavDropdown} from "react-bootstrap"
import { useState,useEffect } from "react"
import { Link } from 'react-bootstrap-icons'

function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = ()=> {
            if(window.scrollY >50){
                setScrolled(true)
            } setScrolled(false)
        }

        window.addEventListener("scroll", onScroll);
        
        return ()=> window.removeEventListener("scroll", onScroll)
    },[])

    const onUpdateActivelink = (value)=> {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home" ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActivelink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills" ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActivelink("skills")} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects" ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActivelink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/djawid-nezami/" target="_blank"><img src={navIcon1} alt=''/></a>
                <a href="https://www.twitter.com" target="_blank"><img src={navIcon2} alt=''/></a>
                <a href="https://github.com/infjay" target="_blank"><img src={navIcon3} alt=''/></a>
            </div>
          </span>
          <span className='navbar-text vvd'>
            <button className='vvd1' onClick={()=> window.open("https://calendly.com/jawid-nezami",'_blank')}>Get to know me</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;