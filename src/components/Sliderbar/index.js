import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarRoute,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap
} from './SliderbarElement';

const index = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="Photo" onClick={toggle}>Photo</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
            <SidebarBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebarBtnWrap>
            
        </SidebarContainer>
    )
}

export default index
