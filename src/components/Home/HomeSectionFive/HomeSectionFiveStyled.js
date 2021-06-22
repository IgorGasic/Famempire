import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 60px;
  text-transform: uppercase;
  padding: 50px 0;

  @media screen and (max-width: 425px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const Button = styled.button`
  color: #fff;
  font-size: 35px;
  border: none;
  border-radius: 37px;
  padding: 10px 155px;
  background: linear-gradient(90deg, #0f72e5 0%, #1cb3fe 100%);
  cursor: pointer;

  @media screen and (max-width: 425px) {
    font-size: 20px;
    padding: 20px 60px;
  }
`;
