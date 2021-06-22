import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  max-width: 100%;
  background: linear-gradient(180deg, #0f72e5 0%, #2ca7b8 100%);
  display: flex;

  @media screen and (max-width: 375px) {
    height: 50vh;
  }
  @media screen and (max-width: 360px) {
    height: 45vh;
  }
  @media screen and (max-width: 320px) {
    height: 55vh;
  }
`;
export const LogoTitle = styled.div`
  margin-left: 20px;
  display: flex;

  @media screen and (max-width: 414px) {
    height: 60px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 0;
  }
`;
export const TitleText = styled.h4`
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
`;
export const Title = styled.div`
  margin-top: 12px;
`;
export const Logo = styled.div``;

export const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  position: absolute;
  width: 550px;
  height: 490px;
  right: 0;

  @media screen and (max-width: 1600px) {
    height: 400px;
    width: 400px;
    left: 1200px;
  }
  @media screen and (max-width: 1570px) {
    height: 400px;
    width: 400px;
    left: 1120px;
  }

  @media screen and (max-width: 1500px) {
    height: 400px;
    width: 400px;
    left: 1070px;
  }

  @media screen and (max-width: 425px) {
    left: 0;
  }

  @media screen and (max-width: 414px) {
    width: 0;
    height: 0;
  }
`;
export const Content = styled.div`
  padding-left: 16%;
  justify-content: center;
  text-align: center;
  padding-top: 85px;

  @media screen and (max-width: 1600px) {
    padding-left: 8.7%;
    padding-top: 50px;
  }

  @media screen and (max-width: 414px) {
    position: absolute;
    margin-left: -30px;
    padding-top: 60px;
  }

  @media screen and (max-width: 360px) {
    margin-left: -20px;
  }
  @media screen and (max-width: 320px) {
    margin-left: -27px;
  }
`;
export const Text = styled.p`
  font-size: 50px;
  padding-top: 50px;
  color: #fff;

  @media screen and (max-width: 414px) {
    font-size: 30px;
  }
`;
export const ButtonArea = styled.div`
  padding-top: 40px;

  @media screen and (max-width: 414px) {
    padding-top: 20px;
  }
`;
export const Button = styled.button`
  width: 400px;
  height: 70px;
  background: #ffffff;
  border: 6px solid #ffffff;
  box-sizing: border-box;
  border-radius: 37px;
  color: #0f72e5;
  font-size: 35px;
  cursor: pointer;

  @media screen and (max-width: 414px) {
    font-size: 20px;
    width: 200px;
  }
`;
