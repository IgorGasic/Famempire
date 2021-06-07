import React from 'react';
import {Link} from 'react-router-dom';
import {Container,
        Title,
        Button} from './HomeSectionFiveStyled';

const HomeSectionFive = () => {
    return (
        <>
            <Container>
                <Title>get a free strategy sesion</Title>
                <Link to="survey">
                    <Button>Get Started</Button>
                </Link>
            </Container>
        </>
    )
}

export default HomeSectionFive
