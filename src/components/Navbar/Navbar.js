import React, {useState} from 'react';
import logo from '../../images/logo.svg'
import { Nav, NavLink, NavLogo, NavIcon, Bars, NavMenu, NavItem, NavLinks, X } from './NavbarStyled';
import Dropdown from './Dropdown';

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => {
        setTimeout(() =>{
            setClick(!click);
        }, 100)

    }

    const onMouseEnter = () =>{
        if(window.innerWidth <960){
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    };

    const onMouseLeave = () =>{
        if(window.innerWidth <960){
            setDropdown(false)
        } else{
            setDropdown(false)
        }
    };

    return (
        <>
            <Nav>
                <NavLink to="/">
                <NavLogo src={logo} />
                    Famempire
                </NavLink>
                <NavIcon onClick={handleClick}>
                    {click ? <X /> : <Bars />}
                </NavIcon>
                <NavMenu click={click} onClick={handleClick}>
                    <NavItem>
                        <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <NavLinks>
                                Services
                            </NavLinks>
                            {dropdown && <Dropdown />}  
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/aboutus'>
                                About Us
                            </NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contactus'>
                                Contact Us
                            </NavLinks> 
                        </NavItem>
                </NavMenu>
            </Nav>
        </>
    )
}
