import styled from "styled-components";

export const FirstSection = styled.section``;
export const SecondSection = styled.section``;
export const ThirdSection = styled.section``;
export const FourthSection = styled.section``;
export const AboutRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: ${({ direction }) =>
      direction ? "column-reverse" : "column"};
    width: 380px;
    margin: 0;
  }

  @media screen and (max-width: 400px) {
    flex-direction: ${({ direction }) =>
      direction ? "column-reverse" : "column"};
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 320px) {
    flex-direction: ${({ direction }) =>
      direction ? "column-reverse" : "column"};
    width: 300px;
    margin: 0 -20px -15px -20px;
  }
`;
export const AboutColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex-basis: 50%;

  @media screen and (max-width: 414px) {
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;
export const Title = styled.h3`
  padding: 0 0 70px 0;
  font-size: 55px;
  text-transform: uppercase;

  @media screen and (max-width: 414px) {
    font-size: 45px;
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
    padding-right: 30px;
  }

  @media screen and (max-width: 400px) {
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 740px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 414px) {
    max-width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    padding-bottom: 0;
  }
`;
export const Text = styled.p`
  font-size: 35px;

  @media screen and (max-width: 414px) {
    width: 400px;
    font-size: 20px;
    text-align: center;
    padding-right: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 17px;
    width: 300px;
    text-align: center;
  }
`;
export const ImgWrapper = styled.div`
  margin-left: 100px;
  justify-content: flex-end;
  padding-right: 0;

  @media screen and (max-width: 415px) {
    margin-left: 0;
    margin: 20px 0;
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    margin-left: 0;
    margin: 20px 0;
    justify-content: center;
  }
`;
export const Img = styled.img`
  border: 0;
  display: inline-block;
  max-height: 750px;
  max-width: ${({ pobednik }) => (pobednik ? "700px" : "600px")};
  padding-bottom: ${({ pobednik }) => (pobednik ? "100px" : "0")};

  @media screen and (max-width: 415px) {
    height: 250px;
    width: ${({ pobednik }) => (pobednik ? "370px" : "320px")};
    padding-bottom: 0;
  }

  @media screen and (max-width: 400px) {
    height: 150px;
    width: ${({ pobednik }) => (pobednik ? "250px" : "210px")};
    padding-bottom: 0;
  }
`;
