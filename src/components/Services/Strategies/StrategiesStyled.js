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
    height: 65vh;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
    height: 80vh;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 77vh;
  }
`;
export const TitleDiv = styled.div`
  left: 422px;
  bottom: 730px;
  position: absolute;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 320px;
    bottom: 650px;
  }
  @media screen and (max-width: 425px) {
    left: 25px;
    bottom: 650px;
  }
  @media screen and (max-width: 414px) {
    left: 20px;
    bottom: 720px;
  }
  @media screen and (max-width: 375px) {
    left: 25px;
    bottom: 200px;
  }
  @media screen and (max-width: 360px) {
    left: 15px;
    bottom: 770px;
  }
  @media screen and (max-width: 320px) {
    left: 20px;
    bottom: 660px;
  }
`;
export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
  padding: 500px 0 0 50px;
  letter-spacing: 0.135em;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 320px;
    font-size: 35px;
    padding-left: 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 50px 0 0 95px;
    font-size: 30px;
  }

  @media screen and (max-width: 414px) {
    padding: 50px 0 0 95px;
    font-size: 30px;
  }
  @media screen and (max-width: 375px) {
    margin-left: -20px;
    padding-top: 60px;
  }
  @media screen and (max-width: 360px) {
    padding-top: 50px;
    margin-left: -15px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
    margin-left: 0;
  }
`;

export const Text = styled.p`
  color: #fff;
  padding: 20px 0 0 50px;
  font-size: 30px;
  max-width: 570px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding: 20px 20px 0 30px;
  }

  @media screen and (max-width: 425px) {
    text-align: center;
    margin-right: 50px;
    font-size: 20px;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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
export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 805px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    left: 720px;
    bottom: 50px;
  }

  @media screen and (max-width: 425px) {
    left: 115px;
    top: 740px;
  }
  @media screen and (max-width: 414px) {
    left: 110px;
    top: 890px;
  }
  @media screen and (max-width: 375px) {
    left: 70px;
    top: 970px;
  }
  @media screen and (max-width: 360px) {
    left: 55px;
    top: 970px;
  }
  @media screen and (max-width: 320px) {
    left: 20px;
    top: 720px;
  }
`;
export const Points = styled.img`
  padding-top: 30px;
  padding-left: 48px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    padding-top: 15px;
    padding-left: 30px;
  }

  @media screen and (max-width: 425px) {
    height: 0;
    width: 0;
  }
`;
export const ImgKonj = styled.img`
  width: 406px;
  height: 757px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    height: 600px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
    height: 600px;
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 925px;
  height: 493px;
  margin-top: 100px;
  margin-left: 150px;
  padding-left: 10px;
  padding-top: 100px;

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-left: 110px;
    height: 420px;
    margin-top: 50px;
    padding-top: 90px;
  }

  @media screen and (max-width: 425px) {
    width: 400px;
    margin-left: 0;
    padding-top: 650px;
    padding-left: 0;
  }

  @media screen and (max-width: 414px) {
    width: 400px;
    margin-left: 0;
    padding-top: 800px;
    padding-left: 0;
  }
  @media screen and (max-width: 375px) {
    width: 350px;
    margin-left: 0;
    padding-top: 1350px;
    padding-left: 0;
  }
  @media screen and (max-width: 360px) {
    width: 350px;
    margin-left: 0;
    padding-top: 800px;
    padding-left: 0;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    padding-top: 700px;
  }
`;
export const MainText = styled.p`
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  padding-bottom: 50px;

  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`;
