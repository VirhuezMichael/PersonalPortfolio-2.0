// import React, { useState } from 'react';
// import styled from 'styled-components';
// // import CloseIcon from '@mui/icons-material/Close';
// // import MenuIcon from '@mui/icons-material/Menu';

// const Nav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 100;
//   width: 100%;
//   background-color: #ba1e4a ;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const NavList = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   @media (max-width: 740px) {
//     flex-direction: column;
//     align-items: flex-start;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     background-color: #fff;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
//     overflow: hidden;
//     transition: height 0.3s ease;
//     width: 100%;
//   }
// `;

// const NavItem = styled.li`
//   margin: 0 1rem;
//   @media (max-width: 740px) {
//     margin: 1rem;
//   }
// `;

// const NavLink = styled.a`
//   display: block;
//   padding: 0.5rem;
//   color: #ece3da ;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover,
//   &.active {
//     color: #fffafc ;
//     border-bottom: 2px solid #fffafc ;
//   }
// `;

// const NavBrand = styled.img`
//   height: 60px;
//   @media (max-width: 740px) {
//     margin: 1rem;
//   }
// `;

// const NavIcon = styled.button`
//   display: none;
//   @media (max-width: 740px) {
//     display: block;
//     position: absolute;
//     top: 0.5rem;
//     right: 0.5rem;
//     background-color: transparent;
//     border: none;
//     cursor: pointer;
//     font-size: 2rem;
//     outline: none;
//   }
// `

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleNavIconClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Nav className="scrollspy">
//       <NavBrand src="brand.png" alt="Brand Logo" />
//       <NavIcon onClick={handleNavIconClick}>
//         {/* {isOpen ?  <CloseIcon /> : <MenuIcon />} */}
//         {isOpen ?  <div>close</div> : <div>menu icon</div>}
//       </NavIcon>
//       <NavList isOpen={isOpen}>
//         <NavItem>
//           <NavLink href="#about">Quiénes somos</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#services">Nuestros servicios</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#clients">Nuestros clientes</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#contact">Contacto</NavLink>
//         </NavItem>
//       </NavList>
//     </Nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-scroll';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';

// const Nav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 100;
//   width: 100%;
//   background-color: #ba1e4a ;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const NavList = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   @media (max-width: 740px) {
//     flex-direction: column;
//     align-items: flex-start;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     background-color: #fff;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
//     overflow: hidden;
//     transition: height 0.3s ease;
//     width: 100%;
//   }
// `;

// const NavItem = styled.li`
//   margin: 0 1rem;
//   @media (max-width: 740px) {
//     margin: 1rem;
//   }
// `;

// const NavLink = styled(Link)`
//   display: block;
//   padding: 0.5rem;
//   color: #ece3da ;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover,
//   &.active {
//     color: #fffafc ;
//     border-bottom: 2px solid #fffafc ;
//   }
// `;

// const NavBrand = styled.img`
//   height: 60px;
//   @media (max-width: 740px) {
//     margin: 1rem;
//   }
// `;

// const NavIcon = styled.button`
//   display: none;
//   @media (max-width: 740px) {
//     display: block;
//     position: absolute;
//     top: 0.5rem;
//     right: 0.5rem;
//     background-color: transparent;
//     border: none;
//     cursor: pointer;
//     font-size: 2rem;
//     outline: none;
//   }
// `

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleNavIconClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Nav className="scrollspy">
//       <NavBrand src="brand.png" alt="Brand Logo" />
//       <NavIcon onClick={handleNavIconClick}>
//         {isOpen ?  <CloseIcon /> : <MenuIcon />}
//       </NavIcon>
//       <NavList isOpen={isOpen}>
//         <NavItem>
//           <NavLink to="about" smooth={true} duration={500} spy={true} offset={-80}>Quiénes somos</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="services" smooth={true} duration={500} spy={true} offset={-80}>Nuestros servicios</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="projects" smooth={true} duration={500} spy={true} offset={-80}>Nuestros proyectos</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="contact" smooth={true} duration={500} spy={true} offset={-80}>Contacto</NavLink>
//         </NavItem>
//       </NavList>
//     </Nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #2b2b2b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  color: #ece3da;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    color: #fffafc;
    border-bottom: 2px solid #fffafc;
  }
`;

const NavBrand = styled.img`
  height: 60px;
  border-radius: 30px;
  margin: 5px;
  @media (max-width: 740px) {
    margin: 1rem;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  color:#ece3da;
`

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
`;

const BrandTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: large;
  margin-left: 10px;
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav className="scrollspy">
      <BrandContainer>
      <NavBrand src="profile-2.jpeg" alt="profile picture" />
      <BrandTitle>Michael Virhuez</BrandTitle>
      </BrandContainer>
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
            to="services"
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
          <a href="./MVResume.pdf" target="_blank" style={{color:"#3f848c "}}>
            My Resume
          </a>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
