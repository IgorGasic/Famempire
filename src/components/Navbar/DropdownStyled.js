import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-bottom: 40px;

  @media screen and (max-width: 960px) {
    width: 100%;
    position: static;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
  }
`;

export const Item = styled.li`
  cursor: pointer;

  &:hover {
    transition: ease-in-out 0.5s;
    transform: scale(1.05);
  }
`;
export const LinkItem = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
  border-left: 4px solid #fff;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    font-size: 25px;
  }

  @media screen and (max-width: 960px) {
    font-size: 20px;
    border-left: none;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;
