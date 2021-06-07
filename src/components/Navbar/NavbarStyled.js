import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { CgLoadbarSound } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import oro from "../../images/pilicar.svg";

export const Nav = styled.nav`
  background: #0f72e5;
  height: 80px;
  display: flex;
  font-weight: 700;
  top: 0;
  z-index: 999;
  position: sticky;
  @media screen and (max-width: 400px) {
    height: 30px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  padding-left: 15px;
  text-transform: uppercase;

  @media screen and (max-width: 400px) {
    padding-left: 0;
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 17px;
  }
`;
export const NavLogo = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 10px;

  @media screen and (max-width: 400px) {
    width: 28px;
    height: 28px;
  }
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
`;
export const Bars = styled(CgLoadbarSound)`
  color: #fff;
  height: 60px;
  width: 60px;
  cursor: pointer;
  transition-delay: ${({ click }) => (click ? "1s" : null)};
`;
export const X = styled(FaTimes)`
  color: #fff;
  height: 60px;
  width: 60px;
  cursor: pointer;
  transition-delay: ${({ click }) => (click ? "1s" : null)};
`;
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  position: absolute;
  top: ${({ click }) => (click ? "80px" : "-900px")};
  /* visibility:${({ click }) => (click ? "visible" : "hidden")} ; */
  opacity: 100%;
  transition: all 0.2s ease-in-out;
  background: url(${oro});
  background-size: 160% 100%;
  background-color: #0f72e5;
`;
export const NavItem = styled.li`
  font-size: 2rem;
  list-style: none;
`;
export const NavLinks = styled(Link)`
  text-align: center;
  width: 100%;
  display: table;
  text-decoration: none;
  color: #fff;
  font-size: 60px;
  line-height: 70px;
  padding-bottom: 50px;
`;
