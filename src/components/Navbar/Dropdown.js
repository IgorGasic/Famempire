import React, {useState} from 'react';
import {DropdownItems} from '../../data/DropdownItems';
import {List, Item, LinkItem} from './DropdownStyled';

const Dropdown = () => {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return (
        <>
            <List onclick={handleClick} click={click}>
                {DropdownItems.map((item,index)=>{
                    const {title, path, cName} = item;
                    return(
                        <Item key={index}>
                            <LinkItem className={cName} to={path} onClick={()=>setClick(false)}>
                                {title}
                            </LinkItem>
                        </Item>
                    )
                })}
            </List>
        </>
    )
}

export default Dropdown