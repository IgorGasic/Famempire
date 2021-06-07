import styled from 'styled-components';
import {RiFacebookFill} from 'react-icons/ri';
import {SiInstagram} from 'react-icons/si'


export const FooterContainer = styled.div`
    height:35vh;
    background:#3E3E3E;
`
export const Content = styled.div`
    width:100%;
    display:flex;
`
export const TitleLogo = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    width:50vw;
`
export const LogoContainer = styled.div`
    padding-right: 20px;
`
export const Logo = styled.img`
    height: 120px;
    width: 120px;
`
export const TitleContainer = styled.div`
    padding-top:35px;
`
export const Title = styled.h3`
    color:#fff;
    font-size:70px;
`
export const SocialMedia = styled.div`
    width:50vw;
    display:flex;
    justify-content:flex-end;
    padding:30px 25px 0 0;
`
export const FBLink = styled.a`
    text-decoration:none;
    color:#fff;
`
export const Facebook = styled(RiFacebookFill)`
    height:50px;
    width:50px;
    margin-right:10px;
`
export const InstaLink = styled.a`
    text-decoration:none;
    color:#fff;
`
export const Instagram = styled(SiInstagram)`
    height:50px;
    width:50px;
`
export const ContetBottom = styled.div`
    padding-top:200px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Text = styled.p`
    color:#fff;
    font-size:30px;
`
