import React from 'react';
import Hero from '../components/Home/HeroSection/Hero';
import HomeSectionFive from '../components/Home/HomeSectionFive/HomeSectionFive';
import HomeSectionFour from '../components/Home/HomeSectionFour/HomeSectionFour';
import HomeSectionOne from '../components/Home/HomeSectionOne/HomeSectionOne';
import HomeSectionThree from '../components/Home/HomeSectionThree/HomeSectionThree';
import HomeSectionTwo from '../components/Home/HomeSectionTwo/HomeSectionTwo';
import Footer from '../components/Footer/Footer';
import Line from '../components/Home/Line/Line';
const Home = () => {
    return (
        <>
            <Hero />
            <Line />
            <HomeSectionOne />
            <HomeSectionTwo />
            <HomeSectionThree />
            <HomeSectionFour />
            <HomeSectionFive />
            <Footer />
        </>
    )
}

export default Home
