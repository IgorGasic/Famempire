import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-bottom: 40px;
`

export const Item = styled.li`
    cursor: pointer;

    &:hover{
        transition:ease-in-out 0.5s;
        transform:scale(1.05);
    }
`
export const LinkItem = styled(Link)`
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
    border-left: 4px solid #fff ;
`