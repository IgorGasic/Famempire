import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 100vh;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
export const BlueContainer = styled.div`
  height: 93vh;
  width: 35%;
  background: linear-gradient(91.46deg, #0f72e5 1.21%, #0f72e5 98.76%);

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 100vh;
    width: 25%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 45vh;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
    height: 45vh;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 55vh;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    height: 65vh;
  }
`;
export const TitleDiv = styled.div`
  left: 422px;
  bottom: 730px;
  position: absolute;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 305px;
    bottom: 650px;
  }
  @media screen and (max-width: 425px) {
    left: 25px;
    bottom: 260px;
  }
  @media screen and (max-width: 414px) {
    left: 20px;
    bottom: 200px;
  }
  @media screen and (max-width: 411px) {
    bottom: 270px;
  }
  @media screen and (max-width: 375px) {
    left: 22px;
    bottom: 70px;
  }
  @media screen and (max-width: 360px) {
    left: 15px;
    bottom: 80px;
  }
  @media screen and (max-width: 320px) {
    left: 18px;
    bottom: 5px;
  }
`;
export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
  padding: 425px 0 0 50px;
  letter-spacing: 0.135em;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 320px;
    font-size: 35px;
    padding-left: 30px;
  }

  @media screen and (max-width: 425px) {
    padding: 50px 0 0 10px;
    font-size: 30px;
    text-align: center;
    padding-right: 5px;
  }

  @media screen and (max-width: 414px) {
    padding: 50px 0 0 10px;
    font-size: 30px;
    text-align: center;
    padding-right: 5px;
  }
`;

export const Text = styled.p`
  color: #fff;
  padding: 20px 0 0 50px;
  font-size: 30px;
  max-width: 570px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    font-size: 25px;
    padding-left: 30px;
    padding-right: 10px;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
    text-align: center;
    margin-right: 50px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 425px) {
    position: static;
  }
`;
export const ArrowLeft = styled.img`
  margin-right: 80px;
  height: 56px;
  width: 56px;
  cursor: pointer;
`;
export const ArrowRight = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;
`;
export const MainTitle = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 0.45em;

  @media screen and (max-width: 425px) {
    font-size: 40px;
  }
  @media screen and (max-width: 375px) {
    font-size: 35px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;
export const ImgWrapper = styled.div`
  &.ActivePicture {
    opacity: 1;
    transform: translateX(0);
  }
  &.LastPicture {
    transform: translateX(-100%);
    pointer-events: none;
  }
  &.NextPicture {
    transform: translateX(-100%);
    pointer-events: none;
  }
  opacity: 0;
  padding-top: 100px;
  left: 200px;
  position: absolute;
  transition: all 0.9s linear;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 165px;
  }

  @media screen and (max-width: 425px) {
    top: 500px;
    left: 12px;
  }

  @media screen and (max-width: 414px) {
    top: 500px;
    left: 12px;
  }
  @media screen and (max-width: 375px) {
    left: 15px;
  }
  @media screen and (max-width: 375px) {
    left: 10px;
  }
`;
export const Img = styled.img`
  width: 868px;
  height: 492px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    width: 800px;
    height: 440px;
  }

  @media screen and (max-width: 425px) {
    width: 400px;
    height: 260px;
  }

  @media screen and (max-width: 414px) {
    width: 390px;
    height: 250px;
  }
  @media screen and (max-width: 375px) {
    width: 350px;
    height: 250px;
  }
  @media screen and (max-width: 360px) {
    width: 340px;
    height: 230px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    height: 200px;
  }
`;
export const ArrowContainer = styled.div`
  display: flex;
  padding-top: 720px;
  left: 550px;
  position: absolute;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 430px;
    margin-top: -40px;
  }

  @media screen and (max-width: 425px) {
    left: 120px;
    top: 160px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 414px) {
    left: 110px;
    top: 150px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 375px) {
    left: 90px;
    top: 150px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 360px) {
    left: 85px;
    top: 150px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 320px) {
    left: 65px;
    top: 120px;
    padding-bottom: 50px;
  }
`;
export const Points = styled.img`
  padding-top: 30px;
  padding-left: 48px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 20px;
    padding-left: 30px;
  }

  @media screen and (max-width: 425px) {
    height: 0;
    width: 0;
  }
`;
