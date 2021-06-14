import React, { useState } from "react";
import logo from "../../images/logo.svg";
import {
  Nav,
  NavLink,
  NavLogo,
  NavIcon,
  Bars,
  NavMenu,
  NavItem,
  NavLinks,
  X,
} from "./NavbarStyled";
import Dropdown from "./Dropdown";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      setClick(!click);
    }, 100);
  };

  const closeMobile = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo src={logo} />
          Famempire
        </NavLink>
        <NavIcon onClick={handleClick}>{click ? <X /> : <Bars />}</NavIcon>
        <NavMenu click={click}>
          <NavItem>
            <NavLinks to="/" onClick={closeMobile}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={extendElement}
          >
            <NavLinks>Services</NavLinks>
            {dropdown && <Dropdown closeMobile={closeMobile} />}
          </NavItem>
          <NavItem>
            <NavLinks to="/aboutus" onClick={closeMobile}>
              About Us
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contactus" onClick={closeMobile}>
              Contact Us
            </NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};
