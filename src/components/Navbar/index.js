import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import { 
Nav,
NavbarContainer,
NavLogo,
MobileIcon,
NavMenu,
NavLinks,
NavItem,
NavBtn,
NavBtnLink
} from './NavbarElement';

const Index = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo  to='/'>AwarenessHall</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Poem'>Alfaaz-e-Sukhan</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Photography'>Photography</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Signin</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Index
