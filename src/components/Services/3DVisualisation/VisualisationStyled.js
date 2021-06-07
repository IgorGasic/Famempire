import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
`
export const BlueContainer = styled.div`
    height: 93vh;
    width: 35%;
    background: linear-gradient(91.46deg, #0F72E5 1.21%, #0F72E5 98.76%);
`
export const TitleDiv = styled.div`
    left:1200px;
    bottom: 850px;
    position:absolute;    
`
export const Title = styled.h3`
    text-transform: uppercase;
    color:#fff;
    font-size: 40px;
    padding: 500px 0 0 50px;
    letter-spacing: 0.135em;
`
export const Text = styled.p`
    color:#fff;
    padding: 20px 0 0 50px;
    font-size: 30px;
    max-width: 570px;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ArrowLeft = styled.img`
    margin-right: 80px;
    height: 56px;
    width: 56px;
    cursor: pointer;
`
export const ArrowRight = styled.img`
    height: 56px;
    width: 56px;
    cursor: pointer;
`
export const MainTitle = styled.h2`
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 0.45em;
`
export const ArrowContainer = styled.div`
    display: flex;
    padding-top: 800px;
    left: 1340px;
    position: absolute;
`
export const VideoWrapper = styled.div`
    &.ActiveVideo{
        opacity: 1;
        transform: translateX(0);
    }
    &.LastVideo{
        transform: translateX(-100%);
        pointer-events: none;
    }
    &.NextVideo{
        transform: translateX(-100%);
        pointer-events: none;
    }
    padding-top: 100px;
    left: 1010px;
    opacity: 0;
    position: absolute;
    transition:all 0.9s linear;
    
`
export const Points = styled.img`
    padding-top: 46px;
    padding-left:48px;
`