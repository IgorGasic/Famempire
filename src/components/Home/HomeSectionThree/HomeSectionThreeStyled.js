import styled from "styled-components";

export const ContainerContet = styled.div`
  height: 100vh;

  @media screen and (min-width: 1519px) and (max-width: 1600px) {
    height: 100%;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 55px;
  text-transform: uppercase;
  padding: 100px;

  @media screen and (max-width: 425px) {
    font-size: 30px;
    padding: 50px 0;
    text-align: center;
  }
`;
export const Content = styled.div`
  max-width: 1336px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 425px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
export const Text = styled.p`
  font-size: 35px;
  padding-bottom: ${({ last }) => (last ? "120px" : "50px")};

  @media screen and (max-width: 425px) {
    font-size: 25px;
    text-align: center;
    padding-bottom: 50px;
  }
`;
export const Button = styled.button`
  border: none;
  border-radius: 15px;
  background: #1cb3fe;
  color: #fff;
  font-size: 35px;
  padding: 5px 10px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    margin-left: 115px;
    margin-bottom: 80px;
    padding: 15px 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 414px) {
    margin-left: 105px;
    margin-bottom: 80px;
    padding: 15px 30px;
    font-size: 20px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 90px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 70px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 60px;
  }
`;
