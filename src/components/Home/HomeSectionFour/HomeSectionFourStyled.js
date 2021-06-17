import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 415px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const BlueContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 40%;
  background: linear-gradient(91.46deg, #0f72e5 1.21%, #0f72e5 98.76%);

  @media screen and (max-width: 415px) {
    width: 100%;
    height: 20vh;
    position: static;
  }
`;

export const Title = styled.h2`
  font-size: 55px;
  text-transform: uppercase;
  padding: 20px 20px;
  color: #fff;

  @media screen and (max-width: 415px) {
    font-size: 35px;
  }
  @media screen and (max-width: 360px) {
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`;

export const ContentContainer = styled.div`
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 415px) {
    height: 100%;
  }
`;
export const ImgWrapper = styled.div`
  max-width: 632px;
  max-height: 632px;
  box-sizing: border-box;
  margin-left: -250px;
  margin-top: 150px;
  -webkit-box-shadow: -69px 61px 53px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -69px 61px 53px -2px rgba(0, 0, 0, 0.75);
  box-shadow: -81px 92px 32px 8px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    max-width: 500px;
    max-height: 500px;
    box-shadow: -41px 52px 20px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 415px) {
    margin-top: 50px;
    width: 300px;
    height: 300px;
    margin-left: 50px;
    margin-right: auto;
    box-shadow: -21px 52px 12px 2px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 375px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 360px) {
    width: 300px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
  @media screen and (max-width: 320px) {
    width: 250px;
    height: 250px;
    margin-left: 35px;
  }
`;
export const Img = styled.img`
  width: 632px;
  height: 632px;
  object-fit: cover;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    max-width: 520px;
    max-height: 520px;
  }

  @media screen and (max-width: 415px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 360px) {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  @media screen and (max-width: 320px) {
    width: 250px;
    height: 250px;
  }
`;
export const Content = styled.div`
  margin-top: 350px;
  margin-left: 100px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 415px) {
    margin-top: 60px;
    margin-left: 50px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }
`;
export const TextOne = styled.p`
  font-size: 15px;
  color: #000000;
  text-transform: uppercase;
  padding-bottom: 20px;
  letter-spacing: 0.205em;
`;
export const TextTwo = styled.p`
  font-size: 60px;
  color: #000000;
  padding-bottom: 20px;

  @media screen and (max-width: 415px) {
    font-size: 40px;
  }
`;
export const TextThree = styled.p`
  font-size: 25px;
  color: #000000;
  padding-bottom: 20px;
`;
export const Button = styled.button`
  background: #1cb3fe;
  border-radius: 15px;
  border: none;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  cursor: pointer;
  padding: 8px 50px;
`;
export const ArrowLeft = styled.img`
  margin-right: 50px;
  width: 56px;
  height: 56px;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;
export const ArrowRight = styled.img`
  width: 56px;
  height: 56px;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;
export const Arrow = styled.div`
  margin-top: 890px;
  padding-left: 120px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-top: 690px;
    padding-left: 70px;
  }
  @media screen and (max-width: 414px) {
    margin-top: 790px;
  }
  @media screen and (max-width: 375px) {
    padding-left: 110px;
  }
  @media screen and (max-width: 360px) {
    padding-left: 100px;
    margin-top: 805px;
  }
  @media screen and (max-width: 320px) {
    padding-left: 100px;
    margin-top: 730px;
  }
`;
export const Points = styled.img`
  padding: 730px 0 0 20px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding: 565px 0 0 20px;
  }

  @media screen and (max-width: 414px) {
    padding: 0;
    margin-left: 350px;
    margin-top: 10px;
    height: 50px;
    width: 50px;
  }
  @media screen and (max-width: 411px) {
    padding: 0;
    margin-left: 350px;
    margin-top: 25px;
    height: 50px;
    width: 50px;
  }
  @media screen and (max-width: 400px) {
    padding: 0;
    margin-left: 340px;
    margin-top: 5px;
    height: 50px;
    width: 50px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 322px;
    height: 40px;
    width: 40px;
    margin-top: 5px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 310px;
    height: 40px;
    width: 40px;
    margin-top: 1px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 275px;
    height: 30px;
    width: 30px;
    margin-top: 5px;
  }
`;
export const ContentArticle = styled.article`
  &.ActiveArticle {
    opacity: 1;
    transform: translateX(0);
  }
  &.LastArticle {
    transform: translateX(-100%);
  }
  &.NextArticle {
    transform: translateX(-100%);
  }

  display: flex;
  opacity: 0;
  position: absolute;
  transition: all 0.5s linear;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-top: -30px;
  }

  @media screen and (max-width: 415px) {
    flex-direction: column;
  }
`;
