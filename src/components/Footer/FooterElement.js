import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    background: #232A34;

`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
` 
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align:left;
    width: 160px;
    box-sizing: border-box;
    color: #01BF71;
    @media screen and (max-width: 420px){
        margin: 0px;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled(LinkRouter)`
    // color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    &:hover{
        color: #01bf71;
        transition: 0.3s ease-in-out;
    }
`
export const SocialMedia = styled.div`
    max-width: 100px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const WebsiteRight = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
export const SocialIconLink = styled.a`
    color: #007FF5;
    font-size: 24px

`