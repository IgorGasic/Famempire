import React from 'react';
import slika from '../../../images/contact.jpg';
import points from '../../../images/tackice.svg'
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
        Points} from './BrandDesignStyled';

const BrandDesign = () => {
    return (
        <>
            <MainContainer>
                <BlueContainer>
                    <Title>BRAND DESIGN SOLUTIONS</Title>
                    <Text>Graphic design team is here to give you a part of their creativity through vector drawings.</Text>
                    <Text>They are used in variety of brand needs such as: label, logo, ad or other types of design.</Text>
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

export default BrandDesign