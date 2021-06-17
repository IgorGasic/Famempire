import styled from "styled-components";
import { RiFacebookFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

export const FooterContainer = styled.div`
  height: 35vh;
  background: #3e3e3e;

  @media screen and (max-width: 415px) {
    height: 20vh;
  }
  @media screen and (max-width: 320px) {
    height: 25vh;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
`;
export const TitleLogo = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  width: 50vw;

  @media screen and (max-width: 414px) {
    padding-left: 5px;
  }
  @media screen and (max-width: 360px) {
    padding-left: 5px;
  }
  @media screen and (max-width: 320px) {
    padding-left: 5px;
  }
`;
export const LogoContainer = styled.div`
  padding-right: 20px;
`;
export const Logo = styled.img`
  height: 120px;
  width: 120px;

  @media screen and (max-width: 414px) {
    height: 60px;
    width: 60px;
  }
  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
`;
export const TitleContainer = styled.div`
  padding-top: 35px;

  @media screen and (max-width: 414px) {
    padding-top: 15px;
  }
  @media screen and (max-width: 320px) {
    padding-top: 20px;
  }
`;
export const Title = styled.h3`
  color: #fff;
  font-size: 70px;

  @media screen and (max-width: 414px) {
    font-size: 30px;
    margin-left: -20px;
  }

  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
`;
export const SocialMedia = styled.div`
  width: 50vw;
  display: flex;
  justify-content: flex-end;
  padding: 30px 25px 0 0;

  @media screen and (max-width: 414px) {
    padding: 15px 10px 0 0;
  }
`;
export const FBLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
export const Facebook = styled(RiFacebookFill)`
  height: 50px;
  width: 50px;
  margin-right: 10px;

  @media screen and (max-width: 414px) {
    height: 30px;
    width: 30px;
  }
`;
export const InstaLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
export const Instagram = styled(SiInstagram)`
  height: 50px;
  width: 50px;

  @media screen and (max-width: 414px) {
    height: 30px;
    width: 30px;
  }
`;
export const ContetBottom = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1377px) and (max-width: 1600px) {
    padding-top: 90px;
  }
  @media only screen and (max-width: 414px) {
    padding-top: 60px;
  }
  @media only screen and (max-width: 400px) {
    padding-top: 50px;
  }
  @media only screen and (max-width: 375px) {
    padding-top: 35px;
  }
  @media only screen and (max-width: 360px) {
    padding-top: 35px;
  }
  @media only screen and (max-width: 320px) {
    padding-top: 55px;
  }
`;
export const Text = styled.p`
  color: #fff;
  font-size: 30px;

  @media screen and (max-width: 414px) {
    font-size: 20px;
  }
  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;
