import React from 'react';
import {ContainerContent, Text} from './HomeSectionOneStyled';
import Fade from 'react-reveal/Fade';

const HomeSectionOne = () => {
    return (
        <>
            <ContainerContent>
                <Fade left>
                <Text title>Dear visitor</Text>
                </Fade>
                <Fade right>
                <Text>You must be here because you are sick and tired of investing in marketing with no return. Searching for that “business saving recipe” can be exhausting.</Text>
                </Fade>
                <Fade left>
                <Text>Imagine what it would be like to skyrocket your sales in the next few months. Profits would increase and you will finaly find time to relax and enjoj fruits of your hard work.</Text>
                </Fade>
                <Fade right>
                <Text>See, your freedom is our goal. Our company is built with one statement in mind and it says that “your success is our success”. Now, stop the agony and let us shine your way through the dark.</Text>
                </Fade>
                <Fade left>
                <Text>Here is how it works.</Text>
                </Fade>
                <Fade right>
                <Text>We will first review your business and find weak spots that can be improved. With that settled, we will give you complete success taking strategy designed specifically for you. With the right road to take, the only thing that's missing is content to represent you and that's our specialty.</Text>
                </Fade>
                <Fade left>
                <Text>Brainstorming ads and comercials of all sorts will manipulate customer emotions which are cruical when it comes to buying.</Text>
                </Fade>
                <Fade right>
                <Text>Maybe hard to believe, but it's true. In fact we are so sure that we can help you, that we’ll even guarantee results and that’s not something you put out with no certainty.</Text>
                </Fade>
            </ContainerContent>
        </>
    )
}

export default HomeSectionOne
