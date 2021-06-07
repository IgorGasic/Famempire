import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import {HeroContainer,
        HeroContent,
        HeroItems,
        HeroH3,
        HeroH1,
        HeroSurvey,
        Input,
        Button} from './HeroStyled';

const Hero = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        setName('');
        setEmail('');
    }

    return (
        <HeroContainer>
            <HeroContent>
                <Fade cascade>
                <HeroItems>
                    <HeroH3>First Creative Marketing Company In Region</HeroH3>
                    <HeroH1>USE POST-PANDEMIC BOOM<br /> TO EXPLODE YOUR SALES<br /> IN THE NEXT 90-DAYS</HeroH1>
                </HeroItems>
                </Fade>
                <HeroSurvey onSubmit={handleSubmit}>
                    <Input placeholder="Name*" autoComplete="off" name="name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Input placeholder="Email*" autoComplete="off" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Button type="submit">Send me 5 ways to grow my business</Button>
                </HeroSurvey>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
