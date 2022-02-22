import React from 'react';
import {
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconLink
} from './FooterElement'
import { FaInstagram, FaYoutube, FaFacebookSquare } from 'react-icons/fa';


const index = () => {
  return (
    <>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLinkItems>
                <FooterLink to='/SignIn'>How it works</FooterLink>
                <FooterLink to='/SignIn'>How it works</FooterLink>
                <FooterLink to='/SignIn'>How it works</FooterLink>
                <FooterLink to='/SignIn'>How it works</FooterLink>
                <FooterLink to='/SignIn'>How it works</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Awareness Hall</SocialLogo>
              <WebsiteRight>Awareness Hall: All right reserved. </WebsiteRight>
              <SocialIcons>
                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                  <FaFacebookSquare />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>

    </>
  )
};

export default index;
