import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;
export const BlueContainer = styled.div`
  height: 93vh;
  width: 35%;
  background: linear-gradient(91.46deg, #0f72e5 1.21%, #0f72e5 98.76%);

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 100%;
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
  left: 459px;
  bottom: 855px;
  position: absolute;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 340px;
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
    bottom: 150px;
  }
  @media screen and (max-width: 360px) {
    left: 15px;
    bottom: 130px;
  }
  @media screen and (max-width: 320px) {
    left: 18px;
    bottom: 50px;
  }
`;
export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
  padding: 500px 0 0 50px;
  letter-spacing: 0.135em;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    font-size: 35px;
    padding-left: 30px;
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

  @media screen and (max-width: 414px) {
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

  @media screen and (max-width: 414px) {
    position: static;
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
  left: 270px;
  position: absolute;
  transition: all 0.9s linear;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 145px;
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
export const Points = styled.img`
  padding-top: 113px;
  padding-left: 48px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 100px;
    padding-left: 30px;
  }

  @media screen and (max-width: 414px) {
    height: 0;
    width: 0;
  }
`;
export const ShitText = styled.p`
  text-align: center;
  position: absolute;
  width: 894px;
  font-size: 30px;
  line-height: 35px;
  left: 260px;
  top: 864px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 135px;
  }
  @media screen and (max-width: 414px) {
    padding-top: 50px;
    width: 350px;
    left: 25px;
  }
  @media screen and (max-width: 375px) {
    padding-top: 50px;
    width: 350px;
    left: 15px;
  }
  @media screen and (max-width: 360px) {
    padding-top: 40px;
    width: 350px;
    left: 7px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 5px;
    width: 300px;
    left: 7px;
    font-size: 20px;
  }
`;