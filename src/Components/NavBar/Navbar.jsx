import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 60px;
  background-color: ${({ scrolled }) => (scrolled ? "rgba(201, 219, 239, 0.8)" : "#c9dbef")};
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0px 0px 15px 15px;
  transition: background-color 0.3s ease;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(6px)" : "none")};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  @media (max-width: 740px) {
    margin: 1rem;
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  color:  #3e2723;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 1.5px;

  &:hover,
  &.active {
    color: #3e2723;
    border-bottom: 2px solid #3e2723;
    font-weight: bold;
    font-size: 105%;
  }
`;

// const NavBrand = styled.img`
//   height: 60px;
//   border-radius: 30px;
//   margin: 5px;
//   @media (max-width: 740px) {
//     margin: 1rem;
//   }
// `;

// const BrandContainer = styled.div`
//   text-align: center;
//   align-items: center;
//   color: #f7fafd;
//   padding-left: 10px;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   font-family: 'Roboto', sans-serif;
//   font-size: large;
//   margin-left: 10px;
// `

const NavIcon = styled.button`
  display: none;
  @media (max-width: 740px) {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
  }
  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const handleNavIconClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60; // Cambia a true cuando haces scroll más allá de 60px
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled} className="scrollspy">

      <NavIcon onClick={handleNavIconClick}>
        {isOpen ? <CloseIcon/> : <MenuIcon/>}
      </NavIcon>
      <NavList isOpen={isOpen}>
        <NavItem>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Experience
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <a href="./Michael_Resume.pdf" target="_blank" style={{color:"#3f848c ", fontWeight:'bold'}}>
            My Resume
          </a>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
