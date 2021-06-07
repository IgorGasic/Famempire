import styled from 'styled-components';

export const ContainerContet = styled.div`
    height: 100vh;
`
export const Title = styled.h2`
    font-size: 55px;
    text-transform: uppercase;
    padding: 100px;
`
export const Content = styled.div`
    max-width: 1336px;
    margin-left: auto;
    margin-right: auto;
`
export const Text = styled.p`
    font-size: 35px;
    padding-bottom: ${({last}) =>(last ? "120px":"50px")};
`
export const Button = styled.button`
    border:none;
    border-radius:15px;
    background:#1CB3FE;
    color: #fff;
    font-size: 35px;
    padding:5px 10px;
    cursor: pointer;
`