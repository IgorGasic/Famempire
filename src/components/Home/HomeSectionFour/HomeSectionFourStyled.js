import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    width: 100%;
`
export const BlueContainer = styled.div`
    position: relative;
    height: 93vh;
    width: 40%;
    background: linear-gradient(91.46deg, #0F72E5 1.21%, #0F72E5 98.76%);
`

export const Title = styled.h2`
    font-size: 55px;
    text-transform: uppercase;
    padding: 20px 20px;
    color:#fff;
`

export const ContentContainer = styled.div`
    overflow: hidden;
    
`
export const ImgWrapper = styled.div`
    max-width: 632px;
    max-height: 632px;
    box-sizing: border-box;
    margin-left: -250px;
    margin-top: 150px;
    -webkit-box-shadow: -69px 61px 53px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -69px 61px 53px -2px rgba(0,0,0,0.75);
    box-shadow: -81px 92px 32px 8px rgba(0, 0, 0, 0.25);  

`
export const Img = styled.img`
    width: 632px;
    height: 632px;
    object-fit: cover;
`
export const Content = styled.div`
    margin-top: 350px;
    margin-left: 100px;
`
export const TextOne = styled.p`
    font-size: 15px;
    color: #000000;
    text-transform: uppercase;
    padding-bottom: 20px;
    letter-spacing: 0.205em;
`
export const TextTwo = styled.p`
    font-size: 60px;
    color: #000000;
    
    padding-bottom: 20px;
`
export const TextThree = styled.p`
    font-size: 25px;
    color: #000000;
    padding-bottom: 20px;
    
`
export const Button = styled.button`
    background: #1CB3FE;
    border-radius: 15px;
    border:none;
    font-size: 25px;
    line-height: 29px;
    color: #FFFFFF;
    cursor: pointer;
    padding: 8px 50px;
`
export const ArrowLeft = styled.img`
    margin-right: 50px;
    width: 56px;
    height: 56px;
    cursor: pointer;
`
export const ArrowRight = styled.img`
    width: 56px;
    height: 56px;
    cursor: pointer;
`
export const Arrow = styled.div`
    margin-top: 890px;
    padding-left: 120px;
`
export const Points = styled.img`
    padding: 750px 0 0 20px;
`
export const ContentArticle = styled.article`
    &.ActiveArticle{
        opacity: 1;
        transform: translateX(0);
    }
    &.LastArticle{
        transform: translateX(-100%);
    }
    &.NextArticle{
        transform: translateX(-100%);
    }

    display: flex;
    opacity: 0;
    position: absolute;
    transition:all 0.5s linear;
`