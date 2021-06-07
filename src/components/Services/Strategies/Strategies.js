import React from 'react';
import points from '../../../images/tackice.svg';
import konj from '../../../images/konj.svg';

import {MainContainer,
    BlueContainer,
    Title,
    Text,
    ContentContainer,
    MainTitle,
    Wrapper,
    ImgKonj,
    TitleDiv,
    Points,
    TextDiv,
    MainText} from './StrategiesStyled';

const Strategies = () => {
    return (
        <>
            <MainContainer>
                <BlueContainer>
                    <Title>BRANDING & STRATEGIES</Title>
                    <Text>Laying the foundation of your brand for further marketing and building the complete marketing strategy designed specifically for your product of service.</Text>
                    <Points src={points} down/>
                </BlueContainer>
                <ContentContainer>
                    <TitleDiv>
                        <MainTitle>Portfolio</MainTitle>
                    </TitleDiv>
                    <TextDiv>
                        <MainText>Branding is a process of creating a name, symbol and design, that is an identity of your company.</MainText>
                        <MainText>This process is extremely important because through it you are building a foundation of your online existence, which will not only be a recognition symbol, but clients will know what they can expect from you and they will be able to, in a different way, perceive your brand. </MainText>
                        <MainText>Thanks to that, your brand will leave a positive impression on all potential clients, and through that, you will get more business, increase the volume of your existing business, as well as further raise the awareness of your brand.</MainText>
                    </TextDiv>
                    <Wrapper>
                        <ImgKonj src={konj} />
                    </Wrapper>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

export default Strategies
