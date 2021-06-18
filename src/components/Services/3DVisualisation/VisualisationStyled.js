import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 100vh;
  }
  @media screen and (max-width: 414px) {
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
  left: 370px;
  bottom: 820px;
  position: absolute;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 305px;
    bottom: 650px;
  }
  @media screen and (max-width: 414px) {
    left: 20px;
    bottom: 285px;
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
    bottom: 85px;
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
    padding-top: 260px;
    font-size: 35px;
    padding-left: 30px;
  }
  @media screen and (max-width: 414px) {
    padding: 50px 0 0 10px;
    font-size: 20px;
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
  @media screen and (max-width: 414px) {
    font-size: 20px;
    text-align: center;
    padding-right: 50px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 414px) {
    position: static;
  }
`;
export const ArrowLeft = styled.img`
  margin-right: 80px;
  height: 56px;
  width: 56px;
  cursor: pointer;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-right: 60px;
    height: 40px;
    width: 40px;
  }
`;
export const ArrowRight = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 40px;
    width: 40px;
  }
`;
export const MainTitle = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 0.45em;

  @media screen and (max-width: 414px) {
    font-size: 40px;
  }
  @media screen and (max-width: 375px) {
    font-size: 35px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;
export const ArrowContainer = styled.div`
  display: flex;
  top: 205px;
  left: 235px;
  position: absolute;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 220px;
    top: ${({ gornji }) => (gornji ? "555px" : "435px")};
  }
  @media screen and (max-width: 414px) {
    left: 110px;
    top: ${({ gornji }) => (gornji ? "1025px" : "1555px")};
    padding-bottom: ${({ gornji }) => (gornji ? "10px" : "55px")};
  }
  @media screen and (max-width: 375px) {
    left: 100px;
    top: ${({ gornji }) => (gornji ? "1075px" : "1605px")};
  }
  @media screen and (max-width: 360px) {
    left: 90px;
    top: ${({ gornji }) => (gornji ? "1050px" : "1585px")};
  }
  @media screen and (max-width: 320px) {
    left: 70px;
    top: ${({ gornji }) => (gornji ? "1030px" : "1555px")};
  }
`;
export const Video = styled.div`
  position: relative;
  padding-top: 50.25%;
`;
export const VideoWrapper = styled.div`
  &.ActiveVideo {
    opacity: 1;
    transform: translateX(0);
  }
  &.LastVideo {
    transform: translateX(-100%);
    pointer-events: none;
  }
  &.NextVideo {
    transform: translateX(-100%);
    pointer-events: none;
  }
  padding-top: 100px;
  left: 10px;
  opacity: 0;
  position: absolute;
  transition: all 0.9s linear;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 280px;
    left: 120px;
  }
  @media screen and (max-width: 414px) {
    left: 35px;
    padding-top: 280px;
  }
  @media screen and (max-width: 360px) {
    left: 10px;
  }
`;

export const Points = styled.img`
  padding-top: 46px;
  padding-left: 48px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 20px;
    padding-left: 30px;
  }
  @media screen and (max-width: 414px) {
    height: 0;
    width: 0;
  }
`;
export const Proba = styled.div`
  position: absolute;
  left: 100px;
  bottom: 900px;
  display: flex;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 50px;
  }
  @media screen and (max-width: 414px) {
    bottom: 10px;
    flex-direction: column;
    position: static;
  }
`;
export const NekiNaslov = styled.h2`
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  padding-bottom: 20px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 414px) {
    font-size: 25px;
  }
  @media screen and (max-width: 360px) {
    padding-bottom: 5px;
  }
  @media screen and (max-width: 320px) {
    padding-bottom: 10px;
  }
`;
export const NekiText = styled.p`
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  width: 375px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    font-size: 24px;
  }
  @media screen and (max-width: 414px) {
    font-size: 20px;
  }
  @media screen and (max-width: 360px) {
    width: 350px;
    line-height: 25px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    line-height: 25px;
  }
`;
export const Nesto = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 570px;
  top: ${({ gornji }) => (gornji ? "150px" : "160px")};

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 600px;
    top: ${({ gornji }) => (gornji ? "300px" : "215px")};
  }
  @media screen and (max-width: 414px) {
    left: 20px;
    top: ${({ gornji }) => (gornji ? "520px" : "1120px")};
  }
  @media screen and (max-width: 375px) {
    left: 5px;
  }
  @media screen and (max-width: 360px) {
    left: 5px;
    top: ${({ gornji }) => (gornji ? "560px" : "1175px")};
  }
  @media screen and (max-width: 320px) {
    top: ${({ gornji }) => (gornji ? "535px" : "1150px")};
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
  left: 10px;
  bottom: -425px;
  position: absolute;
  transition: all 0.9s linear;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 120px;
  }

  @media screen and (max-width: 414px) {
    top: 1345px;
    left: 55px;
  }
  @media screen and (max-width: 375px) {
    left: 15px;
  }
  @media screen and (max-width: 375px) {
    left: 10px;
  }
`;
export const Img = styled.img`
  width: 450px;
  height: 290px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    width: 340px;
    height: 220px;
  }

  @media screen and (max-width: 414px) {
    width: 300px;
    height: 200px;
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
export const Proba1 = styled.div`
  position: absolute;
  left: 100px;
  bottom: 500px;
  display: flex;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 50px;
  }
  @media screen and (max-width: 414px) {
    bottom: 10px;
    flex-direction: column;
    position: static;
  }
`;
