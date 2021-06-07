import React from 'react';
import slika from '../../../images/contact.jpg';
import points from '../../../images/tackice.svg';
import dugmeDesno from '../../../images/dugmeDesno.svg';
import dugmeLevo from '../../../images/dugmeLevo.svg';
import {MainContainer,
        BlueContainer,
        Title,
        Text,
        ContentContainer,
        MainTitle,
        ImgWrapper,
        Img,
        TitleDiv,
        ArrowContainer,
        ArrowLeft,
        ArrowRight,
        Points} from './WebDevelopmentStyled';

const WebDevelopment = () => {
    return (
        <>
            <MainContainer>
                <BlueContainer>
                    <Title>Web Development</Title>
                    <Text>Creating a landing page for your brand is one of the essentials for online businesses.</Text>
                    <Text>Aside site development we also cover UI design.</Text>
                    <Points src={points} />
                </BlueContainer>
                <ContentContainer>
                    <TitleDiv>
                        <MainTitle>Portfolio</MainTitle>
                    </TitleDiv>
                    <ImgWrapper>
                        <Img src={slika} />
                    </ImgWrapper>
                    <ArrowContainer>
                        <ArrowLeft src={dugmeLevo}></ArrowLeft>
                        <ArrowRight src={dugmeDesno}></ArrowRight>
                    </ArrowContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

export default WebDevelopment
