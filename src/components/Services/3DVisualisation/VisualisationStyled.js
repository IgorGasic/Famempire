import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;
`;
export const BlueContainer = styled.div`
  height: 93vh;
  width: 35%;
  background: linear-gradient(91.46deg, #0f72e5 1.21%, #0f72e5 98.76%);
`;
export const TitleDiv = styled.div`
  left: 1100px;
  bottom: 820px;
  position: absolute;
`;
export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
  padding: 425px 0 0 50px;
  letter-spacing: 0.135em;
`;
export const Text = styled.p`
  color: #fff;
  padding: 20px 0 0 50px;
  font-size: 30px;
  max-width: 570px;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;
export const ArrowContainer = styled.div`
  display: flex;
  top: ${({ dugme }) => (dugme ? "360px" : "435px")};
  left: ${({ dugme }) => (dugme ? "620px" : "620px")};
  position: absolute;
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
  padding-top: 50px;
  left: 510px;
  opacity: 0;
  position: absolute;
  transition: all 0.9s linear;
`;

export const Points = styled.img`
  padding-top: 46px;
  padding-left: 48px;
`;
export const Proba = styled.div`
  position: absolute;
  left: 300px;
  bottom: 900px;
`;
export const NekiNaslov = styled.h2`
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  padding-bottom: 20px;
`;
export const NekiText = styled.p`
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  width: 375px;
`;

export const Nesto = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1050px;
  top: ${({ gornji }) => (gornji ? "110px" : "140px")};
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
  left: 510px;
  bottom: -425px;
  position: absolute;
  transition: all 0.9s linear;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 165px;
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
  width: 450px;
  height: 290px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    width: 800px;
    height: 440px;
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
export const Proba1 = styled.div`
  position: absolute;
  left: 300px;
  bottom: 500px;
`;
