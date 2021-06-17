import React from "react";
import logo from "../../images/logo.svg";
import {
  FooterContainer,
  Content,
  TitleLogo,
  LogoContainer,
  Logo,
  TitleContainer,
  Title,
  SocialMedia,
  FBLink,
  Facebook,
  InstaLink,
  Instagram,
  ContetBottom,
  Text,
} from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Content>
          <TitleLogo>
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
            <TitleContainer>
              <Title>FAMEMPIRE</Title>
            </TitleContainer>
          </TitleLogo>
          <SocialMedia>
            <FBLink href="https://www.facebook.com/Famempire-106944311207545">
              <Facebook />
            </FBLink>
            <InstaLink href="https://www.instagram.com/famempire20/">
              <Instagram />
            </InstaLink>
          </SocialMedia>
        </Content>
        <ContetBottom>
          <Text>Famempire - All Rights Reserved @2020.</Text>
        </ContetBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
