import React from 'react';
import {Link} from 'react-router-dom';
import {
    ContainerContet,
    Title,
    Content,
    Text,
    Button} from './HomeSectionThreeStyled';

const HomeSectionThree = () => {
    return (
        <>
            <ContainerContet>
                <Title>What we do</Title>
                <Content>
                    <Text>Famempire is an innovative company specialized in creating and placing marketing content throughout proven and battle tested strategies.</Text>
                    <Text>Our work here is to secure and scale traffic for you by evoking emotions in customers.</Text>
                    <Text>Using modern technologies in combination with creativity, we will conquer the most important human sense related to buying and that is sight.</Text>
                    <Text last>We offer entirely free consultation and strategy to you. Reach out and hear our takes and ideas on how to crush the market you are in.</Text>
                    <Link to="/survey">
                        <Button>Get started</Button>
                    </Link>
                </Content>
            </ContainerContet>
        </>
    )
}

export default HomeSectionThree
