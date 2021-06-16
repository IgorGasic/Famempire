import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const BlueContainer = styled.div`
  height: 93vh;
  width: 35%;
  background: linear-gradient(91.46deg, #0f72e5 1.21%, #0f72e5 98.76%);
`;
export const TitleDiv = styled.div`
  left: 1200px;
  bottom: 850px;
  position: absolute;
`;
export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
  padding: 500px 0 0 50px;
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
  padding-top: 400px;
  left: 820px;
  position: absolute;
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
  width: 868px;
  height: 492px;
  left: 710px;
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
  left: 1300px;
  top: 140px;
`;

export const Textara = styled.div`
  3D Animations
  font-size: 36px;
  line-height: 42px;
  Video commercials with 
  a touch of 3D magick.
  Unlimited 
  possibilities.
  Anything can be created.
  width: 336;
  font-size: 30px;
  line-height: 35px;
  text-align: center
  video i slika 486x246
`;
