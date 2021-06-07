import React from 'react'
import {Container} from '../../GlobalStyle';
import team from '../../images/team.svg';
import planeta from '../../images/planeta.svg';
import target from '../../images/target.svg';
import success from '../../images/pobednik.svg';
import {FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        AboutRow,
        AboutColumn,
        TextWrapper,
        Title,
        Text,
        ImgWrapper,
        Img} from './AboutUsStyled'


const AboutUs = () => {
    return (
        <>
            <Container>
            <FirstSection>
                    <AboutRow>
                        <AboutColumn>
                            <TextWrapper>
                                <Title>About us</Title>
                                <Text>Famempire is a company founded in 2020 in Novi Sad. The company was created from an idea of growing brands through a multimedia world.<br /><br /></Text>
                                <Text>Our team is made by people from different spheres of IT and marketing, so for us, there’s no request we can’t fulfill in the best possible way.</Text>
                            </TextWrapper>
                        </AboutColumn>
                        <AboutColumn>
                            <ImgWrapper right>
                                <Img src={team} />
                            </ImgWrapper>
                        </AboutColumn>
                    </AboutRow>
            </FirstSection>
            <SecondSection>
                    <AboutRow direction="true">
                        <AboutColumn>
                            <ImgWrapper>
                                <Img src={planeta} />
                            </ImgWrapper>
                        </AboutColumn>
                        <AboutColumn>
                            <TextWrapper>
                                <Text>It has been long since we overcame the idea of promoting brands through the basic tools of information. Today, when the internet has become a window into the world for an average person, possibilities of brand growth are truly limitless. Famempire is offering you just that - limitless possibilities for your business’s success. That’s why we love to say: “Your success is our success’’</Text>
                            </TextWrapper>
                        </AboutColumn>
                    </AboutRow>
            </SecondSection>
            <ThirdSection>
                    <AboutRow>
                        <AboutColumn>
                            <TextWrapper>
                                <Text>It’s not important whether you have been in the business or you are starting from the ground. Our mission is to transform and grow your business with innovative ideas and strategies of modern marketing through dedication, knowledge and creativity of our team. </Text>
                            </TextWrapper>
                        </AboutColumn>
                        <AboutColumn>
                            <ImgWrapper>
                                <Img src={target}/>
                            </ImgWrapper>
                        </AboutColumn>
                    </AboutRow>
            </ThirdSection>
            <FourthSection>
                    <AboutRow direction="true">
                        <AboutColumn>
                            <ImgWrapper>
                                <Img src={success} pobednik/>
                            </ImgWrapper>
                        </AboutColumn>
                        <AboutColumn>
                            <TextWrapper>
                                <Text>Our company is offering everything the modern world wants, and even more. We don’t offer the common services most digital marketing companies do.<br /><br /></Text>
                                <Text>Our spectrum of services is wide so your brand placement won’t only include traditional advertising, but it will become a true audio-video sensation that will push your brand on the domestic, as well as on foreign market. </Text>
                            </TextWrapper>
                        </AboutColumn>
                    </AboutRow>
            </FourthSection>
            </Container>
        </>
    )
}

export default AboutUs
