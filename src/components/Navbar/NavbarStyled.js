import styled from "styled-components";
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

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 80px;
    position: sticky;
  }

  @media screen and (max-width: 425px) {
    position: sticky;
    width: 100%;
    height: 60px;
  }
  @media screen and (max-width: 375px) {
    height: 60px;
    position: sticky;
    width: 100%;
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

  @media screen and (max-width: 425px) {
    padding-left: 0;
    position: absolute;
    top: 5px;
    left: 15px;
    font-size: 22px;
  }
`;
export const NavLogo = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 10px;

  @media screen and (max-width: 425px) {
    width: 50px;
    height: 50px;
  }
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    top: 10px;
  }

  @media screen and (max-width: 425px) {
    top: 8px;
  }

  @media screen and (max-width: 414px) {
    top: 9px;
  }

  @media screen and (max-width: 375px) {
    top: 11px;
  }
`;
export const Bars = styled(CgLoadbarSound)`
  color: #fff;
  height: 60px;
  width: 60px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    height: 45px;
    width: 45px;
  }

  @media screen and (max-width: 414px) {
    height: 40px;
    width: 40px;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
    width: 40px;
  }
`;
export const X = styled(FaTimes)`
  color: #fff;
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;

  @media screen and (max-width: 425px) {
    height: 35px;
    width: 35px;
    margin-right: 5px;
    margin-top: 5px;
  }

  @media screen and (max-width: 414px) {
    height: 30px;
    width: 30px;
    margin-right: 5px;
    margin-top: 5px;
  }

  @media screen and (max-width: 375px) {
    height: 30px;
    width: 30px;
    margin-right: 5px;
    margin-top: 5px;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  position: absolute;
  top: ${({ click }) => (click ? "80px" : "-900px")};
  opacity: 100%;
  transition: all 0.2s ease-in-out;
  background: url(${oro});
  background-size: 160% 100%;
  background-color: #0f72e5;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    top: ${({ click }) => (click ? "80px" : "-900px")};
    height: 70vh;
  }

  @media screen and (max-width: 425px) {
    top: ${({ click }) => (click ? "60px" : "-1000px")};
    height: 100vh;
    justify-content: flex-start;
    background-size: 120% 100%;
  }

  @media screen and (max-width: 375px) {
    top: ${({ click }) => (click ? "49px" : "-1000px")};
    background-size: 120% 110%;
  }
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
  padding-bottom: 100px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-bottom: 40px;
  }

  @media screen and (max-width: 425px) {
    font-size: 35px;
    padding-bottom: 25px;
  }

  @media screen and (max-width: 414px) {
    font-size: 35px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 375px) {
    font-size: 30px;
    padding-bottom: ${({ service }) => (service ? 0 : "10px")};
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
    padding-bottom: ${({ service }) => (service ? 0 : "5px")};
  }
`;
