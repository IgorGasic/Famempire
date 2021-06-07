import React from 'react'
import styled from 'styled-components';

const LineContainer = styled.div`
    height:100px;
    width:100%;
    background: linear-gradient(180deg, #0F72E5 0%, #2BA4BB 100%);
`

const Line = () => {
    return (
        <>
           <LineContainer /> 
        </>
    )
}

export default Line
