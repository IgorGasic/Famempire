import React from 'react';
import orao from '../../../images/instagram.svg';
import logo from '../../../images/logo.svg';
import {Link} from 'react-router-dom';

import {Container,
        LogoTitle,
        ImgWrapper,
        Img,
        Content,
        Text,
        ButtonArea,
        Button,
        Title,
        Logo,
        LogoImg,
        TitleText} from './HomeSectionTwoStyled';

function HomeSectionTwo() {
  return (
    <>
      <Container>
        <LogoTitle>
          <Logo>
            <LogoImg src={logo}/>
          </Logo>
          <Title>
            <TitleText>Famempire</TitleText>
          </Title>
        </LogoTitle>
        <Content>
          <Text>GET A FREE STRATEGY SESION</Text>
          <ButtonArea>
              <Link to="/survey">
                <Button>Get Started</Button>
              </Link>
          </ButtonArea>
        </Content>
        <ImgWrapper>
          <Img src={orao} />
        </ImgWrapper>
      </Container>
    </>
  );
}

export default HomeSectionTwo;