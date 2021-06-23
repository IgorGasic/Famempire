import styled from "styled-components";
import hero from "../../../images/zgrade.jpg";

export const HeroContainer = styled.div`
  background: url(${hero});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  object-fit: cover;

  @media screen and (max-width: 425px) {
    height: 100%;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 360px) {
    background-position: center;
    background-size: cover;
    object-fit: cover;
  }

  @media screen and (max-width: 320px) {
    height: 100%;
  }
`;
export const HeroContent = styled.div`
  padding-top: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeroItems = styled.div`
  margin-bottom: 100px;
`;
export const HeroH1 = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 88px;
  text-transform: uppercase;
  font-weight: 200;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 2rem;
    margin: 0 1rem;
  }
`;
export const HeroH3 = styled.h3`
  text-align: center;
  color: #0f72e5;
  font-size: 1.8rem;

  @media screen and (max-width: 425px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 1.2rem;
  }
`;
export const HeroSurvey = styled.form`
  max-width: 1510px;
  padding-top: 100px;

  @media screen and (max-width: 425px) {
    padding-top: 0;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Input = styled.input`
  width: 478px;
  height: 74px;
  margin: 50px 10px;
  background: transparent;
  border: 6px solid #0f72e5;
  box-sizing: border-box;
  border-radius: 37px;
  outline: none;
  font-size: 30px;
  padding-left: 15px;
  color: #fff;

  &::placeholder {
    color: #fff;
    font-size: 30px;

    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
    @media screen and (max-width: 360px) {
      font-size: 20px;
    }
    @media screen and (max-width: 320px) {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    margin-bottom: 170px;
  }

  @media screen and (max-width: 425px) {
    width: 320px;
  }

  @media screen and (max-width: 414px) {
    width: 300px;
    margin: 10px 0;
  }
  @media screen and (max-width: 375px) {
    width: 275px;
    font-size: 20px;
  }
  @media screen and (max-width: 360px) {
    width: 255px;
    font-size: 20px;
  }
  @media screen and (max-width: 320px) {
    width: 220px;
    font-size: 20px;
  }
`;
export const Button = styled.button`
  width: 478px;
  height: 74px;
  font-size: 21px;
  border: none;
  border-radius: 37px;
  background: #0f72e5;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
  text-transform: uppercase;

  @media screen and (max-width: 1336px) {
    width: 350px;
    margin: 0 0 15px 0;
  }

  @media screen and (max-width: 425px) {
    width: 320px;
    font-size: 19px;
  }

  @media screen and (max-width: 414px) {
    width: 300px;
    margin: 10px 0;
  }
  @media screen and (max-width: 375px) {
    width: 275px;
    font-size: 15px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 360px) {
    width: 255px;
    font-size: 15px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 320px) {
    width: 220px;
    font-size: 15px;
    margin-bottom: 50px;
  }
`;
